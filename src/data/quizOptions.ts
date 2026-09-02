import { Currency, Language } from '../types';

export interface OptionItem {
  id: string;
  labelEn: string;
  labelZh: string;
  labelZhHant?: string;
  labelFr?: string;
  labelEs?: string;
  labelDe?: string;
  descEn?: string;
  descZh?: string;
  descZhHant?: string;
  descFr?: string;
  descEs?: string;
  descDe?: string;
  icon?: string;
  familyTag?: string;
}

export function getQuizOptionLabel(opt: any, lang: Language): string {
  if (!opt) return '';
  if (lang === 'zh-HK') return opt.labelZhHant || opt.nameZhHant || opt.labelZh || opt.nameZh || opt.labelEn || opt.nameEn || '';
  if (lang === 'zh' || lang === 'zh-CN') return opt.labelZh || opt.nameZh || opt.labelEn || opt.nameEn || '';
  if (lang === 'fr') return opt.labelFr || opt.nameFr || opt.labelEn || opt.nameEn || '';
  if (lang === 'es') return opt.labelEs || opt.nameEs || opt.labelEn || opt.nameEn || '';
  if (lang === 'de') return opt.labelDe || opt.nameDe || opt.labelEn || opt.nameEn || '';
  return opt.labelEn || opt.nameEn || '';
}

export function getQuizOptionDesc(opt: any, lang: Language): string {
  if (!opt) return '';
  if (lang === 'zh-HK') return opt.descZhHant || opt.meaningZhHant || opt.descZh || opt.meaningZh || opt.descEn || opt.meaningEn || '';
  if (lang === 'zh' || lang === 'zh-CN') return opt.descZh || opt.meaningZh || opt.descEn || opt.meaningEn || '';
  if (lang === 'fr') return opt.descFr || opt.meaningFr || opt.descEn || opt.meaningEn || '';
  if (lang === 'es') return opt.descEs || opt.meaningEs || opt.descEn || opt.meaningEs || '';
  if (lang === 'de') return opt.descDe || opt.meaningDe || opt.descEn || opt.meaningDe || '';
  return opt.descEn || opt.meaningEn || '';
}

