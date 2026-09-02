import { Perfume, Currency } from '../types';

/**
 * Parses numeric price bounds from price string or falls back to priceLevel
 */
function parsePriceBounds(priceStr?: string, level: number = 2): { low: number; high: number } {
  if (priceStr) {
    const numbers = priceStr.replace(/,/g, '').match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      return { low: parseInt(numbers[0], 10), high: parseInt(numbers[1], 10) };
    } else if (numbers && numbers.length === 1) {
      const num = parseInt(numbers[0], 10);
      return { low: Math.round(num * 0.85), high: num };
    }
  }

  // Fallbacks based on level in GBP
  switch (level) {
    case 1: return { low: 45, high: 75 };
    case 2: return { low: 65, high: 125 };
    case 3: return { low: 135, high: 195 };
    case 4: default: return { low: 210, high: 280 };
  }
}

/**
 * Returns formatted price string according to the selected currency
 */
export function formatPerfumePrice(perfume: Perfume, currency: Currency): string {
  if (currency === 'GBP' && perfume.priceRangeGBP) {
    return perfume.priceRangeGBP;
  }
  if (currency === 'RMB' && perfume.priceRangeRMB) {
    return perfume.priceRangeRMB;
  }

  const { low: gbpLow, high: gbpHigh } = parsePriceBounds(perfume.priceRangeGBP || perfume.priceRangeGbp, perfume.priceLevel);

  switch (currency) {
    case 'GBP':
      return `£${gbpLow} – £${gbpHigh}`;
    case 'RMB':
      return `¥${Math.round(gbpLow * 10).toLocaleString()} – ¥${Math.round(gbpHigh * 10).toLocaleString()}`;
    case 'USD':
      return `$${Math.round(gbpLow * 1.3)} – $${Math.round(gbpHigh * 1.3)}`;
    case 'CAD':
      return `CA$${Math.round(gbpLow * 1.75)} – CA$${Math.round(gbpHigh * 1.75)}`;
    case 'EUR':
      return `€${Math.round(gbpLow * 1.18)} – €${Math.round(gbpHigh * 1.18)}`;
    case 'CHF':
      return `CHF ${Math.round(gbpLow * 1.15)} – CHF ${Math.round(gbpHigh * 1.15)}`;
    case 'HKD':
      return `HK$${Math.round((gbpLow * 10.2) / 10) * 10} – HK$${Math.round((gbpHigh * 10.2) / 10) * 10}`;
    case 'AUD':
      return `A$${Math.round(gbpLow * 2.0)} – A$${Math.round(gbpHigh * 2.0)}`;
    case 'TWD':
      return `NT$${(Math.round((gbpLow * 37) / 100) * 100).toLocaleString()} – NT$${(Math.round((gbpHigh * 37) / 100) * 100).toLocaleString()}`;
    default:
      return perfume.priceRangeGBP || `£${gbpLow} – £${gbpHigh}`;
  }
}
