import React, { useState } from 'react';
import { Perfume, Language, Currency } from '../types';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { getTranslation } from '../data/translations';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  featuredPerfumes: Perfume[];
  lang: Language;
  currency: Currency;
  onStartQuiz: () => void;
  onStartPersonality: () => void;
  onExploreLibrary: () => void;
  className?: string;
}

export const Home: React.FC<HomeProps> = ({
  featuredPerfumes,
  lang,
  currency,
  onStartQuiz,
  onStartPersonality,
  onExploreLibrary,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  return (
    <div className={`space-y-20 md:space-y-32 animate-fadeIn ${className}`}>
      {/* 1. HERO SECTION (Aesop Editorial Style) */}
      <section className="relative pt-12 md:pt-20 pb-4 max-w-5xl mx-auto px-4">
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs text-[#76726B] tracking-wider uppercase block font-normal">
            {t.heroBadge}
          </span>

          <h1 className={`font-manrope italic text-[#252525] tracking-tight leading-[1.2] ${
            isZh
              ? 'font-light text-2xl sm:text-3xl md:text-[32px] lg:text-[36px]'
              : 'font-medium text-xl sm:text-2xl md:text-[28px] lg:text-[31px]'
          }`}>
            {t.heroTitle}
          </h1>

          <p className="text-sm md:text-base text-[#4E4B46] leading-relaxed font-light pt-2 max-w-2xl">
            {t.heroSubtitle}
          </p>
        </div>

        {/* 2. DUAL DISCOVERY PATHS (Aesop Editorial Split Layout) */}
        <div className="mt-14 md:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Card 1: Primary Discovery ~70% */}
          <div
            onClick={onStartQuiz}
            className="lg:col-span-8 group relative bg-[#FFFEF6] border border-[#D8D2C5] p-8 md:p-12 hover:border-[#252525] transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-[#76726B] font-medium">
                  {t.card1Badge}
                </span>
                <span className="text-xs text-[#76726B]">
                  {t.card1Time}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-normal text-[#252525] group-hover:text-[#4A4742] transition-colors">
                {t.card1Title}
              </h2>

              <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed max-w-lg font-light">
                {t.card1Desc}
              </p>

              {/* Natural scent intuition pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {t.card1Pills.map((pill: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#F5F2E9] border border-[#E2DDD2] text-xs text-[#48443D]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#EAE5DA] flex items-center justify-between">
              <span className="text-xs text-[#76726B]">
                {t.card1Footer}
              </span>
              <button
                type="button"
                className="px-6 py-3 border border-[#252525] bg-[#252525] text-[#FFFEF6] text-xs tracking-wider uppercase group-hover:bg-transparent group-hover:text-[#252525] transition-all flex items-center gap-2"
              >
                <span>{t.card1Cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Secondary Discovery ~30% */}
          <div
            onClick={onStartPersonality}
            className="lg:col-span-4 group relative bg-[#F7F5EE] border border-[#D8D2C5] p-8 md:p-10 hover:border-[#252525] transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-4">
              <span className="text-xs tracking-wider uppercase text-[#76726B] font-medium block">
                {t.card2Badge}
              </span>

              <h2 className="text-xl md:text-2xl font-normal text-[#252525] group-hover:text-[#4A4742] transition-colors">
                {t.card2Title}
              </h2>

              <p className="text-xs text-[#5E5952] leading-relaxed font-light">
                {t.card2Desc}
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E0DBD0] flex items-center justify-between">
              <span className="text-xs text-[#76726B]">
                {t.card2Footer}
              </span>
              <span className="w-8 h-8 border border-[#252525] flex items-center justify-center text-[#252525] group-hover:bg-[#252525] group-hover:text-[#FFFEF6] transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AESOP-INSPIRED PROGRESS DIVIDER BAR */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-[1px] w-full bg-[#D8D2C5] relative">
          <div className="absolute left-0 top-0 h-[2px] w-1/4 bg-[#252525]" />
        </div>
      </div>

      {/* 4. CORE PHILOSOPHY PILLARS (Aesop Minimal Grid) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="space-y-2 mb-12">
          <span className="text-xs text-[#76726B] tracking-wider uppercase block">
            {t.philHeading}
          </span>
          <h2 className="text-xl md:text-2xl font-normal text-[#252525]">
            {t.philTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Pillar 1 */}
          <div className="space-y-3 pt-2">
            <span className="text-xs italic text-[#76726B]">01.</span>
            <h3 className="text-lg font-normal text-[#252525]">
              {t.phil1Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed font-light">
              {t.phil1Desc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-3 pt-2">
            <span className="text-xs italic text-[#76726B]">02.</span>
            <h3 className="text-lg font-normal text-[#252525]">
              {t.phil2Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed font-light">
              {t.phil2Desc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-3 pt-2">
            <span className="text-xs italic text-[#76726B]">03.</span>
            <h3 className="text-lg font-normal text-[#252525]">
              {t.phil3Title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5952] leading-relaxed font-light">
              {t.phil3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 5. CURATED ICONIC STARTING POINTS (~6 CLASSICS) */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[#EAE5DA]">
          <div>
            <span className="text-xs text-[#76726B] tracking-wider uppercase block">
              {t.featuredBadge}
            </span>
            <h2 className="text-xl md:text-2xl font-normal text-[#252525] mt-1">
              {t.featuredTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={onExploreLibrary}
            className="text-xs font-medium text-[#252525] hover:text-[#5E5952] transition-colors underline underline-offset-4 shrink-0"
          >
            {t.featuredExploreAll}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPerfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              lang={lang}
              currency={currency}
              onSelect={(p) => setSelectedPerfume(p)}
            />
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedPerfume && (
        <PerfumeModal
          perfume={selectedPerfume}
          lang={lang}
          currency={currency}
          onClose={() => setSelectedPerfume(null)}
        />
      )}
    </div>
  );
};