export const LIKED_SMELL_OPTIONS: OptionItem[] = [
  {
    id: 'fresh citrus',
    icon: '🍋',
    labelEn: 'Fresh Citrus',
    labelZh: '新鲜柑橘',
    labelZhHant: '新鮮柑橘',
    labelFr: 'Agrumes Frais',
    labelEs: 'Cítricos Frescos',
    labelDe: 'Frische Zitrusnoten',
    descEn: 'Bright bergamot, lemon zest, sunny grapefruit',
    descZh: '佛手柑、柠檬皮、多汁葡萄柚',
    descZhHant: '佛手柑、檸檬皮、多汁葡萄柚',
    descFr: 'Bergamote lumineuse, zeste de citron, pamplemousse ensoleillé',
    descEs: 'Bergamota luminosa, ralladura de limón, pomelo soleado',
    descDe: 'Helle Bergamotte, Zitronenschale, sonnige Grapefruit'
  },
  {
    id: 'rain after grass',
    icon: '🌧️',
    labelEn: 'Rain After Grass',
    labelZh: '雨后草地',
    labelZhHant: '雨後草地',
    labelFr: "Pluie sur l'Herbe",
    labelEs: 'Lluvia sobre la Hierba',
    labelDe: 'Regen auf Gras',
    descEn: 'Petrichor, wet leaves, cool damp earth',
    descZh: '潮湿空气、湿叶、微凉泥土',
    descZhHant: '潮濕空氣、濕葉、微涼泥土',
    descFr: 'Pétrichor, feuilles mouillées, terre fraîche et humide',
    descEs: 'Petricor, hojas húmedas, tierra fresca empapada',
    descDe: 'Petrichor, nasse Blätter, kühle feuchte Erde'
  },
  {
    id: 'clean laundry',
    icon: '🧺',
    labelEn: 'Clean Laundry',
    labelZh: '干净衣物',
    labelZhHant: '乾淨衣物',
    labelFr: 'Linge Propre',
    labelEs: 'Ropa Limpia',
    labelDe: 'Frische Wäsche',
    descEn: 'Warm cotton, gentle aldehydes, soft musk',
    descZh: '晒过太阳的棉布、柔和皂感、轻柔麝香',
    descZhHant: '曬過太陽的棉布、柔和皂感、輕柔麝香',
    descFr: 'Coton chaud, aldéhydes délicats, musc doux',
    descEs: 'Algodón cálido, aldehídos suaves, almizcle delicado',
    descDe: 'Warme Baumwolle, sanfte Aldehyde, weicher Moschus'
  },
  {
    id: 'tea leaves',
    icon: '🍵',
    labelEn: 'Tea Leaves',
    labelZh: '茶叶',
    labelZhHant: '茶葉',
    labelFr: 'Feuilles de Thé',
    labelEs: 'Hojas de Té',
    labelDe: 'Teeblätter',
    descEn: 'Steeped sencha, white tea, smoked oolong',
    descZh: '煎茶、白茶、轻焙乌龙',
    descZhHant: '煎茶、白茶、輕焙烏龍',
    descFr: 'Sencha infusé, thé blanc, oolong délicatement fumé',
    descEs: 'Sencha infusionado, té blanco, oolong ahumado',
    descDe: 'Aufgebrühter Sencha, weißer Tee, sanft gerösteter Oolong'
  },
  {
    id: 'soft woods',
    icon: '🪵',
    labelEn: 'Soft Woods',
    labelZh: '柔和木质',
    labelZhHant: '柔和木質',
    labelFr: 'Bois Doux',
    labelEs: 'Maderas Suaves',
    labelDe: 'Sanfte Hölzer',
    descEn: 'Dry cedar pencils, creamy milky sandalwood',
    descZh: '干燥雪松、温润檀木',
    descZhHant: '乾燥雪松、溫潤檀木',
    descFr: 'Cèdre sec façon crayon, santal crémeux et lacté',
    descEs: 'Cedro seco, sándalo cremoso y lácteo',
    descDe: 'Trockenes Zedernholz, cremiges milchiges Sandelholz'
  },
  {
    id: 'green leaves',
    icon: '🌿',
    labelEn: 'Green Leaves',
    labelZh: '绿色叶片',
    labelZhHant: '綠色葉片',
    labelFr: 'Feuilles Vertes',
    labelEs: 'Hojas Verdes',
    labelDe: 'Grüne Blätter',
    descEn: 'Crushed stems, morning dew, freshly cut grass, galbanum, botanical sap',
    descZh: '青绿茎叶、晨露、青草、植物汁液',
    descZhHant: '青綠莖葉、晨露、青草、植物汁液',
    descFr: 'Tiges froissées, rosée du matin, herbe coupée, sève végétale',
    descEs: 'Tallos triturados, rocío matutino, hierba recién cortada, savia botánica',
    descDe: 'Zerriebene Stängel, Morgentau, frisch gemähtes Gras, Pflanzensaft'
  },
  {
    id: 'fig & milky greens',
    icon: '🍃',
    labelEn: 'Fig & Milky Greens',
    labelZh: '无花果与柔和绿意',
    labelZhHant: '無花果與柔和綠意',
    labelFr: 'Figue & Verts Lactés',
    labelEs: 'Higo & Verdes Lácteos',
    labelDe: 'Feige & Milchiges Grün',
    descEn: 'Milky fig sap, green fig leaves, sunlit coconut nuances, warm creamy woods',
    descZh: '无花果汁液、青绿叶片、柔和奶感与木质',
    descZhHant: '無花果汁液、青綠葉片、柔和奶感與木質',
    descFr: 'Sève de figue lactée, feuilles vertes de figuier, touches de coco et bois chauds',
    descEs: 'Savia de higo láctea, hojas verdes de higuera, notas de coco y maderas cálidas',
    descDe: 'Milchiger Feigensaft, grüne Feigenblätter, warme cremige Hölzer'
  },
  {
    id: 'sea breeze',
    icon: '🌊',
    labelEn: 'Sea Breeze & Salt',
    labelZh: '海风与海盐',
    labelZhHant: '海風與海鹽',
    labelFr: 'Brise Marine & Sel',
    labelEs: 'Brisa Marina & Sal',
    labelDe: 'Meeresbrise & Salz',
    descEn: 'Ocean mist, mineral driftwood, coastal sage',
    descZh: '海雾、矿物感、海盐、漂流木',
    descZhHant: '海霧、礦物感、海鹽、漂流木',
    descFr: 'Brume océanique, bois flotté minéral, sel marin',
    descEs: 'Bruma oceánica, madera flotante mineral, sal marina',
    descDe: 'Ozeanische Gischt, mineralisches Treibholz, Meersalz'
  },
  {
    id: 'fresh flowers',
    icon: '🌸',
    labelEn: 'Fresh Flowers',
    labelZh: '新鲜花朵',
    labelZhHant: '新鮮花朵',
    labelFr: 'Fleurs Fraîches',
    labelEs: 'Flores Frescas',
    labelDe: 'Frische Blüten',
    descEn: 'Airy petal dew, delicate neroli, soft peony',
    descZh: '带露花瓣、橙花、柔和牡丹',
    descZhHant: '帶露花瓣、橙花、柔和牡丹',
    descFr: 'Pétales perlés de rosée, néroli délicat, pivoine douce',
    descEs: 'Pétalos con rocío, neroli delicado, peonía suave',
    descDe: 'Tautropfen auf Blütenblättern, zartes Neroli, sanfte Pfingstrose'
  },
  {
    id: 'creamy vanilla',
    icon: '🍦',
    labelEn: 'Creamy Vanilla',
    labelZh: '柔和香草',
    labelZhHant: '柔和香草',
    labelFr: 'Vanille Onctueuse',
    labelEs: 'Vainilla Cremosa',
    labelDe: 'Cremige Vanille',
    descEn: 'Warm baked vanilla bean, soothing tonka',
    descZh: '温暖香草豆、柔和零陵香豆',
    descZhHant: '溫暖香草豆、柔和零陵香豆',
    descFr: 'Gousse de vanille chaude, fève tonka réconfortante',
    descEs: 'Vaina de vainilla tibia, haba tonka reconfortante',
    descDe: 'Warme Vanilleschote, beruhigende Tonkabohne'
  },
  {
    id: 'warm spices',
    icon: '✨',
    labelEn: 'Warm Subtle Spices',
    labelZh: '温和香辛料',
    labelZhHant: '溫和香辛料',
    labelFr: 'Épices Douces & Chaudes',
    labelEs: 'Especias Cálidas y Suaves',
    labelDe: 'Warme Sanfte Gewürze',
    descEn: 'Cardamom, pink pepper, cozy amber warmth',
    descZh: '小豆蔻、粉红胡椒、温暖琥珀感',
    descZhHant: '小豆蔻、粉紅胡椒、溫暖琥珀感',
    descFr: 'Cardamome, poivre rose, ambre chaleureux et douillet',
    descEs: 'Cardamomo, pimienta rosa, calidez ambarina acogedora',
    descDe: 'Kardamom, rosa Pfeffer, behagliche Bernstein-Wärme'
  },
  {
    id: 'incense or smoke',
    icon: '🕯️',
    labelEn: 'Incense & Smoke',
    labelZh: '焚香与烟熏',
    labelZhHant: '焚香與煙燻',
    labelFr: 'Encens & Fumée',
    labelEs: 'Incienso & Humo',
    labelDe: 'Weihrauch & Rauch',
    descEn: 'Frankincense, quiet resin, holy smoky woods',
    descZh: '乳香、树脂、安静木质烟熏',
    descZhHant: '乳香、樹脂、安靜木質煙燻',
    descFr: 'Encens oliban, résines apaisantes, bois fumés sacrés',
    descEs: 'Incienso olíbano, resina tranquila, maderas sagradas ahumadas',
    descDe: 'Weihrauch, ruhiges Harz, heilige rauchige Hölzer'
  },
  {
    id: 'powdery makeup',
    icon: '🪞',
    labelEn: 'Powdery or Iris',
    labelZh: '粉感与鸢尾',
    labelZhHant: '粉感與鳶尾',
    labelFr: 'Poudré & Iris',
    labelEs: 'Empolvado & Iris',
    labelDe: 'Pudrig & Iris',
    descEn: 'Soft iris root, gentle vintage vanity powder',
    descZh: '柔和鸢尾根、淡淡复古粉香',
    descZhHant: '柔和鳶尾根、淡淡復古粉香',
    descFr: "Racine d'iris soyeuse, poudre de toilette vintage et délicate",
    descEs: 'Raíz de iris suave, polvo de tocador vintage delicado',
    descDe: 'Zarte Iriswurzel, feiner pudriger Vintage-Duft'
  },
  {
    id: 'fruits',
    icon: '🍑',
    labelEn: 'Juicy Fruits',
    labelZh: '多汁水果',
    labelZhHant: '多汁水果',
    labelFr: 'Fruits Juteux',
    labelEs: 'Frutas Jugosas',
    labelDe: 'Saftige Früchte',
    descEn: 'Crisp pear, white peach, blackcurrant',
    descZh: '青梨、白桃、黑加仑',
    descZhHant: '青梨、白桃、黑加侖',
    descFr: 'Poire croquante, pêche blanche, cassis acidulé',
    descEs: 'Pera crujiente, melocotón blanco, grosella negra',
    descDe: 'Knackige Birne, weißer Pfirsich, schwarze Johannisbeere'
  },
  {
    id: 'herbs',
    icon: '🌱',
    labelEn: 'Garden Herbs & Mint',
    labelZh: '香草与薄荷',
    labelZhHant: '香草與薄荷',
    labelFr: 'Herbes Aromatiques & Menthe',
    labelEs: 'Hierbas de Jardín & Menta',
    labelDe: 'Gartenkräuter & Minze',
    descEn: 'Crushed mint, basil, lavender, rosemary',
    descZh: '薄荷、罗勒、薰衣草、迷迭香',
    descZhHant: '薄荷、羅勒、薰衣草、迷迭香',
    descFr: 'Menthe fraîche froissée, basilic, lavande, romarin',
    descEs: 'Menta triturada, albahaca, lavanda, romero',
    descDe: 'Zerriebene Minze, Basilikum, Lavendel, Rosmarin'
  }
];

