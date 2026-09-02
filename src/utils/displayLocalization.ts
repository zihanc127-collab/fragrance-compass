import { Language } from '../types';
import { TAGS_I18N } from './perfumeCardLocalization';

type Labels = Record<Language,string>;
const labels = (en:string, zh:string, zht:string, fr:string, es:string, de:string):Labels =>
  ({en,zh,'zh-CN':zh,'zh-HK':zht,fr,es,de});

const CANONICAL: Record<string,Labels> = {
  'green-leafy':labels('Green Leaves','青翠绿叶','青翠綠葉','Feuilles vertes','Hojas verdes','Grüne Blätter'),
  'rain-earth-mineral':labels('Rain & Mineral','雨水与矿物','雨水與礦物','Pluie & minéral','Lluvia y mineral','Regen & Mineral'),
  'clean-musk':labels('Clean Musk','洁净麝香','潔淨麝香','Musc propre','Almizcle limpio','Reiner Moschus'),
  'soft-woods':labels('Soft Woods','柔和木质','柔和木質','Bois doux','Maderas suaves','Sanfte Hölzer'),
  'aquatic-sea-salt':labels('Sea Salt','海盐','海鹽','Sel marin','Sal marina','Meersalz'),
  'fresh-floral':labels('Fresh Floral','清新花香','清新花香','Floral frais','Floral fresco','Frisch floral'),
  fruit:labels('Fruity','果香','果香','Fruité','Frutal','Fruchtig'),
  gourmand:labels('Gourmand','美食香','美食香','Gourmand','Gourmand','Gourmand'),
  spice:labels('Spice','香辛','香辛','Épicé','Especiado','Würzig'),
  'incense-smoke':labels('Incense or Smoke','焚香烟熏','焚香煙燻','Encens ou fumée','Incienso o humo','Weihrauch oder Rauch'),
  smoky:labels('Smoky','烟熏感','煙燻感','Fumé','Ahumado','Rauchig'),
  'powder-iris':labels('Iris','鸢尾粉香','鳶尾粉香','Iris poudré','Iris empolvado','Pudrige Iris'),
  'herbal-aromatic':labels('Aromatic Herbs','芳香草本','芳香草本','Herbes aromatiques','Hierbas aromáticas','Aromatische Kräuter'),
  musk:labels('Musk','麝香','麝香','Musc','Almizcle','Moschus'),
  'skin-musk':labels('Skin Musk','贴肤麝香','貼膚麝香','Musc peau','Almizcle de piel','Hautmoschus'),
  'amber-warm':labels('Warm Amber','温暖琥珀','溫暖琥珀','Ambre chaud','Ámbar cálido','Warmer Amber'),
  'cool-transparent':labels('Cool & Airy','清冷通透','清冷通透','Frais & aérien','Fresco y etéreo','Kühl & luftig'),
  'white-floral':labels('White Floral','白花','白花','Fleurs blanches','Flores blancas','Weiße Blüten'),
  'smoky-woods':labels('Smoky Woods','烟熏木质','煙燻木質','Bois fumés','Maderas ahumadas','Rauchige Hölzer')
  ,'low-sweetness':labels('Low Sweetness','低甜度','低甜度','Peu sucré','Poco dulce','Wenig süß')
  ,'high-sweetness':labels('Rich Sweetness','醇厚甜润','醇厚甜潤','Douceur riche','Dulzor intenso','Reichhaltige Süße')
  ,'fresh-airy':labels('Fresh & Airy','清爽通透','清爽通透','Frais & aérien','Fresco y etéreo','Frisch & luftig')
};

const ALIASES: Record<string,string> = {
  aromatic:'herbal-aromatic', herbal:'herbal-aromatic', herbs:'herbal-aromatic',
  'classic woods':'soft-woods', woods:'woody', 'hinoki woods':'soft-woods',
  'clean floral':'fresh-floral', 'soft floral':'fresh-floral', 'fresh floral':'fresh-floral',
  'clean linen':'clean laundry', 'clean musk':'clean-musk', 'fresh musk':'clean-musk', 'soft musk':'clean-musk',
  fruity:'fruit', 'dark fruit':'fruit', iris:'powder-iris', rain:'rain-earth-mineral',
  'sea air':'aquatic-sea-salt', 'sea salt':'aquatic-sea-salt', 'skin musk':'skin-musk',
  'smoky woods':'smoky-woods', 'soft citrus':'citrus', 'icy citrus':'citrus',
  'cool spice':'spice', 'soft spice':'spice', 'warm spice':'spice', 'warm amber':'amber-warm',
  watery:'aquatic', 'white floral':'white-floral', 'fresh grass':'green-leafy'
};

