export type Language = 'en' | 'zh' | 'zh-CN' | 'zh-HK' | 'fr' | 'es' | 'de';
export type Currency = 'GBP' | 'RMB' | 'USD' | 'CAD' | 'EUR' | 'CHF' | 'HKD' | 'AUD' | 'TWD';
export type RegionCode = 'UK' | 'CN' | 'US' | 'CA' | 'FR' | 'ES' | 'CH' | 'DE' | 'HK' | 'AU' | 'TW';

export interface RegionConfig {
  code: RegionCode;
  nameEn: string;
  nameZh: string;
  nameLocal?: string;
  flag: string;
  language: Language;
  currency: Currency;
  currencySymbol: string;
  currencyLabelEn: string;
  currencyLabelZh: string;
  languageLabel?: string;
  currencyName?: string;
}

export interface PerfumeImagePlaceholder {
  gradient: string;
  silhouette: 'column' | 'oval' | 'apothecary' | 'cube' | 'arch' | 'flask' | 'cylinder' | 'bell';
  accentColor: string;
}

export interface Perfume {
  id: string;
  name: string;
  nameZh?: string;
  brand: string;
  brandZh?: string;
  line?: string;
  concentration?: string; // EDT, EDP, Extrait, Cologne
  officialUrl: string;
  scentKeywords: string[];
  family: string[];
  priceTier: 1 | 2 | 3 | 4;
  moods: string[];
  avoidTraits: string[];
  beginnerFriendliness: number;
  taxonomyVersion: 'launch-v1';
  imagePlaceholder: PerfumeImagePlaceholder;
  
  // Convenient visual aliases for components
  silhouetteType?: 'column' | 'oval' | 'apothecary' | 'cube' | 'arch' | 'flask' | 'cylinder' | 'bell';
  gradient?: string;
  accentColor?: string;

  priceLevel: 1 | 2 | 3 | 4; // 1: under £50/¥500, 2: £50-100/¥500-1000, 3: £100-180/¥1000-1800, 4: £180+/¥1800+
  priceRangeGBP: string;
  priceRangeRMB: string;
  priceRangeGbp?: string;
  priceRangeRmb?: string;

  fragranceFamily: string;
  fragranceFamilyZh: string;
  topNotes: string[];
  topNotesZh: string[];
  middleNotes: string[];
  middleNotesZh: string[];
  baseNotes: string[];
  baseNotesZh: string[];
  tags: string[];
  tagsZh: string[];
  seasons: ('spring' | 'summer' | 'autumn' | 'winter' | 'all seasons')[];
  occasions: string[];
  occasionsZh?: string[];
  mood: string[];
  intensity: 'intimate' | 'subtle' | 'moderate' | 'rich' | 'intense';
  sweetness: 'almost none' | 'low' | 'moderate' | 'balanced' | 'slightly sweet' | 'sweet';
  freshness: 'low' | 'moderate' | 'fresh' | 'very fresh' | 'warm & cozy';
  genderExpression: 'unisex' | 'feminine' | 'masculine';
  
  description: string;
  descriptionZh: string;
  poeticVibe?: string;
  poeticVibeZh?: string;
  whatItSmellsLike?: string;
  whatItSmellsLikeZh?: string;
  whyItSuitsYou?: string;
  whyItSuitsYouZh?: string;
  suitableFor?: string;
  suitableForZh?: string;
  avoidIf?: string;
  avoidIfZh?: string;
  approachCarefullyIf?: string;
  approachCarefullyIfZh?: string;
  beginnerGuide?: string;
  beginnerGuideZh?: string;
  beginnerFriendlyScore: number; // 1-10

  dataStatus?: 'prototype_to_verify';
  sourceType?: 'mock';
  sourceName?: 'AI-generated prototype dataset';
  externalId?: null;
  lastVerified?: null;
  imageStatus?: 'placeholder';
  imageUrl?: null;
  imageAttribution?: null;
  notesConfidence?: 'unverified';
}

export interface QuizAnswers {
  likedSmells: string[];
  dislikedSmells: string[];
  sweetness: 'almost none' | 'low' | 'moderate' | 'balanced' | 'slightly sweet' | 'sweet' | '';
  freshness: 'low' | 'moderate' | 'fresh' | 'very fresh' | 'warm & cozy' | '';
  floralTolerance: 'avoid floral' | 'subtle floral only' | 'balanced' | 'love floral' | '';
  mood: string[];
  impressions?: string[];
  desiredImpression?: string[];
  occasions: string[];
  seasons: string[];
  currency: Currency;
  budgetRange: string;
}

export interface ScentProfile {
  directionId: string;
  keywordIds: string[];
  directionTitle: string;
  directionTitleZh: string;
  keywords: string[];
  keywordsZh: string[];
  familiesToExplore: string[];
  familiesToExploreZh: string[];
  notesToEnjoy: string[];
  notesToEnjoyZh: string[];
  notesToApproachCarefully: string[];
  notesToApproachCarefullyZh: string[];
  explanation: string;
  explanationZh: string;
  dominantMood: string;
  dominantMoodZh: string;
}

export interface PersonalityAnswers {
  choosingFor: 'myself' | 'gift';
  relationship?: string;
  recipientAge?: string;
  giftStyle?: string;
  zodiacSign: string;
  fiveElements: string;
  aestheticStyle?: string;
  personalityKeywords?: string[];
  desiredImpression?: string[];
  preferredStyle?: string[];
  currency: Currency;
  budgetRange: string;
}

export interface PersonalityResult {
  inspirationTitle: string;
  inspirationTitleZh: string;
  poeticDescription: string;
  poeticDescriptionZh: string;
  tryKeywords: string[];
  tryKeywordsZh: string[];
  avoidKeywords: string[];
  avoidKeywordsZh: string[];
  formula: {
    top: string[];
    topZh: string[];
    middle: string[];
    middleZh: string[];
    base: string[];
    baseZh: string[];
  };
}

export interface RecommendationMatch {
  perfume: Perfume;
  score: number;
  matchReason: string;
  matchReasonZh: string;
  highlights: string[];
  highlightsZh: string[];
}
