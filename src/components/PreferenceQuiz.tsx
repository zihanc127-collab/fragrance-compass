import React, { useState } from 'react';
import { QuizAnswers, Language, Currency } from '../types';
import {
  LIKED_SMELL_OPTIONS,
  DISLIKED_SMELL_OPTIONS,
  MOOD_OPTIONS,
  SWEETNESS_OPTIONS,
  FRESHNESS_OPTIONS,
  FLORAL_TOLERANCE_OPTIONS,
  SEASON_OPTIONS,
  OCCASION_OPTIONS,
  getQuizOptionLabel,
  getQuizOptionDesc
} from '../data/quizOptions';
import { BudgetSelector } from './BudgetSelector';
import { getTranslation } from '../data/translations';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';

interface PreferenceQuizProps {
  initialAnswers: QuizAnswers;
  lang: Language;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onComplete: (answers: QuizAnswers) => void;
  onCancel: () => void;
  className?: string;
}

export const PreferenceQuiz: React.FC<PreferenceQuizProps> = ({
  initialAnswers,
  lang,
  currency,
  onCurrencyChange,
  onComplete,
  onCancel,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const [answers, setAnswers] = useState<QuizAnswers>({
    ...initialAnswers,
    currency
  });

  const toggleArrayItem = (field: 'likedSmells' | 'dislikedSmells' | 'mood' | 'impressions' | 'seasons' | 'occasions', item: string, maxLimit?: number) => {
    setAnswers(prev => {
      const list = prev[field];
      const exists = list.includes(item);
      if (!exists && maxLimit && list.length >= maxLimit) {
        return prev;
      }
      const updated = exists ? list.filter(x => x !== item) : [...list, item];
      return { ...prev, [field]: updated };
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onComplete({ ...answers, currency });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onCancel();
    }
  };

  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  const getStepIndicator = () => {
    if (lang === 'zh-CN' || lang === 'zh') return `步骤 ${currentStep} / ${totalSteps}`;
    if (lang === 'zh-HK') return `步驟 ${currentStep} / ${totalSteps}`;
    if (lang === 'fr') return `Étape ${currentStep} sur ${totalSteps}`;
    if (lang === 'es') return `Paso ${currentStep} de ${totalSteps}`;
    if (lang === 'de') return `Schritt ${currentStep} von ${totalSteps}`;
    return `Step ${currentStep} of ${totalSteps}`;
  };

  return (
    <div className={`max-w-3xl mx-auto px-4 py-8 md:py-12 animate-fadeIn ${className}`}>
      {/* Top Header & Progress */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs text-[#76726B] hover:text-[#252525] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{currentStep === 1 ? t.btnExitQuiz : t.btnPrevStep}</span>
          </button>

          <span className="text-xs text-[#76726B] tracking-wider uppercase font-light">
            {getStepIndicator()}
          </span>
        </div>

        {/* Minimalist Aesop Progress Bar */}
        <div className="h-[2px] w-full bg-[#E2DDD2] relative">
          <div
            className="h-[2px] bg-[#252525] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Quiz Card Form */}
      <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-8 md:p-12 space-y-10">
        {/* STEP 1: LIKED SMELLS */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep1Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep1Title}
              </h2>
              <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
                {t.quizStep1Subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {LIKED_SMELL_OPTIONS.map(opt => {
                const isSelected = answers.likedSmells.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleArrayItem('likedSmells', opt.id)}
                    className={`p-4 border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#252525] bg-[#F5F2E9]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#76726B]'
                    }`}
                  >
                    <div className="flex items-start justify-between w-full gap-2">
                      <h4 className="text-base font-normal text-[#252525]">
                        {getQuizOptionLabel(opt, lang)}
                      </h4>
                      {isSelected && (
                        <span className="w-4 h-4 shrink-0 bg-[#252525] text-[#FFFEF6] flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#76726B] mt-2 font-light leading-relaxed">
                      {getQuizOptionDesc(opt, lang)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: DISLIKED SMELLS */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep2Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep2Title}
              </h2>
              <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
                {t.quizStep2Subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {DISLIKED_SMELL_OPTIONS.map(opt => {
                const isSelected = answers.dislikedSmells.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleArrayItem('dislikedSmells', opt.id)}
                    className={`p-4 border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#252525] bg-[#F7F2EE]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#76726B]'
                    }`}
                  >
                    <div className="flex items-start justify-between w-full gap-2">
                      <h4 className="text-base font-normal text-[#252525]">
                        {getQuizOptionLabel(opt, lang)}
                      </h4>
                      {isSelected && (
                        <span className="w-4 h-4 shrink-0 bg-[#252525] text-[#FFFEF6] flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#76726B] mt-2 font-light leading-relaxed">
                      {getQuizOptionDesc(opt, lang)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: MOOD & IMPRESSION */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep3Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep3Title}
              </h2>
              <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
                {t.quizStep3Subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {MOOD_OPTIONS.map(opt => {
                const isSelected = answers.mood.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleArrayItem('mood', opt.id, 3)}
                    className={`p-4 border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'border-[#252525] bg-[#F5F2E9]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#76726B]'
                    }`}
                  >
                    <span className="text-base font-normal text-[#252525]">
                      {getQuizOptionLabel(opt, lang)}
                    </span>
                    {isSelected && (
                      <span className="w-4 h-4 shrink-0 bg-[#252525] text-[#FFFEF6] flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: SWEETNESS, FRESHNESS & FLORAL */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep4Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep4Title}
              </h2>
            </div>

            {/* Sweetness Selector */}
            <div className="space-y-3">
              <label className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                1. {t.sweetnessLabel}:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SWEETNESS_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, sweetness: opt.id as any }))}
                    className={`p-3 border text-center transition-all ${
                      answers.sweetness === opt.id
                        ? 'border-[#252525] bg-[#252525] text-[#FFFEF6]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] text-[#5E5952] hover:border-[#76726B]'
                    }`}
                  >
                    <span className="text-xs">
                      {getQuizOptionLabel(opt, lang)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Freshness Selector */}
            <div className="space-y-3">
              <label className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                2. {t.freshnessLabel}:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {FRESHNESS_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, freshness: opt.id as any }))}
                    className={`p-3 border text-center transition-all ${
                      answers.freshness === opt.id
                        ? 'border-[#252525] bg-[#252525] text-[#FFFEF6]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] text-[#5E5952] hover:border-[#76726B]'
                    }`}
                  >
                    <span className="text-xs">
                      {getQuizOptionLabel(opt, lang)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Floral Tolerance Selector */}
            <div className="space-y-3">
              <label className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                3. {t.floralToleranceLabel}:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {FLORAL_TOLERANCE_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setAnswers(prev => ({ ...prev, floralTolerance: opt.id as any }))}
                    className={`p-3 border text-center transition-all ${
                      answers.floralTolerance === opt.id
                        ? 'border-[#252525] bg-[#252525] text-[#FFFEF6]'
                        : 'border-[#D8D2C5] bg-[#FFFEF6] text-[#5E5952] hover:border-[#76726B]'
                    }`}
                  >
                    <span className="text-xs">
                      {getQuizOptionLabel(opt, lang)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: SEASONS & OCCASIONS */}
        {currentStep === 5 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep5Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep5Title}
              </h2>
            </div>

            {/* Seasons */}
            <div className="space-y-3">
              <label className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                {t.seasonsLabel} ({t.multiSelectHint}):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {SEASON_OPTIONS.map(opt => {
                  const isSelected = answers.seasons.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleArrayItem('seasons', opt.id)}
                      className={`p-3 border text-center transition-all flex flex-col items-center gap-1 ${
                        isSelected
                          ? 'border-[#252525] bg-[#F5F2E9] text-[#252525]'
                          : 'border-[#D8D2C5] bg-[#FFFEF6] text-[#5E5952] hover:border-[#76726B]'
                      }`}
                    >
                      <span className="text-lg">{opt.icon}</span>
                      <span className="text-xs">{getQuizOptionLabel(opt, lang)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Occasions */}
            <div className="space-y-3">
              <label className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                {t.occasionsLabel} ({t.multiSelectHint}):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {OCCASION_OPTIONS.map(opt => {
                  const isSelected = answers.occasions.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleArrayItem('occasions', opt.id)}
                      className={`p-3 border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#252525] bg-[#F5F2E9] text-[#252525]'
                          : 'border-[#D8D2C5] bg-[#FFFEF6] text-[#5E5952] hover:border-[#76726B]'
                      }`}
                    >
                      <span className="text-xs">{getQuizOptionLabel(opt, lang)}</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: BUDGET & CURRENCY */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs text-[#76726B] tracking-wider uppercase block">
                {t.quizStep6Badge}
              </span>
              <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
                {t.quizStep6Title}
              </h2>
              <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
                {t.quizStep6Subtitle}
              </p>
            </div>

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
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex items-center justify-between pt-8 border-t border-[#EAE5DA]">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-3 border border-[#D8D2C5] text-xs text-[#5E5952] hover:border-[#252525] hover:text-[#252525] transition-colors uppercase tracking-wider"
          >
            {currentStep === 1 ? t.btnCancel : t.btnBack}
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-8 py-3 bg-[#252525] text-[#FFFEF6] text-xs uppercase tracking-wider hover:bg-[#444] transition-all flex items-center gap-2"
          >
            <span>{currentStep === totalSteps ? t.btnGenerateCompass : t.btnContinue}</span>
            {currentStep === totalSteps ? (
              <Sparkles className="w-3.5 h-3.5 text-[#FFFEF6]" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
