import { Perfume, QuizAnswers, ScentProfile, RecommendationMatch, PersonalityAnswers, PersonalityResult, Language, Currency } from '../types';
import { LIKED_SMELL_MAPPINGS, DISLIKED_SMELL_PENALTIES, ZODIAC_PROFILES } from './profileMapping';
import { BUDGET_TIERS } from '../data/quizOptions';
import { localizeDirectionTitle, localizeScentKeywords } from './displayLocalization';

const PROFILE_TAGS:Record<string,string[]> = {
  'fresh citrus':['citrus','fresh'], 'rain after grass':['rain-earth-mineral','green-leafy'],
  'clean laundry':['clean-musk','clean'], 'tea leaves':['tea'], 'soft woods':['soft-woods'],
  'green leaves':['green-leafy'], 'fig & milky greens':['fig','green-leafy'],
  'sea breeze':['aquatic-sea-salt','mineral'], 'fresh flowers':['fresh-floral','rose'],
  'creamy vanilla':['vanilla','gourmand'], 'warm spices':['amber-warm','spice'],
  'incense or smoke':['incense-smoke','smoky','temple'], 'powdery makeup':['powder-iris'],
  fruits:['fruit'], herbs:['herbal-aromatic']
};

export function selectProfileDirection(likedSmells:string[]):string {
  const has=(id:string)=>likedSmells.includes(id);
  if (has('incense or smoke') && has('soft woods')) return 'quiet-incense-woods';
  if (has('creamy vanilla') && has('warm spices')) return 'warm-vanilla-spice';
  if (has('fresh citrus') && (has('green leaves') || has('rain after grass'))) return 'fresh-green-citrus';
  if (has('fresh flowers')) return 'fresh-floral-rose';
  if (has('sea breeze')) return 'cool-marine-mineral';
  if (has('fig & milky greens')) return 'fig-soft-woods';
  if (has('tea leaves')) return 'green-tea';
  if (has('clean laundry')) return 'clean-soft-musk';
  if (has('powdery makeup')) return 'powder-iris';
  if (has('fresh citrus')) return 'fresh-green-citrus';
  if (has('warm spices') || has('creamy vanilla')) return 'warm-vanilla-spice';
  if (has('incense or smoke') || has('soft woods')) return 'quiet-incense-woods';
  if (has('fruits')) return 'fruity-bright';
  if (has('herbs') || has('green leaves') || has('rain after grass')) return 'herbal-green';
  return 'balanced';
}

/**
 * Generate a comprehensive, beginner-friendly Scent Profile from user quiz answers.
 */
export function generateScentProfile(answers: QuizAnswers, lang: Language = 'en'): ScentProfile {
  const keywordsSet = new Set<string>();
  const keywordsZhSet = new Set<string>();
  const familiesSet = new Set<string>();
  const familiesZhSet = new Set<string>();
  const enjoyNotesSet = new Set<string>();
  const enjoyNotesZhSet = new Set<string>();
  const avoidNotesSet = new Set<string>();
  const avoidNotesZhSet = new Set<string>();

  // Process liked smells
  answers.likedSmells.forEach(smell => {
    const map = LIKED_SMELL_MAPPINGS[smell];
    if (map) {
      map.notes.slice(0, 4).forEach(n => enjoyNotesSet.add(n));
      map.notesZh.slice(0, 4).forEach(n => enjoyNotesZhSet.add(n));
      map.families.forEach(f => familiesSet.add(f));
      map.familiesZh.forEach(f => familiesZhSet.add(f));
    }
    (PROFILE_TAGS[smell] || []).forEach(tag => keywordsSet.add(tag));
  });

  // Process disliked smells
  answers.dislikedSmells.forEach(dis => {
    const pen = DISLIKED_SMELL_PENALTIES[dis];
    if (pen) {
      pen.avoidNotes.forEach(n => avoidNotesSet.add(n));
      pen.avoidNotesZh.forEach(n => avoidNotesZhSet.add(n));
    }
  });

  // Add sweetness and freshness descriptors
  if (answers.sweetness === 'almost none' || answers.sweetness === 'low') {
    keywordsSet.add('low-sweetness');
    keywordsZhSet.add('低甜度 / 干爽');
  } else if (answers.sweetness === 'sweet') {
    keywordsSet.add('high-sweetness');
    keywordsZhSet.add('醇厚甜润');
  }

  if (answers.freshness === 'fresh' || answers.freshness === 'very fresh') {
    keywordsSet.add('fresh-airy');
    keywordsZhSet.add('清爽通透');
  }

  const keywordIds=Array.from(keywordsSet).slice(0,8);
  const directionId=selectProfileDirection(answers.likedSmells);
  const directionTitle=localizeDirectionTitle(directionId,'en');
  const directionTitleZh=localizeDirectionTitle(directionId,'zh-CN');

  // Explanations
  const likedSummaryEn = Array.from(keywordsSet).slice(0, 4).join(', ');
  const likedSummaryZh = Array.from(keywordsZhSet).slice(0, 4).join('、');

  const explanation = `Your personal scent compass is oriented towards ${likedSummaryEn || 'clean, balanced and natural'} fragrances. You are likely to appreciate scents that feel airy, comfortable to wear, and naturally integrated with your skin, while heavy or cloying profiles may feel overwhelming.`;

  const explanationZh = `你的专属香气罗盘指向【${directionTitleZh}】。你更倾向于舒适通透、自然贴肤的气味体验，享受包括${likedSummaryZh || '自然草木、温和木质与纯净白麝香'}等生活化意象，而对过分甜腻或浓烈的香调更具敏感度。`;

  return {
    directionId,
    keywordIds,
    directionTitle,
    directionTitleZh,
    keywords: localizeScentKeywords(keywordIds,'en'),
    keywordsZh: localizeScentKeywords(keywordIds,'zh-CN'),
    familiesToExplore: Array.from(familiesSet).slice(0, 4),
    familiesToExploreZh: Array.from(familiesZhSet).slice(0, 4),
    notesToEnjoy: Array.from(enjoyNotesSet).slice(0, 8),
    notesToEnjoyZh: Array.from(enjoyNotesZhSet).slice(0, 8),
    notesToApproachCarefully: Array.from(avoidNotesSet).slice(0, 5),
    notesToApproachCarefullyZh: Array.from(avoidNotesZhSet).slice(0, 5),
    explanation,
    explanationZh,
    dominantMood: answers.mood[0] || 'clean',
    dominantMoodZh: answers.mood[0] || '干净从容'
  };
}

