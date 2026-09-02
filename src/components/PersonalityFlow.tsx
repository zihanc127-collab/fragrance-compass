import React, { useState } from 'react';
import { PersonalityAnswers, PersonalityResult, RecommendationMatch, Perfume, Language, Currency } from '../types';
import { ZODIAC_OPTIONS, FIVE_ELEMENTS_OPTIONS, AESTHETIC_STYLES, getQuizOptionLabel, getQuizOptionDesc } from '../data/quizOptions';
import { getPersonalityRecommendations } from '../utils/recommendation';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { BudgetSelector } from './BudgetSelector';
import { getTranslation } from '../data/translations';
import { Sparkles, Moon, Gift, User, ArrowRight, RotateCcw, Info } from 'lucide-react';

interface PersonalityFlowProps {
  catalog: Perfume[];
  lang: Language;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onBackToHome: () => void;
  className?: string;
}

export const PersonalityFlow: React.FC<PersonalityFlowProps> = ({
  catalog,
  lang,
  currency,
  onCurrencyChange,
  onBackToHome,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';

  const [answers, setAnswers] = useState<PersonalityAnswers>({
    choosingFor: 'myself',
    relationship: '',
    zodiacSign: 'virgo',
    fiveElements: '',
    aestheticStyle: 'minimalist zen',
    budgetRange: 'no-preference',
    currency
  });

  const [resultData, setResultData] = useState<{
    result: PersonalityResult;
    matchedPerfumes: RecommendationMatch[];
  } | null>(null);

  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<RecommendationMatch | null>(null);

  const handleGenerate = () => {
    const outcome = getPersonalityRecommendations(answers, catalog, lang);
    setResultData(outcome);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setResultData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 md:py-12 animate-fadeIn ${className}`}>
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-8 border-b border-[#D8D2C5] pb-4">
        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs text-[#76726B] hover:text-[#252525] transition-colors"
        >
          ← {t.btnBackHome}
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#D8D2C5] text-xs text-[#76726B] font-light">
          <Moon className="w-3.5 h-3.5 text-[#76726B]" />
          <span>{t.navPersonality}</span>
        </div>
      </div>

      {/* VIEW 1: QUESTIONNAIRE / FORM */}
      {!resultData && (
        <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-10 space-y-8 animate-fadeIn">
          {/* Header */}
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
              {t.persBadge}
            </span>
            <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
              {t.persTitle}
            </h2>
            <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
              {t.persSubtitle}
            </p>
          </div>

          {/* Section 1: Choosing For (Myself vs Gift) */}
          <div className="space-y-3">
            <label className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
              1. {t.persStep1Title}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, choosingFor: 'myself' }))}
                className={`p-4 border text-left flex items-center gap-3 transition-colors ${
                  answers.choosingFor === 'myself'
                    ? 'border-[#252525] bg-[#F5F2E9]'
                    : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#252525]'
                }`}
              >
                <div className="p-2 border border-[#D8D2C5] text-[#252525]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-[#252525]">
                    {t.persForMyself}
                  </h4>
                  <p className="text-xs text-[#76726B] font-light">
                    {t.persForMyselfDesc}
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setAnswers(prev => ({ ...prev, choosingFor: 'gift' }))}
                className={`p-4 border text-left flex items-center gap-3 transition-colors ${
                  answers.choosingFor === 'gift'
                    ? 'border-[#252525] bg-[#F5F2E9]'
                    : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#252525]'
                }`}
              >
                <div className="p-2 border border-[#D8D2C5] text-[#252525]">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-[#252525]">
                    {t.persForGift}
                  </h4>
                  <p className="text-xs text-[#76726B] font-light">
                    {t.persForGiftDesc}
                  </p>
                </div>
              </button>
            </div>

            {/* Recipient note if gift */}
            {answers.choosingFor === 'gift' && (
              <div className="pt-2 animate-fadeIn">
                <input
                  type="text"
                  placeholder={isZh ? '例如：挚友、恋人、母亲、职场导师...' : 'e.g. Best Friend, Partner, Mother, Mentor...'}
                  value={answers.relationship}
                  onChange={e => setAnswers(prev => ({ ...prev, relationship: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-[#D8D2C5] bg-[#FFFEF6] text-xs text-[#252525] focus:outline-none focus:border-[#252525] font-light"
                />
              </div>
            )}
          </div>

          {/* Section 2: Zodiac Selector */}
          <div className="space-y-3">
            <label className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
              2. {t.persStep2Title}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
              {ZODIAC_OPTIONS.map(opt => {
                const isSelected = answers.zodiacSign === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, zodiacSign: opt.id }))}
                    className={`p-3 border text-left transition-colors ${
                      isSelected
                        ? 'border-[#252525] bg-[#F5F2E9]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{opt.symbol}</span>
                      <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 bg-[#EAE5DA] text-[#55514B] font-light">
                        {opt.element}
                      </span>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-xs font-medium text-[#252525]">
                        {getQuizOptionLabel(opt, lang)}
                      </h4>
                      <p className="text-[10px] text-[#76726B] font-light">{opt.dates}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Five Elements (Wu Xing) & Aesthetic Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Five Elements */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
                  3. {t.persStep3Title}
                </label>
                <span className="text-[10px] text-[#76726B] border border-[#D8D2C5] px-1.5 py-0.5 font-light">
                  {isZh ? '可选' : 'Optional'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {FIVE_ELEMENTS_OPTIONS.map(elem => {
                  const isSelected = answers.fiveElements === elem.id;
                  return (
                    <button
                      key={elem.id}
                      type="button"
                      onClick={() => setAnswers(prev => ({ ...prev, fiveElements: prev.fiveElements === elem.id ? '' : elem.id }))}
                      className={`p-3 border text-left transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'border-[#252525] bg-[#F5F2E9]'
                          : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#252525]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium text-[#252525]">
                          {getQuizOptionLabel(elem, lang)}
                        </span>
                        <p className="text-[11px] text-[#76726B] font-light">{getQuizOptionDesc(elem, lang)}</p>
                      </div>
                      {isSelected && <span className="text-[#252525] font-bold text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Aesthetic Styles */}
            <div className="space-y-3">
              <label className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
                4. {t.persStep4Title}
              </label>
              <div className="grid grid-cols-1 gap-2">
                {AESTHETIC_STYLES.map(st => {
                  const isSelected = answers.aestheticStyle === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setAnswers(prev => ({ ...prev, aestheticStyle: st.id }))}
                      className={`p-3 border text-left transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'border-[#252525] bg-[#F5F2E9]'
                          : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#252525]'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-medium text-[#252525]">
                          {getQuizOptionLabel(st, lang)}
                        </span>
                        <p className="text-[11px] text-[#76726B] font-light">{getQuizOptionDesc(st, lang)}</p>
                      </div>
                      {isSelected && <span className="text-[#252525] font-bold text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 4: Budget Tier */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs text-[#76726B] uppercase tracking-wider font-light">
              5. {t.persStep5Title}
            </h3>
            <BudgetSelector
              selectedCurrency={answers.currency}
              onCurrencyChange={c => {
                setAnswers(prev => ({ ...prev, currency: c, budgetRange: 'no-preference' }));
                onCurrencyChange(c);
              }}
              selectedTierId={answers.budgetRange}
              onTierChange={tierId => setAnswers(prev => ({ ...prev, budgetRange: tierId }))}
              lang={lang}
            />
          </div>

          {/* Disclaimer for beginners */}
          <div className="p-4 bg-[#F7F4EC] border border-[#EAE5DA] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#76726B] shrink-0 mt-0.5" />
            <p className="text-xs text-[#5E5952] leading-relaxed font-light">
              {t.persNotice}
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={handleGenerate}
              className="px-10 py-3.5 border border-[#252525] bg-[#252525] text-[#FFFEF6] text-xs uppercase tracking-wider hover:bg-[#3E3A36] transition-colors inline-flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFFEF6]" />
              <span>{t.persSubmitBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: RESULTS */}
      {resultData && (
        <div className="space-y-8 animate-fadeIn">
          {/* Poetic Inspiration Card */}
          <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-10 space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs text-[#76726B] uppercase tracking-widest font-light block">
                {t.persResultBadge}
              </span>
              <h2 className="text-2xl md:text-3xl font-normal text-[#252525]">
                {isZh ? resultData.result.inspirationTitleZh : resultData.result.inspirationTitle}
              </h2>
              <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed italic font-light">
                "{isZh ? resultData.result.poeticDescriptionZh : resultData.result.poeticDescription}"
              </p>
            </div>

            {/* Custom 3-Tier Scent Formula */}
            <div className="bg-[#F7F4EC] border border-[#EAE5DA] p-6 space-y-4">
              <h3 className="text-base font-normal text-[#252525] text-center">
                {t.persFormulaTitle}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Top Formula */}
                <div className="p-4 bg-[#FFFEF6] border border-[#D8D2C5] text-center space-y-2">
                  <span className="text-xs text-[#76726B] uppercase tracking-wider font-light">
                    {t.persTopAccords}
                  </span>
                  <div className="text-xs font-light text-[#252525]">
                    {(isZh ? resultData.result.formula.topZh : resultData.result.formula.top).join(' · ')}
                  </div>
                </div>

                {/* Heart Formula */}
                <div className="p-4 bg-[#FFFEF6] border border-[#D8D2C5] text-center space-y-2">
                  <span className="text-xs text-[#76726B] uppercase tracking-wider font-light">
                    {t.persHeartAccords}
                  </span>
                  <div className="text-xs font-light text-[#252525]">
                    {(isZh ? resultData.result.formula.middleZh : resultData.result.formula.middle).join(' · ')}
                  </div>
                </div>

                {/* Base Formula */}
                <div className="p-4 bg-[#FFFEF6] border border-[#D8D2C5] text-center space-y-2">
                  <span className="text-xs text-[#76726B] uppercase tracking-wider font-light">
                    {t.persBaseAccords}
                  </span>
                  <div className="text-xs font-light text-[#252525]">
                    {(isZh ? resultData.result.formula.baseZh : resultData.result.formula.base).join(' · ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended & Avoid Keywords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#F7F4EC] border border-[#EAE5DA]">
                <h4 className="text-xs uppercase tracking-wider font-medium text-[#252525] mb-2">
                  {t.persRecKeywords}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(isZh ? resultData.result.tryKeywordsZh : resultData.result.tryKeywords).map((kw, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-[#FFFEF6] border border-[#D8D2C5] text-xs text-[#252525] font-light">
                      +{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-[#F9F6F0] border border-[#EAE5DA]">
                <h4 className="text-xs uppercase tracking-wider font-medium text-[#252525] mb-2">
                  {t.persAvoidKeywords}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {(isZh ? resultData.result.avoidKeywordsZh : resultData.result.avoidKeywords).map((kw, i) => (
                    <span key={i} className="px-2.5 py-0.5 bg-[#FFFEF6] border border-[#D8D2C5] text-xs text-[#55514B] font-light">
                      -{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset / Change button */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-[#252525] underline underline-offset-4 hover:text-[#76726B] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.persAdjustInputs}</span>
              </button>
            </div>
          </div>

          {/* Curated Perfumes Matching the Archetype */}
          <div className="space-y-4">
            <h3 className="text-2xl font-normal text-[#252525]">
              {t.persArchetypeCurated}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultData.matchedPerfumes.map(match => (
                <PerfumeCard
                  key={match.perfume.id}
                  perfume={match.perfume}
                  score={match.score}
                  matchReason={match.matchReason}
                  matchReasonZh={match.matchReasonZh}
                  lang={lang}
                  currency={currency}
                  onSelect={p => {
                    setSelectedPerfume(p);
                    setSelectedMatch(match);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Detail Modal */}
          {selectedPerfume && (
            <PerfumeModal
              perfume={selectedPerfume}
              score={selectedMatch?.score}
              matchReason={selectedMatch?.matchReason}
              matchReasonZh={selectedMatch?.matchReasonZh}
              lang={lang}
              currency={currency}
              onClose={() => {
                setSelectedPerfume(null);
                setSelectedMatch(null);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
