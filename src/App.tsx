import React, { useState, useEffect } from 'react';
import { Perfume, QuizAnswers, RecommendationMatch, ScentProfile, Language, Currency, RegionCode, RegionConfig } from './types';
import { getAllPerfumes, getFeaturedPerfumes, requestRecommendations } from './services/perfumeService';
import { generateScentProfile } from './utils/recommendation';
import { getRegionConfig, DEFAULT_REGION_CODE } from './data/regions';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { PreferenceQuiz } from './components/PreferenceQuiz';
import { RecommendationResults } from './components/RecommendationResults';
import { PersonalityFlow } from './components/PersonalityFlow';
import { DirectoryView } from './components/DirectoryView';
import { Footer } from './components/Footer';

const EMPTY_QUIZ_ANSWERS: QuizAnswers = {
  likedSmells: [],
  dislikedSmells: [],
  mood: [],
  impressions: [],
  sweetness: '',
  freshness: '',
  floralTolerance: '',
  seasons: [],
  occasions: [],
  budgetRange: '',
  currency: 'RMB'
};

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'results' | 'personality' | 'library'>('home');
  
  // Initialize region from localStorage or default (China - RMB / zh)
  const [regionCode, setRegionCode] = useState<RegionCode>(() => {
    const saved = localStorage.getItem('fragrance_compass_region');
    return (saved as RegionCode) || DEFAULT_REGION_CODE;
  });

  const initialRegion = getRegionConfig(regionCode);
  const [lang, setLang] = useState<Language>(initialRegion.language);
  const [currency, setCurrency] = useState<Currency>(initialRegion.currency);

  const [catalog, setCatalog] = useState<Perfume[]>([]);
  const [featuredPerfumes, setFeaturedPerfumes] = useState<Perfume[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    ...EMPTY_QUIZ_ANSWERS,
    currency: initialRegion.currency
  });
  const [batchIndex, setBatchIndex] = useState(0);

  // Recommendations calculated state
  const [recommendationResult, setRecommendationResult] = useState<{
    items: RecommendationMatch[];
    totalMatches: number;
    totalPages: number;
    currentPage: number;
    profile: ScentProfile;
  } | null>(null);

  // Load catalog via Service Layer
  useEffect(() => {
    async function loadData() {
      const all = await getAllPerfumes();
      const featured = await getFeaturedPerfumes(6);
      setCatalog(all);
      setFeaturedPerfumes(featured);
    }
    loadData();
  }, []);

  // Recalculate recommendations when answers, batchIndex, or currency changes
  const runRecommendation = async (answers: QuizAnswers, index = 0) => {
    const res = await requestRecommendations(answers,index);
    setRecommendationResult({...res,profile:generateScentProfile(answers,answers.currency==='RMB'?'zh':'en')});
  };

  const handleSelectRegion = (regionConfig: RegionConfig) => {
    setRegionCode(regionConfig.code);
    setLang(regionConfig.language);
    setCurrency(regionConfig.currency);
    localStorage.setItem('fragrance_compass_region', regionConfig.code);

    const updatedAnswers = { ...quizAnswers, currency: regionConfig.currency };
    setQuizAnswers(updatedAnswers);
    if (recommendationResult) {
      runRecommendation(updatedAnswers, batchIndex);
    }
  };

  const handleQuizComplete = (finalAnswers: QuizAnswers) => {
    setQuizAnswers(finalAnswers);
    setBatchIndex(0);
    runRecommendation(finalAnswers, 0);
    setCurrentView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefreshBatch = () => {
    const nextIndex = batchIndex + 1;
    setBatchIndex(nextIndex);
    runRecommendation(quizAnswers, nextIndex);
  };

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    const updatedAnswers = { ...quizAnswers, currency: newCurrency };
    setQuizAnswers(updatedAnswers);
    if (recommendationResult) {
      runRecommendation(updatedAnswers, batchIndex);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFEF6] text-[#201E1C] font-sans selection:bg-[#EBE6D8] selection:text-[#201E1C]">
      {/* Global Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => {
          if (view === 'quiz') {
            setQuizAnswers({
              ...EMPTY_QUIZ_ANSWERS,
              currency
            });
          }
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentRegionCode={regionCode}
        onSelectRegion={handleSelectRegion}
        lang={lang}
        currency={currency}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <Home
            featuredPerfumes={featuredPerfumes}
            lang={lang}
            currency={currency}
            onStartQuiz={() => {
              setQuizAnswers({
                ...EMPTY_QUIZ_ANSWERS,
                currency
              });
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartPersonality={() => {
              setCurrentView('personality');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreLibrary={() => {
              setCurrentView('library');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'quiz' && (
          <PreferenceQuiz
            initialAnswers={{ ...quizAnswers, currency }}
            lang={lang}
            currency={currency}
            onCurrencyChange={handleCurrencyChange}
            onComplete={handleQuizComplete}
            onCancel={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'results' && recommendationResult && (
          <RecommendationResults
            items={recommendationResult.items}
            totalMatches={recommendationResult.totalMatches}
            totalPages={recommendationResult.totalPages}
            currentPage={recommendationResult.currentPage}
            profile={recommendationResult.profile}
            lang={lang}
            currency={currency}
            onRefreshBatch={handleRefreshBatch}
            onRetakeQuiz={() => {
              setQuizAnswers({
                ...EMPTY_QUIZ_ANSWERS,
                currency
              });
              setCurrentView('quiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'personality' && (
          <PersonalityFlow
            catalog={catalog}
            lang={lang}
            currency={currency}
            onCurrencyChange={handleCurrencyChange}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'library' && (
          <DirectoryView
            catalog={catalog}
            lang={lang}
            currency={currency}
            onCurrencyChange={handleCurrencyChange}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        lang={lang}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
