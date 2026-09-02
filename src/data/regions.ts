import { RegionConfig, RegionCode } from '../types';

export const REGIONS: RegionConfig[] = [
  {
    code: 'UK',
    nameEn: 'United Kingdom',
    nameZh: '英国',
    nameLocal: 'United Kingdom',
    flag: '🇬🇧',
    language: 'en',
    currency: 'GBP',
    currencySymbol: '£',
    currencyLabelEn: 'GBP (£)',
    currencyLabelZh: '英镑 (£)',
    languageLabel: 'English',
    currencyName: 'Pound Sterling (£)'
  },
  {
    code: 'CN',
    nameEn: 'Mainland China',
    nameZh: '中国大陆',
    nameLocal: '中国大陆',
    flag: '🇨🇳',
    language: 'zh-CN',
    currency: 'RMB',
    currencySymbol: '¥',
    currencyLabelEn: 'CNY (¥)',
    currencyLabelZh: '人民币 (¥)',
    languageLabel: '简体中文',
    currencyName: '人民币 (¥)'
  },
  {
    code: 'US',
    nameEn: 'United States',
    nameZh: '美国',
    nameLocal: 'United States',
    flag: '🇺🇸',
    language: 'en',
    currency: 'USD',
    currencySymbol: '$',
    currencyLabelEn: 'USD ($)',
    currencyLabelZh: '美元 ($)',
    languageLabel: 'English',
    currencyName: 'US Dollar ($)'
  },
  {
    code: 'CA',
    nameEn: 'Canada',
    nameZh: '加拿大',
    nameLocal: 'Canada',
    flag: '🇨🇦',
    language: 'en',
    currency: 'CAD',
    currencySymbol: 'CA$',
    currencyLabelEn: 'CAD (CA$)',
    currencyLabelZh: '加元 (CA$)',
    languageLabel: 'English',
    currencyName: 'Canadian Dollar (CA$)'
  },
  {
    code: 'FR',
    nameEn: 'France',
    nameZh: '法国',
    nameLocal: 'France',
    flag: '🇫🇷',
    language: 'fr',
    currency: 'EUR',
    currencySymbol: '€',
    currencyLabelEn: 'EUR (€)',
    currencyLabelZh: '欧元 (€)',
    languageLabel: 'Français',
    currencyName: 'Euro (€)'
  },
  {
    code: 'ES',
    nameEn: 'Spain',
    nameZh: '西班牙',
    nameLocal: 'España',
    flag: '🇪🇸',
    language: 'es',
    currency: 'EUR',
    currencySymbol: '€',
    currencyLabelEn: 'EUR (€)',
    currencyLabelZh: '欧元 (€)',
    languageLabel: 'Español',
    currencyName: 'Euro (€)'
  },
  {
    code: 'CH',
    nameEn: 'Switzerland',
    nameZh: '瑞士',
    nameLocal: 'Schweiz',
    flag: '🇨🇭',
    language: 'de',
    currency: 'CHF',
    currencySymbol: 'CHF ',
    currencyLabelEn: 'CHF',
    currencyLabelZh: '瑞士法郎 (CHF)',
    languageLabel: 'Deutsch',
    currencyName: 'Swiss Franc (CHF)'
  },
  {
    code: 'DE',
    nameEn: 'Germany',
    nameZh: '德国',
    nameLocal: 'Deutschland',
    flag: '🇩🇪',
    language: 'de',
    currency: 'EUR',
    currencySymbol: '€',
    currencyLabelEn: 'EUR (€)',
    currencyLabelZh: '欧元 (€)',
    languageLabel: 'Deutsch',
    currencyName: 'Euro (€)'
  },
  {
    code: 'HK',
    nameEn: 'Hong Kong SAR',
    nameZh: '中国香港',
    nameLocal: '香港',
    flag: '🇭🇰',
    language: 'zh-HK',
    currency: 'HKD',
    currencySymbol: 'HK$',
    currencyLabelEn: 'HKD (HK$)',
    currencyLabelZh: '港币 (HK$)',
    languageLabel: '繁體中文',
    currencyName: '港幣 (HK$)'
  },
  {
    code: 'TW',
    nameEn: 'Taiwan',
    nameZh: '中国台湾',
    nameLocal: '台灣',
    flag: '🇹🇼',
    language: 'zh-HK',
    currency: 'TWD',
    currencySymbol: 'NT$',
    currencyLabelEn: 'TWD (NT$)',
    currencyLabelZh: '新台币 (NT$)',
    languageLabel: '繁體中文',
    currencyName: '新台幣 (NT$)'
  },
  {
    code: 'AU',
    nameEn: 'Australia',
    nameZh: '澳大利亚',
    nameLocal: 'Australia',
    flag: '🇦🇺',
    language: 'en',
    currency: 'AUD',
    currencySymbol: 'A$',
    currencyLabelEn: 'AUD (A$)',
    currencyLabelZh: '澳元 (A$)',
    languageLabel: 'English',
    currencyName: 'Australian Dollar (A$)'
  }
];

export const DEFAULT_REGION_CODE: RegionCode = 'CN';

export function getRegionConfig(code: RegionCode | string): RegionConfig {
  const found = REGIONS.find(r => r.code === code);
  return found || REGIONS[1]; // default to CN
}