export const DISLIKED_SMELL_OPTIONS: OptionItem[] = [
  {
    id: 'too sweet',
    icon: '🍭',
    labelEn: 'Sweet / Cloying',
    labelZh: '甜腻',
    labelZhHant: '甜膩',
    labelFr: 'Sucré / Écoeurant',
    labelEs: 'Dulce / Empalagoso',
    labelDe: 'Süß / Klebrig',
    descEn: 'Heavy caramel, dense candy, syrupy amber',
    descZh: '厚重焦糖、浓稠棉花糖、糖浆琥珀',
    descZhHant: '厚重焦糖、濃稠棉花糖、糖漿琥珀',
    descFr: 'Caramel lourd, bonbon dense, ambre sirupeux',
    descEs: 'Caramelo pesado, golosina densa, ámbar almibarado',
    descDe: 'Schweres Karamell, dichte Süße, sirupartiger Bernstein'
  },
  {
    id: 'too strong',
    icon: '💥',
    labelEn: 'Strong',
    labelZh: '浓烈',
    labelZhHant: '濃烈',
    labelFr: 'Fort / Intense',
    labelEs: 'Fuerte / Intenso',
    labelDe: 'Stark',
    descEn: 'Suffocating projection, sharp attack',
    descZh: '存在感过强、窒息扩散感、容易头晕',
    descZhHant: '存在感過強、窒息擴散感、容易頭暈',
    descFr: 'Sillage étouffant, projection agressive, maux de tête',
    descEs: 'Proyección sofocante, ataque punzante, dolor de cabeza',
    descDe: 'Erdrückende Sillage, aggressive Kopfnote, Kopfschmerzgefahr'
  },
  {
    id: 'too powdery',
    icon: '💨',
    labelEn: 'Powdery',
    labelZh: '脂粉感',
    labelZhHant: '脂粉感',
    labelFr: 'Poudré',
    labelEs: 'Empolvado',
    labelDe: 'Pudrig',
    descEn: 'Dense makeup powder, heavy talc',
    descZh: '浓重的老式滑石粉、沉闷脂粉味',
    descZhHant: '濃重的老式滑石粉、沉悶脂粉味',
    descFr: 'Poudre de maquillage dense, talc lourd et poussiéreux',
    descEs: 'Polvo de maquillaje denso, talco pesado y seco',
    descDe: 'Dichter Make-up-Puder, schweres Talkum'
  },
  {
    id: 'too mature',
    icon: '🏛️',
    labelEn: 'Mature / Retro',
    labelZh: '成熟复古感',
    labelZhHant: '成熟復古感',
    labelFr: 'Mature / Rétro',
    labelEs: 'Maduro / Retro',
    labelDe: 'Reif / Retro',
    descEn: 'Vintage sharp aldehydes, heavy retro vibe',
    descZh: '尖锐复古浓皂感醛香、沉重年代感',
    descZhHant: '尖銳復古濃皂感醛香、沉重年代感',
    descFr: "Aldéhydes savonneux vintage, ambiance d'époque trop lourde",
    descEs: 'Aldehídos jabonosos vintage, aire anticuado pesado',
    descDe: 'Scharfe Vintage-Aldehyde, schwere Nostalgie-Note'
  },
  {
    id: 'too floral',
    icon: '🌺',
    labelEn: 'Heavy Floral',
    labelZh: '浓花香',
    labelZhHant: '濃花香',
    labelFr: 'Floral Intense',
    labelEs: 'Floral Intenso',
    labelDe: 'Schwer Blumig',
    descEn: 'Indolic heavy tuberose or jasmine bombs',
    descZh: '高侵略性晚香玉、过于浓郁肉欲花香',
    descZhHant: '高侵略性晚香玉、過於濃郁肉欲花香',
    descFr: 'Tubéreuse envahissante ou jasmin capiteux et indolant',
    descEs: 'Nardo invasivo o jazmín pesado y abrumador',
    descDe: 'Aufdringliche Tuberose oder betörend schwerer Jasmin'
  },
  {
    id: 'too smoky',
    icon: '🔥',
    labelEn: 'Heavy Smoke',
    labelZh: '重烟熏',
    labelZhHant: '重煙燻',
    labelFr: 'Fumé Intense',
    labelEs: 'Humo Intenso',
    labelDe: 'Stark Rauchig',
    descEn: 'Burnt wood, heavy campfire, thick peat',
    descZh: '焦糊木炭、浓烟或寺庙大烟',
    descZhHant: '焦糊木炭、濃煙或寺廟大煙',
    descFr: 'Bois brûlé, feu de camp étouffant, tourbe épaisse',
    descEs: 'Madera quemada, fogata densa, turba espesa',
    descDe: 'Verbranntes Holz, dichter Lagerfeuerrauch, schwere Torfnote'
  },
  {
    id: 'too spicy',
    icon: '🌶️',
    labelEn: 'Spicy',
    labelZh: '辛辣感',
    labelZhHant: '辛辣感',
    labelFr: 'Épicé',
    labelEs: 'Especiado',
    labelDe: 'Würzig',
    descEn: 'Cloves, cumin, black pepper',
    descZh: '丁香、黑胡椒或浓烈香料',
    descZhHant: '丁香、黑胡椒或濃烈香料',
    descFr: 'Clou de girofle, cumin, poivre noir',
    descEs: 'Clavo, comino, pimienta negra',
    descDe: 'Gewürznelke, Kreuzkümmel, schwarzer Pfeffer'
  },
  {
    id: 'too musky',
    icon: '🐾',
    labelEn: 'Animalic Musk',
    labelZh: '动物麝香',
    labelZhHant: '動物麝香',
    labelFr: 'Musc Animal',
    labelEs: 'Almizcle Animal',
    labelDe: 'Animalischer Moschus',
    descEn: 'Dirty animal musk, heavy sweaty notes',
    descZh: '浑浊动物麝香、汗液感体味',
    descZhHant: '渾濁動物麝香、汗液感體味',
    descFr: 'Musc animal sale, nuances de transpiration et cuir gras',
    descEs: 'Almizcle animal sucio, notas pesadas sudorosas',
    descDe: 'Schmutziger Tier-Moschus, schwere Schweißnoten'
  },
  {
    id: 'too bitter',
    icon: '🍵',
    labelEn: 'Bitter',
    labelZh: '苦涩感',
    labelZhHant: '苦澀感',
    labelFr: 'Amer',
    labelEs: 'Amargo',
    labelDe: 'Bitter',
    descEn: 'Bitter medicine, wormwood',
    descZh: '极苦草药汁、苦涩龙胆根',
    descZhHant: '極苦草藥汁、苦澀龍膽根',
    descFr: 'Remède amer, absinthe, gentiane austère',
    descEs: 'Medicina amarga, ajenjo, genciana severa',
    descDe: 'Bittere Medizin, herber Wermut, Enzian'
  },
  {
    id: 'too synthetic',
    icon: '🧪',
    labelEn: 'Synthetic',
    labelZh: '化工合成感',
    labelZhHant: '化工合成感',
    labelFr: 'Synthétique',
    labelEs: 'Sintético',
    labelDe: 'Synthetisch',
    descEn: 'Alcohol note, cheap solvent feel',
    descZh: '工业酒精感、劣质人造香精',
    descZhHant: '工業酒精感、劣質人造香精',
    descFr: "Odeur d'alcool, solvant artificiel bon marché",
    descEs: 'Sensación de alcohol, solvente artificial barato',
    descDe: 'Alkoholnote, billiges Lösungsmittelgefühl'
  },
  {
    id: 'too soapy',
    icon: '🧼',
    labelEn: 'Soapy',
    labelZh: '皂感',
    labelZhHant: '皂感',
    labelFr: 'Savonneux',
    labelEs: 'Jabonoso',
    labelDe: 'Seifig',
    descEn: 'Alkaline bar soap, bleach laundry',
    descZh: '洗衣粉漂白感、厚重碱性肥皂',
    descZhHant: '洗衣粉漂白感、厚重鹼性肥皂',
    descFr: 'Savonnette alcaline, odeur de lessive javellisée',
    descEs: 'Jabón alcalino, olor a lejía o detergente',
    descDe: 'Kernseife, Bleiche oder Waschpulver'
  }
];