const EXTRA: Record<string,Labels> = {
  almond:labels('Almond','杏仁','杏仁','Amande','Almendra','Mandel'), coffee:labels('Coffee','咖啡','咖啡','Café','Café','Kaffee'),
  'earl grey':labels('Earl Grey','伯爵茶','伯爵茶','Thé Earl Grey','Té Earl Grey','Earl-Grey-Tee'),
  'green tea':labels('Green Tea','绿茶','綠茶','Thé vert','Té verde','Grüner Tee'),
  'green vanilla':labels('Green Vanilla','青绿香草','青綠香草','Vanille verte','Vainilla verde','Grüne Vanille'),
  juniper:labels('Juniper','杜松','杜松','Genévrier','Enebro','Wacholder'), peony:labels('Peony','牡丹','牡丹','Pivoine','Peonía','Pfingstrose'),
  pomegranate:labels('Pomegranate','石榴','石榴','Grenade','Granada','Granatapfel'), saffron:labels('Saffron','藏红花','藏紅花','Safran','Azafrán','Safran')
};

function cleanEnglish(value:string) { return value.replace(/[-_]+/g,' ').replace(/\b\w/g,c=>c.toUpperCase()); }
export function localizeScentKeyword(value:string, lang:Language):string {
  const key=value.trim().toLowerCase();
  const canonical=ALIASES[key] || key;
  const entry=CANONICAL[canonical] || EXTRA[key] || TAGS_I18N[canonical] || TAGS_I18N[key];
  return entry?.[lang] || entry?.en || cleanEnglish(value);
}
export function localizeScentKeywords(values:string[],lang:Language) { return values.map(value=>localizeScentKeyword(value,lang)); }

const DIRECTIONS:Record<string,Labels> = {
  'fresh-green-citrus':labels('Fresh Green & Citrus','清新绿意与明亮柑橘','清新綠意與明亮柑橘','Verte fraîche & agrumes','Verde fresco y cítricos','Frisches Grün & Zitrus'),
  'warm-vanilla-spice':labels('Warm Vanilla & Soft Spice','温暖香草与柔和辛香','溫暖香草與柔和辛香','Vanille chaude & épices douces','Vainilla cálida y especias suaves','Warme Vanille & sanfte Würze'),
  'quiet-incense-woods':labels('Quiet Incense & Deep Woods','静谧烟熏与深邃木质','靜謐煙燻與深邃木質','Encens paisible & bois profonds','Incienso sereno y maderas profundas','Stiller Weihrauch & tiefe Hölzer'),
  'fresh-floral-rose':labels('Fresh Floral & Modern Rose','清新花香与现代玫瑰','清新花香與現代玫瑰','Floral frais & rose moderne','Floral fresco y rosa moderna','Frische Blüten & moderne Rose'),
  'cool-marine-mineral':labels('Cool Marine & Mineral','清冷海洋与矿物气息','清冷海洋與礦物氣息','Marin frais & minéral','Marino fresco y mineral','Kühl maritim & mineralisch'),
  'green-tea':labels('Quiet Green Tea','静谧绿茶','靜謐綠茶','Thé vert paisible','Té verde sereno','Stiller grüner Tee'),
  'fig-soft-woods':labels('Green Fig & Soft Woods','青绿无花果与柔和木质','青綠無花果與柔和木質','Figue verte & bois doux','Higo verde y maderas suaves','Grüne Feige & sanfte Hölzer'),
  'clean-soft-musk':labels('Clean & Soft Musk','洁净与柔和麝香','潔淨與柔和麝香','Propre & musc doux','Limpio y almizcle suave','Rein & sanfter Moschus'),
  'powder-iris':labels('Soft Powder & Iris','柔和粉香与鸢尾','柔和粉香與鳶尾','Poudre douce & iris','Polvo suave e iris','Sanfter Puder & Iris'),
  'fruity-bright':labels('Bright & Fruity','明亮果香','明亮果香','Lumineux & fruité','Luminoso y frutal','Strahlend & fruchtig'),
  'herbal-green':labels('Herbal & Green','草本与绿意','草本與綠意','Herbacé & vert','Herbal y verde','Kräuter & Grün'),
  balanced:labels('Balanced Botanical Harmony','自然澄澈与平衡草木','自然澄澈與平衡草木','Harmonie botanique équilibrée','Armonía botánica equilibrada','Ausgewogene botanische Harmonie')
};
export function localizeDirectionTitle(id:string,lang:Language) { const entry=DIRECTIONS[id]||DIRECTIONS.balanced; return entry[lang]||entry.en; }

const ACTIONS:Record<Language,{card:string;modal:string}> = {
  en:{card:'Official site',modal:'Official product page'}, zh:{card:'品牌官网',modal:'查看品牌官网产品页'},
  'zh-CN':{card:'品牌官网',modal:'查看品牌官网产品页'}, 'zh-HK':{card:'品牌官網',modal:'查看品牌官網產品頁'},
  fr:{card:'Site officiel',modal:'Voir la page produit officielle'}, es:{card:'Sitio oficial',modal:'Ver página oficial del producto'},
  de:{card:'Offizielle Website',modal:'Offizielle Produktseite öffnen'}
};
export function officialAction(lang:Language,kind:'card'|'modal') { return (ACTIONS[lang] || ACTIONS.en)[kind]; }