/**
 * Calculate match score (0-100) based on weighted dimensions
 */
export function calculateMatchScore(perfume: Perfume, answers: QuizAnswers, profile: ScentProfile): {
  score: number;
  reason: string;
  reasonZh: string;
  highlights: string[];
  highlightsZh: string[];
} {
  let rawScore = 65; // baseline

  const reasonsEn: string[] = [];
  const reasonsZh: string[] = [];
  const highlightsEn: string[] = [];
  const highlightsZh: string[] = [];

  // 1. Check liked smells alignment
  answers.likedSmells.forEach(smell => {
    const map = LIKED_SMELL_MAPPINGS[smell];
    if (map) {
      const tagMatch = map.tags.some(t => perfume.tags.includes(t));
      const noteMatch = map.notes.some(n =>
        [...perfume.topNotes, ...perfume.middleNotes, ...perfume.baseNotes].some(pn => pn.toLowerCase().includes(n.toLowerCase()))
      );
      const familyMatch = map.families.some(f => perfume.fragranceFamily.toLowerCase().includes(f.toLowerCase()));

      if (tagMatch || noteMatch || familyMatch) {
        rawScore += 5;
        if (reasonsEn.length < 2) {
          reasonsEn.push(`aligns with your fondness for ${smell}`);
          reasonsZh.push(`契合你对【${smell}】的偏爱`);
        }
      }
    }
  });

  // 2. Check disliked smells penalty
  answers.dislikedSmells.forEach(dis => {
    const pen = DISLIKED_SMELL_PENALTIES[dis];
    if (pen) {
      const hitsDislike = pen.avoidTags.some(t => perfume.tags.includes(t));
      if (hitsDislike) {
        rawScore -= 12;
      }
    }
  });

  // 3. Sweetness alignment
  if (answers.sweetness === perfume.sweetness) {
    rawScore += 6;
  } else if (
    (answers.sweetness === 'almost none' && (perfume.sweetness === 'sweet' || perfume.sweetness === 'slightly sweet')) ||
    (answers.sweetness === 'low' && perfume.sweetness === 'sweet')
  ) {
    rawScore -= 8;
  }

  // 4. Freshness alignment
  if (answers.freshness === perfume.freshness) {
    rawScore += 5;
  }

  // 5. Floral tolerance alignment
  if (answers.floralTolerance === 'avoid floral' && perfume.fragranceFamily.toLowerCase().includes('floral')) {
    rawScore -= 10;
  } else if (answers.floralTolerance === 'love floral' && perfume.fragranceFamily.toLowerCase().includes('floral')) {
    rawScore += 6;
  }

  // 6. Mood alignment
  const sharedMoods = answers.mood.filter(m => perfume.mood.includes(m));
  if (sharedMoods.length > 0) {
    rawScore += Math.min(sharedMoods.length * 3, 9);
    highlightsEn.push(...sharedMoods.map(m => `${m} atmosphere`));
    highlightsZh.push(...sharedMoods.map(m => `${m} 氛围`));
  }

  // 7. Season & Occasion alignment
  if (answers.seasons.length > 0) {
    const seasonMatch = answers.seasons.some(s => s === 'all seasons' || perfume.seasons.includes(s as any) || perfume.seasons.includes('all seasons'));
    if (seasonMatch) rawScore += 4;
  }

  if (answers.occasions.length > 0) {
    const occMatch = answers.occasions.some(o => perfume.occasions.includes(o));
    if (occMatch) rawScore += 3;
  }

  // 8. Beginner Friendly bonus
  rawScore += Math.round(perfume.beginnerFriendlyScore * 0.8);

  // Normalize final score between 72% and 97% to feel realistic and informative
  let finalScore = Math.min(97, Math.max(72, rawScore));

  const mainTagsEn = perfume.tags.slice(0, 3).join(' · ');
  const mainTagsZh = perfume.tagsZh.slice(0, 3).join(' · ');

  const reason = reasonsEn.length > 0
    ? `Worth exploring because it ${reasonsEn.join(' and ')}, featuring notes of ${perfume.topNotes[0] || 'fresh botanicals'}.`
    : `A graceful match for your ${profile.directionTitle.toLowerCase()} preference with lovely ${mainTagsEn} balance.`;

  const reasonZh = reasonsZh.length > 0
    ? `值得一试：因为它${reasonsZh.join('，且')}，前调展现出清雅的${perfume.topNotesZh[0] || '草木气息'}。`
    : `契合你的【${profile.directionTitleZh}】画像，呈现出细腻优美的${mainTagsZh}平衡。`;

  return {
    score: finalScore,
    reason,
    reasonZh,
    highlights: highlightsEn.slice(0, 3),
    highlightsZh: highlightsZh.slice(0, 3)
  };
}

