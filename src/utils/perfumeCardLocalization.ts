import { Perfume, Language } from '../types';

export type LocalizedMap = Record<string, Partial<Record<Language, string>>>;

/**
 * Multi-language dictionary for Fragrance Families
 */
export const FRAGRANCE_FAMILIES_I18N: Record<string, Record<Language, string>> = {
  'Aldehydic Floral Musk': {
    en: 'Aldehydic Floral Musk',
    zh: '纯白醛香花香麝香调',
    'zh-CN': '纯白醛香花香麝香调',
    'zh-HK': '純白醛香花香麝香調',
    fr: 'Musc Floral Aldéhydé',
    es: 'Almizcle Floral Aldehídico',
    de: 'Aldehydischer Blumen-Moschus'
  },
  'Amber Woody Musk': {
    en: 'Amber Woody Musk',
    zh: '极简分子伪体香 / 龙涎醚',
    'zh-CN': '极简分子伪体香 / 龙涎醚',
    'zh-HK': '極簡分子偽體香 / 龍涎醚',
    fr: 'Ambre Boisé Musqué',
    es: 'Ámbar Amaderado Almizclado',
    de: 'Bernsteinartiger Holz-Moschus'
  },
  'Aquatic Aromatic Wood': {
    en: 'Aquatic Aromatic Wood',
    zh: '水生海风芳香木质调',
    'zh-CN': '水生海风芳香木质调',
    'zh-HK': '水生海風芳香木質調',
    fr: 'Bois Aromatique Aquatique',
    es: 'Madera Aromática Acuática',
    de: 'Aquatisch-aromatisches Holz'
  },
  'Aromatic Aquatic Wood': {
    en: 'Aromatic Aquatic Wood',
    zh: '海盐木质芳香调',
    'zh-CN': '海盐木质芳香调',
    'zh-HK': '海鹽木質芳香調',
    fr: 'Bois Aromatique Aquatique',
    es: 'Madera Aromática Acuática',
    de: 'Aromatisch-aquatisches Holz'
  },
  'Aromatic Citrus Tea': {
    en: 'Aromatic Citrus Tea',
    zh: '芳香红茶柑橘调',
    'zh-CN': '芳香红茶柑橘调',
    'zh-HK': '芳香紅茶柑橘調',
    fr: 'Thé Hespéridé Aromatique',
    es: 'Té Cítrico Aromático',
    de: 'Aromatischer Zitrus-Tee'
  },
  'Aromatic Fruity Woody': {
    en: 'Aromatic Fruity Woody',
    zh: '红茶木质调',
    'zh-CN': '红茶木质调',
    'zh-HK': '紅茶木質調',
    fr: 'Boisé Fruité Aromatique',
    es: 'Amaderado Frutal Aromático',
    de: 'Aromatisch-fruchtiges Holz'
  },
  'Aromatic Green Citrus': {
    en: 'Aromatic Green Citrus',
    zh: '芳香绿意柑橘调',
    'zh-CN': '芳香绿意柑橘调',
    'zh-HK': '芳香綠意柑橘調',
    fr: 'Hespéridé Vert Aromatique',
    es: 'Cítrico Verde Aromático',
    de: 'Aromatische Grüne Zitrusfrucht'
  },
  'Aromatic Green Mint': {
    en: 'Aromatic Green Mint',
    zh: '绿意芳香薄荷草本调',
    'zh-CN': '绿意芳香薄荷草本调',
    'zh-HK': '綠意芳香薄荷草本調',
    fr: 'Menthe Verte Aromatique',
    es: 'Menta Verde Aromática',
    de: 'Aromatische Grüne Minze'
  },
  'Citrus Aromatic': {
    en: 'Citrus Aromatic',
    zh: '柑橘芳香调',
    'zh-CN': '柑橘芳香调',
    'zh-HK': '柑橘芳香調',
    fr: 'Hespéridé Aromatique',
    es: 'Cítrico Aromático',
    de: 'Zitrus-Aromatisch'
  },
  'Citrus Aromatic Fougère': {
    en: 'Citrus Aromatic Fougère',
    zh: '百年经典意式柑橘古龙调',
    'zh-CN': '百年经典意式柑橘古龙调',
    'zh-HK': '百年經典意式柑橘古龍調',
    fr: 'Fougère Hespéridée Aromatique',
    es: 'Fougère Cítrico Aromático',
    de: 'Zitrus-Aromatischer Fougère'
  },
  'Citrus Aromatic Fruity': {
    en: 'Citrus Aromatic Fruity',
    zh: '多汁蜜柑罗勒芳香调',
    'zh-CN': '多汁蜜柑罗勒芳香调',
    'zh-HK': '多汁蜜柑羅勒芳香調',
    fr: 'Hespéridé Fruité Aromatique',
    es: 'Cítrico Frutal Aromático',
    de: 'Aromatisch-fruchtige Zitrusfrucht'
  },
  'Citrus Aromatic Green': {
    en: 'Citrus Aromatic Green',
    zh: '芳香柑橘罗勒木质调',
    'zh-CN': '芳香柑橘罗勒木质调',
    'zh-HK': '芳香柑橘羅勒木質調',
    fr: 'Hespéridé Vert Aromatique',
    es: 'Cítrico Verde Aromático',
    de: 'Aromatisches Grünes Zitrus'
  },
  'Citrus Floral Aromatic': {
    en: 'Citrus Floral Aromatic',
    zh: '明亮气泡橙花柑橘调',
    'zh-CN': '明亮气泡橙花柑橘调',
    'zh-HK': '明亮氣泡橙花柑橘調',
    fr: 'Hespéridé Floral Aromatique',
    es: 'Cítrico Floral Aromático',
    de: 'Zitrus-Floral-Aromatisch'
  },
  'Citrus Floral Rose': {
    en: 'Citrus Floral Rose',
    zh: '清冽柑橘玫瑰调',
    'zh-CN': '清冽柑橘玫瑰调',
    'zh-HK': '清冽柑橘玫瑰調',
    fr: 'Rose Hespéridée Florale',
    es: 'Rosa Floral Cítrica',
    de: 'Zitrus-Blumige Rose'
  },
  'Citrus Fresh Green': {
    en: 'Citrus Fresh Green',
    zh: '柑橘绿意调',
    'zh-CN': '柑橘绿意调',
    'zh-HK': '柑橘綠意調',
    fr: 'Hespéridé Vert Frais',
    es: 'Cítrico Verde Fresco',
    de: 'Frisches Grünes Zitrus'
  },
  'Citrus Musky Floral': {
    en: 'Citrus Musky Floral',
    zh: '极致纯净柑橘白花白麝香调',
    'zh-CN': '极致纯净柑橘白花白麝香调',
    'zh-HK': '極致純淨柑橘白花白麝香調',
    fr: 'Floral Musqué Hespéridé',
    es: 'Floral Almizclado Cítrico',
    de: 'Zitrus-Moschus-Floral'
  },
  'Citrus Musky Powdery Aromatic': {
    en: 'Citrus Musky Powdery Aromatic',
    zh: '高级粉质柑橘麝香调',
    'zh-CN': '高级粉质柑橘麝香调',
    'zh-HK': '高級粉質柑橘麝香調',
    fr: 'Hespéridé Musqué Poudré',
    es: 'Cítrico Almizclado Empolvado',
    de: 'Pudrig-aromatischer Zitrus-Moschus'
  },
  'Citrus Woody Aromatic': {
    en: 'Citrus Woody Aromatic',
    zh: '柑橘木质调',
    'zh-CN': '柑橘木质调',
    'zh-HK': '柑橘木質調',
    fr: 'Hespéridé Boisé Aromatique',
    es: 'Cítrico Amaderado Aromático',
    de: 'Zitrus-Holzig-Aromatisch'
  },
  'Clean Aldehydic Musk': {
    en: 'Clean Aldehydic Musk',
    zh: '洁净纯棉白麝香调',
    'zh-CN': '洁净纯棉白麝香调',
    'zh-HK': '潔淨純棉白麝香調',
    fr: 'Musc Aldéhydé Pur',
    es: 'Almizcle Aldehídico Limpio',
    de: 'Reiner Aldehyd-Moschus'
  },
  'Floral': {
    en: 'Floral',
    zh: '清雅白花调',
    'zh-CN': '清雅白花调',
    'zh-HK': '清雅白花調',
    fr: 'Floral Pur',
    es: 'Floral Puro',
    de: 'Blumig'
  },
  'Floral Green': {
    en: 'Floral Green',
    zh: '绿意花香调',
    'zh-CN': '绿意花香调',
    'zh-HK': '綠意花香調',
    fr: 'Floral Vert',
    es: 'Floral Verde',
    de: 'Blumig-Grün'
  },
  'Floral Green Botanical': {
    en: 'Floral Green Botanical',
    zh: '晨露绿意玫瑰无花果调',
    'zh-CN': '晨露绿意玫瑰无花果调',
    'zh-HK': '晨露綠意玫瑰無花果調',
    fr: 'Floral Vert Botanique',
    es: 'Floral Verde Botánico',
    de: 'Botanisch-blumiges Grün'
  },
  'Floral Woody Musk': {
    en: 'Floral Woody Musk',
    zh: '白麝香干净花香调',
    'zh-CN': '白麝香干净花香调',
    'zh-HK': '白麝香乾淨花香調',
    fr: 'Floral Boisé Musqué',
    es: 'Floral Amaderado Almizclado',
    de: 'Blumig-Holziger Moschus'
  },
  'Fruity Chypre Floral': {
    en: 'Fruity Chypre Floral',
    zh: '果香西普花香调',
    'zh-CN': '果香西普花香调',
    'zh-HK': '果香西普花香調',
    fr: 'Chypré Floral Fruité',
    es: 'Chipre Floral Frutal',
    de: 'Fruchtig-blumiges Chypre'
  },
  'Fruity Citrus Woody': {
    en: 'Fruity Citrus Woody',
    zh: '地中海果香柑橘木质调',
    'zh-CN': '地中海果香柑橘木质调',
    'zh-HK': '地中海果香柑橘木質調',
    fr: 'Boisé Hespéridé Fruité',
    es: 'Amaderado Cítrico Frutal',
    de: 'Fruchtig-holziges Zitrus'
  },
  'Fruity Floral White Musk': {
    en: 'Fruity Floral White Musk',
    zh: '清脆果香小苍兰白麝香调',
    'zh-CN': '清脆果香小苍兰白麝香调',
    'zh-HK': '清脆果香小蒼蘭白麝香調',
    fr: 'Musc Blanc Floral Fruité',
    es: 'Almizcle Blanco Floral Frutal',
    de: 'Fruchtig-blumiger Weißer Moschus'
  },
  'Fruity Green Aromatic': {
    en: 'Fruity Green Aromatic',
    zh: '清新果香水生绿意调',
    'zh-CN': '清新果香水生绿意调',
    'zh-HK': '清新果香水生綠意調',
    fr: 'Fruité Vert Aromatique',
    es: 'Frutal Verde Aromático',
    de: 'Fruchtig-grün-aromatisch'
  },
  'Green Mineral Earthy Wood': {
    en: 'Green Mineral Earthy Wood',
    zh: '雨后泥土矿物绿意木质调',
    'zh-CN': '雨后泥土矿物绿意木质调',
    'zh-HK': '雨後泥土礦物綠意木質調',
    fr: 'Bois Minéral Terrestre Vert',
    es: 'Madera Mineral Terrosa Verde',
    de: 'Grünes Mineral- und Erdholz'
  },
  'Soft Creamy Woody Musk': {
    en: 'Soft Creamy Woody Musk',
    zh: '温润羊绒奶香檀木调',
    'zh-CN': '温润羊绒奶香檀木调',
    'zh-HK': '溫潤羊絨奶香檀木調',
    fr: 'Musc Boisé Doux et Crémeux',
    es: 'Almizcle Amaderado Suave y Cremoso',
    de: 'Sanfter Cremiger Holz-Moschus'
  },
  'Tea Woody Citrus': {
    en: 'Tea Woody Citrus',
    zh: '清雅白茶雪松调',
    'zh-CN': '清雅白茶雪松调',
    'zh-HK': '清雅白茶雪松調',
    fr: 'Thé Boisé Hespéridé',
    es: 'Té Amaderado Cítrico',
    de: 'Tee-Holz-Zitrus'
  },
  'Warm & Spicy Gourmand': {
    en: 'Warm & Spicy Gourmand',
    zh: '朗姆暖香烟草木质调',
    'zh-CN': '朗姆暖香烟草木质调',
    'zh-HK': '朗姆暖香煙草木質調',
    fr: 'Gourmand Épicé et Chaleureux',
    es: 'Gourmand Cálido y Especiado',
    de: 'Warm-würziger Gourmand'
  },
  'Warm Spicy Amber Wood': {
    en: 'Warm Spicy Amber Wood',
    zh: '暖阳辛香琥珀木质调',
    'zh-CN': '暖阳辛香琥珀木质调',
    'zh-HK': '暖陽辛香琥珀木質調',
    fr: 'Bois Ambré Épicé Chaud',
    es: 'Madera Ambarina Especiada Cálida',
    de: 'Warm-würziges Bernsteinholz'
  },
  'Woody Aromatic Amber': {
    en: 'Woody Aromatic Amber',
    zh: '木质芳香琥珀调',
    'zh-CN': '木质芳香琥珀调',
    'zh-HK': '木質芳香琥珀調',
    fr: 'Ambre Boisé Aromatique',
    es: 'Ámbar Amaderado Aromático',
    de: 'Holzig-aromatischer Bernstein'
  },
  'Woody Aromatic Fougère': {
    en: 'Woody Aromatic Fougère',
    zh: '馥奇木质白兰地微醺调',
    'zh-CN': '馥奇木质白兰地微醺调',
    'zh-HK': '馥奇木質白蘭地微醺調',
    fr: 'Fougère Boisée Aromatique',
    es: 'Fougère Amaderado Aromático',
    de: 'Holziger Aromatischer Fougère'
  },
  'Woody Aromatic Leather': {
    en: 'Woody Aromatic Leather',
    zh: '皮革木质调',
    'zh-CN': '皮革木质调',
    'zh-HK': '皮革木質調',
    fr: 'Cuir Boisé Aromatique',
    es: 'Cuero Amaderado Aromático',
    de: 'Holziges Aromatisches Leder'
  },
  'Woody Aromatic Pine Vanilla': {
    en: 'Woody Aromatic Pine Vanilla',
    zh: '芳香木质香草调',
    'zh-CN': '芳香木质香草调',
    'zh-HK': '芳香木質香草調',
    fr: 'Vanille Boisée et Résineuse',
    es: 'Vainilla Amaderada y Pino',
    de: 'Holzige Kiefern-Vanille'
  },
  'Woody Earthy Vetiver Citrus': {
    en: 'Woody Earthy Vetiver Citrus',
    zh: '精英木质柑橘香根草调',
    'zh-CN': '精英木质柑橘香根草调',
    'zh-HK': '精英木質柑橘香根草調',
    fr: 'Vétiver Boisé et Hespéridé',
    es: 'Vetiver Amaderado y Cítrico',
    de: 'Erdiges Vetiver-Zitrus-Holz'
  },
  'Woody Floral Musk': {
    en: 'Woody Floral Musk',
    zh: '经典木质调 / 檀香',
    'zh-CN': '经典木质调 / 檀香',
    'zh-HK': '經典木質調 / 檀香',
    fr: 'Floral Boisé Musqué',
    es: 'Floral Amaderado Almizclado',
    de: 'Holzig-blumiger Moschus'
  },
  'Woody Fresh Spicy': {
    en: 'Woody Fresh Spicy',
    zh: '木质清新辛香调',
    'zh-CN': '木质清新辛香调',
    'zh-HK': '木質清新辛香調',
    fr: 'Boisé Épicé Frais',
    es: 'Amaderado Especiado Fresco',
    de: 'Holziges Frisches Würzmittel'
  },
  'Woody Gourmand Smoked': {
    en: 'Woody Gourmand Smoked',
    zh: '炙烤栗子烟熏木质调',
    'zh-CN': '炙烤栗子烟熏木质调',
    'zh-HK': '炙烤栗子煙熏木質調',
    fr: 'Boisé Gourmand Fumé',
    es: 'Amaderado Gourmand Ahumado',
    de: 'Rauchig-gourmandiges Holz'
  },
  'Woody Green': {
    en: 'Woody Green',
    zh: '绿意木质调',
    'zh-CN': '绿意木质调',
    'zh-HK': '綠意木質調',
    fr: 'Boisé Vert',
    es: 'Amaderado Verde',
    de: 'Holzig-Grün'
  },
  'Woody Oriental Floral': {
    en: 'Woody Oriental Floral',
    zh: '木质东方花香调',
    'zh-CN': '木质东方花香调',
    'zh-HK': '木質東方花香調',
    fr: 'Floral Oriental Boisé',
    es: 'Floral Oriental Amaderado',
    de: 'Holzig-orientalisch-blumig'
  },
  'Woody Oriental Vanilla': {
    en: 'Woody Oriental Vanilla',
    zh: '冷感雪松香草木质调',
    'zh-CN': '冷感雪松香草木质调',
    'zh-HK': '冷感雪松香草木質調',
    fr: 'Vanille Orientale Boisée',
    es: 'Vainilla Oriental Amaderada',
    de: 'Holzige Orientalische Vanille'
  },
  'Woody Smoky Cypress': {
    en: 'Woody Smoky Cypress',
    zh: '静谧冷香焚木柏木调',
    'zh-CN': '静谧冷香焚木柏木调',
    'zh-HK': '靜謐冷香焚木柏木調',
    fr: 'Cyprès Boisé et Fumé',
    es: 'Ciprés Amaderado y Ahumado',
    de: 'Rauchige Zypressen-Holznote'
  },
  'Woody Smoky Resinous': {
    en: 'Woody Smoky Resinous',
    zh: '静谧冷香焚木柏木调',
    'zh-CN': '静谧冷香焚木柏木调',
    'zh-HK': '靜謐冷香焚木柏木調',
    fr: 'Résineux Boisé Fumé',
    es: 'Resinoso Amaderado Ahumado',
    de: 'Rauchig-harziges Holz'
  },
  'Woody Spicy Mineral Chypre': {
    en: 'Woody Spicy Mineral Chypre',
    zh: '矿物木质辛香调',
    'zh-CN': '矿物木质辛香调',
    'zh-HK': '礦物木質辛香調',
    fr: 'Chypré Boisé Minéral et Épicé',
    es: 'Chipre Amaderado Mineral y Especiado',
    de: 'Holzig-mineralisches Würz-Chypre'
  }
};

