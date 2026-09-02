import React from 'react';
import { Currency, Language } from '../types';
import { BUDGET_PREFERENCES, getQuizOptionLabel } from '../data/quizOptions';

interface BudgetSelectorProps {
  selectedCurrency: Currency;
  onCurrencyChange?: (c: Currency) => void;
  selectedTierId: string;
  onTierChange: (tierId: string) => void;
  lang: Language;
  className?: string;
}

export const BudgetSelector: React.FC<BudgetSelectorProps> = ({
  selectedCurrency,
  selectedTierId,
  onTierChange,
  lang,
  className = ''
}) => {
  const tiers = BUDGET_PREFERENCES;
  const disclaimer: Record<Language,string> = {
    en:'Actual prices may vary by region, size and official brand website.',
    zh:'实际价格可能因地区、容量和品牌官网而有所不同。',
    'zh-CN':'实际价格可能因地区、容量和品牌官网而有所不同。',
    'zh-HK':'實際價格可能因地區、容量和品牌官網而有所不同。',
    fr:'Les prix réels peuvent varier selon la région, le format et le site officiel de la marque.',
    de:'Die tatsächlichen Preise können je nach Region, Größe und offizieller Markenwebsite variieren.',
    es:'Los precios reales pueden variar según la región, el tamaño y el sitio web oficial de la marca.'
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Tier Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {tiers.map((tier) => {
          const isSelected = selectedTierId === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => onTierChange(tier.id)}
              className={`p-4 border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#252525] bg-[#F5F2E9]'
                  : 'border-[#D8D2C5] bg-[#FFFEF6] hover:border-[#76726B]'
              }`}
            >
              <div>
                <span className="text-xs text-[#76726B] tracking-wider block mb-1">
                  {tier.level === 2 ? '✦✦' : tier.level === 3 ? '✦✦✦' : tier.level === 4 ? '✦✦✦✦' : '—'}
                </span>
                <h4 className="text-sm font-normal text-[#252525]">
                  {getQuizOptionLabel(tier, lang)}
                </h4>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-[11px] leading-relaxed text-[#76726B] font-light">{disclaimer[lang] || disclaimer.en}</p>
    </div>
  );
};
