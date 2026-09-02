import React, { useState } from 'react';
import { Language, Currency, RegionCode, RegionConfig } from '../types';
import { RegionSelector } from './RegionSelector';
import { getTranslation } from '../data/translations';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'quiz' | 'results' | 'personality' | 'library';
  onNavigate: (view: 'home' | 'quiz' | 'personality' | 'library') => void;
  currentRegionCode: RegionCode;
  onSelectRegion: (config: RegionConfig) => void;
  lang: Language;
  currency: Currency;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  currentRegionCode,
  onSelectRegion,
  lang,
  className = ''
}) => {
  const t = getTranslation(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'quiz', label: t.navQuiz, highlight: true },
    { id: 'personality', label: t.navPersonality },
    { id: 'library', label: t.navExplore }
  ];

  return (
    <header className={`sticky top-0 z-40 bg-[#FFFEF6]/95 backdrop-blur-md border-b border-[#EAE5DA] transition-all ${className}`}>
      {/* Top Announcement Bar (Aesop Style) */}
      <div className="bg-[#252525] text-[#FFFEF6] text-[11px] md:text-xs py-2 px-4 text-center font-normal tracking-wide flex items-center justify-center">
        <span>{t.topAnnouncement}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Logo in Editorial Serif (Aesop Style) */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-baseline gap-2 text-left group"
        >
          <span className="font-italiana text-2xl md:text-3xl font-medium tracking-tight text-[#252525] group-hover:text-[#4A4742] transition-colors">
            Fragrance Compass.
          </span>
          <span className="hidden lg:inline-block text-[10px] tracking-widest uppercase text-[#76726B] font-normal pl-2 border-l border-[#D8D2C5]">
            {t.appTagline}
          </span>
        </button>

        {/* Desktop Navigation Links (Minimalist Aesop Text Navigation) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentView === link.id || (link.id === 'quiz' && currentView === 'results');
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id as any)}
                className={`text-xs tracking-wide py-1.5 transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#252525] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#252525]'
                    : link.highlight
                    ? 'text-[#252525] hover:text-[#5E5952] font-medium'
                    : 'text-[#66625B] hover:text-[#252525]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Tools: Minimalist Unified Region Selector */}
        <div className="hidden md:flex items-center gap-4">
          <RegionSelector
            currentRegionCode={currentRegionCode}
            onSelectRegion={onSelectRegion}
            lang={lang}
          />
        </div>

        {/* Mobile Hamburger Button & Region Selector */}
        <div className="flex md:hidden items-center gap-2">
          <RegionSelector
            currentRegionCode={currentRegionCode}
            onSelectRegion={onSelectRegion}
            lang={lang}
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#252525] hover:bg-[#F4EFE6] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFEF6] border-b border-[#EAE5DA] px-5 py-5 space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  onNavigate(link.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 text-sm font-medium ${
                  currentView === link.id
                    ? 'text-[#252525] font-semibold underline underline-offset-4'
                    : 'text-[#5E5952] hover:text-[#252525]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE5DA] flex items-center justify-between">
            <span className="text-xs text-[#66625B]">{t.currencyLabel}:</span>
            <RegionSelector
              currentRegionCode={currentRegionCode}
              onSelectRegion={(reg) => {
                onSelectRegion(reg);
                setMobileMenuOpen(false);
              }}
              lang={lang}
              variant="drawer"
            />
          </div>
        </div>
      )}
    </header>
  );
};