/**
 * Multi-language dictionary for Tags
 */
export const TAGS_I18N: Record<string, Record<Language, string>> = {
  fig: { en: 'Fig', zh: '无花果', 'zh-CN': '无花果', 'zh-HK': '無花果', fr: 'Figue', es: 'Higo', de: 'Feige' },
  green: { en: 'Green', zh: '青翠绿意', 'zh-CN': '青翠绿意', 'zh-HK': '青翠綠意', fr: 'Vert', es: 'Verde', de: 'Grün' },
  fresh: { en: 'Fresh', zh: '清爽', 'zh-CN': '清爽', 'zh-HK': '清爽', fr: 'Frais', es: 'Fresco', de: 'Frisch' },
  woody: { en: 'Woody', zh: '木质', 'zh-CN': '木质', 'zh-HK': '木質', fr: 'Boisé', es: 'Amaderado', de: 'Holzig' },
  natural: { en: 'Natural', zh: '自然草木', 'zh-CN': '自然草木', 'zh-HK': '自然草木', fr: 'Naturel', es: 'Natural', de: 'Natürlich' },
  airy: { en: 'Airy', zh: '通透', 'zh-CN': '通透', 'zh-HK': '通透', fr: 'Aérien', es: 'Etéreo', de: 'Luftig' },
  sandalwood: { en: 'Sandalwood', zh: '檀香', 'zh-CN': '檀香', 'zh-HK': '檀香', fr: 'Santal', es: 'Sándalo', de: 'Sandelholz' },
  cedar: { en: 'Cedar', zh: '雪松', 'zh-CN': '雪松', 'zh-HK': '雪松', fr: 'Cèdre', es: 'Cedro', de: 'Zedernholz' },
  temple: { en: 'Temple', zh: '寺庙禅意', 'zh-CN': '寺庙禅意', 'zh-HK': '寺廟禪意', fr: 'Temple', es: 'Templo', de: 'Tempel' },
  calm: { en: 'Calm', zh: '静谧沉稳', 'zh-CN': '静谧沉稳', 'zh-HK': '靜謐沉穩', fr: 'Calme', es: 'Calma', de: 'Ruhig' },
  citrus: { en: 'Citrus', zh: '柑橘', 'zh-CN': '柑橘', 'zh-HK': '柑橘', fr: 'Agrumes', es: 'Cítricos', de: 'Zitrus' },
  neroli: { en: 'Neroli', zh: '苦橙叶', 'zh-CN': '苦橙叶', 'zh-HK': '苦橙葉', fr: 'Néroli', es: 'Azahar', de: 'Neroli' },
  clean: { en: 'Clean', zh: '洁净', 'zh-CN': '洁净', 'zh-HK': '潔淨', fr: 'Propre', es: 'Limpio', de: 'Sauber' },
  soap: { en: 'Soapy', zh: '高级皂感', 'zh-CN': '高级皂感', 'zh-HK': '高級皂感', fr: 'Savonneux', es: 'Jabonoso', de: 'Seifig' },
  rose: { en: 'Rose', zh: '玫瑰', 'zh-CN': '玫瑰', 'zh-HK': '玫瑰', fr: 'Rose', es: 'Rosa', de: 'Rose' },
  tuberose: { en: 'Tuberose', zh: '晚香玉', 'zh-CN': '晚香玉', 'zh-HK': '晚香玉', fr: 'Tubéreuse', es: 'Nardo', de: 'Tuberose' },
  leather: { en: 'Leather', zh: '皮革', 'zh-CN': '皮革', 'zh-HK': '皮革', fr: 'Cuir', es: 'Cuero', de: 'Leder' },
  'black tea': { en: 'Black Tea', zh: '红茶', 'zh-CN': '红茶', 'zh-HK': '紅茶', fr: 'Thé Noir', es: 'Té Negro', de: 'Schwarzer Tee' },
  tea: { en: 'Tea', zh: '茶香', 'zh-CN': '茶香', 'zh-HK': '茶香', fr: 'Thé', es: 'Té', de: 'Tee' },
  bergamot: { en: 'Bergamot', zh: '佛手柑', 'zh-CN': '佛手柑', 'zh-HK': '佛手柑', fr: 'Bergamote', es: 'Bergamota', de: 'Bergamotte' },
  ambroxan: { en: 'Ambroxan', zh: '龙涎醚', 'zh-CN': '龙涎醚', 'zh-HK': '龍涎醚', fr: 'Ambroxan', es: 'Ambroxan', de: 'Ambroxan' },
  'sea breeze': { en: 'Sea Breeze', zh: '海风', 'zh-CN': '海风', 'zh-HK': '海風', fr: 'Brise Marine', es: 'Brisa Marina', de: 'Meeresbrise' },
  pear: { en: 'Pear', zh: '清甜脆梨', 'zh-CN': '清甜脆梨', 'zh-HK': '清甜脆梨', fr: 'Poire', es: 'Pera', de: 'Birne' },
  freesia: { en: 'Freesia', zh: '小苍兰', 'zh-CN': '小苍兰', 'zh-HK': '小蒼蘭', fr: 'Freesia', es: 'Fresia', de: 'Freesie' },
  cucumber: { en: 'Cucumber', zh: '黄瓜清爽', 'zh-CN': '黄瓜清爽', 'zh-HK': '黃瓜清爽', fr: 'Concombre', es: 'Pepino', de: 'Gurke' },
  'white musk': { en: 'White Musk', zh: '白麝香', 'zh-CN': '白麝香', 'zh-HK': '白麝香', fr: 'Musc Blanc', es: 'Almizcle Blanco', de: 'Weißer Moschus' },
  'clean laundry': { en: 'Clean Laundry', zh: '干净白衬衫', 'zh-CN': '干净白衬衫', 'zh-HK': '乾淨白襯衫', fr: 'Linge Frais', es: 'Ropa Limpia', de: 'Frische Wäsche' },
  rum: { en: 'Rum', zh: '朗姆酒', 'zh-CN': '朗姆酒', 'zh-HK': '朗姆酒', fr: 'Rhum', es: 'Ron', de: 'Rum' },
  tobacco: { en: 'Tobacco', zh: '烟草', 'zh-CN': '烟草', 'zh-HK': '煙草', fr: 'Tabac', es: 'Tabaco', de: 'Tabak' },
  chestnut: { en: 'Chestnut', zh: '烤板栗', 'zh-CN': '烤板栗', 'zh-HK': '烤板栗', fr: 'Châtaigne', es: 'Castaña', de: 'Kastanie' },
  vanilla: { en: 'Vanilla', zh: '香草', 'zh-CN': '香草', 'zh-HK': '香草', fr: 'Vanille', es: 'Vainilla', de: 'Vanille' },
  'creamy vanilla': { en: 'Creamy Vanilla', zh: '温润香草', 'zh-CN': '温润香草', 'zh-HK': '溫潤香草', fr: 'Vanille Onctueuse', es: 'Vainilla Cremosa', de: 'Cremige Vanille' },
  lemon: { en: 'Lemon', zh: '柠檬', 'zh-CN': '柠檬', 'zh-HK': '檸檬', fr: 'Citron', es: 'Limón', de: 'Zitrone' },
  'green mango': { en: 'Green Mango', zh: '青芒', 'zh-CN': '青芒', 'zh-HK': '青芒', fr: 'Mangue Verte', es: 'Mango Verde', de: 'Grüne Mango' },
  lotus: { en: 'Lotus', zh: '睡莲', 'zh-CN': '睡莲', 'zh-HK': '睡蓮', fr: 'Lotus', es: 'Loto', de: 'Lotus' },
  flint: { en: 'Flint', zh: '矿物燧石', 'zh-CN': '矿物燧石', 'zh-HK': '礦物燧石', fr: 'Silex', es: 'Pedernal', de: 'Feuerstein' },
  cardamom: { en: 'Cardamom', zh: '小豆蔻', 'zh-CN': '小豆蔻', 'zh-HK': '小豆蔻', fr: 'Cardamome', es: 'Cardamomo', de: 'Kardamom' },
  basil: { en: 'Basil', zh: '罗勒', 'zh-CN': '罗勒', 'zh-HK': '羅勒', fr: 'Basilic', es: 'Albahaca', de: 'Basilikum' },
  mint: { en: 'Mint', zh: '薄荷', 'zh-CN': '薄荷', 'zh-HK': '薄荷', fr: 'Menthe', es: 'Menta', de: 'Minze' },
  incense: { en: 'Incense', zh: '焚香', 'zh-CN': '焚香', 'zh-HK': '焚香', fr: 'Encens', es: 'Incienso', de: 'Weihrauch' },
  'incense or smoke': { en: 'Incense Smoke', zh: '静谧焚香', 'zh-CN': '静谧焚香', 'zh-HK': '靜謐焚香', fr: 'Fumée d’Encens', es: 'Incienso y Humo', de: 'Räucherwerk' },
  'rain after grass': { en: 'Rain on Grass', zh: '雨后草地', 'zh-CN': '雨后草地', 'zh-HK': '雨後草地', fr: 'Pluie sur l’Herbe', es: 'Lluvia en Hierba', de: 'Regen auf Gras' },
  'green leaves': { en: 'Green Leaves', zh: '青翠绿叶', 'zh-CN': '青翠绿叶', 'zh-HK': '青翠綠葉', fr: 'Feuilles Vertes', es: 'Hojas Verdes', de: 'Grüne Blätter' },
  'fresh citrus': { en: 'Fresh Citrus', zh: '新鲜柑橘', 'zh-CN': '新鲜柑橘', 'zh-HK': '新鮮柑橘', fr: 'Agrumes Frais', es: 'Cítricos Frescos', de: 'Frische Zitrusfrüchte' },
  'fresh flowers': { en: 'Fresh Flowers', zh: '晨露鲜花', 'zh-CN': '晨露鲜花', 'zh-HK': '晨露鮮花', fr: 'Fleurs Fraîches', es: 'Flores Frescas', de: 'Frische Blumen' },
  'soft woods': { en: 'Soft Woods', zh: '温和木质', 'zh-CN': '温和木质', 'zh-HK': '溫和木質', fr: 'Bois Doux', es: 'Maderas Suaves', de: 'Sanftes Holz' },
  'warm spices': { en: 'Warm Spices', zh: '温热香辛', 'zh-CN': '温热香辛', 'zh-HK': '溫熱香辛', fr: 'Épices Chaudes', es: 'Especias Cálidas', de: 'Warme Gewürze' },
  vetiver: { en: 'Vetiver', zh: '香根草', 'zh-CN': '香根草', 'zh-HK': '香根草', fr: 'Vétiver', es: 'Vetiver', de: 'Vetiver' },
  cypress: { en: 'Cypress', zh: '扁柏木', 'zh-CN': '扁柏木', 'zh-HK': '扁柏木', fr: 'Cyprès', es: 'Ciprés', de: 'Zypresse' },
  amber: { en: 'Amber', zh: '琥珀', 'zh-CN': '琥珀', 'zh-HK': '琥珀', fr: 'Ambre', es: 'Ámbar', de: 'Bernstein' },
  cozy: { en: 'Cozy', zh: '安心治愈', 'zh-CN': '安心治愈', 'zh-HK': '安心治癒', fr: 'Réconfortant', es: 'Acogedor', de: 'Gemütlich' },
  warm: { en: 'Warm', zh: '温暖', 'zh-CN': '温暖', 'zh-HK': '溫暖', fr: 'Chaleureux', es: 'Cálido', de: 'Warm' },
  mineral: { en: 'Mineral', zh: '矿物感', 'zh-CN': '矿物感', 'zh-HK': '礦物感', fr: 'Minéral', es: 'Mineral', de: 'Mineralisch' },
  zen: { en: 'Zen', zh: '禅意', 'zh-CN': '禅意', 'zh-HK': '禪意', fr: 'Zen', es: 'Zen', de: 'Zen' },
  romantic: { en: 'Romantic', zh: '浪漫', 'zh-CN': '浪漫', 'zh-HK': '浪漫', fr: 'Romantique', es: 'Romántico', de: 'Romantisch' },
  pure: { en: 'Pure', zh: '纯粹', 'zh-CN': '纯粹', 'zh-HK': '純粹', fr: 'Pur', es: 'Puro', de: 'Rein' },
  minimalist: { en: 'Minimalist', zh: '极简', 'zh-CN': '极简', 'zh-HK': '極簡', fr: 'Minimaliste', es: 'Minimalista', de: 'Minimalistisch' },
  approachable: { en: 'Approachable', zh: '亲和明朗', 'zh-CN': '亲和明朗', 'zh-HK': '親和明朗', fr: 'Accessible', es: 'Accesible', de: 'Zugänglich' },
  fruits: { en: 'Fruity', zh: '多汁果香', 'zh-CN': '多汁果香', 'zh-HK': '多汁果香', fr: 'Fruité', es: 'Frutal', de: 'Fruchtig' },
  earthy: { en: 'Earthy', zh: '泥土芬芳', 'zh-CN': '泥土芬芳', 'zh-HK': '泥土芬芳', fr: 'Terreux', es: 'Terroso', de: 'Erdig' },
  cool: { en: 'Cool', zh: '清冷疏离', 'zh-CN': '清冷疏离', 'zh-HK': '清冷疏離', fr: 'Frais & Distingué', es: 'Fresco & Sereno', de: 'Kühl & Vornehm' },
  cashmere: { en: 'Cashmere', zh: '羊绒质感', 'zh-CN': '羊绒质感', 'zh-HK': '羊絨質感', fr: 'Cachemire', es: 'Cachemira', de: 'Kaschmir' },
  sage: { en: 'Sage', zh: '鼠尾草', 'zh-CN': '鼠尾草', 'zh-HK': '鼠尾草', fr: 'Sauge', es: 'Salvia', de: 'Salbei' },
  aquatic: { en: 'Aquatic', zh: '水生清冷', 'zh-CN': '水生清冷', 'zh-HK': '水生清冷', fr: 'Aquatique', es: 'Acuático', de: 'Aquatisch' },
  sparkling: { en: 'Sparkling', zh: '气泡感', 'zh-CN': '气泡感', 'zh-HK': '氣泡感', fr: 'Pétillant', es: 'Chispeante', de: 'Prickelnd' },
  bright: { en: 'Bright', zh: '明媚灿烂', 'zh-CN': '明媚灿烂', 'zh-HK': '明媚燦爛', fr: 'Lumineux', es: 'Luminoso', de: 'Strahlend' },
  comforting: { en: 'Comforting', zh: '治愈舒缓', 'zh-CN': '治愈舒缓', 'zh-HK': '治癒舒緩', fr: 'Réconfortant', es: 'Reconfortante', de: 'Tröstend' }
};

