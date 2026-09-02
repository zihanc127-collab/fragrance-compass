import React, { useState } from 'react';
import { RecommendationMatch, ScentProfile, Perfume, Language, Currency } from '../types';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { ScentProfileView } from './ScentProfileView';
import { getTranslation } from '../data/translations';
import { RefreshCw, Sparkles, ArrowLeft, RotateCcw, ChevronDown } from 'lucide-react';
import { localizeDirectionTitle, localizeScentKeywords } from '../utils/displayLocalization';

interface RecommendationResultsProps {
  items: RecommendationMatch[];
  totalMatches: number;
  totalPages: number;
  currentPage: number;
  profile: ScentProfile;
  lang: Language;
  currency: Currency;
  onRefreshBatch: () => void;
  onRetakeQuiz: () => void;
  onBackToHome: () => void;
  className?: string;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  items,
  totalMatches,
  totalPages,
  currentPage,
  profile,
  lang,
  currency,
  onRefreshBatch,
  onRetakeQuiz,
  onBackToHome,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';
  const directionTitle = localizeDirectionTitle(profile.directionId,lang);
  const directionKeywords = localizeScentKeywords(profile.keywordIds,lang);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<RecommendationMatch | null>(null);
  const [showFullProfile, setShowFullProfile] = useState(false);

  const handleSelectPerfume = (perfume: Perfume) => {
    const match = items.find(i => i.perfume.id === perfume.id) || null;
    setSelectedPerfume(perfume);
    setSelectedMatch(match);
  };

  const getBatchSubtitle = () => {
    if (lang === 'zh-CN' || lang === 'zh') {
      return `当前显示第 ${currentPage} / ${totalPages} 组精选推荐（每批呈现 4-5 款，点击可翻阅更多）`;
    }
    if (lang === 'zh-HK') {
      return `當前顯示第 ${currentPage} / ${totalPages} 組精選推薦（每批呈現 4-5 款，點擊可翻閱更多）`;
    }
    if (lang === 'fr') {
      return `Lot ${currentPage} sur ${totalPages} (${items.length} parfums sélectionnés)`;
    }
    if (lang === 'es') {
      return `Lote ${currentPage} de ${totalPages} (${items.length} perfumes seleccionados)`;
    }
    if (lang === 'de') {
      return `Charge ${currentPage} von ${totalPages} (${items.length} ausgewählte Düfte)`;
    }
    return `Batch ${currentPage} of ${totalPages} (${items.length} curated scents)`;
  };

  return (
    <div className={`space-y-8 max-w-6xl mx-auto px-4 py-6 md:py-10 animate-fadeIn ${className}`}>
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D8D2C5] pb-4">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs text-[#76726B] hover:text-[#252525] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.btnBackHome}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowFullProfile(!showFullProfile)}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#D8D2C5] text-xs text-[#252525] hover:border-[#252525] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#76726B]" />
            <span>{showFullProfile ? t.btnCollapseProfile : t.btnViewFullProfile}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showFullProfile ? 'rotate-180' : ''}`} />
          </button>

          <button
            type="button"
            onClick={onRetakeQuiz}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#D8D2C5] text-xs text-[#252525] hover:border-[#252525] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.btnRetakeQuiz}</span>
          </button>
        </div>
      </div>

      {/* Scent Profile Expandable Section */}
      {showFullProfile && (
        <div className="animate-fadeIn">
          <ScentProfileView
            profile={profile}
            lang={lang}
            onViewMatches={() => setShowFullProfile(false)}
            onRetakeQuiz={onRetakeQuiz}
          />
        </div>
      )}

      {/* Profile Highlights Banner */}
      {!showFullProfile && (
        <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
              {t.recDirectionTitle}
            </span>
            <h2 className="text-2xl md:text-3xl font-normal text-[#252525] mt-1">
              {directionTitle}
            </h2>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {directionKeywords.slice(0, 5).map((kw, i) => (
                <span key={i} className="text-xs px-2.5 py-0.5 bg-[#F5F2E9] text-[#55514B] font-light">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowFullProfile(true)}
            className="text-xs text-[#252525] underline underline-offset-4 hover:text-[#76726B] shrink-0 transition-colors"
          >
            {t.recViewDossierPrompt}
          </button>
        </div>
      )}

      {/* Recommendations Grid Header with Batch Cycling */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
        <div>
          <h3 className="text-[22px] md:text-[26px] font-normal text-[#252525] flex items-center gap-3">
            <span>{t.recFormulationsTitle}</span>
            <span className="text-xs px-2.5 py-0.5 border border-[#D8D2C5] text-[#76726B] font-sans font-normal">
              {totalMatches} {t.recCountUnit}
            </span>
          </h3>
          <p className="text-xs text-[#76726B] mt-1 font-light">
            {getBatchSubtitle()}
          </p>
        </div>

        {/* Cycling Button */}
        {totalPages > 1 && (
          <button
            type="button"
            onClick={onRefreshBatch}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#252525] text-[#252525] text-xs hover:bg-[#252525] hover:text-[#FFFEF6] transition-colors uppercase tracking-wider"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.btnNextBatch}</span>
          </button>
        )}
      </div>

      {/* Perfume Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((match) => (
          <PerfumeCard
            key={match.perfume.id}
            perfume={match.perfume}
            score={match.score}
            matchReason={match.matchReason}
            matchReasonZh={match.matchReasonZh}
            lang={lang}
            currency={currency}
            onSelect={handleSelectPerfume}
          />
        ))}
      </div>

      {/* Footer Info & Disclaimers for Fragrance Beginners */}
      <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-8 text-center max-w-2xl mx-auto space-y-3 mt-10">
        <p className="text-xs text-[#5E5952] leading-relaxed font-light">
          {t.recBeginnerNotice}
        </p>

        {totalPages > 1 && (
          <button
            type="button"
            onClick={onRefreshBatch}
            className="inline-flex items-center gap-1.5 text-xs text-[#252525] underline underline-offset-4 hover:text-[#76726B] pt-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.recRefreshPrompt}</span>
          </button>
        )}
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
  );
};