/**
 * Filter perfumes by selected budget tier
 */
export function filterByBudget(perfumes: Perfume[], currency: Currency, budgetRange: string): Perfume[] {
  if (!budgetRange || budgetRange === 'all' || budgetRange === 'no-preference') return perfumes;

  const tiers = BUDGET_TIERS[currency] || BUDGET_TIERS.GBP;
  const selectedTier = tiers.find(t => t.id === budgetRange);
  if (!selectedTier) return perfumes;

  const filtered = perfumes.filter(p => p.priceLevel === selectedTier.level);
  // If too few items in exact tier, expand to adjacent tier so user always sees great recommendations
  if (filtered.length >= 4) {
    return filtered;
  }

  return perfumes.filter(p => Math.abs(p.priceLevel - selectedTier.level) <= 1);
}

/**
 * Get ranked recommendation batch (4-6 items per visible batch) with cycling support
 */
export function getRecommendations(
  answers: QuizAnswers,
  catalog: Perfume[],
  batchSize = 5,
  batchIndex = 0
): {
  items: RecommendationMatch[];
  totalMatches: number;
  totalPages: number;
  currentPage: number;
  profile: ScentProfile;
} {
  const profile = generateScentProfile(answers, answers.currency === 'RMB' ? 'zh' : 'en');
  const budgetFiltered = filterByBudget(catalog, answers.currency, answers.budgetRange);

  // Score all candidates
  const scoredList: RecommendationMatch[] = budgetFiltered.map(perfume => {
    const { score, reason, reasonZh, highlights, highlightsZh } = calculateMatchScore(perfume, answers, profile);
    return {
      perfume,
      score,
      matchReason: reason,
      matchReasonZh: reasonZh,
      highlights,
      highlightsZh
    };
  });

  // Sort descending by score
  scoredList.sort((a, b) => b.score - a.score);

  const totalMatches = scoredList.length;
  const totalPages = Math.max(1, Math.ceil(totalMatches / batchSize));
  const normalizedIndex = batchIndex % totalPages;

  const startIndex = normalizedIndex * batchSize;
  const items = scoredList.slice(startIndex, startIndex + batchSize);

  return {
    items,
    totalMatches,
    totalPages,
    currentPage: normalizedIndex + 1,
    profile
  };
}

