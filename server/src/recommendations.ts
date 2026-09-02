import type { Perfume, QuizAnswers } from './types.js';
import { publicPerfume } from './catalog.js';

const liked: Record<string,string[]> = {
  'fresh citrus':['citrus'], 'rain after grass':['rain-earth-mineral','green-leafy'],
  'clean laundry':['clean-musk','cool-transparent'], 'tea leaves':['tea'], 'soft woods':['soft-woods'],
  'green leaves':['green-leafy'], 'fig & milky greens':['fig','green-leafy'],
  'sea breeze':['aquatic-sea-salt','cool-transparent'], 'fresh flowers':['fresh-floral'],
  'creamy vanilla':['vanilla','gourmand'], 'warm spices':['spice','amber-warm'],
  'incense or smoke':['incense-smoke'], 'powdery makeup':['powder-iris'],
  fruits:['fruit'], herbs:['herbal-aromatic']
};
const disliked: Record<string,string[]> = {
  'too sweet':['gourmand','vanilla','cloying-sweet'], 'too strong':['high-intensity'], 'too powdery':['powder-iris'],
  'too mature':['mature-retro'], 'too floral':['fresh-floral','rose','white-floral'],
  'too smoky':['incense-smoke','smoky-woods','smoky'], 'too spicy':['spice'], 'too musky':['musk','animalic-musk'],
  'too bitter':['bitter-medicinal'], 'too synthetic':['synthetic-impression'], 'too soapy':['soapy']
};
const level: Record<string,number> = {'almost none':0,'very-low':0,low:1,moderate:2,balanced:2,'slightly sweet':3,fresh:3,high:3,sweet:4,'very fresh':4,'very-high':4,'warm & cozy':0};
const normalizeMood: Record<string,string> = {
  'refreshing & energetic':'refreshing-energetic', 'warm & cozy':'warm-cozy',
  'calm & serene':'calm-serene', 'confident & sharp':'confident-sharp',
  'romantic & soft':'romantic-soft', calm:'calm-serene', energetic:'refreshing-energetic',
  cozy:'warm-cozy', confident:'confident-sharp', romantic:'romantic-soft',
  playful:'playful', clean:'clean', elegant:'elegant'
};
const normalizeOccasion: Record<string,string> = {
  'formal evening':'formal-evening', 'daily commute':'daily-commute',
  'date night':'date-night', 'relaxing alone':'relaxing-alone',
  work:'workplace', office:'workplace', daily:'daily-commute', date:'date-night',
  evening:'formal-evening', travel:'travel', formal:'formal-evening'
};

export function calculateRawScore(p: Perfume, a: QuizAnswers): number {
  let score = 65;
  for (const x of a.likedSmells || []) if ((liked[x] || []).some(t => p.tags.includes(t))) score += 6;
  for (const x of a.dislikedSmells || []) {
    const traits = disliked[x] || [];
    if (traits.includes('high-intensity') ? ['high','very-high'].includes(p.intensity) : traits.some(t => p.tags.includes(t) || p.avoidTraits.includes(t))) score -= 12;
  }
  if (a.sweetness) score += Math.max(-8, 6-Math.abs((level[a.sweetness]??2)-(level[p.sweetness]??2))*5);
  if (a.freshness) score += Math.max(-5, 5-Math.abs((level[a.freshness]??2)-(level[p.freshness]??2))*4);
  const floral = p.tags.some(t => ['fresh-floral','rose','white-floral'].includes(t));
  if (a.floralTolerance === 'avoid floral' && floral) score -= 10;
  if (a.floralTolerance === 'love floral' && floral) score += 6;
  if ((a.mood||[]).map(x=>normalizeMood[x]||x).some(x=>p.moods.includes(x))) score += 6;
  if ((a.occasions||[]).map(x=>normalizeOccasion[x]||x).some(x=>p.occasions.includes(x))) score += 4;
  if ((a.seasons||[]).some(x=>p.seasons.includes(x)||p.seasons.includes('all-seasons'))) score += 4;
  score += Math.round(p.beginnerFriendliness*8);
  return score;
}

const SHORTLIST_LIMIT = 12;
const MAX_PER_BRAND = 2;
const ADJACENT_TIER_PENALTY = 8;

interface RankedCandidate {
  perfume: Perfume;
  rawScore: number;
  rankingScore: number;
}

export function buildRecommendationShortlist(catalog: Perfume[], a: QuizAnswers): {
  candidatePoolCount: number;
  shortlist: RankedCandidate[];
} {
  const requestedTier = Number.isInteger(a.priceTier) && Number(a.priceTier) >= 1 && Number(a.priceTier) <= 4
    ? Number(a.priceTier)
    : 0;

  let candidates: Array<{ perfume: Perfume; budgetPenalty: number }>;
  if (!requestedTier) {
    candidates = catalog.map(perfume => ({ perfume, budgetPenalty: 0 }));
  } else {
    const availableTiers = [...new Set(catalog.map(p => p.priceTier))].sort((x,y) => x-y);
    const primaryTier = availableTiers.includes(requestedTier as Perfume['priceTier'])
      ? requestedTier
      : availableTiers.reduce((best,tier) => Math.abs(tier-requestedTier) < Math.abs(best-requestedTier) ? tier : best);
    const primary = catalog.filter(p => p.priceTier === primaryTier);
    candidates = primary.map(perfume => ({ perfume, budgetPenalty: 0 }));

    const needsExpansion = primary.length < SHORTLIST_LIMIT || new Set(primary.map(p => p.brand)).size < 6;
    if (needsExpansion) {
      const adjacentTier = availableTiers
        .filter(tier => tier !== primaryTier)
        .sort((x,y) => Math.abs(x-primaryTier)-Math.abs(y-primaryTier) || x-y)[0];
      if (adjacentTier !== undefined) {
        candidates.push(...catalog.filter(p => p.priceTier === adjacentTier)
          .map(perfume => ({ perfume, budgetPenalty: ADJACENT_TIER_PENALTY })));
      }
    }
  }

  const ranked = candidates.map(({perfume,budgetPenalty}) => {
    const rawScore = calculateRawScore(perfume,a);
    return { perfume, rawScore, rankingScore: rawScore-budgetPenalty };
  }).sort((x,y) => y.rankingScore-x.rankingScore || y.rawScore-x.rawScore || x.perfume.id.localeCompare(y.perfume.id));

  const brandCounts = new Map<string,number>();
  const shortlist: RankedCandidate[] = [];
  for (const candidate of ranked) {
    const count = brandCounts.get(candidate.perfume.brand) || 0;
    if (count >= MAX_PER_BRAND) continue;
    shortlist.push(candidate);
    brandCounts.set(candidate.perfume.brand,count+1);
    if (shortlist.length === SHORTLIST_LIMIT) break;
  }
  return { candidatePoolCount: candidates.length, shortlist };
}

export function recommend(catalog: Perfume[], a: QuizAnswers) {
  const { shortlist } = buildRecommendationShortlist(catalog,a);
  const limit = Math.min(20, Math.max(1, a.limit || 5));
  const totalPages=Math.max(1,Math.ceil(shortlist.length/limit)), page=(a.batchIndex||0)%totalPages;
  const recommendations = shortlist.slice(page*limit,page*limit+limit).map(({perfume,rankingScore}) => ({
    ...publicPerfume(perfume), matchScore: Math.min(97,Math.max(55,rankingScore))
  }));
  return { recommendations, totalMatches:shortlist.length,totalPages,currentPage:page+1 };
}