export const MOOD_OPTIONS: OptionItem[] = [
  {
    id: 'clean',
    icon: '✨',
    labelEn: 'Clean & Crisp',
    labelZh: '干净从容',
    labelZhHant: '乾淨從容',
    labelFr: 'Propre & Épuré',
    labelEs: 'Limpio & Nítido',
    labelDe: 'Klar & Rein'
  },
  {
    id: 'calm & serene',
    icon: '🧘',
    labelEn: 'Calm & Serene',
    labelZh: '沉静禅意',
    labelZhHant: '沉靜禪意',
    labelFr: 'Calme & Serein',
    labelEs: 'Calmado & Sereno',
    labelDe: 'Ruhig & Gelassen'
  },
  {
    id: 'confident & sharp',
    icon: '💼',
    labelEn: 'Confident & Sharp',
    labelZh: '从容利落',
    labelZhHant: '從容俐落',
    labelFr: 'Confiant & Affirmé',
    labelEs: 'Seguro & Decidido',
    labelDe: 'Selbstbewusst & Markant'
  },
  {
    id: 'warm & cozy',
    icon: '☕',
    labelEn: 'Warm & Cozy',
    labelZh: '温润治愈',
    labelZhHant: '溫潤治癒',
    labelFr: 'Chaleureux & Réconfortant',
    labelEs: 'Cálido & Acogedor',
    labelDe: 'Warm & Behaglich'
  },
  {
    id: 'romantic & soft',
    icon: '🌸',
    labelEn: 'Romantic & Soft',
    labelZh: '浪漫温柔',
    labelZhHant: '浪漫溫柔',
    labelFr: 'Romantique & Doux',
    labelEs: 'Romántico & Suave',
    labelDe: 'Romantisch & Zart'
  },
  {
    id: 'elegant',
    icon: '🏛️',
    labelEn: 'Elegant & Graceful',
    labelZh: '优雅得体',
    labelZhHant: '優雅得體',
    labelFr: 'Élégant & Raffiné',
    labelEs: 'Elegante & Distinguido',
    labelDe: 'Elegant & Anmutig'
  },
  {
    id: 'mysterious',
    icon: '🌙',
    labelEn: 'Mysterious & Deep',
    labelZh: '神秘深邃',
    labelZhHant: '神秘深邃',
    labelFr: 'Mystérieux & Profond',
    labelEs: 'Misterioso & Profundo',
    labelDe: 'Geheimnisvoll & Tiefgründig'
  },
  {
    id: 'playful',
    icon: '🎈',
    labelEn: 'Playful & Uplifting',
    labelZh: '灵动愉悦',
    labelZhHant: '靈動愉悅',
    labelFr: 'Pétillant & Joyeux',
    labelEs: 'Alegre & Chispeante',
    labelDe: 'Verspielt & Belebend'
  },
  {
    id: 'refreshing & energetic',
    icon: '🌿',
    labelEn: 'Refreshing & Airy',
    labelZh: '清爽生机',
    labelZhHant: '清爽生機',
    labelFr: 'Frais & Tonique',
    labelEs: 'Fresco & Vital',
    labelDe: 'Erfrischend & Lebendig'
  }
];