const ELEMENT_KEYWORDS_MAP: Record<string, { tryEn: string[]; tryZh: string[] }> = {
  wood: {
    tryEn: ['Bamboo', 'Fig', 'Green Leaves', 'Cedar'],
    tryZh: ['翠竹', '青翠无花果', '清晨枝叶', '雪松']
  },
  fire: {
    tryEn: ['Bergamot', 'Grapefruit', 'Amber', 'Pink Pepper'],
    tryZh: ['阳光佛手柑', '西柚', '温暖琥珀', '粉红胡椒']
  },
  earth: {
    tryEn: ['Sandalwood', 'Cashmeran', 'White Cedar', 'Vanilla'],
    tryZh: ['温润檀木', '羊绒木', '白雪松', '香草']
  },
  metal: {
    tryEn: ['White Tea', 'Iris', 'Vetiver', 'Cold Ozone'],
    tryZh: ['高山冷白茶', '清冷鸢尾', '干爽香根草', '冷氧水汽']
  },
  water: {
    tryEn: ['Sea Salt', 'Waterlily', 'White Musk', 'Lotus'],
    tryZh: ['海盐', '睡莲', '贴肤白麝香', '清幽莲花']
  }
};

/**
 * Secondary Flow — Personality / Zodiac / Five Elements Recommendation
 */
export function getPersonalityRecommendations(
  answers: PersonalityAnswers,
  catalog: Perfume[],
  lang: Language = 'en'
): {
  result: PersonalityResult;
  matchedPerfumes: RecommendationMatch[];
} {
  const zodiac = ZODIAC_PROFILES[answers.zodiacSign?.toLowerCase()] || ZODIAC_PROFILES.virgo;
  const elemKeywords = answers.fiveElements ? ELEMENT_KEYWORDS_MAP[answers.fiveElements.toLowerCase()] : null;
  const isGift = answers.choosingFor === 'gift';

  // Compose title & description
  let inspirationTitle = zodiac.titleEn;
  let inspirationTitleZh = zodiac.titleZh;

  let poeticDescription = zodiac.descEn;
  let poeticDescriptionZh = zodiac.descZh;

  if (isGift) {
    inspirationTitle = `Gift Inspiration: ${zodiac.titleEn}`;
    inspirationTitleZh = `礼赠心意灵感：${zodiac.titleZh}`;
    poeticDescription += ` Thoughtfully attuned for a cherished ${answers.relationship || 'recipient'} with refined grace.`;
    poeticDescriptionZh += ` 专为身边的【${answers.relationship || '特别之人'}】量身构思，兼具格调与体贴。`;
  }

  const combinedTryEn = elemKeywords ? [...zodiac.tryKeywordsEn, ...elemKeywords.tryEn] : zodiac.tryKeywordsEn;
  const combinedTryZh = elemKeywords ? [...zodiac.tryKeywordsZh, ...elemKeywords.tryZh] : zodiac.tryKeywordsZh;

  const result: PersonalityResult = {
    inspirationTitle,
    inspirationTitleZh,
    poeticDescription,
    poeticDescriptionZh,
    tryKeywords: combinedTryEn.slice(0, 7),
    tryKeywordsZh: combinedTryZh.slice(0, 7),
    avoidKeywords: zodiac.avoidKeywordsEn,
    avoidKeywordsZh: zodiac.avoidKeywordsZh,
    formula: {
      top: zodiac.topEn,
      topZh: zodiac.topZh,
      middle: zodiac.midEn,
      middleZh: zodiac.midZh,
      base: zodiac.baseEn,
      baseZh: zodiac.baseZh
    }
  };

  // Match perfumes from catalog
  const budgetFiltered = filterByBudget(catalog, answers.currency, answers.budgetRange);

  const scored = budgetFiltered.map(p => {
    let score = 75;
    const hitKeywords = combinedTryEn.filter(kw =>
      p.tags.some(t => t.toLowerCase().includes(kw.toLowerCase())) ||
      [...p.topNotes, ...p.middleNotes, ...p.baseNotes].some(n => n.toLowerCase().includes(kw.toLowerCase()))
    );

    score += hitKeywords.length * 6;
    score = Math.min(96, Math.max(78, score));

    return {
      perfume: p,
      score,
      matchReason: `Harmonizes with this personality archetype through its signature ${p.fragranceFamily.toLowerCase()} accords.`,
      matchReasonZh: `以其标志性的【${p.fragranceFamilyZh}】气韵，完美呼应这一性格灵感原型。`,
      highlights: hitKeywords.slice(0, 3),
      highlightsZh: p.tagsZh.slice(0, 3)
    };
  });

  scored.sort((a, b) => b.score - a.score);

  return {
    result,
    matchedPerfumes: scored.slice(0, 5)
  };
}
