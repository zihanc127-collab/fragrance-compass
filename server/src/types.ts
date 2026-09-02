export type Level = 'very-low' | 'low' | 'moderate' | 'high' | 'very-high';
export interface Perfume {
  id: string; brand: string; name: string; concentration: string; officialUrl: string;
  scentKeywords: string[]; family: string[]; tags: string[]; sweetness: Level;
  freshness: Level; intensity: Exclude<Level, 'very-low'>; priceTier: 1 | 2 | 3 | 4;
  seasons: string[]; occasions: string[]; moods: string[]; avoidTraits: string[];
  beginnerFriendliness: number; taxonomyVersion: 'launch-v1';
}
export interface QuizAnswers {
  likedSmells?: string[]; dislikedSmells?: string[]; sweetness?: string; freshness?: string;
  floralTolerance?: string; mood?: string[]; impressions?: string[]; occasions?: string[];
  seasons?: string[]; budgetRange?: string; currency?: string; batchIndex?: number; limit?: number;
  priceTier?: number;
}