/**
 * Localized poetic vibes and descriptions for iconic seed perfumes
 */
export const SEED_PERFUMES_I18N: Record<string, {
  poeticVibe: Record<Language, string>;
  suitableFor: Record<Language, string>;
}> = {
  'diptyque-philosykos': {
    poeticVibe: {
      en: 'Sunlit Greek fig orchard, crushed green leaves, and creamy tree bark.',
      zh: '致敬整株希腊无花果树：叶片的青翠清爽、果实的微乳感与白雪松树皮的温厚。',
      'zh-CN': '致敬整株希腊无花果树：叶片的青翠清爽、果实的微乳感与白雪松树皮的温厚。',
      'zh-HK': '致敬整株希臘無花果樹：葉片的青翠清爽、果實的微乳感與白雪松樹皮的溫厚。',
      fr: 'Verger de figuiers grecs inondé de soleil, feuilles vertes froissées et écorce lactée.',
      es: 'Higuera griega bañada por el sol, hojas verdes trituradas y corteza lechosa.',
      de: 'Sonniger griechischer Feigenhain, zerriebene grüne Blätter und samtige Baumrinde.'
    },
    suitableFor: {
      en: 'Those who adore natural botanical leaves, refreshing green gardens, and understated calming serenity.',
      zh: '喜欢大自然草木生机、无花果青绿汁液与温润木质，追求清透伪体香的初学者。',
      'zh-CN': '喜欢大自然草木生机、无花果青绿汁液与温润木质，追求清透伪体香的初学者。',
      'zh-HK': '喜歡大自然草木生機、無花果青綠汁液與溫潤木質，追求清透偽體香的初學者。',
      fr: 'Amateurs de feuilles végétales pures, de jardins verdoyants et de sérénité apaisante.',
      es: 'Amantes de la vegetación botánica natural, jardines frescos y serenidad discreta.',
      de: 'Liebhaber natürlicher Pflanzennote, grüner Gärten und dezenter Gelassenheit.'
    }
  },
  'diptyque-tam-dao': {
    poeticVibe: {
      en: 'Sacred mountain temples in Indochina, pure dry cedar and meditative sandalwood.',
      zh: '深林静谧古寺，干燥雪松与安神檀木交织的禅意清幽。',
      'zh-CN': '深林静谧古寺，干燥雪松与安神檀木交织的禅意清幽。',
      'zh-HK': '深林靜謐古寺，乾燥雪松與安神檀木交織的禪意清幽。',
      fr: 'Temples sacrés d’Indochine, cèdre sec immaculé et santal méditatif.',
      es: 'Templos sagrados de Indochina, cedro seco puro y sándalo meditativo.',
      de: 'Heilige Tempel in Indochina, trockenes Zedernholz und meditatives Sandelholz.'
    },
    suitableFor: {
      en: 'Ideal for reading, quiet meditation, and lovers of authentic dry woods.',
      zh: '适合独处阅读、冥想静心，喜欢纯粹干燥木香与寺庙宁静感的人。',
      'zh-CN': '适合独处阅读、冥想静心，喜欢纯粹干燥木香与寺庙宁静感的人。',
      'zh-HK': '適合獨處閱讀、冥想靜心，喜歡純粹乾燥木香與寺廟寧靜感的人。',
      fr: 'Idéal pour la lecture, la méditation et les passionnés de bois secs et nobles.',
      es: 'Ideal para la lectura, la meditación y los amantes de maderas secas y puras.',
      de: 'Ideal zum Lesen, Meditieren und für Liebhaber reiner, trockener Hölzer.'
    }
  },
  'diptyque-eau-des-sens': {
    poeticVibe: {
      en: 'A sparkling symphony of bitter orange branches, fresh blossom, and clean linen.',
      zh: '苦橙树的全景诗篇：从橙叶的微苦到橙花的明亮皂感。',
      'zh-CN': '苦橙树的全景诗篇：从橙叶的微苦到橙花的明亮皂感。',
      'zh-HK': '苦橙樹的全景詩篇：從橙葉的微苦到橙花的明亮皂感。',
      fr: 'Symphonie étincelante d’oranger amer, fleurs fraîches et linge immaculé.',
      es: 'Sinfonía chispeante de naranjo amargo, azahar fresco y lino inmaculado.',
      de: 'Funkelnde Symphonie aus Bitterorangenzweigen, frischen Blüten und sauberem Leinen.'
    },
    suitableFor: {
      en: 'Those looking for an energizing, clean citrus soap scent with sophisticated refinement.',
      zh: '寻找高级洁净皂感、晨光朝气与清透白衬衫香气的日常用家。',
      'zh-CN': '寻找高级洁净皂感、晨光朝气与清透白衬衫香气的日常用家。',
      'zh-HK': '尋找高級潔淨皂感、晨光朝氣與清透白襯衫香氣的日常用家。',
      fr: 'Ceux qui recherchent un sillage de savon d’agrumes frais et hautement raffiné.',
      es: 'Quienes buscan una estela de jabón cítrico fresco y sofisticada.',
      de: 'Für alle, die einen belebenden, sauberen Zitrus-Seifenduft voller Eleganz schätzen.'
    }
  },
  'le-labo-santal-33': {
    poeticVibe: {
      en: 'The spirit of the American West: smoky papyrus, rich cedarwood, and supple leather.',
      zh: '自由奔放的荒野精神：烟熏纸莎草、干冽雪松与柔软皮革。',
      'zh-CN': '自由奔放的荒野精神：烟熏纸莎草、干冽雪松与柔软皮革。',
      'zh-HK': '自由奔放的荒野精神：煙熏紙莎草、乾冽雪松與柔軟皮革。',
      fr: 'L’esprit de l’Ouest américain : papyrus fumé, cèdre noble et cuir souple.',
      es: 'El espíritu del oeste americano: papiro ahumado, cedro noble y cuero suave.',
      de: 'Der Geist des amerikanischen Westens: rauchiger Papyrus, reiches Zedernholz und geschmeidiges Leder.'
    },
    suitableFor: {
      en: 'Bold creatives and lovers of modern, distinctive woody and leather signatures.',
      zh: '追求独特辨识度、喜欢干燥木质皮革调与艺术气息的都市男女。',
      'zh-CN': '追求独特辨识度、喜欢干燥木质皮革调与艺术气息的都市男女。',
      'zh-HK': '追求獨特辨識度、喜歡乾燥木質皮革調與藝術氣息的都市男女。',
      fr: 'Esprits créatifs et amateurs de signatures boisées et cuirées inoubliables.',
      es: 'Mentes creativas y amantes de firmas olfativas amaderadas y de cuero distintivas.',
      de: 'Kreative Köpfe und Liebhaber markanter, moderner Holz- und Ledernoten.'
    }
  },
  'le-labo-the-noir-29': {
    poeticVibe: {
      en: 'An ode to black tea leaves: noble dry leaves, dark ripe fig, and tobacco smoke.',
      zh: '献给醇厚红茶的颂歌：干燥茶叶、熟甜无花果与深邃干雪松。',
      'zh-CN': '献给醇厚红茶的颂歌：干燥茶叶、熟甜无花果与深邃干雪松。',
      'zh-HK': '獻給醇厚紅茶的頌歌：乾燥茶葉、熟甜無花果與深邃乾雪松。',
      fr: 'Ode aux feuilles de thé noir : thé précieux, figue sombre et volutes de tabac.',
      es: 'Oda a las hojas de té negro: té seco noble, higo maduro y humo de tabaco.',
      de: 'Eine Ode an schwarzen Tee: edle trockene Blätter, reife Feige und Tabakrauch.'
    },
    suitableFor: {
      en: 'Lovers of mysterious, deep tea notes, evening intimacy, and intellectual elegance.',
      zh: '钟情于深邃高级茶香、秋冬温暖氛围与成熟儒雅书卷气的人。',
      'zh-CN': '钟情于深邃高级茶香、秋冬温暖氛围与成熟儒雅书卷气的人。',
      'zh-HK': '鍾情於深邃高級茶香、秋冬溫暖氛圍與成熟儒雅書卷氣的人。',
      fr: 'Amateurs de notes de thé profondes et mystérieuses, d’intimité et d’élégance.',
      es: 'Amantes de notas de té oscuras y misteriosas, momentos íntimos y elegancia.',
      de: 'Liebhaber geheimnisvoller, tiefer Teenoten, gemütlicher Abende und intellektueller Eleganz.'
    }
  },
  'jo-malone-wood-sage-sea-salt': {
    poeticVibe: {
      en: 'Windswept British coastline: mineral sea spray, coastal sage, and driftwood.',
      zh: '英伦海风的自由呼唤：咸味海盐矿物、风干海漂木与野生鼠尾草。',
      'zh-CN': '英伦海风的自由呼唤：咸味海盐矿物、风干海漂木与野生鼠尾草。',
      'zh-HK': '英倫海風的自由呼喚：鹹味海鹽礦物、風乾海漂木與野生鼠尾草。',
      fr: 'Côte britannique balayée par le vent : embruns marins minéraux, sauge et bois flotté.',
      es: 'Costa británica azotada por el viento: brisa marina mineral, salvia y madera flotante.',
      de: 'Windgepeitschte britische Küste: mineralische Meeresbrise, Küstensalbei und Treibholz.'
    },
    suitableFor: {
      en: 'Anyone wanting breezy, uplifting lightness with zero cloying heaviness.',
      zh: '偏好轻盈通透海风气息、无甜腻感、适合随时随地穿戴的入门者。',
      'zh-CN': '偏好轻盈通透海风气息、无甜腻感、适合随时随地穿戴的入门者。',
      'zh-HK': '偏好輕盈通透海風氣息、無甜膩感、適合隨時隨地穿戴的入門者。',
      fr: 'Pour tous ceux qui recherchent une fraîcheur aérée, pure et jamais étouffante.',
      es: 'Quienes buscan frescura ligera, aire libre y cero pesadez empalagosa.',
      de: 'Für alle, die luftige, belebende Leichtigkeit ohne jede Schwere suchen.'
    }
  },
  'jo-malone-english-pear-freesia': {
    poeticVibe: {
      en: 'Autumn orchard golden sunlight: crisp William pear and innocent white freesias.',
      zh: '英伦秋日果园的澄金阳光：清脆多汁的威廉梨与纯白小苍兰花束。',
      'zh-CN': '英伦秋日果园的澄金阳光：清脆多汁的威廉梨与纯白小苍兰花束。',
      'zh-HK': '英倫秋日果園的澄金陽光：清脆多汁的威廉梨與純白小蒼蘭花束。',
      fr: 'Lumière dorée d’un verger d’automne : poire William croquante et freesias blancs innocents.',
      es: 'Luz dorada de un huerto otoñal: pera crujiente y ramillete de freesias blancas.',
      de: 'Goldenes Herbstlicht im Obstgarten: knackige Birne und reine weiße Freesien.'
    },
    suitableFor: {
      en: 'Beginners looking for a radiant, effortlessly charming fruity-floral daytime scent.',
      zh: '初次接触香水、喜欢温婉果香与清新白花、追求亲切元气感的用家。',
      'zh-CN': '初次接触香水、喜欢温婉果香与清新白花、追求亲切元气感的用家。',
      'zh-HK': '初次接觸香水、喜歡溫婉果香與清新白花、追求親切元氣感的用家。',
      fr: 'Idéal pour un premier parfum fruité-floral lumineux, délicat et flatteur.',
      es: 'Principiantes que buscan un aroma frutal-floral radiante y encantador.',
      de: 'Einsteiger, die einen strahlenden, charmanten fruchtig-blumigen Duft für den Tag suchen.'
    }
  },
  'margiela-lazy-sunday-morning': {
    poeticVibe: {
      en: 'Fresh sun-warmed cotton sheets, cool Florentine breeze, and clean skin musk.',
      zh: '晨光穿透白色亚麻窗帘，刚换上的纯棉床单散发着纯净贴肤的白麝香。',
      'zh-CN': '晨光穿透白色亚麻窗帘，刚换上的纯棉床单散发着纯净贴肤的白麝香。',
      'zh-HK': '晨光穿透白色亞麻窗簾，剛換上的純棉床單散發著純淨貼膚的白麝香。',
      fr: 'Draps de coton frais chauffés par le soleil, brise matinale et musc peau propre.',
      es: 'Sábanas de algodón blanco al sol, brisa fresca y almizcle de piel limpia.',
      de: 'Frische, sonnengewärmte Baumwolllaken, sanfte Morgenbrise und sauberer Hautmoschus.'
    },
    suitableFor: {
      en: 'Those who want an immaculate, peaceful clean laundry aura for relaxed daily wear.',
      zh: '追求天生自带干净体香、喜欢白衬衫与治愈洁净感的日常用家。',
      'zh-CN': '追求天生自带干净体香、喜欢白衬衫与治愈洁净感的日常用家。',
      'zh-HK': '追求天生自帶乾淨體香、喜歡白襯衫與治癒潔淨感的日常用家。',
      fr: 'Ceux qui désirent une aura impeccable de linge frais pour un quotidien relaxant.',
      es: 'Quienes buscan una sensación impecable de ropa recién lavada para el día a día.',
      de: 'Für alle, die eine makellos saubere Wäsche-Aura für entspannte Tage schätzen.'
    }
  },
  'byredo-blanche': {
    poeticVibe: {
      en: 'The innocence of white: sparkling aldehydes, sheer peony, and pure white musk.',
      zh: '纯白的纯粹化身：轻盈气泡醛香、水润白牡丹与极简白麝香。',
      'zh-CN': '纯白的纯粹化身：轻盈气泡醛香、水润白牡丹与极简白麝香。',
      'zh-HK': '純白的純粹化身：輕盈氣泡醛香、水潤白牡丹與極簡白麝香。',
      fr: 'L’innocence du blanc absolu : aldéhydes pétillants, pivoine diaphane et musc blanc pur.',
      es: 'La inocencia del blanco puro: aldehídos chispeantes, peonía fresca y almizcle blanco.',
      de: 'Die Unschuld reinen Weißes: prickelnde Aldehyde, zarte Pfingstrose und weißer Moschus.'
    },
    suitableFor: {
      en: 'Minimalists who appreciate translucent simplicity, laundered elegance, and serenity.',
      zh: '极简主义者、喜欢北欧冷调纯白感与毫无杂质白衬衫香气的用家。',
      'zh-CN': '极简主义者、喜欢北欧冷调纯白感与毫无杂质白衬衫香气的用家。',
      'zh-HK': '極簡主義者、喜歡北歐冷調純白感與毫無雜質白襯衫香氣的用家。',
      fr: 'Minimalistes appréciant la clarté translucide, l’élégance du linge et la sérénité.',
      es: 'Minimalistas que valoran la sencillez translúcida y la elegancia serena.',
      de: 'Minimalisten, die durchscheinende Schlichtheit, gewaschene Eleganz und Ruhe schätzen.'
    }
  },
  'byredo-gypsy-water': {
    poeticVibe: {
      en: 'Dreamy campfire in a pine forest: crisp juniper berries, fresh pine needles, and soft vanilla.',
      zh: '松林间的自由梦境：杜松子微凉、松针清冷与温软香草。',
      'zh-CN': '松林间的自由梦境：杜松子微凉、松针清冷与温软香草。',
      'zh-HK': '松林間的自由夢境：杜松子微涼、松針清冷與溫軟香草。',
      fr: 'Feu de camp poétique sous les pins : baies de genièvre, aiguilles de pin et vanille douce.',
      es: 'Hoguera de ensueño en el pinar: bayas de enebro, agujas de pino y vainilla suave.',
      de: 'Träumerisches Lagerfeuer im Kiefernwald: Wacholderbeeren, Kiefernnadeln und samtige Vanille.'
    },
    suitableFor: {
      en: 'Nomadic romantics seeking an airy, subtly sweet pine and vanilla skin scent.',
      zh: '向往自由流浪诗意、喜欢松木清冷与微甜香草治愈体香的人。',
      'zh-CN': '向往自由流浪诗意、喜欢松木清冷与微甜香草治愈体香的人。',
      'zh-HK': '嚮往自由流浪詩意、喜歡松木清冷與微甜香草治癒體香的人。',
      fr: 'Esprits libres et romantiques en quête d’un parfum de peau boisé et doucement vanillé.',
      es: 'Almas libres que buscan un aroma de piel amaderado de pino y suave vainilla.',
      de: 'Romantische Freigeister auf der Suche nach einem luftigen, zart-süßen Wald-Hautduft.'
    }
  },
  'aesop-tacit': {
    poeticVibe: {
      en: 'A mindful stroll along Mediterranean citrus groves: fresh crushed basil and earthy vetiver.',
      zh: '地中海晨曦的静思：鲜绿罗勒叶汁水与纯净干冽香根草。',
      'zh-CN': '地中海晨曦的静思：鲜绿罗勒叶汁水与纯净干冽香根草。',
      'zh-HK': '地中海晨曦的靜思：鮮綠羅勒葉汁水與純淨乾冽香根草。',
      fr: 'Promenade méditative en bosquet d’agrumes : basilic vert froissé et vétiver terreux.',
      es: 'Paseo meditativo entre cítricos mediterráneos: albahaca fresca y vetiver terroso.',
      de: 'Achtsamer Spaziergang im Zitrusgarten: frisches Basilikum und erdiges Vetiver.'
    },
    suitableFor: {
      en: 'Intellectuals and design lovers seeking calm, botanical greenery without sweetness.',
      zh: '偏爱植物绿意、罗勒清苦回甘与低调极简书卷气的智性男女。',
      'zh-CN': '偏爱植物绿意、罗勒清苦回甘与低调极简书卷气的智性男女。',
      'zh-HK': '偏愛植物綠意、羅勒清苦回甘與低調極簡書卷氣的智性男女。',
      fr: 'Amateurs de design et esprits calmes appréciant la verdure botanique sans sucre.',
      es: 'Personas reflexivas que disfrutan del verdor botánico natural sin dulzor.',
      de: 'Designliebhaber und Denker, die botanisches Grün ohne Süße suchen.'
    }
  },
  'aesop-hwyl': {
    poeticVibe: {
      en: 'Ancient Japanese forest sanctuary: misty hinoki cypress, damp moss, and aromatic smoke.',
      zh: '千年日本桧木古林：薄雾弥漫、苔藓湿润与幽微线香。',
      'zh-CN': '千年日本桧木古林：薄雾弥漫、苔藓湿润与幽微线香。',
      'zh-HK': '千年日本檜木古林：薄霧彌漫、苔蘚濕潤與幽微線香。',
      fr: 'Forêt sacrée japonaise : cyprès hinoki embrumé, mousse humide et fumée aromatique.',
      es: 'Santuario del bosque japonés: ciprés hinoki brumoso, musgo húmedo y humo aromático.',
      de: 'Alte japanische Waldzuflucht: neblige Hinoki-Zypresse, Moos und feiner Rauch.'
    },
    suitableFor: {
      en: 'Deep thinkers, solitude lovers, and devotees of profound dark mossy woods.',
      zh: '沉静内敛、喜欢幽暗深林苔藓、古木线香与绝对安全感的人。',
      'zh-CN': '沉静内敛、喜欢幽暗深林苔藓、古木线香与绝对安全感的人。',
      'zh-HK': '沉靜內斂、喜歡幽暗深林苔蘚、古木線香與絕對安全感的人。',
      fr: 'Penseurs profonds, amoureux de solitude et passionnés de bois sombres et moussus.',
      es: 'Mentes reflexivas y amantes de la soledad que adoran maderas oscuras y musgo.',
      de: 'Tiefe Denker und Einsiedler, die erhabene moosige Nadelholzdüfte verehren.'
    }
  }
};