export const IMPRESSION_OPTIONS: OptionItem[] = [
  {
    id: 'natural & transparent',
    labelEn: 'Natural & Transparent',
    labelZh: '自然通透不刻意',
    labelZhHant: '自然通透不刻意',
    labelFr: 'Naturel & Transparent',
    labelEs: 'Natural & Transparente',
    labelDe: 'Natürlich & Transparent'
  },
  {
    id: 'refined & polished',
    labelEn: 'Refined & Polished',
    labelZh: '精致考究有品位',
    labelZhHant: '精緻考究有品位',
    labelFr: 'Raffiné & Soigné',
    labelEs: 'Refinado & Elegante',
    labelDe: 'Raffiniert & Poliert'
  },
  {
    id: 'quiet luxury',
    labelEn: 'Quiet Luxury',
    labelZh: '低调沉静质感',
    labelZhHant: '低調沉靜質感',
    labelFr: 'Luxe Discret',
    labelEs: 'Lujo Discreto',
    labelDe: 'Stiller Luxus'
  },
  {
    id: 'approachable',
    labelEn: 'Warm & Approachable',
    labelZh: '亲切温暖无距离',
    labelZhHant: '親切溫暖無距離',
    labelFr: 'Chaleureux & Accessible',
    labelEs: 'Cálido & Accesible',
    labelDe: 'Herzlich & Nahbar'
  }
];

export const SWEETNESS_OPTIONS = [
  {
    id: 'almost none',
    labelEn: 'Almost None',
    labelZh: '不甜',
    labelZhHant: '不甜',
    labelFr: 'Sans Sucre',
    labelEs: 'Sin Dulzor',
    labelDe: 'Nicht Süß'
  },
  {
    id: 'low',
    labelEn: 'Low',
    labelZh: '微甜',
    labelZhHant: '微甜',
    labelFr: 'Légèrement Sucré',
    labelEs: 'Ligeramente Dulce',
    labelDe: 'Leicht Süß'
  },
  {
    id: 'moderate',
    labelEn: 'Moderate',
    labelZh: '中等甜度',
    labelZhHant: '中等甜度',
    labelFr: 'Modérément Sucré',
    labelEs: 'Moderadamente Dulce',
    labelDe: 'Mäßig Süß'
  },
  {
    id: 'sweet',
    labelEn: 'Rich & Sweet',
    labelZh: '很甜',
    labelZhHant: '很甜',
    labelFr: 'Très Sucré & Gourmand',
    labelEs: 'Muy Dulce & Goloso',
    labelDe: 'Sehr Süß & Gourmand'
  }
];

export const FRESHNESS_OPTIONS = [
  {
    id: 'warm & cozy',
    labelEn: 'Warm & Cozy',
    labelZh: '温暖',
    labelZhHant: '溫暖',
    labelFr: 'Chaud & Réconfortant',
    labelEs: 'Cálido & Acogedor',
    labelDe: 'Warm & Behaglich'
  },
  {
    id: 'moderate',
    labelEn: 'Moderate',
    labelZh: '中等',
    labelZhHant: '中等',
    labelFr: 'Équilibré',
    labelEs: 'Moderado',
    labelDe: 'Ausgewogen'
  },
  {
    id: 'fresh',
    labelEn: 'Fresh & Airy',
    labelZh: '清新',
    labelZhHant: '清新',
    labelFr: 'Frais & Aérien',
    labelEs: 'Fresco & Aireado',
    labelDe: 'Frisch & Luftig'
  },
  {
    id: 'very fresh',
    labelEn: 'Very Fresh',
    labelZh: '非常清新',
    labelZhHant: '非常清新',
    labelFr: 'Très Frais & Vif',
    labelEs: 'Muy Fresco & Nítido',
    labelDe: 'Sehr Frisch & Eisig'
  }
];

export const FLORAL_TOLERANCE_OPTIONS = [
  {
    id: 'avoid floral',
    labelEn: 'Avoid Floral',
    labelZh: '避免花香',
    labelZhHant: '避免花香',
    labelFr: 'Sans Fleurs',
    labelEs: 'Evitar Florales',
    labelDe: 'Ohne Blumen'
  },
  {
    id: 'subtle floral only',
    labelEn: 'Subtle Floral',
    labelZh: '淡花香',
    labelZhHant: '淡花香',
    labelFr: 'Floral Subtil',
    labelEs: 'Floral Sutil',
    labelDe: 'Dezent Blumig'
  },
  {
    id: 'balanced',
    labelEn: 'Balanced Floral',
    labelZh: '中等花香',
    labelZhHant: '中等花香',
    labelFr: 'Floral Équilibré',
    labelEs: 'Floral Equilibrado',
    labelDe: 'Ausgewogen Blumig'
  },
  {
    id: 'love floral',
    labelEn: 'Love Floral',
    labelZh: '很喜欢花香',
    labelZhHant: '很喜歡花香',
    labelFr: 'Très Floral',
    labelEs: 'Muy Floral',
    labelDe: 'Sehr Blumig'
  }
];

export const SEASON_OPTIONS = [
  {
    id: 'all seasons',
    icon: '🌍',
    labelEn: 'All Seasons',
    labelZh: '四季皆宜',
    labelZhHant: '四季皆宜',
    labelFr: 'Toutes Saisons',
    labelEs: 'Todas las Estaciones',
    labelDe: 'Ganzjährig'
  },
  {
    id: 'spring',
    icon: '🌱',
    labelEn: 'Spring',
    labelZh: '春季',
    labelZhHant: '春季',
    labelFr: 'Printemps',
    labelEs: 'Primavera',
    labelDe: 'Frühling'
  },
  {
    id: 'summer',
    icon: '☀️',
    labelEn: 'Summer',
    labelZh: '夏季',
    labelZhHant: '夏季',
    labelFr: 'Été',
    labelEs: 'Verano',
    labelDe: 'Sommer'
  },
  {
    id: 'autumn',
    icon: '🍂',
    labelEn: 'Autumn',
    labelZh: '秋季',
    labelZhHant: '秋季',
    labelFr: 'Automne',
    labelEs: 'Otoño',
    labelDe: 'Herbst'
  },
  {
    id: 'winter',
    icon: '❄️',
    labelEn: 'Winter',
    labelZh: '冬季',
    labelZhHant: '冬季',
    labelFr: 'Hiver',
    labelEs: 'Invierno',
    labelDe: 'Winter'
  }
];

