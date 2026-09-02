import React, { useState, useRef, useEffect } from 'react';
import { RegionCode, RegionConfig, Language } from '../types';
import { REGIONS, getRegionConfig } from '../data/regions';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface RegionSelectorProps {
  currentRegionCode: RegionCode;
  onSelectRegion: (config: RegionConfig) => void;
  lang: Language;
  className?: string;
  variant?: 'header' | 'drawer' | 'footer';
}

export const RegionSelector: React.FC<RegionSelectorProps> = ({
  currentRegionCode,
  onSelectRegion,
  lang,
  className = '',
  variant = 'header'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRegion = getRegionConfig(currentRegionCode);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (region: RegionConfig) => {
    onSelectRegion(region);
    setIsOpen(false);
  };

  const getDropdownHeader = () => {
    if (lang === 'zh-CN' || lang === 'zh') return '选择您的地区与币种';
    if (lang === 'zh-HK') return '選擇您的地區與幣種';
    if (lang === 'fr') return 'Sélectionnez votre région et devise';
    if (lang === 'es') return 'Seleccione su región y moneda';
    if (lang === 'de') return 'Wählen Sie Ihre Region und Währung';
    return 'Select Your Region & Currency';
  };

  const getAriaLabel = () => {
    if (lang === 'zh-CN' || lang === 'zh') return '选择国家与地区 / 币种';
    if (lang === 'zh-HK') return '選擇國家與地區 / 幣種';
    if (lang === 'fr') return 'Sélectionner pays / région et devise';
    if (lang === 'es') return 'Seleccionar país / región y moneda';
    if (lang === 'de') return 'Land / Region und Währung wählen';
    return 'Select Country / Region & Currency';
  };

  const getRegionDisplayName = (region: RegionConfig) => {
    if (lang === 'zh-CN' || lang === 'zh') return region.nameZh;
    if (lang === 'zh-HK') {
      if (region.code === 'CN') return '中國大陸';
      if (region.code === 'HK') return '中國香港';
      if (region.code === 'UK') return '英國';
      if (region.code === 'US') return '美國';
      if (region.code === 'CA') return '加拿大';
      if (region.code === 'FR') return '法國';
      if (region.code === 'ES') return '西班牙';
      if (region.code === 'CH') return '瑞士';
      if (region.code === 'DE') return '德國';
      if (region.code === 'AU') return '澳大利亞';
      return region.nameZh;
    }
    if (region.nameLocal) return region.nameLocal;
    return region.nameEn;
  };

  const getTriggerName = () => {
    if (currentRegion.nameLocal) return currentRegion.nameLocal;
    if (lang === 'zh-CN' || lang === 'zh') return currentRegion.nameZh;
    if (lang === 'zh-HK') {
      if (currentRegion.code === 'CN') return '中國大陸';
      if (currentRegion.code === 'HK') return '香港';
      return currentRegion.nameZh;
    }
    return currentRegion.nameEn;
  };

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={getAriaLabel()}
        className={`flex items-center gap-2 text-xs tracking-wider border transition-all duration-200 ${
          variant === 'drawer'
            ? 'w-full justify-between px-3 py-2.5 bg-[#FFFEF6] border-[#D8D2C5] text-[#252525]'
            : 'px-3 py-1.5 bg-[#FFFEF6] border-[#D8D2C5] text-[#252525] hover:border-[#252525]'
        }`}
      >
        <span className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#76726B]" />
          <span className="text-sm leading-none">{currentRegion.flag}</span>
          <span className="font-normal">{getTriggerName()}</span>
          <span className="text-[#76726B] font-light">· {currentRegion.currencySymbol.trim()}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#76726B] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#252525]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-76 max-h-84 overflow-y-auto bg-[#FFFEF6] border border-[#252525] shadow-lg z-50 animate-fadeIn">
          <div className="p-2.5 border-b border-[#EAE5DA] bg-[#F7F4EC]">
            <span className="text-[11px] uppercase tracking-wider text-[#76726B] font-light block">
              {getDropdownHeader()}
            </span>
          </div>

          <div className="py-1 divide-y divide-[#F2EFE8]">
            {REGIONS.map((region) => {
              const isSelected = region.code === currentRegionCode;
              const langSub = region.languageLabel || 'English';
              const curSub = region.currencyName || region.currencyLabelEn;
              return (
                <button
                  key={region.code}
                  type="button"
                  onClick={() => handleSelect(region)}
                  className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between transition-colors ${
                    isSelected
                      ? 'bg-[#F2EFE8] text-[#252525]'
                      : 'hover:bg-[#FAF8F2] text-[#252525]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{region.flag}</span>
                    <div>
                      <div className="text-xs font-normal text-[#252525]">
                        {getRegionDisplayName(region)}
                      </div>
                      <div className="text-[11px] text-[#76726B] font-light">
                        {langSub} · {curSub}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#252525] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