/**
 * Localized descriptions for dynamically generated scent archetypes
 */
export const ARCHETYPES_I18N: Record<string, {
  poeticVibe: Record<Language, string>;
  suitableFor: Record<Language, string>;
}> = {
  'white-tea-cedar': {
    poeticVibe: {
      en: 'Crisp mountain white tea leaves cold-brewed in spring water on dry cedarwood.',
      zh: '高山白茶冷萃的澄澈茶汤，与干燥清爽的雪松木交融，宛若置身初晨竹林茶室。',
      'zh-CN': '高山白茶冷萃的澄澈茶汤，与干燥清爽的雪松木交融，宛若置身初晨竹林茶室。',
      'zh-HK': '高山白茶冷萃的澄澈茶湯，與乾燥清爽的雪松木交融，宛若置身初晨竹林茶室。',
      fr: 'Feuilles de thé blanc des montagnes infusées dans l’eau de source sur cèdre sec.',
      es: 'Hojas de té blanco de montaña en agua fresca sobre madera seca de cedro.',
      de: 'Kühle Berg-Weißteeblätter in Quellwasser auf trockenem Zedernholz.'
    },
    suitableFor: {
      en: 'Ideal for tea lovers, minimalist desks, and non-intrusive daily elegance.',
      zh: '喜欢幽雅茶香、极简主义穿搭与不扰人体香感的初学者。',
      'zh-CN': '喜欢幽雅茶香、极简主义穿搭与不扰人体香感的初学者。',
      'zh-HK': '喜歡幽雅茶香、極簡主義穿搭與不擾人體香感的初學者。',
      fr: 'Idéal pour les amateurs de thé, les bureaux épurés et l’élégance quotidienne.',
      es: 'Ideal para amantes del té, ambientes minimalistas y elegancia sin estridencias.',
      de: 'Ideal für Teeliebhaber, minimalistische Ästhetik und unaufdringliche Eleganz.'
    }
  },
  'coastal-sage-driftwood': {
    poeticVibe: {
      en: 'Windswept ocean cliffs: salty mineral air, coastal herbs, and sun-bleached driftwood.',
      zh: '漫步于海风吹拂的沿海悬崖：咸味矿物水汽、野生鼠尾草与被阳光晒白的木质海漂木。',
      'zh-CN': '漫步于海风吹拂的沿海悬崖：咸味矿物水汽、野生鼠尾草与被阳光晒白的木质海漂木。',
      'zh-HK': '漫步於海風吹拂的沿海懸崖：鹹味礦物水汽、野生鼠尾草與被陽光曬白的木質海漂木。',
      fr: 'Falaises océaniques venteuses : brise minérale salée, sauge côtière et bois flotté.',
      es: 'Acantilados costeros: aire mineral salino, hierbas silvestres y madera flotante.',
      de: 'Windige Klippen: salzige Mineralbrise, Küstensalbei und sonnengebleichtes Treibholz.'
    },
    suitableFor: {
      en: 'Those wanting ocean freshness without synthetic sunscreen melon sweetness.',
      zh: '追求真正自然清冽海风、矿物质感与草本木质的清爽人士。',
      'zh-CN': '追求真正自然清冽海风、矿物质感与草本木质的清爽人士。',
      'zh-HK': '追求真正自然清冽海風、礦物質感與草本木質的清爽人士。',
      fr: 'Ceux qui recherchent une fraîcheur marine authentique sans sucrosité artificielle.',
      es: 'Quienes buscan frescura oceánica pura sin notas dulces artificiales.',
      de: 'Für alle, die echte Meeresfrische ohne künstliche Süße suchen.'
    }
  },
  'cashmere-sandalwood': {
    poeticVibe: {
      en: 'Silky milky sandalwood and dry papyrus wrapped in warm, cashmere knitwear.',
      zh: '温润奶香檀木与干燥纸莎草相遇，包裹在温暖柔软的羊绒织物中，令人沉静安心。',
      'zh-CN': '温润奶香檀木与干燥纸莎草相遇，包裹在温暖柔软的羊绒织物中，令人沉静安心。',
      'zh-HK': '溫潤奶香檀木與乾燥紙莎草相遇，包裹在溫暖柔軟的羊絨織物中，令人沉靜安心。',
      fr: 'Santal lacté soyeux et papyrus sec enveloppés dans une maille de cachemire chaleureuse.',
      es: 'Sándalo suave y papiro seco envueltos en un cálido tejido de cachemira.',
      de: 'Seidiges Milch-Sandelholz und Papyrus in wärmender Kaschmir-Strickwolle.'
    },
    suitableFor: {
      en: 'Those craving comforting, grounded warmth, cozy sweaters, and reading sanctuary.',
      zh: '喜欢温暖治愈奶檀香、羊绒大衣质感与安眠静心书卷气的人。',
      'zh-CN': '喜欢温暖治愈奶檀香、羊绒大衣质感与安眠静心书卷气的人。',
      'zh-HK': '喜歡溫暖治癒奶檀香、羊絨大衣質感與安眠靜心書卷氣的人。',
      fr: 'Ceux qui recherchent une chaleur réconfortante, des pulls douillets et un cocon calme.',
      es: 'Quienes anhelan calidez envolvente, suéteres suaves y un refugio de lectura.',
      de: 'Für alle, die wohlige Wärme, gemütliche Strickjacken und Lesestunden schätzen.'
    }
  },
  'dewy-rose-fig': {
    poeticVibe: {
      en: 'Sunlit morning greenhouse: dewy thorny roses blossoming beside crushed green fig leaves.',
      zh: '晨光洒进植物花房：带露水的嫩粉玫瑰，在揉碎的青翠无花果叶间静静绽放。',
      'zh-CN': '晨光洒进植物花房：带露水的嫩粉玫瑰，在揉碎的青翠无花果叶间静静绽放。',
      'zh-HK': '晨光灑進植物花房：帶露水的嫩粉玫瑰，在揉碎的青翠無花果葉間靜靜綻放。',
      fr: 'Serre baignée de lumière : roses fraîches et épineuses aux côtés de feuilles de figuier froissées.',
      es: 'Invernadero matutino soleado: rosas frescas con rocío junto a hojas de higuera trituradas.',
      de: 'Sonniges Gewächshaus: taufrische Rosen neben zerriebenen Feigenblättern.'
    },
    suitableFor: {
      en: 'Lovers of natural, non-sugary garden roses with crisp botanical freshness.',
      zh: '偏爱真实草木花香、水灵灵不脂粉的玫瑰与无花果爱好者。',
      'zh-CN': '偏爱真实草木花香、水灵灵不脂粉的玫瑰与无花果爱好者。',
      'zh-HK': '偏愛真實草木花香、水靈靈不脂粉的玫瑰與無花果愛好者。',
      fr: 'Amateurs de roses de jardin naturelles, sans sucre et pleines de fraîcheur verte.',
      es: 'Amantes de rosas naturales de jardín con verdor crujiente y sin dulzor añadido.',
      de: 'Liebhaber natürlicher Gartenrosen mit lebendiger, ungesüßter Frische.'
    }
  },
  'sparkling-neroli-citrus': {
    poeticVibe: {
      en: 'Bright Mediterranean sunshine: sparkling neroli blossoms, bitter orange twigs, and clean linen.',
      zh: '沐浴在地中海清晨的第一道阳光中：气泡橙花微苦回甘，伴随纯净白棉布的清爽。',
      'zh-CN': '沐浴在地中海清晨的第一道阳光中：气泡橙花微苦回甘，伴随纯净白棉布的清爽。',
      'zh-HK': '沐浴在地中海清晨的第一道陽光中：氣泡橙花微苦回甘，伴隨純淨白棉布的清爽。',
      fr: 'Rayon de soleil méditerranéen : fleurs de néroli pétillantes, rameaux d’orange amère et lin propre.',
      es: 'Sol brillante del Mediterráneo: azahar chispeante, ramas de naranja amarga y lino fresco.',
      de: 'Strahlende Mittelmeersonne: prickelndes Neroli, Bitterorange und sauberes Leinen.'
    },
    suitableFor: {
      en: 'Anyone looking for pure morning vitality, spotless cleanliness, and uplifting refinement.',
      zh: '需要提振精神、喜欢纯净橙花皂感与高级白衬衫体香的日常用家。',
      'zh-CN': '需要提振精神、喜欢纯净橙花皂感与高级白衬衫体香的日常用家。',
      'zh-HK': '需要提振精神、喜歡純淨橙花皂感與高級白襯衫體香的日常用家。',
      fr: 'Pour ceux qui recherchent vitalité matinale, propreté immaculée et éclat raffiné.',
      es: 'Quienes buscan vitalidad matutina, limpieza inmaculada y refinamiento optimista.',
      de: 'Für alle, die morgendliche Frische, makellose Reinheit und Eleganz suchen.'
    }
  },
  'smoky-incense-cypress': {
    poeticVibe: {
      en: 'Sacred silence of ancient mountain temples: resin incense, cold stone, and cypress trees.',
      zh: '古刹深山的肃穆宁静：轻袅升起的乳香线香、冷冽石阶与参天柏木，涤荡心境。',
      'zh-CN': '古刹深山的肃穆宁静：轻袅升起的乳香线香、冷冽石阶与参天柏木，涤荡心境。',
      'zh-HK': '古剎深山的肅穆寧靜：輕嫋升起的乳香線香、冷冽石階與參天柏木，滌盪心境。',
      fr: 'Silence sacré des temples d’altitude : encens de résine, pierre froide et cyprès vénérables.',
      es: 'Silencio sagrado de antiguos templos: incienso de resina, piedra fría y cipreses majestuosos.',
      de: 'Erhabene Stille alter Tempel: Weihrauchharz, kalter Stein und Zypressen.'
    },
    suitableFor: {
      en: 'Those who meditate, read in solitude, and adore contemplative, non-sweet smoke.',
      zh: '热爱独处阅读、冥想打坐、钟情于清冷古庙木香与乳香冷烟的深沉人士。',
      'zh-CN': '热爱独处阅读、冥想打坐、钟情于清冷古庙木香与乳香冷烟的深沉人士。',
      'zh-HK': '熱愛獨處閱讀、冥想打坐、鍾情於清冷古廟木香與乳香冷煙的深沉人士。',
      fr: 'Ceux qui méditent, lisent dans le calme et aiment les volutes de fumée nobles et austères.',
      es: 'Quienes meditan, leen en calma y adoran el humo contemplativo no azucarado.',
      de: 'Für Meditation, ruhige Lesestunden und Liebhaber besinnlicher rauchiger Hölzer.'
    }
  },
  'clean-laundry-musk': {
    poeticVibe: {
      en: 'Sun-dried pure cotton sheets billowing gently in fresh breeze: soft, pure, and comforting.',
      zh: '阳光下晒透的纯棉床单随风轻扬：柔软纯净，贴肤舒适，如同温柔的拥抱。',
      'zh-CN': '阳光下晒透的纯棉床单随风轻扬：柔软纯净，贴肤舒适，如同温柔的拥抱。',
      'zh-HK': '陽光下曬透的純棉床單隨風輕揚：柔軟純淨，貼膚舒適，如同溫柔的擁抱。',
      fr: 'Draps de pur coton séchés au soleil et au grand air : doux, immaculés et apaisants.',
      es: 'Sábanas de algodón secadas al sol bajo una brisa fresca: suaves y reconfortantes.',
      de: 'Sonnengewärmte Baumwolllaken im Wind: weich, rein und geborgen.'
    },
    suitableFor: {
      en: 'Ideal for those seeking an unpretentious, universally loved clean skin scent.',
      zh: '寻找毫无攻击性、宛若天生好闻体香、适合任何环境的洁净控。',
      'zh-CN': '寻找毫无攻击性、宛若天生好闻体香、适合任何环境的洁净控。',
      'zh-HK': '尋找毫無攻擊性、宛若天生好聞體香、適合任何環境的潔淨控。',
      fr: 'Idéal pour ceux qui cherchent une seconde peau discrète, propre et universellement aimée.',
      es: 'Ideal para quienes buscan una fragancia de piel limpia, discreta y reconfortante.',
      de: 'Perfekt für einen dezenten, sauberen und universell geschätzten Hautduft.'
    }
  },
  'rain-petrichor-vetiver': {
    poeticVibe: {
      en: 'Sudden summer rain on warm earth and damp stones: cool mineral petrichor and earthy vetiver.',
      zh: '夏日骤雨初歇的空气：雨水打在青草与温热石阶上的潮湿矿物泥土香，清凉透彻。',
      'zh-CN': '夏日骤雨初歇的空气：雨水打在青草与温热石阶上的潮湿矿物泥土香，清凉透彻。',
      'zh-HK': '夏日驟雨初歇的空氣：雨水打在青草與溫熱石階上的潮濕礦物泥土香，清涼透徹。',
      fr: 'Pluie d’été soudaine sur la terre chaude : pétrichor minéral frais et vétiver terreux.',
      es: 'Lluvia de verano sobre tierra templada: petricor mineral fresco y vetiver terroso.',
      de: 'Sommerregen auf warmer Erde: kühles mineralisches Petrichor und erdiges Vetiver.'
    },
    suitableFor: {
      en: 'Lovers of petrichor, nature hikes after a downpour, and intellectual cool green aromas.',
      zh: '迷恋雨后空气、青草泥土芬芳、追求清冷疏离格调的人士。',
      'zh-CN': '迷恋雨后空气、青草泥土芬芳、追求清冷疏离格调的人士。',
      'zh-HK': '迷戀雨後空氣、青草泥土芬芳、追求清冷疏離格調的人士。',
      fr: 'Amateurs de pétrichor, de promenades après l’orage et de senteurs végétales érudites.',
      es: 'Amantes del petricor, paseos tras el chaparrón y notas verdes frescas e intelectuales.',
      de: 'Liebhaber von Petrichor, Spaziergängen nach dem Regen und kühlem Grün.'
    }
  },
  'warm-cardamom-amber': {
    poeticVibe: {
      en: 'A cozy fireplace glow on a winter evening: warm cardamom, golden amber, and vanilla tonka.',
      zh: '冬日壁炉旁的暖意融融：小豆蔻的微温清香，融入金黄琥珀与香草豆的醇厚包裹。',
      'zh-CN': '冬日壁炉旁的暖意融融：小豆蔻的微温清香，融入金黄琥珀与香草豆的醇厚包裹。',
      'zh-HK': '冬日壁爐旁的暖意融融：小豆蔻的微溫清香，融入金黃琥珀與香草豆的醇厚包裹。',
      fr: 'Lueur d’un feu de cheminée en hiver : cardamome douce, ambre doré et vanille tonka.',
      es: 'Resplandor de chimenea en invierno: cardamomo aromático, ámbar dorado y haba tonka.',
      de: 'Wärmender Kamin an einem Winterabend: Kardamom, goldener Bernstein und Vanille-Tonka.'
    },
    suitableFor: {
      en: 'Those who want autumn/winter warmth, inviting hugs, and charming date night comfort.',
      zh: '寻求秋冬御寒暖香、约会心动氛围与令人想靠近的温暖木质甜香爱好者。',
      'zh-CN': '寻求秋冬御寒暖香、约会心动氛围与令人想靠近的温暖木质甜香爱好者。',
      'zh-HK': '尋求秋冬禦寒暖香、約會心動氛圍與令人想靠近的溫暖木質甜香愛好者。',
      fr: 'Ceux qui recherchent réconfort hivernal, présence chaleureuse et sensualité douce.',
      es: 'Quienes buscan calidez acogedora de otoño/invierno y encanto envolvente.',
      de: 'Für wohlige Herbst- und Winterwärme, Nähe und eleganten Abendkomfort.'
    }
  },
  'crisp-pear-freesia-musk': {
    poeticVibe: {
      en: 'Crisp sliced juicy pears paired with a bouquet of innocent, radiant white freesias.',
      zh: '刚切开的鲜嫩多汁青梨，汁水流淌在纯白小苍兰的花瓣上，带来亲和与明媚。',
      'zh-CN': '刚切开的鲜嫩多汁青梨，汁水流淌在纯白小苍兰的花瓣上，带来亲和与明媚。',
      'zh-HK': '剛切開的鮮嫩多汁青梨，汁水流淌在純白小蒼蘭的花瓣上，帶來親和與明媚。',
      fr: 'Poires juteuses tout juste tranchées associées à un bouquet de freesias blancs éclatants.',
      es: 'Peras crujientes y jugosas combinadas con un ramillete de freesias blancas radiantes.',
      de: 'Knackige saftige Birnen mit einem Strauß reiner, strahlender Freesien.'
    },
    suitableFor: {
      en: 'Beginners looking for a charming, universally adored fruit-and-flower daytime signature.',
      zh: '初涉香水、喜欢多汁清甜水果与清雅小苍兰、追求亲和力的年轻男女。',
      'zh-CN': '初涉香水、喜欢多汁清甜水果与清雅小苍兰、追求亲和力的年轻男女。',
      'zh-HK': '初涉香水、喜歡多汁清甜水果與清雅小蒼蘭、追求親和力的年輕男女。',
      fr: 'Débutants à la recherche d’une signature de jour florale et fruitée irrésistible.',
      es: 'Principiantes que buscan una fragancia diurna de flores y frutas que encante a todos.',
      de: 'Einsteiger auf der Suche nach einem charmanten fruchtig-blumigen Begleiter für jeden Tag.'
    }
  }
};

