import express from 'express';
import cors from 'cors';
import { catalog, publicPerfume, validateCatalog } from './catalog.js';
import { recommend } from './recommendations.js';

const errors=validateCatalog(); if(errors.length) throw new Error(`Invalid catalog:\n${errors.join('\n')}`);
const productionOrigins=(process.env.FRONTEND_ORIGIN || '').split(',').map(x=>x.trim().replace(/\/$/,'')).filter(Boolean);
const localOrigin=/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;
export const app=express();
app.use(cors({origin(origin,callback){
  if(!origin || localOrigin.test(origin) || productionOrigins.includes(origin.replace(/\/$/,''))) return callback(null,true);
  return callback(new Error('Origin not allowed by CORS'));
}}));
app.use(express.json({limit:'100kb'}));
app.get('/api/health',(_q,r)=>r.json({status:'ok',catalogCount:catalog.length}));
app.get('/api/perfumes/search',(q,r)=>{const x=String(q.query.q||'').trim().toLowerCase(); const hits=catalog.filter(p=>[p.name,p.brand,...p.scentKeywords,...p.tags,...p.family].some(v=>v.toLowerCase().includes(x))); r.json({items:hits.map(publicPerfume),total:hits.length});});
app.get('/api/perfumes',(q,r)=>{let x=catalog.filter(p=>(!q.query.brand||p.brand.toLowerCase()===String(q.query.brand).toLowerCase())&&(!q.query.family||p.family.includes(String(q.query.family)))&&(!q.query.priceTier||p.priceTier===Number(q.query.priceTier))&&(!q.query.season||p.seasons.includes(String(q.query.season)))); const page=Math.max(1,Number(q.query.page)||1),limit=Math.min(200,Math.max(1,Number(q.query.limit)||200)); r.json({items:x.slice((page-1)*limit,page*limit).map(publicPerfume),total:x.length,page,limit});});
app.get('/api/perfumes/:id',(q,r)=>{const p=catalog.find(x=>x.id===q.params.id); if(!p)return r.status(404).json({error:'Perfume not found'}); r.json(publicPerfume(p));});
app.post('/api/recommendations',(q,r)=>r.json(recommend(catalog,q.body||{})));
