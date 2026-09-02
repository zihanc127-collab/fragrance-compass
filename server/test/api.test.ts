import test from 'node:test'; import assert from 'node:assert/strict'; import { app } from '../src/app.js'; import { catalog, validateCatalog } from '../src/catalog.js'; import { buildRecommendationShortlist, calculateRawScore, recommend } from '../src/recommendations.js';
test('catalog is canonical and valid',()=>{assert.equal(catalog.length,200);assert.deepEqual(validateCatalog(),[]);assert.equal(new Set(catalog.map(x=>x.id)).size,200)});
test('search and API routes',async()=>{const server=app.listen(0);await new Promise<void>(r=>server.once('listening',()=>r()));const a=server.address();const base=`http://127.0.0.1:${typeof a==='object'&&a?a.port:0}`;try{assert.equal((await fetch(base+'/api/health')).status,200);const list=await (await fetch(base+'/api/perfumes?brand=Chanel')).json() as any;assert.ok(list.items.length);const id=list.items[0].id;assert.equal((await fetch(base+`/api/perfumes/${id}`)).status,200);const search=await (await fetch(base+'/api/perfumes/search?q=Chanel')).json() as any;assert.ok(search.total>0);const rec=await (await fetch(base+'/api/recommendations',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({likedSmells:['fresh citrus'],dislikedSmells:['too sweet']})})).json() as any;assert.equal(rec.recommendations.length,5);assert.ok(rec.recommendations.every((x:any)=>catalog.some(p=>p.id===x.id)));}finally{server.close()}});
test('dislikes and budget affect deterministic ranking',()=>{const base={likedSmells:['creamy vanilla'],limit:200};const a=recommend(catalog,base).recommendations,b=recommend(catalog,{...base,dislikedSmells:['too sweet']}).recommendations;assert.notEqual(a[0].id,b[0].id);const tier=recommend(catalog,{priceTier:3,limit:20}).recommendations;assert.ok(tier.every(x=>catalog.find(p=>p.id===x.id)?.priceTier===3));});
test('contrasting profiles do not collapse to one recommendation set or brand',()=>{
  const profiles=[
    {likedSmells:['fresh citrus','tea leaves'],dislikedSmells:['too sweet'],sweetness:'low',freshness:'very fresh',priceTier:3},
    {likedSmells:['soft woods','incense or smoke'],dislikedSmells:['too soapy'],sweetness:'low',freshness:'moderate',priceTier:3},
    {likedSmells:['fresh flowers'],sweetness:'moderate',freshness:'fresh',floralTolerance:'love floral',priceTier:3},
    {likedSmells:['creamy vanilla','warm spices'],sweetness:'sweet',freshness:'warm & cozy',priceTier:3}
  ];
  const results=profiles.map(p=>recommend(catalog,{...p,limit:10}).recommendations);
  assert.ok(new Set(results.map(r=>r.map(x=>x.id).join('|'))).size>1);
  assert.ok(results.every(r=>new Set(r.map(x=>x.brand)).size>1));
});
test('launch-v1 mood and occasion values contribute',()=>{
  const p={...catalog[0],moods:['refreshing-energetic'],occasions:['formal-evening']};
  const base=calculateRawScore(p,{});
  assert.equal(calculateRawScore(p,{mood:['refreshing & energetic']})-base,6);
  assert.equal(calculateRawScore(p,{occasions:['formal evening']})-base,4);
});
test('sweet maps to high sweetness rather than moderate',()=>{
  const high={...catalog[0],sweetness:'very-high' as const};
  const moderate={...catalog[0],sweetness:'moderate' as const};
  assert.ok(calculateRawScore(high,{sweetness:'sweet'}) > calculateRawScore(moderate,{sweetness:'sweet'}));
});
test('existing dislikes cover launch-v1 smoky and cloying traits',()=>{
  const base={...catalog[0],tags:[],avoidTraits:[]};
  for(const p of [
    {...base,tags:['incense-smoke']}, {...base,tags:['smoky-woods']}, {...base,avoidTraits:['smoky']}
  ]) assert.equal(calculateRawScore(p,{dislikedSmells:['too smoky']})-calculateRawScore(p,{}),-12);
  const sweet={...base,avoidTraits:['cloying-sweet']};
  assert.equal(calculateRawScore(sweet,{dislikedSmells:['too sweet']})-calculateRawScore(sweet,{}),-12);
});
test('ranking uses raw scores before display clamping',()=>{
  const base={...catalog[0],sweetness:'moderate' as const,freshness:'high' as const,moods:['clean'],occasions:['workplace'],seasons:['summer']};
  const items=[
    {...base,id:'z-raw-109',brand:'Brand Z',tags:['citrus','tea','green-leafy'],beginnerFriendliness:.125},
    {...base,id:'a-raw-104',brand:'Brand A',tags:['citrus','tea'],beginnerFriendliness:.25},
    {...base,id:'b-raw-99',brand:'Brand B',tags:['citrus'],beginnerFriendliness:.375}
  ];
  const answers={likedSmells:['fresh citrus','tea leaves','green leaves'],sweetness:'moderate',freshness:'fresh',mood:['clean'],occasions:['workplace'],seasons:['summer'],limit:3};
  assert.deepEqual(items.map(p=>calculateRawScore(p,answers)),[109,104,99]);
  const result=recommend(items,answers).recommendations;
  assert.deepEqual(result.map(p=>p.id),['z-raw-109','a-raw-104','b-raw-99']);
  assert.deepEqual(result.map(p=>p.matchScore),[97,97,97]);
});
test('low-budget shortlist expands to adjacent tier and multiple brands',()=>{
  const {candidatePoolCount,shortlist}=buildRecommendationShortlist(catalog,{priceTier:2,likedSmells:['fresh citrus']});
  assert.equal(candidatePoolCount,121);
  assert.equal(shortlist.length,12);
  assert.ok(new Set(shortlist.map(x=>x.perfume.brand)).size>1);
  assert.ok(shortlist.some(x=>x.perfume.priceTier===2));
  assert.ok(shortlist.some(x=>x.perfume.priceTier===3));
});
test('large tier-3 pool becomes a public shortlist of at most twelve',()=>{
  const built=buildRecommendationShortlist(catalog,{priceTier:3,likedSmells:['tea leaves']});
  assert.equal(built.candidatePoolCount,113);
  const result=recommend(catalog,{priceTier:3,likedSmells:['tea leaves'],limit:20});
  assert.equal(result.totalMatches,12);
  assert.ok(result.recommendations.length<=12);
});
test('shortlist caps brands at two while preserving ranked preference',()=>{
  const built=buildRecommendationShortlist(catalog,{priceTier:3,likedSmells:['fresh citrus']});
  const counts=new Map<string,number>();
  for(const x of built.shortlist) counts.set(x.perfume.brand,(counts.get(x.perfume.brand)||0)+1);
  assert.ok([...counts.values()].every(count=>count<=2));
  const ranked=[...built.shortlist].sort((a,b)=>b.rankingScore-a.rankingScore || b.rawScore-a.rawScore || a.perfume.id.localeCompare(b.perfume.id));
  assert.deepEqual(built.shortlist.map(x=>x.perfume.id),ranked.map(x=>x.perfume.id));
});
test('batches contain no duplicates before shortlist cycle resets',()=>{
  const answers={priceTier:3,likedSmells:['fresh citrus'],limit:5};
  const first=recommend(catalog,{...answers,batchIndex:0});
  const ids=[] as string[];
  for(let i=0;i<first.totalPages;i++) ids.push(...recommend(catalog,{...answers,batchIndex:i}).recommendations.map(x=>x.id));
  assert.equal(ids.length,first.totalMatches);
  assert.equal(new Set(ids).size,ids.length);
  assert.deepEqual(recommend(catalog,{...answers,batchIndex:first.totalPages}).recommendations.map(x=>x.id),first.recommendations.map(x=>x.id));
});
