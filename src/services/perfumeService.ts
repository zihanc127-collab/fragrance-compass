import { Perfume, Currency } from '../types';
import { BUDGET_PREFERENCES } from '../data/quizOptions';

/**
 * Perfume Service Layer
 * 
 * This service acts as the single point of data access for the Fragrance Compass UI.
 * In this MVP phase, it reads from the local prototype dataset.
 * When handing off to backend development (e.g. Codex/Express/FastAPI), replace these
 * functions with async fetch calls to `/api/perfumes` without breaking UI components.
 */

const API_BASE=(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/,'');
async function request<T>(path:string, init?:RequestInit):Promise<T>{const r=await fetch(`${API_BASE}${path}`,init);if(!r.ok)throw new Error(`API ${r.status}: ${r.statusText}`);return r.json();}
function visual(tags:string[]){
  const t=new Set(tags); const silhouette=t.has('aquatic-sea-salt')?'flask':t.has('green-leafy')||t.has('herbal-aromatic')?'apothecary':t.has('soft-woods')?'column':t.has('fresh-floral')||t.has('rose')?'oval':t.has('clean-musk')?'cylinder':t.has('amber-warm')||t.has('gourmand')?'bell':'cube';
  return {silhouette,gradient:'from-[#EFECE6] to-[#D5CABE]',accentColor:'#8C7355'} as const;
}
function toUi(p:any):Perfume {const v=visual(p.tags||[]);return {...p,imagePlaceholder:v,silhouetteType:v.silhouette,gradient:v.gradient,accentColor:v.accentColor,priceLevel:p.priceTier,priceRangeGBP:'',priceRangeRMB:'',fragranceFamily:(p.family||[]).join(' / '),fragranceFamilyZh:(p.family||[]).join(' / '),topNotes:[],topNotesZh:[],middleNotes:[],middleNotesZh:[],baseNotes:[],baseNotesZh:[],tagsZh:p.scentKeywords||[],mood:p.moods||[],genderExpression:'unisex',description:'',descriptionZh:'',beginnerFriendlyScore:(p.beginnerFriendliness||0)*10};}
export async function getAllPerfumes(): Promise<Perfume[]> {return (await request<{items:any[]}>('/api/perfumes?limit=200')).items.map(toUi);}

export async function getPerfumeById(id: string): Promise<Perfume | null> {
  try{return toUi(await request(`/api/perfumes/${encodeURIComponent(id)}`));}catch{return null;}
}

export async function searchPerfumes(query: string, options?: {
  brand?: string;
  family?: string;
  priceLevel?: number;
  season?: string;
}): Promise<Perfume[]> {
  const all=await getAllPerfumes(); const q = query.trim().toLowerCase();
  const filtered = all.filter(p => {
    // Text search in name, brand, notes, tags
    if (q) {
      const matchName = p.name.toLowerCase().includes(q) || (p.nameZh && p.nameZh.toLowerCase().includes(q));
      const matchBrand = p.brand.toLowerCase().includes(q) || (p.brandZh && p.brandZh.toLowerCase().includes(q));
      const matchNotes = [...p.topNotes, ...p.middleNotes, ...p.baseNotes, ...p.topNotesZh, ...p.middleNotesZh, ...p.baseNotesZh]
        .some(note => note.toLowerCase().includes(q));
      const matchTags = [...p.tags, ...p.tagsZh].some(t => t.toLowerCase().includes(q));
      const matchFamily = p.fragranceFamily.toLowerCase().includes(q) || p.fragranceFamilyZh.toLowerCase().includes(q);

      if (!matchName && !matchBrand && !matchNotes && !matchTags && !matchFamily) {
        return false;
      }
    }

    if (options?.brand && options.brand !== 'all' && p.brand !== options.brand) {
      return false;
    }

    if (options?.family && options.family !== 'all' && !p.fragranceFamily.toLowerCase().includes(options.family.toLowerCase()) && !p.fragranceFamilyZh.includes(options.family)) {
      return false;
    }

    if (options?.priceLevel && options.priceLevel > 0 && p.priceLevel !== options.priceLevel) {
      return false;
    }

    if (options?.season && options.season !== 'all' && !p.seasons.includes(options.season as any) && !p.seasons.includes('all seasons')) {
      return false;
    }

    return true;
  });

  return Promise.resolve(filtered);
}

export async function getPerfumesByBrand(brand: string): Promise<Perfume[]> {
  return (await request<{items:any[]}>(`/api/perfumes?brand=${encodeURIComponent(brand)}&limit=200`)).items.map(toUi);
}

export async function getPerfumesForRecommendation(filterFn?: (p: Perfume) => boolean): Promise<Perfume[]> {
  if (filterFn) {
    return (await getAllPerfumes()).filter(filterFn);
  }
  return getAllPerfumes();
}

export async function getFeaturedPerfumes(limit = 6): Promise<Perfume[]> {
  // Returns high beginner friendly score iconic items
  const featured = (await getAllPerfumes())
    .filter(p => p.beginnerFriendlyScore >= 9.2)
    .slice(0, limit);
  return Promise.resolve(featured);
}

export async function getAvailableBrands(): Promise<{ brand: string; brandZh?: string; count: number }[]> {
  const brandMap = new Map<string, { brandZh?: string; count: number }>();
  
  (await getAllPerfumes()).forEach(p => {
    const existing = brandMap.get(p.brand);
    if (existing) {
      existing.count += 1;
    } else {
      brandMap.set(p.brand, { brandZh: p.brandZh, count: 1 });
    }
  });

  const list = Array.from(brandMap.entries()).map(([brand, val]) => ({
    brand,
    brandZh: val.brandZh,
    count: val.count
  }));

  return Promise.resolve(list);
}

export async function getAvailableFragranceFamilies(): Promise<string[]> {
  const families = Array.from(new Set((await getAllPerfumes()).map(p => p.fragranceFamily)));
  return Promise.resolve(families);
}

export async function requestRecommendations(answers:any,batchIndex=0){
  const selectedTier=BUDGET_PREFERENCES.find(t=>t.id===answers.budgetRange);
  const x=await request<any>('/api/recommendations',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...answers,priceTier:selectedTier?.level,batchIndex,limit:5})});
  return {...x,items:x.recommendations.map((p:any)=>({perfume:toUi(p),score:p.matchScore,matchReason:'',matchReasonZh:'',highlights:p.scentKeywords,highlightsZh:p.scentKeywords}))};
}