export const OCCASION_OPTIONS = [
  {
    id: 'daily commute',
    labelEn: 'Daily Commute / Easy Wear',
    labelZh: '日常通勤 / 随行百搭',
    labelZhHant: '日常通勤 / 隨行百搭',
    labelFr: 'Quotidien / Bureau',
    labelEs: 'Uso Diario / Casual',
    labelDe: 'Alltag / Büro'
  },
  {
    id: 'workplace',
    labelEn: 'Workplace & Focus',
    labelZh: '职场办公 / 沉浸学习',
    labelZhHant: '職場辦公 / 沉浸學習',
    labelFr: 'Travail & Concentration',
    labelEs: 'Trabajo & Concentración',
    labelDe: 'Arbeit & Fokus'
  },
  {
    id: 'date night',
    labelEn: 'Date Night & Intimacy',
    labelZh: '约会聚会 / 亲密时光',
    labelZhHant: '約會聚會 / 親密時光',
    labelFr: 'Rendez-vous & Soirée',
    labelEs: 'Cita & Encuentro Íntimo',
    labelDe: 'Date & Romantik'
  },
  {
    id: 'relaxing alone',
    labelEn: 'Relaxing Alone / Bedtime',
    labelZh: '睡前安眠 / 独处独享',
    labelZhHant: '睡前安眠 / 獨處獨享',
    labelFr: 'Détente & Soir',
    labelEs: 'Relax / Antes de Dormir',
    labelDe: 'Entspannung & Abend'
  },
  {
    id: 'travel',
    labelEn: 'Travel & Weekends',
    labelZh: '旅行度假 / 户外漫步',
    labelZhHant: '旅行度假 / 戶外漫步',
    labelFr: 'Voyage & Week-end',
    labelEs: 'Viajes & Fin de Semana',
    labelDe: 'Reisen & Wochenende'
  },
  {
    id: 'formal evening',
    labelEn: 'Formal & Dinner',
    labelZh: '正式晚宴 / 盛装聚会',
    labelZhHant: '正式晚宴 / 盛裝聚會',
    labelFr: 'Soirée Habillée / Gala',
    labelEs: 'Evento Formal & Cena',
    labelDe: 'Formeller Abend & Gala'
  }
];

export interface BudgetTier {
  id: string;
  nameEn: string;
  nameZh: string;
  nameZhHant?: string;
  nameFr?: string;
  nameEs?: string;
  nameDe?: string;
  range: string;
  level: 1 | 2 | 3 | 4;
}

export interface BudgetPreference {
  id: 'accessible' | 'mid-range' | 'premium' | 'no-preference';
  nameEn: string;
  nameZh: string;
  nameZhHant: string;
  nameFr: string;
  nameEs: string;
  nameDe: string;
  level?: 2 | 3 | 4;
}

export const BUDGET_PREFERENCES: BudgetPreference[] = [
  { id:'accessible', nameEn:'More accessible', nameZh:'价格更友好', nameZhHant:'價格更友善', nameFr:'Plus accessible', nameEs:'Más accesible', nameDe:'Preislich zugänglicher', level:2 },
  { id:'mid-range', nameEn:'Mid-range', nameZh:'中等预算', nameZhHant:'中等預算', nameFr:'Budget moyen', nameEs:'Presupuesto medio', nameDe:'Mittleres Budget', level:3 },
  { id:'premium', nameEn:'Premium', nameZh:'高端选择', nameZhHant:'高端選擇', nameFr:'Haut de gamme', nameEs:'Premium', nameDe:'Premium', level:4 },
  { id:'no-preference', nameEn:'No preference', nameZh:'预算不限', nameZhHant:'預算不限', nameFr:'Sans préférence', nameEs:'Sin preferencia', nameDe:'Keine Präferenz' }
];

