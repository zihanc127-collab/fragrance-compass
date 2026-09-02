import React from 'react';
import { Perfume, Language, Currency } from '../types';
import { getTranslation } from '../data/translations';
import { BottleSilhouette } from './BottleSilhouette';
import { ArrowRight } from 'lucide-react';
import { localizeScentKeywords, officialAction } from '../utils/displayLocalization';

interface PerfumeCardProps {
  perfume: Perfume;
  score?: number;
  matchReason?: string;
  matchReasonZh?: string;
  lang: Language;
  currency: Currency;
  onSelect: (perfume: Perfume) => void;
  className?: string;
}

export const PerfumeCard: React.FC<PerfumeCardProps> = ({
  perfume,
  score,
  matchReason,
  matchReasonZh,
  lang,
  currency,
  onSelect,
  className = ''
}) => {
  const t = getTranslation(lang);

  const silhouette = perfume.imagePlaceholder?.silhouette || perfume.silhouetteType || 'oval';
  const gradient = perfume.imagePlaceholder?.gradient || perfume.gradient || 'from-[#EFECE6] to-[#D5CABE]';
  const accentColor = perfume.imagePlaceholder?.accentColor || perfume.accentColor || '#8C7355';

  const tags = localizeScentKeywords(perfume.scentKeywords,lang);

  return (
    <div
      onClick={() => onSelect(perfume)}
      className={`group relative bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-8 hover:border-[#252525] transition-all duration-300 flex flex-col justify-between cursor-pointer ${className}`}
    >
      {/* Top Bar: Match Score & Family */}
      <div className="flex items-center justify-between mb-3 text-xs">
        {score ? (
          <span className="font-medium text-[#252525] tracking-wide">
            {score}% {t.recMatchRate}
          </span>
        ) : (
          <span className="text-[#76726B] tracking-wide">{perfume.concentration}</span>
        )}

      </div>

      {/* Visual Center: Abstract Apothecary & Artisanal Bottle Silhouette */}
      <div className="relative py-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <BottleSilhouette
          silhouette={silhouette}
          gradient={gradient}
          accentColor={accentColor}
          size="md"
        />
      </div>

      {/* Fragrance Identity (Aesop Product Details Style) */}
      <div className="text-center mt-2 space-y-1">
        <p className="text-[11px] tracking-wider uppercase text-[#76726B] font-normal">
          {perfume.brand}
        </p>
        <h3 className="text-lg md:text-xl font-normal text-[#252525] group-hover:text-[#4A4742] transition-colors leading-snug">
          {perfume.name}
        </h3>
      </div>

      {/* Olfactory Tags */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-4 mb-2">
        {tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-0.5 bg-[#F5F2E9] text-[11px] text-[#55514B] font-normal"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Hover Prompt */}
      <div className="mt-4 pt-2 flex items-center justify-between text-xs text-[#252525] group-hover:text-[#66625B] transition-colors border-t border-transparent group-hover:border-[#EAE5DA]">
        <a href={perfume.officialUrl} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} className="underline underline-offset-4">{officialAction(lang,'card')}</a>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
