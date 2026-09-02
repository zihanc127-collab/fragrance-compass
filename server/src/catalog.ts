import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { Perfume } from './types.js';

export const catalog = JSON.parse(readFileSync(fileURLToPath(new URL('../data/fragrance-catalog-v1.json', import.meta.url)),'utf8')) as Perfume[];

export function publicPerfume(p: Perfume) {
  return { id: p.id, brand: p.brand, name: p.name, concentration: p.concentration,
    officialUrl: p.officialUrl, scentKeywords: p.scentKeywords };
}

export function validateCatalog(items: Perfume[] = catalog): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const levels = new Set(['very-low', 'low', 'moderate', 'high', 'very-high']);
  items.forEach((p, i) => {
    if (!p.id || !p.brand || !p.name || !p.officialUrl) errors.push(`record ${i} missing required field`);
    if (ids.has(p.id)) errors.push(`duplicate id: ${p.id}`); ids.add(p.id);
    if (!levels.has(p.sweetness) || !levels.has(p.freshness) || !levels.has(p.intensity)) errors.push(`${p.id}: invalid scalar`);
    if (![1,2,3,4].includes(p.priceTier)) errors.push(`${p.id}: invalid priceTier`);
    if (p.taxonomyVersion !== 'launch-v1') errors.push(`${p.id}: invalid taxonomyVersion`);
    for (const k of ['scentKeywords','family','tags','seasons','occasions','moods','avoidTraits'] as const)
      if (!Array.isArray(p[k])) errors.push(`${p.id}: ${k} is not an array`);
  });
  if (items.length !== 200) errors.push(`expected 200 records, got ${items.length}`);
  return errors;
}