export const BUDGET_TIERS: Record<Currency, BudgetTier[]> = {
  GBP: [
    { id: 'under £50', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under £50', level: 1 },
    { id: '£50–£100', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: '£50 – £100', level: 2 },
    { id: '£100–£180', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: '£100 – £180', level: 3 },
    { id: '£180+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: '£180+', level: 4 }
  ],
  RMB: [
    { id: 'under ¥500', nameEn: 'Accessible Tier', nameZh: '高性价比与体验装', nameZhHant: '高性價比與體驗裝', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: '¥500 以下', level: 1 },
    { id: '¥500–¥1000', nameEn: 'Designer Standards', nameZh: '经典大牌主流', nameZhHant: '經典大牌主流', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: '¥500 – ¥1000', level: 2 },
    { id: '¥1000–¥1800', nameEn: 'Artisanal Niche', nameZh: '经典沙龙香水屋', nameZhHant: '經典沙龍香水屋', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: '¥1000 – ¥1800', level: 3 },
    { id: '¥1800+', nameEn: 'Prestige Luxury', nameZh: '高定奢享典藏', nameZhHant: '高定奢享典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: '¥1800 以上', level: 4 }
  ],
  USD: [
    { id: 'under $65', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under $65', level: 1 },
    { id: '$65–$130', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: '$65 – $130', level: 2 },
    { id: '$130–$230', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: '$130 – $230', level: 3 },
    { id: '$230+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: '$230+', level: 4 }
  ],
  CAD: [
    { id: 'under CA$85', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under CA$85', level: 1 },
    { id: 'CA$85–CA$170', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: 'CA$85 – CA$170', level: 2 },
    { id: 'CA$170–CA$300', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: 'CA$170 – CA$300', level: 3 },
    { id: 'CA$300+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: 'CA$300+', level: 4 }
  ],
  EUR: [
    { id: 'under €60', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under €60', level: 1 },
    { id: '€60–€120', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: '€60 – €120', level: 2 },
    { id: '€120–€210', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: '€120 – €210', level: 3 },
    { id: '€210+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: '€210+', level: 4 }
  ],
  CHF: [
    { id: 'under CHF 60', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under CHF 60', level: 1 },
    { id: 'CHF 60–CHF 120', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: 'CHF 60 – CHF 120', level: 2 },
    { id: 'CHF 120–CHF 210', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: 'CHF 120 – CHF 210', level: 3 },
    { id: 'CHF 210+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: 'CHF 210+', level: 4 }
  ],
  HKD: [
    { id: 'under HK$500', nameEn: 'Accessible Tier', nameZh: '高性价比与体验装', nameZhHant: '高性價比與體驗裝', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'HK$500 以下', level: 1 },
    { id: 'HK$500–HK$1000', nameEn: 'Designer Standards', nameZh: '经典大牌主流', nameZhHant: '經典大牌主流', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: 'HK$500 – HK$1,000', level: 2 },
    { id: 'HK$1000–HK$1800', nameEn: 'Artisanal Niche', nameZh: '经典沙龙香水屋', nameZhHant: '經典沙龍香水屋', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: 'HK$1,000 – HK$1,800', level: 3 },
    { id: 'HK$1800+', nameEn: 'Prestige Luxury', nameZh: '高定奢享典藏', nameZhHant: '高定奢享典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: 'HK$1,800 以上', level: 4 }
  ],
  AUD: [
    { id: 'under A$95', nameEn: 'Accessible Tier', nameZh: '平价宝藏与入门', nameZhHant: '平價寶藏與入門', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'Under A$95', level: 1 },
    { id: 'A$95–A$190', nameEn: 'Designer Classics', nameZh: '经典大牌进阶', nameZhHant: '經典大牌進階', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: 'A$95 – A$190', level: 2 },
    { id: 'A$190–A$340', nameEn: 'Premium Niche', nameZh: '高端沙龙工坊', nameZhHant: '高端沙龍工坊', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: 'A$190 – A$340', level: 3 },
    { id: 'A$340+', nameEn: 'Haute Parfumerie', nameZh: '顶级奢华典藏', nameZhHant: '頂級奢華典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: 'A$340+', level: 4 }
  ],
  TWD: [
    { id: 'under NT$2000', nameEn: 'Accessible Tier', nameZh: '高性价比与体验装', nameZhHant: '高性價比與體驗裝', nameFr: 'Entrée de Gamme Accessible', nameEs: 'Gama Accesible', nameDe: 'Erschwingliche Einstiegsdüfte', range: 'NT$2,000 以下', level: 1 },
    { id: 'NT$2000–NT$4000', nameEn: 'Designer Standards', nameZh: '经典大牌主流', nameZhHant: '經典大牌主流', nameFr: 'Classiques de Grandes Maisons', nameEs: 'Clásicos de Diseñador', nameDe: 'Designer-Klassiker', range: 'NT$2,000 – NT$4,000', level: 2 },
    { id: 'NT$4000–NT$7500', nameEn: 'Artisanal Niche', nameZh: '经典沙龙香水屋', nameZhHant: '經典沙龍香水屋', nameFr: 'Haute Parfumerie de Niche', nameEs: 'Perfumería de Nicho Premium', nameDe: 'Exklusive Nischenmarken', range: 'NT$4,000 – NT$7,500', level: 3 },
    { id: 'NT$7500+', nameEn: 'Prestige Luxury', nameZh: '高定奢享典藏', nameZhHant: '高定奢享典藏', nameFr: "Haute Parfumerie d'Exception", nameEs: 'Alta Perfumería de Lujo', nameDe: 'Haute Parfumerie Luxus', range: 'NT$7,500 以上', level: 4 }
  ]
};

export const ZODIAC_OPTIONS = [
  { id: 'aries', symbol: '♈', nameEn: 'Aries', nameZh: '白羊座', nameZhHant: '白羊座', nameFr: 'Bélier', nameEs: 'Aries', nameDe: 'Widder', dates: '03.21 - 04.19', element: 'Fire' },
  { id: 'taurus', symbol: '♉', nameEn: 'Taurus', nameZh: '金牛座', nameZhHant: '金牛座', nameFr: 'Taureau', nameEs: 'Tauro', nameDe: 'Stier', dates: '04.20 - 05.20', element: 'Earth' },
  { id: 'gemini', symbol: '♊', nameEn: 'Gemini', nameZh: '双子座', nameZhHant: '雙子座', nameFr: 'Gémeaux', nameEs: 'Géminis', nameDe: 'Zwillinge', dates: '05.21 - 06.20', element: 'Air' },
  { id: 'cancer', symbol: '♋', nameEn: 'Cancer', nameZh: '巨蟹座', nameZhHant: '巨蟹座', nameFr: 'Cancer', nameEs: 'Cáncer', nameDe: 'Krebs', dates: '06.21 - 07.22', element: 'Water' },
  { id: 'leo', symbol: '♌', nameEn: 'Leo', nameZh: '狮子座', nameZhHant: '獅子座', nameFr: 'Lion', nameEs: 'Leo', nameDe: 'Löwe', dates: '07.23 - 08.22', element: 'Fire' },
  { id: 'virgo', symbol: '♍', nameEn: 'Virgo', nameZh: '处女座', nameZhHant: '處女座', nameFr: 'Vierge', nameEs: 'Virgo', nameDe: 'Jungfrau', dates: '08.23 - 09.22', element: 'Earth' },
  { id: 'libra', symbol: '♎', nameEn: 'Libra', nameZh: '天秤座', nameZhHant: '天秤座', nameFr: 'Balance', nameEs: 'Libra', nameDe: 'Waage', dates: '09.23 - 10.22', element: 'Air' },
  { id: 'scorpio', symbol: '♏', nameEn: 'Scorpio', nameZh: '天蝎座', nameZhHant: '天蠍座', nameFr: 'Scorpion', nameEs: 'Escorpio', nameDe: 'Skorpion', dates: '10.23 - 11.21', element: 'Water' },
  { id: 'sagittarius', symbol: '♐', nameEn: 'Sagittarius', nameZh: '射手座', nameZhHant: '射手座', nameFr: 'Sagittaire', nameEs: 'Sagitario', nameDe: 'Schütze', dates: '11.22 - 12.21', element: 'Fire' },
  { id: 'capricorn', symbol: '♑', nameEn: 'Capricorn', nameZh: '摩羯座', nameZhHant: '摩羯座', nameFr: 'Capricorne', nameEs: 'Capricornio', nameDe: 'Steinbock', dates: '12.22 - 01.19', element: 'Earth' },
  { id: 'aquarius', symbol: '♒', nameEn: 'Aquarius', nameZh: '水瓶座', nameZhHant: '水瓶座', nameFr: 'Verseau', nameEs: 'Acuario', nameDe: 'Wassermann', dates: '01.20 - 02.18', element: 'Air' },
  { id: 'pisces', symbol: '♓', nameEn: 'Pisces', nameZh: '双鱼座', nameZhHant: '雙魚座', nameFr: 'Poissons', nameEs: 'Piscis', nameDe: 'Fische', dates: '02.19 - 03.20', element: 'Water' }
];

export const FIVE_ELEMENTS_OPTIONS = [
  { id: 'wood', nameEn: 'Wood', nameZh: '木', nameZhHant: '木', nameFr: 'Bois', nameEs: 'Madera', nameDe: 'Holz', meaningEn: 'Vitality, verdant fig, bamboo, morning rain', meaningZh: '生机盎然，青翠无花果、竹林与晨雨', meaningZhHant: '生機盎然，青翠無花果、竹林與晨雨', meaningFr: 'Vitalité, figue verdoyante, bambou, pluie matinale', meaningEs: 'Vitalidad, higuera verde, bambú, lluvia matutina', meaningDe: 'Vitalität, grüne Feige, Bambus, Morgenregen' },
  { id: 'fire', nameEn: 'Fire', nameZh: '火', nameZhHant: '火', nameFr: 'Feu', nameEs: 'Fuego', nameDe: 'Feuer', meaningEn: 'Radiance, sunny citrus, amber warmth, spice', meaningZh: '热情明亮，阳光柑橘、温暖琥珀与微辛', meaningZhHant: '熱情明亮，陽光柑橘、溫暖琥珀與微辛', meaningFr: 'Éclat, agrumes ensoleillés, ambre chaud et épices', meaningEs: 'Luminosidad, cítricos soleados, ámbar cálido y especias', meaningDe: 'Strahlkraft, sonnige Zitrusnoten, Bernsteinwärme und Gewürze' },
  { id: 'earth', nameEn: 'Earth', nameZh: '土', nameZhHant: '土', nameFr: 'Terre', nameEs: 'Tierra', nameDe: 'Erde', meaningEn: 'Grounded composure, milky sandalwood, soft cedar', meaningZh: '踏实温润，奶香檀木、从容雪松与轻绒', meaningZhHant: '踏實溫潤，奶香檀木、從容雪松與輕絨', meaningFr: 'Sérénité posée, santal lacté, cèdre doux', meaningEs: 'Serenidad arraigada, sándalo lácteo, cedro suave', meaningDe: 'Geerdete Gelassenheit, milchiges Sandelholz, sanfte Zeder' },
  { id: 'metal', nameEn: 'Metal', nameZh: '金', nameZhHant: '金', nameFr: 'Métal', nameEs: 'Metal', nameDe: 'Metall', meaningEn: 'Crisp precision, cold white tea, vetiver, iris', meaningZh: '清冷克制，高山冷白茶、干爽香根草与鸢尾', meaningZhHant: '清冷克制，高山冷白茶、乾爽香根草與鳶尾', meaningFr: 'Clarté épurée, thé blanc frais, vétiver, iris', meaningEs: 'Precisión fresca, té blanco frío, vetiver, iris', meaningDe: 'Klare Präzision, kühler weißer Tee, Vetiver, Iris' },
  { id: 'water', nameEn: 'Water', nameZh: '水', nameZhHant: '水', nameFr: 'Eau', nameEs: 'Agua', nameDe: 'Wasser', meaningEn: 'Flowing calm, ocean mist, waterlily, soft musk', meaningZh: '灵动包容，海盐水雾、睡莲与贴肤白麝香', meaningZhHant: '靈動包容，海鹽水霧、睡蓮與貼膚白麝香', meaningFr: 'Calme fluide, brume marine, nénuphar, musc doux', meaningEs: 'Calma fluida, bruma marina, nenúfar, almizcle suave', meaningDe: 'Fließende Ruhe, Meeresgischt, Seerose, weicher Moschus' }
];

export const AESTHETIC_STYLES = [
  {
    id: 'minimalist zen',
    labelEn: 'Minimalist Zen (Tea & Light Woods)',
    labelZh: '极简禅意 (清茶与浅木)',
    labelZhHant: '極簡禪意 (清茶與淺木)',
    labelFr: 'Zen Minimaliste (Thé & Bois Clairs)',
    labelEs: 'Zen Minimalista (Té & Maderas Claras)',
    labelDe: 'Minimalistisches Zen (Tee & Helle Hölzer)',
    descEn: 'Quiet, clean, serene presence',
    descZh: '低调通透，如同置身竹林茶室',
    descZhHant: '低調通透，如同置身竹林茶室',
    descFr: 'Présence discrète, épurée et sereine',
    descEs: 'Presencia discreta, limpia y serena',
    descDe: 'Ruhige, klare und gelassene Ausstrahlung'
  },
  {
    id: 'classic elegance',
    labelEn: 'Classic French Elegance (Rose & Cedar)',
    labelZh: '法式优雅 (晨露玫瑰与雪松)',
    labelZhHant: '法式優雅 (晨露玫瑰與雪松)',
    labelFr: 'Élégance Française Classique (Rose & Cèdre)',
    labelEs: 'Elegancia Francesa Clásica (Rosa & Cedro)',
    labelDe: 'Klassische Französische Eleganz (Rose & Zeder)',
    descEn: 'Effortlessly polished and refined',
    descZh: '随性得体，漫步巴黎左岸林荫',
    descZhHant: '隨性得體，漫步巴黎左岸林蔭',
    descFr: 'Naturellement distingué et raffiné',
    descEs: 'Naturalmente sofisticado y refinado',
    descDe: 'Mühelos elegant und raffiniert'
  },
  {
    id: 'wild botanical',
    labelEn: 'Wild Botanical (Crushed Leaves & Rain)',
    labelZh: '旷野生机 (揉碎枝叶与微风)',
    labelZhHant: '曠野生機 (揉碎枝葉與微風)',
    labelFr: 'Botanique Sauvage (Feuilles Froissées & Pluie)',
    labelEs: 'Botánico Silvestre (Hojas Trituradas & Lluvia)',
    labelDe: 'Wilde Botanik (Zerriebene Blätter & Regen)',
    descEn: 'Fresh, untamed herbal breeze',
    descZh: '自由爽朗，高山林木与雨后青草',
    descZhHant: '自由爽朗，高山林木與雨後青草',
    descFr: 'Brise fraîche et sauvage de plantes aromatiques',
    descEs: 'Brisa fresca y silvestre de hierbas aromáticas',
    descDe: 'Frische, ungezähmte Kräuterbrise'
  },
  {
    id: 'warm comforting',
    labelEn: 'Warm & Comforting (Milky Sandalwood)',
    labelZh: '温润治愈 (晒过阳光的棉麻)',
    labelZhHant: '溫潤治癒 (曬過陽光的棉麻)',
    labelFr: 'Chaleureux & Réconfortant (Santal Lacté)',
    labelEs: 'Cálido & Reconfortante (Sándalo Lácteo)',
    labelDe: 'Warm & Tröstend (Milchiges Sandelholz)',
    descEn: 'Huggable warmth and gentle musk',
    descZh: '安全感满满的贴肤体香',
    descZhHant: '安全感滿滿的貼膚體香',
    descFr: 'Douceur enveloppante et musc caressant',
    descEs: 'Calidez envolvente y almizcle suave',
    descDe: 'Geborgene Wärme und sanfter Moschus'
  }
];