/**
 * Helper to get localized fragrance family name
 */
export function getCardFragranceFamily(perfume: Perfume, lang: Language): string {
  const familyKey = perfume.fragranceFamily;
  const match = FRAGRANCE_FAMILIES_I18N[familyKey];
  if (match) {
    if (lang === 'zh-HK') return match['zh-HK'] || match.zh || match.en;
    if (lang === 'zh' || lang === 'zh-CN') return match.zh || match.en;
    if (lang === 'fr') return match.fr || match.en;
    if (lang === 'es') return match.es || match.en;
    if (lang === 'de') return match.de || match.en;
    return match.en;
  }
  if (lang === 'zh-HK' || lang === 'zh' || lang === 'zh-CN') {
    return perfume.fragranceFamilyZh || perfume.fragranceFamily;
  }
  return perfume.fragranceFamily;
}

/**
 * Helper to get localized poetic vibe / subtitle
 */
export function getCardPoeticVibe(perfume: Perfume, lang: Language): string {
  // Check seed perfumes catalog
  const seed = SEED_PERFUMES_I18N[perfume.id];
  if (seed?.poeticVibe) {
    if (lang === 'zh-HK') return seed.poeticVibe['zh-HK'] || seed.poeticVibe.zh || seed.poeticVibe.en;
    if (lang === 'zh' || lang === 'zh-CN') return seed.poeticVibe.zh || seed.poeticVibe.en;
    if (lang === 'fr') return seed.poeticVibe.fr || seed.poeticVibe.en;
    if (lang === 'es') return seed.poeticVibe.es || seed.poeticVibe.en;
    if (lang === 'de') return seed.poeticVibe.de || seed.poeticVibe.en;
    return seed.poeticVibe.en;
  }

  // Check archetypes
  for (const [code, arch] of Object.entries(ARCHETYPES_I18N)) {
    if (perfume.id.includes(code)) {
      if (lang === 'zh-HK') return arch.poeticVibe['zh-HK'] || arch.poeticVibe.zh || arch.poeticVibe.en;
      if (lang === 'zh' || lang === 'zh-CN') return arch.poeticVibe.zh || arch.poeticVibe.en;
      if (lang === 'fr') return arch.poeticVibe.fr || arch.poeticVibe.en;
      if (lang === 'es') return arch.poeticVibe.es || arch.poeticVibe.en;
      if (lang === 'de') return arch.poeticVibe.de || arch.poeticVibe.en;
      return arch.poeticVibe.en;
    }
  }

  // Fallback to model data
  if (lang === 'zh-HK' || lang === 'zh' || lang === 'zh-CN') {
    return perfume.poeticVibeZh || perfume.descriptionZh || perfume.poeticVibe || perfume.description || '';
  }
  return perfume.poeticVibe || perfume.description || '';
}

