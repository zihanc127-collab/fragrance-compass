import React from 'react';
import { ScentProfile, Language } from '../types';
import { getTranslation } from '../data/translations';
import { Sparkles, Check, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';
import { localizeDirectionTitle, localizeScentKeywords } from '../utils/displayLocalization';

interface ScentProfileViewProps {
  profile: ScentProfile;
  lang: Language;
  onViewMatches: () => void;
  onRetakeQuiz: () => void;
  className?: string;
}

export const ScentProfileView: React.FC<ScentProfileViewProps> = ({
  profile,
  lang,
  onViewMatches,
  onRetakeQuiz,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';
  const directionTitle = localizeDirectionTitle(profile.directionId,lang);
  const directionKeywords = localizeScentKeywords(profile.keywordIds,lang);

  const getShoppingTip = () => {
    if (lang === 'zh-CN' || lang === 'zh') {
      return `去专柜时，你可以直接对导购说：“我想找偏${profile.directionTitleZh}感觉的香水，希望带有${profile.notesToEnjoyZh.slice(0, 3).join('、')}，不要太甜或太浓。” 这能帮你最快找到对味的香气。`;
    }
    if (lang === 'zh-HK') {
      return `去專櫃時，你可以直接對導購說：「我想找偏${profile.directionTitleZh}感覺的香水，希望帶有${profile.notesToEnjoyZh.slice(0, 3).join('、')}，不要太甜或太濃。」 這能幫你最快找到對味的香氣。`;
    }
    if (lang === 'fr') {
      return `En boutique ou chez Sephora, dites simplement au conseiller : « Je recherche un parfum dans un esprit ${profile.directionTitle.toLowerCase()} avec des notes comme ${profile.notesToEnjoy.slice(0, 3).join(', ')}, sans lourdeur excessive. »`;
    }
    if (lang === 'es') {
      return `En tienda o mostrador, dile al asesor : « Busco una fragancia con una atmósfera ${profile.directionTitle.toLowerCase()} con notas como ${profile.notesToEnjoy.slice(0, 3).join(', ')}, sin intensidad excesiva. »`;
    }
    if (lang === 'de') {
      return `In der Parfümerie können Sie der Fachberatung sagen: „Ich suche einen Duft im Stil von ${profile.directionTitle.toLowerCase()} mit Noten wie ${profile.notesToEnjoy.slice(0, 3).join(', ')}, ohne zu viel Schwere.“`;
    }
    return `When visiting department counters or boutiques, you can tell the advisor: "I'm looking for a ${profile.directionTitle.toLowerCase()} fragrance featuring notes like ${profile.notesToEnjoy.slice(0, 3).join(', ')}, without overwhelming heaviness."`;
  };

  return (
    <div className={`bg-[#FFFEF6] border border-[#D8D2C5] p-6 md:p-10 space-y-8 ${className}`}>
      {/* Header Badge & Direction Title */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs text-[#76726B] uppercase tracking-widest font-light block">
          {t.recDirectionTitle}
        </span>

        <h2 className="text-2xl md:text-4xl font-normal text-[#252525] tracking-tight">
          {directionTitle}
        </h2>

        <p className="text-xs md:text-sm text-[#5E5952] leading-relaxed font-light">
          {isZh ? profile.explanationZh : profile.explanation}
        </p>
      </div>

      {/* Keywords Cloud */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {directionKeywords.map((kw, i) => (
          <span
            key={i}
            className="px-3.5 py-1 bg-[#F5F2E9] text-xs text-[#55514B] font-light"
          >
            #{kw}
          </span>
        ))}
      </div>

      {/* 3 Pillars Breakdown (Families, Recommended Notes, Approach with Care) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Fragrance Families to Explore */}
        <div className="p-6 bg-[#F7F4EC] border border-[#EAE5DA] space-y-3">
          <div className="flex items-center gap-2 text-[#252525]">
            <Sparkles className="w-3.5 h-3.5 text-[#76726B]" />
            <h4 className="text-xs uppercase tracking-wider font-medium">
              {t.profileFamTitle}
            </h4>
          </div>
          <div className="space-y-1.5 pt-1">
            {(isZh ? profile.familiesToExploreZh : profile.familiesToExplore).map((fam, idx) => (
              <div key={idx} className="text-xs text-[#252525] flex items-center gap-2 font-light">
                <span className="w-1 h-1 bg-[#252525]" />
                {fam}
              </div>
            ))}
          </div>
        </div>

        {/* Notes to Enjoy */}
        <div className="p-6 bg-[#F7F4EC] border border-[#EAE5DA] space-y-3">
          <div className="flex items-center gap-2 text-[#252525]">
            <Check className="w-3.5 h-3.5 text-[#76726B]" />
            <h4 className="text-xs uppercase tracking-wider font-medium">
              {t.profileNotesTitle}
            </h4>
          </div>
          <div className="space-y-1.5 pt-1">
            {(isZh ? profile.notesToEnjoyZh : profile.notesToEnjoy).map((note, idx) => (
              <div key={idx} className="text-xs text-[#252525] flex items-center gap-2 font-light">
                <span className="w-1 h-1 bg-[#252525]" />
                {note}
              </div>
            ))}
          </div>
        </div>

        {/* Notes to Approach Carefully */}
        <div className="p-6 bg-[#F9F6F0] border border-[#EAE5DA] space-y-3">
          <div className="flex items-center gap-2 text-[#6E4738]">
            <AlertTriangle className="w-3.5 h-3.5" />
            <h4 className="text-xs uppercase tracking-wider font-medium text-[#252525]">
              {t.profileAvoidTitle}
            </h4>
          </div>
          <div className="space-y-1.5 pt-1">
            {(isZh ? profile.notesToApproachCarefullyZh : profile.notesToApproachCarefully).map((note, idx) => (
              <div key={idx} className="text-xs text-[#55514B] flex items-center gap-2 font-light">
                <span className="w-1 h-1 bg-[#6E4738]" />
                {note}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical Counter & Shopping Tips */}
      <div className="p-5 bg-[#F7F4EC] border border-[#EAE5DA] text-xs text-[#5E5952] leading-relaxed font-light">
        <span className="font-medium text-[#252525]">
          {t.profileCounterTip}:{' '}
        </span>
        {getShoppingTip()}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={onViewMatches}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#252525] text-[#FFFEF6] text-xs uppercase tracking-wider hover:bg-[#3E3A36] transition-colors flex items-center justify-center gap-2 group"
        >
          <span>{t.profileViewCurated}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          type="button"
          onClick={onRetakeQuiz}
          className="w-full sm:w-auto px-6 py-3.5 border border-[#D8D2C5] text-[#252525] text-xs uppercase tracking-wider hover:border-[#252525] transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{t.btnRetakeQuiz}</span>
        </button>
      </div>
    </div>
  );
};
