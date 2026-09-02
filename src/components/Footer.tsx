import React, { useState } from 'react';
import { Language } from '../types';
import { getTranslation } from '../data/translations';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onNavigate: (view: 'home' | 'quiz' | 'personality' | 'library') => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onNavigate,
  className = ''
}) => {
  const t = getTranslation(lang);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className={`mt-24 ${className}`}>
      {/* 1. AESOP LITERARY QUOTE BANNER */}
      <section className="bg-[#FFFEF6] py-20 md:py-28 px-6 text-center border-t border-[#EAE5DA]">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="font-serif text-xl sm:text-2xl md:text-[26px] font-normal text-[#252525] leading-relaxed italic tracking-wide">
            {t.footerQuote}
          </p>
          <span className="text-xs text-[#76726B] font-light block uppercase tracking-widest pt-2">
            {t.footerAuthor}
          </span>
        </div>
      </section>

      {/* 2. AESOP SIGNATURE MATTE DARK FOOTER */}
      <footer className="bg-[#232323] text-[#FFFEF6] pt-16 pb-12 px-6 sm:px-8 lg:px-12 border-t border-[#363533]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            {/* Newsletter Subscription Column (Aesop Style) */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs tracking-wider uppercase text-[#D8D2C5] font-medium block">
                {t.footerNewsletterTitle}
              </span>
              <p className="text-xs text-[#A8A298] leading-relaxed font-light">
                {t.footerNewsletterDesc}
              </p>

              {subscribed ? (
                <div className="text-xs text-[#D8D2C5] pt-2 italic">
                  {t.footerNewsletterSuccess}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="pt-2">
                  <div className="relative border-b border-[#706B62] focus-within:border-[#FFFEF6] transition-colors pb-1 flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.footerEmailPlaceholder}
                      className="w-full bg-transparent text-xs text-[#FFFEF6] placeholder-[#8C867C] focus:outline-none py-1.5 pr-8 font-light"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-0 text-[#D8D2C5] hover:text-[#FFFEF6] transition-colors p-1"
                      aria-label="Submit email"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs tracking-wider uppercase text-[#D8D2C5] font-medium block">
                {t.footerPathsTitle}
              </span>
              <ul className="space-y-2 text-xs text-[#A8A298] font-light">
                <li>
                  <button type="button" onClick={() => onNavigate('home')} className="hover:text-[#FFFEF6] transition-colors">
                    {t.footerHomeLink}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate('quiz')} className="hover:text-[#FFFEF6] transition-colors">
                    {t.footerQuizLink}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate('personality')} className="hover:text-[#FFFEF6] transition-colors">
                    {t.footerPersonalityLink}
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate('library')} className="hover:text-[#FFFEF6] transition-colors">
                    {t.footerLibraryLink}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Philosophy */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs tracking-wider uppercase text-[#D8D2C5] font-medium block">
                {t.footerRitualTitle}
              </span>
              <p className="text-xs text-[#A8A298] leading-relaxed font-light">
                {t.footerRitualDesc}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Attribution */}
          <div className="pt-8 border-t border-[#363533] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#8C867C]">
            <p>© {new Date().getFullYear()} Fragrance Compass. Formulated with clarity and discretion.</p>
            <span className="italic text-[#A8A298]">
              {t.footerTagline}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