/**
 * Helper to get localized tags list
 */
export function getCardTags(perfume: Perfume, lang: Language): string[] {
  const baseTags = perfume.tags || [];
  return baseTags.map((tagKey, idx) => {
    const normalized = tagKey.toLowerCase().trim();
    const tagMatch = TAGS_I18N[normalized];
    if (tagMatch) {
      if (lang === 'zh-HK') return tagMatch['zh-HK'] || tagMatch.zh || tagMatch.en;
      if (lang === 'zh' || lang === 'zh-CN') return tagMatch.zh || tagMatch.en;
      if (lang === 'fr') return tagMatch.fr || tagMatch.en;
      if (lang === 'es') return tagMatch.es || tagMatch.en;
      if (lang === 'de') return tagMatch.de || tagMatch.en;
      return tagMatch.en;
    }
    // Fallback if tag is in Chinese array
    if ((lang === 'zh-HK' || lang === 'zh' || lang === 'zh-CN') && perfume.tagsZh && perfume.tagsZh[idx]) {
      return perfume.tagsZh[idx];
    }
    return tagKey;
  });
}

/**
 * Helper to get localized recommendation reason / snippet
 */
export function getCardReasonText(
  perfume: Perfume,
  matchReason: string | undefined,
  matchReasonZh: string | undefined,
  lang: Language
): string {
  // Check if this perfume has archetype or seed specific suitable text
  const seed = SEED_PERFUMES_I18N[perfume.id];
  if (seed?.suitableFor) {
    if (lang === 'zh-HK') return seed.suitableFor['zh-HK'] || seed.suitableFor.zh || seed.suitableFor.en;
    if (lang === 'zh' || lang === 'zh-CN') return seed.suitableFor.zh || seed.suitableFor.en;
    if (lang === 'fr') return seed.suitableFor.fr || seed.suitableFor.en;
    if (lang === 'es') return seed.suitableFor.es || seed.suitableFor.en;
    if (lang === 'de') return seed.suitableFor.de || seed.suitableFor.en;
    return seed.suitableFor.en;
  }

  for (const [code, arch] of Object.entries(ARCHETYPES_I18N)) {
    if (perfume.id.includes(code)) {
      if (lang === 'zh-HK') return arch.suitableFor['zh-HK'] || arch.suitableFor.zh || arch.suitableFor.en;
      if (lang === 'zh' || lang === 'zh-CN') return arch.suitableFor.zh || arch.suitableFor.en;
      if (lang === 'fr') return arch.suitableFor.fr || arch.suitableFor.en;
      if (lang === 'es') return arch.suitableFor.es || arch.suitableFor.en;
      if (lang === 'de') return arch.suitableFor.de || arch.suitableFor.en;
      return arch.suitableFor.en;
    }
  }

  // Fallback to match reason or suitableFor
  if (lang === 'zh-HK' || lang === 'zh' || lang === 'zh-CN') {
    return matchReasonZh || perfume.suitableForZh || perfume.whyItSuitsYouZh || perfume.descriptionZh || matchReason || perfume.description || '';
  }

  if (lang === 'fr') {
    if (matchReason && matchReason.includes('Harmonizes with this personality')) {
      const famFr = getCardFragranceFamily(perfume, 'fr');
      return `S’harmonise parfaitement avec ce profil grâce à ses accords délicats de ${famFr.toLowerCase()}.`;
    }
    return matchReason || perfume.suitableFor || perfume.whyItSuitsYou || perfume.description || '';
  }

  if (esOrDeLang(lang) === 'es') {
    if (matchReason && matchReason.includes('Harmonizes with this personality')) {
      const famEs = getCardFragranceFamily(perfume, 'es');
      return `Armoniza perfectamente con este perfil gracias a sus acordes de ${famEs.toLowerCase()}.`;
    }
    return matchReason || perfume.suitableFor || perfume.whyItSuitsYou || perfume.description || '';
  }

  if (esOrDeLang(lang) === 'de') {
    if (matchReason && matchReason.includes('Harmonizes with this personality')) {
      const famDe = getCardFragranceFamily(perfume, 'de');
      return `Harmoniert ideal mit diesem Profil durch seine edlen ${famDe}-Akkorde.`;
    }
    return matchReason || perfume.suitableFor || perfume.whyItSuitsYou || perfume.description || '';
  }

  return matchReason || perfume.suitableFor || perfume.whyItSuitsYou || perfume.description || '';
}

function esOrDeLang(l: Language): string {
  return l;
}
