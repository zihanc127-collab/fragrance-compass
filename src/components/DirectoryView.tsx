import React, { useState, useMemo } from 'react';
import { Perfume, Language, Currency } from '../types';
import { PerfumeCard } from './PerfumeCard';
import { PerfumeModal } from './PerfumeModal';
import { getTranslation } from '../data/translations';
import { Search, ArrowLeft, RotateCcw, Compass, Filter } from 'lucide-react';

interface DirectoryViewProps {
  catalog: Perfume[];
  lang: Language;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onBackToHome: () => void;
  className?: string;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  catalog,
  lang,
  currency,
  onBackToHome,
  className = ''
}) => {
  const t = getTranslation(lang);
  const isZh = lang === 'zh' || lang === 'zh-CN' || lang === 'zh-HK';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedFamily, setSelectedFamily] = useState('all');
  const [selectedPriceLevel, setSelectedPriceLevel] = useState<number>(0);
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [sortBy, setSortBy] = useState<'beginner' | 'priceAsc' | 'priceDesc' | 'name'>('beginner');
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  // Extract unique brands & families for filters
  const brandList = useMemo(() => {
    const map = new Map<string, string>();
    catalog.forEach(p => {
      map.set(p.brand, p.brandZh || p.brand);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [catalog]);

  const familyList = useMemo(() => {
    const set = new Set<string>();
    catalog.forEach(p => set.add(p.fragranceFamily));
    return Array.from(set).sort();
  }, [catalog]);

  // Filter & Sort Logic
  const filteredPerfumes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return catalog.filter(p => {
      // Text Search
      if (q) {
        const matchName = p.name.toLowerCase().includes(q) || (p.nameZh && p.nameZh.toLowerCase().includes(q));
        const matchBrand = p.brand.toLowerCase().includes(q) || (p.brandZh && p.brandZh.toLowerCase().includes(q));
        const matchNotes = [...p.topNotes, ...p.middleNotes, ...p.baseNotes, ...p.topNotesZh, ...p.middleNotesZh, ...p.baseNotesZh]
          .some(n => n.toLowerCase().includes(q));
        const matchTags = [...p.tags, ...p.tagsZh].some(t => t.toLowerCase().includes(q));
        const matchFamily = p.fragranceFamily.toLowerCase().includes(q) || p.fragranceFamilyZh.includes(q);

        if (!matchName && !matchBrand && !matchNotes && !matchTags && !matchFamily) {
          return false;
        }
      }

      // Brand Filter
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }

      // Family Filter
      if (selectedFamily !== 'all' && !p.fragranceFamily.toLowerCase().includes(selectedFamily.toLowerCase())) {
        return false;
      }

      // Price Filter
      if (selectedPriceLevel > 0 && p.priceLevel !== selectedPriceLevel) {
        return false;
      }

      // Season Filter
      if (selectedSeason !== 'all' && !p.seasons.includes(selectedSeason as any) && !p.seasons.includes('all seasons')) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'beginner') {
        return b.beginnerFriendlyScore - a.beginnerFriendlyScore;
      } else if (sortBy === 'priceAsc') {
        return a.priceLevel - b.priceLevel;
      } else if (sortBy === 'priceDesc') {
        return b.priceLevel - a.priceLevel;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }, [catalog, searchQuery, selectedBrand, selectedFamily, selectedPriceLevel, selectedSeason, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredPerfumes.length / itemsPerPage));
  const currentBatch = filteredPerfumes.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setSelectedFamily('all');
    setSelectedPriceLevel(0);
    setSelectedSeason('all');
    setSortBy('beginner');
    setPage(1);
  };

  const getCatalogCountText = () => {
    if (lang === 'zh-CN' || lang === 'zh') return `收录 ${catalog.length} 款经典香水`;
    if (lang === 'zh-HK') return `收錄 ${catalog.length} 款經典香水`;
    if (lang === 'fr') return `Catalogue de ${catalog.length} formules`;
    if (lang === 'es') return `Catálogo de ${catalog.length} formulaciones`;
    if (lang === 'de') return `Katalog mit ${catalog.length} Formulierungen`;
    return `Catalog of ${catalog.length} Formulations`;
  };

  const getFoundCountText = () => {
    if (lang === 'zh-CN' || lang === 'zh') return `找到 ${filteredPerfumes.length} 款香水`;
    if (lang === 'zh-HK') return `找到 ${filteredPerfumes.length} 款香水`;
    if (lang === 'fr') return `${filteredPerfumes.length} parfums trouvés`;
    if (lang === 'es') return `${filteredPerfumes.length} fragancias encontradas`;
    if (lang === 'de') return `${filteredPerfumes.length} Düfte gefunden`;
    return `${filteredPerfumes.length} fragrances found`;
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 py-8 md:py-12 animate-fadeIn space-y-8 ${className}`}>
      {/* Top Header */}
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
          <span className="text-xs text-[#76726B] border border-[#D8D2C5] px-3 py-1 font-light">
            {getCatalogCountText()}
          </span>
        </div>
      </div>

      {/* Hero & Search Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <span className="text-xs text-[#76726B] uppercase tracking-wider block font-light">
          {t.dirBadge}
        </span>
        <h2 className="text-[22px] md:text-[26px] font-normal text-[#252525]">
          {t.dirTitle}
        </h2>
        <p className="text-xs md:text-sm text-[#76726B] font-light">
          {t.dirSubtitle}
        </p>

        {/* Big Search Bar */}
        <div className="relative max-w-xl mx-auto pt-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#76726B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            placeholder={t.dirSearchPlaceholder}
            className="w-full pl-11 pr-10 py-3 border border-[#D8D2C5] bg-[#FFFEF6] text-xs md:text-sm text-[#252525] placeholder-[#76726B]/70 focus:outline-none focus:border-[#252525] transition-colors font-light"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#76726B] hover:text-[#252525]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D2C5] pb-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#76726B] font-light">
            <Filter className="w-3.5 h-3.5" />
            <span>{t.dirRefineFilter}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#76726B] font-light">
              {getFoundCountText()}
            </span>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-[#252525] underline underline-offset-4 hover:text-[#76726B] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.dirReset}</span>
            </button>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Brand */}
          <div className="space-y-1">
            <label className="text-[11px] text-[#76726B] font-light block">
              {t.dirBrandLabel}
            </label>
            <select
              value={selectedBrand}
              onChange={e => {
                setSelectedBrand(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-2 border border-[#D8D2C5] bg-[#F7F4EC] text-xs text-[#252525] focus:outline-none focus:border-[#252525]"
            >
              <option value="all">{t.dirAllBrands}</option>
              {brandList.map(([brandEn, brandZh]) => (
                <option key={brandEn} value={brandEn}>
                  {isZh ? `${brandZh} (${brandEn})` : brandEn}
                </option>
              ))}
            </select>
          </div>

          {/* Fragrance Family */}
          <div className="space-y-1">
            <label className="text-[11px] text-[#76726B] font-light block">
              {t.dirFamilyLabel}
            </label>
            <select
              value={selectedFamily}
              onChange={e => {
                setSelectedFamily(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-2 border border-[#D8D2C5] bg-[#F7F4EC] text-xs text-[#252525] focus:outline-none focus:border-[#252525]"
            >
              <option value="all">{t.dirAllFamilies}</option>
              {familyList.map(fam => (
                <option key={fam} value={fam}>{fam}</option>
              ))}
            </select>
          </div>

          {/* Price Level */}
          <div className="space-y-1">
            <label className="text-[11px] text-[#76726B] font-light block">
              {t.dirPriceLevelLabel}
            </label>
            <select
              value={selectedPriceLevel}
              onChange={e => {
                setSelectedPriceLevel(Number(e.target.value));
                setPage(1);
              }}
              className="w-full px-3 py-2 border border-[#D8D2C5] bg-[#F7F4EC] text-xs text-[#252525] focus:outline-none focus:border-[#252525]"
            >
              <option value={0}>{t.dirAllPrices}</option>
              <option value={1}>{isZh ? '入门平价 (£ / ¥)' : 'Accessible Tier'}</option>
              <option value={2}>{isZh ? '经典进阶 (££ / ¥¥)' : 'Popular Mid Tier'}</option>
              <option value={3}>{isZh ? '沙龙高定 (£££ / ¥¥¥)' : 'Niche Luxury Tier'}</option>
              <option value={4}>{isZh ? '顶级典藏 (££££ / ¥¥¥¥)' : 'High Prestige Tier'}</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1">
            <label className="text-[11px] text-[#76726B] font-light block">
              {t.dirSortByLabel}
            </label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 border border-[#D8D2C5] bg-[#F7F4EC] text-xs text-[#252525] focus:outline-none focus:border-[#252525]"
            >
              <option value="beginner">{t.dirSortBeginner}</option>
              <option value="priceAsc">{t.dirSortPriceAsc}</option>
              <option value="priceDesc">{t.dirSortPriceDesc}</option>
              <option value="name">{t.dirSortName}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredPerfumes.length === 0 ? (
        <div className="bg-[#FFFEF6] border border-[#D8D2C5] p-12 text-center space-y-4">
          <Compass className="w-8 h-8 text-[#76726B] mx-auto animate-pulse" />
          <h3 className="text-xl font-normal text-[#252525]">
            {t.dirNoResultsTitle}
          </h3>
          <p className="text-xs text-[#76726B] font-light">
            {t.dirNoResultsDesc}
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-6 py-2.5 border border-[#252525] text-[#252525] text-xs uppercase tracking-wider hover:bg-[#252525] hover:text-[#FFFEF6] transition-colors"
          >
            {t.dirResetAllFilters}
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentBatch.map(perfume => (
              <PerfumeCard
                key={perfume.id}
                perfume={perfume}
                lang={lang}
                currency={currency}
                onSelect={p => setSelectedPerfume(p)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 border border-[#D8D2C5] bg-[#FFFEF6] text-xs text-[#252525] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#252525] transition-colors uppercase tracking-wider"
              >
                {t.dirPrevPage}
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(pNum => pNum === 1 || pNum === totalPages || Math.abs(pNum - page) <= 2)
                  .map((pNum, idx, arr) => {
                    const prev = arr[idx - 1];
                    return (
                      <React.Fragment key={pNum}>
                        {prev && pNum - prev > 1 && <span className="px-1 text-xs text-[#76726B]">...</span>}
                        <button
                          type="button"
                          onClick={() => setPage(pNum)}
                          className={`w-8 h-8 text-xs transition-colors border ${
                            page === pNum
                              ? 'bg-[#252525] text-[#FFFEF6] border-[#252525]'
                              : 'bg-[#FFFEF6] text-[#252525] border-[#D8D2C5] hover:border-[#252525]'
                          }`}
                        >
                          {pNum}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              <button
                type="button"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 border border-[#D8D2C5] bg-[#FFFEF6] text-xs text-[#252525] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#252525] transition-colors uppercase tracking-wider"
              >
                {t.dirNextPage}
              </button>
            </div>
          )}
        </div>
      )}

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
