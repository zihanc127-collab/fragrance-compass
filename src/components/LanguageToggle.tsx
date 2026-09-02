import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onToggle,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center border border-[#D8D2C5] ${className}`}>
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-3 py-1 text-xs tracking-wider transition-colors ${
          currentLang === 'en'
            ? 'bg-[#252525] text-[#FFFEF6]'
            : 'bg-transparent text-[#76726B] hover:text-[#252525]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onToggle('zh')}
        className={`px-3 py-1 text-xs tracking-wider transition-colors ${
          currentLang === 'zh'
            ? 'bg-[#252525] text-[#FFFEF6]'
            : 'bg-transparent text-[#76726B] hover:text-[#252525]'
        }`}
      >
        中文
      </button>
    </div>
  );
};
