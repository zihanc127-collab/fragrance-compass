export interface SmellMapping {
  tags: string[];
  notes: string[];
  notesZh: string[];
  families: string[];
  familiesZh: string[];
  negativeFor?: string[];
}

export const LIKED_SMELL_MAPPINGS: Record<string, SmellMapping> = {
  'fresh citrus': {
    tags: ['citrus', 'fresh', 'bergamot', 'sparkling', 'bright'],
    notes: ['Bergamot', 'Calabrian Lemon', 'Grapefruit', 'Bitter Orange', 'Petitgrain', 'Neroli'],
    notesZh: ['佛手柑', '卡拉布里亚柠檬', '多汁西柚', '苦橙皮', '苦橙叶', '橙花'],
    families: ['Citrus Aromatic', 'Citrus Floral', 'Hesperidic'],
    familiesZh: ['柑橘芳香调', '柑橘花香调', '经典柑橘调']
  },
  'rain after grass': {
    tags: ['green', 'rain', 'mineral', 'earthy', 'fresh', 'cool'],
    notes: ['Petrichor', 'Green Leaves', 'Wet Earth', 'Galbanum', 'Bamboo', 'Haitian Vetiver'],
    notesZh: ['雨后泥土气 (潮湿苔土)', '青绿枝叶', '白松香', '翠竹', '海地香根草'],
    families: ['Green Woody', 'Aromatic Mineral', 'Chypre Green'],
    familiesZh: ['绿意木质调', '芳香矿物水生调', '西普绿意调']
  },
  'clean laundry': {
    tags: ['clean', 'laundry', 'white musk', 'soft', 'linen', 'airy'],
    notes: ['Clean Aldehydes', 'White Musk', 'Cotton Blossom', 'Lily of the Valley', 'Ambrette'],
    notesZh: ['轻盈醛香', '洁净白麝香', '木棉花', '纯净铃兰', '黄葵籽'],
    families: ['Clean Floral Musk', 'Aldehydic Musk', 'Soft Skin Scents'],
    familiesZh: ['洁净花香麝香调', '轻醛白麝香调', '伪体香调']
  },
  'tea leaves': {
    tags: ['tea', 'green tea', 'black tea', 'calm', 'zen', 'transparent'],
    notes: ['White Tea', 'Green Tea Extract', 'Black Tea Infusion', 'Mate', 'Bamboo', 'Neroli'],
    notesZh: ['高山白茶', '冷萃绿茶', '发酵红茶', '马黛茶', '水生翠竹', '清橙花'],
    families: ['Tea Aromatic', 'Woody Tea', 'Green Fresh'],
    familiesZh: ['清雅茶香调', '木质茶香调', '清新绿意调']
  },
  'soft woods': {
    tags: ['woody', 'cedar', 'sandalwood', 'soft woods', 'calm', 'warm'],
    notes: ['Atlas Cedarwood', 'Australian Sandalwood', 'Papyrus', 'Cashmeran', 'White Cedar'],
    notesZh: ['阿特拉斯雪松', '澳大利亚檀香木', '纸莎草', '羊绒木', '白雪松'],
    families: ['Woody Aromatic', 'Creamy Woody Musk', 'Dry Cedar'],
    familiesZh: ['木质芳香调', '温润檀香木质调', '干爽雪松调']
  },
  'green leaves': {
    tags: ['green', 'botanical', 'herbal', 'fresh grass', 'crushed stems', 'galbanum', 'fresh'],
    notes: ['Crushed Green Stems', 'Galbanum', 'Fresh Cut Grass', 'Blackcurrant Leaf', 'Tomato Leaf', 'Violet Leaf'],
    notesZh: ['揉碎青绿枝叶', '白松香', '初剪青草', '黑加仑叶', '番茄叶', '紫罗兰叶'],
    families: ['Green Botanical', 'Aromatic Green', 'Chypre Green', 'Fougère Green'],
    familiesZh: ['纯净植物绿意调', '芳香草本绿意调', '西普绿意调', '草本馥奇调']
  },
  'fig & milky greens': {
    tags: ['fig', 'milky greens', 'creamy', 'fig leaf', 'coconut', 'wood'],
    notes: ['Mediterranean Fig Leaf', 'Milky Fig Sap', 'Coconut Wood', 'White Sandalwood', 'Green Bark'],
    notesZh: ['地中海无花果叶', '温润无花果乳汁', '椰奶木质', '白檀香木', '青绿树皮'],
    families: ['Fruity Green Woody', 'Creamy Woody Green', 'Mediterranean Fig'],
    familiesZh: ['果香绿意木质调', '温润奶香绿意调', '地中海无花果调']
  },
  'sea breeze': {
    tags: ['aquatic', 'sea salt', 'breeze', 'mineral', 'fresh', 'ocean'],
    notes: ['Sea Salt', 'Ocean Mist', 'Driftwood', 'Coastal Sage', 'Water Lily', 'Red Algae'],
    notesZh: ['英伦海盐', '海浪水汽', '风干海漂木', '海岸鼠尾草', '睡莲', '红海藻'],
    families: ['Aquatic Aromatic', 'Woody Marine', 'Mineral Aquatic'],
    familiesZh: ['水生海风调', '木质海洋调', '矿物水生调']
  },
  'fresh flowers': {
    tags: ['floral', 'rose', 'freesia', 'peony', 'neroli', 'dewy'],
    notes: ['Dewy Damask Rose', 'White Freesia', 'Magnolia Petals', 'Orange Blossom', 'Peony'],
    notesZh: ['晨露大马士革玫瑰', '白色小苍兰', '木兰花瓣', '白橙花', '初绽牡丹'],
    families: ['Floral Green', 'Fresh Floral', 'Soft Rose Floral'],
    familiesZh: ['绿意花香调', '清新花香调', '柔美玫瑰花香调']
  },
  'creamy vanilla': {
    tags: ['vanilla', 'creamy', 'tonka', 'gourmand', 'cozy', 'warm'],
    notes: ['Bourbon Vanilla', 'Tonka Bean', 'Benzoin', 'Milk Accord', 'Almond Blossom'],
    notesZh: ['波旁香草', '零陵香豆', '温润安息香', '柔滑奶香', '杏仁花'],
    families: ['Woody Gourmand', 'Soft Oriental Amber', 'Vanilla Musk'],
    familiesZh: ['木质美食调', '温润东方琥珀调', '香草麝香调']
  },
  'warm spices': {
    tags: ['warm spices', 'cardamom', 'pink pepper', 'cinnamon', 'amber', 'cozy'],
    notes: ['Cardamom Pods', 'Pink Pepper', 'Cinnamon Bark', 'Nutmeg', 'Warm Amber'],
    notesZh: ['小豆蔻', '粉红胡椒', '肉桂树皮', '肉豆蔻', '暖阳琥珀'],
    families: ['Warm Spicy Woody', 'Amber Oriental', 'Spicy Aromatic'],
    familiesZh: ['暖辛木质调', '东方琥珀调', '芳香香辛料调']
  },
  'incense or smoke': {
    tags: ['incense or smoke', 'smoky', 'temple', 'cypress', 'mysterious', 'zen'],
    notes: ['Silver Frankincense', 'Smoked Woods', 'Hinoki Cypress', 'Myrrh Resin', 'Birch Tar'],
    notesZh: ['阿曼银乳香', '烟熏木质', '日本扁柏木', '没药树脂', '轻烟桦木'],
    families: ['Woody Smoky', 'Resinous Incense', 'Sacred Temple Wood'],
    familiesZh: ['烟熏木质调', '树脂焚香调', '古寺冷香木质调']
  },
  'powdery makeup': {
    tags: ['powdery', 'iris', 'orris', 'vintage', 'elegant', 'soft'],
    notes: ['Florentine Orris Root', 'Violet Petals', 'Heliotrope', 'Rice Powder', 'White Suede'],
    notesZh: ['佛罗伦萨鸢尾根', '紫罗兰花瓣', '天芥菜', '轻柔米粉', '白麂皮'],
    families: ['Powdery Floral Musk', 'Soft Iris Woody', 'Vintage Chic'],
    familiesZh: ['粉质花香麝香调', '柔美鸢尾木质调', '复古优雅调']
  },
  'fruits': {
    tags: ['fruits', 'fruity', 'pear', 'peach', 'blackcurrant', 'juicy'],
    notes: ['Crisp English Pear', 'White Peach', 'Blackcurrant', 'Green Apple', 'Lychee'],
    notesZh: ['清脆英国梨', '多汁白桃', '酸甜黑加仑', '青苹果', '晨露荔枝'],
    families: ['Fruity Floral', 'Fruity Chypre', 'Sparkling Fruit'],
    familiesZh: ['果香花香调', '果香西普调', '多汁果香调']
  },
  'herbs': {
    tags: ['herbs', 'aromatic', 'mint', 'basil', 'lavender', 'rosemary'],
    notes: ['Grand Vert Basil', 'Spearmint Leaves', 'Wild Lavender', 'Rosemary', 'Thyme'],
    notesZh: ['大绿罗勒', '野生留兰香薄荷', '法国薰衣草', '迷迭香', '百里香'],
    families: ['Aromatic Herbal', 'Fougère Aromatic', 'Green Mint Fresh'],
    familiesZh: ['草本芳香调', '芳香馥奇调', '清凉薄荷绿意调']
  }
};

export const DISLIKED_SMELL_PENALTIES: Record<string, { avoidTags: string[]; avoidNotes: string[]; avoidNotesZh: string[] }> = {
  'too sweet': {
    avoidTags: ['sweet', 'gourmand', 'sugar', 'caramel', 'vanilla'],
    avoidNotes: ['Heavy Caramel', 'Dense Cotton Candy', 'Syrupy Amber', 'Dense Vanilla'],
    avoidNotesZh: ['厚重焦糖', '浓稠棉花糖', '糖浆琥珀', '浓重香草甜香']
  },
  'too strong': {
    avoidTags: ['intense', 'suffocating', 'heavy projection', 'loud'],
    avoidNotes: ['Heavy Oud', 'Indolic Tuberose Bomb', 'Animalic Castoreum'],
    avoidNotesZh: ['浓重乌木', '高侵略性晚香玉', '浓烈动物腺香']
  },
  'too powdery': {
    avoidTags: ['powdery', 'makeup', 'vintage', 'dusty'],
    avoidNotes: ['Heavy Talc Powder', 'Dense Violet Dust', 'Dense Heliotrope'],
    avoidNotesZh: ['浓重老式滑石粉', '厚重紫罗兰粉尘', '闷感天芥菜']
  },
  'too mature': {
    avoidTags: ['mature', 'vintage', 'traditional aldehyde', 'classic floral'],
    avoidNotes: ['Sharp Retro Aldehydes', 'Heavy Civet', 'Traditional Carnation'],
    avoidNotesZh: ['尖锐复古浓皂感醛', '浓厚灵猫香', '传统老式康乃馨']
  },
  'too floral': {
    avoidTags: ['heavy floral', 'tuberose', 'jasmine indoles', 'dense bouquet'],
    avoidNotes: ['Indolic Jasmine', 'Heavy Carnal Tuberose', 'Lush Gardenia Bomb'],
    avoidNotesZh: ['高吲哚浓茉莉', '浓郁晚香玉肉欲感', '厚重栀子花']
  },
  'too smoky': {
    avoidTags: ['smoky', 'smoke', 'tar', 'heavy leather'],
    avoidNotes: ['Burnt Birch Tar', 'Heavy BBQ Smoke', 'Dense Peat Charcoal'],
    avoidNotesZh: ['焦糊桦木焦油', '厚重烧烤碳烟', '浓烟熏泥煤']
  },
  'too spicy': {
    avoidTags: ['spicy', 'pungent', 'clove', 'sharp pepper'],
    avoidNotes: ['Pungent Clove Spike', 'Sharp Cumin', 'Heavy Black Pepper'],
    avoidNotesZh: ['刺鼻丁香', '浓烈孜然', '呛鼻过量黑胡椒']
  },
  'too musky': {
    avoidTags: ['musky', 'animalic', 'heavy body musk'],
    avoidNotes: ['Dirty Animal Musk', 'Heavy Civet', 'Sweaty Cumin'],
    avoidNotesZh: ['浑浊动物麝香', '汗液感孜然体味']
  },
  'too bitter': {
    avoidTags: ['bitter', 'medicinal', 'herbal medicine'],
    avoidNotes: ['Medicinal Wormwood', 'Extremely Bitter Gentian', 'Medicinal Herbals'],
    avoidNotesZh: ['极苦苦艾草', '中药汤苦涩龙胆', '浓厚药感根茎']
  },
  'too synthetic': {
    avoidTags: ['synthetic', 'chemical', 'disinfectant'],
    avoidNotes: ['Sharp Detergent Alcohol', 'Harsh Calone', 'Industrial Solvent'],
    avoidNotesZh: ['刺鼻工业酒精感', '劣质人工水感瓜香分子', '刺眼人造香精']
  },
  'too soapy': {
    avoidTags: ['soapy', 'bleach', 'harsh soap'],
    avoidNotes: ['Sharp Laundry Bleach Aldehyde', 'Harsh Bar Soap'],
    avoidNotesZh: ['刺鼻洗衣粉漂白感', '过于厚重的碱性肥皂']
  }
};

export const ZODIAC_PROFILES: Record<string, {
  titleEn: string;
  titleZh: string;
  tryKeywordsEn: string[];
  tryKeywordsZh: string[];
  avoidKeywordsEn: string[];
  avoidKeywordsZh: string[];
  topEn: string[];
  topZh: string[];
  midEn: string[];
  midZh: string[];
  baseEn: string[];
  baseZh: string[];
  descEn: string;
  descZh: string;
}> = {
  aries: {
    titleEn: 'Vibrant Solar Amber & Green Citrus',
    titleZh: '初火耀阳：生机柑橘与温暖琥珀',
    tryKeywordsEn: ['Bergamot', 'Ginger', 'Pink Pepper', 'Cedar', 'Solar Citrus'],
    tryKeywordsZh: ['佛手柑', '生姜微辛', '粉红胡椒', '干爽雪松', '阳光柑橘'],
    avoidKeywordsEn: ['Heavy Powdery Iris', 'Melancholic Moss'],
    avoidKeywordsZh: ['沉闷粉质鸢尾', '阴郁潮湿苔藓'],
    topEn: ['Calabrian Bergamot', 'Pink Pepper', 'Zesty Ginger'],
    topZh: ['卡拉布里亚佛手柑', '粉红胡椒', '鲜姜气泡'],
    midEn: ['Neroli Blossom', 'White Cedar', 'Cardamom'],
    midZh: ['明快橙花', '白雪松', '清凉小豆蔻'],
    baseEn: ['Golden Amber', 'Vetiver', 'Clean Musk'],
    baseZh: ['暖阳琥珀', '香根草', '净透白麝香'],
    descEn: 'A burst of fearless momentum: sunny citrus sparkle tempered with refined, crisp wood and golden warmth.',
    descZh: '如破晓第一道炽热晨光，将无所畏惧的生机注入柑橘气泡与干爽雪松之中。'
  },
  taurus: {
    titleEn: 'Verdant Earth & Velvety Rose Woods',
    titleZh: '青翠原野：无花果叶与丝绒木质',
    tryKeywordsEn: ['Fig Leaf', 'Damask Rose', 'Sandalwood', 'Vetiver', 'Garden Dew'],
    tryKeywordsZh: ['无花果叶', '晨露玫瑰', '老山檀木', '香根草', '天然草木'],
    avoidKeywordsEn: ['Piercing Synthetic Citrus', 'Harsh Metallic notes'],
    avoidKeywordsZh: ['尖锐化工柑橘', '冷酷金属气味'],
    topEn: ['Green Fig Leaf', 'Pear Nectar', 'Bergamot'],
    topZh: ['青无花果嫩叶', '清甜脆梨', '佛手柑'],
    midEn: ['Dewy Damask Rose', 'Orris Root', 'Bamboo'],
    midZh: ['晨露玫瑰花瓣', '丝绒鸢尾根', '翠竹'],
    baseEn: ['Milky Sandalwood', 'Cedarwood', 'Cashmeran'],
    baseZh: ['奶香檀木', '雪松木', '开司米羊绒木'],
    descEn: 'Grounded, sensuous botanical serenity: rich green leaves melting into comforting woods and soft petals.',
    descZh: '扎根于丰饶大地的从容享受：绿叶汁液与温润奶香檀木，带来安心踏实的优雅与从容。'
  },
  gemini: {
    titleEn: 'Airy Breeze & Sparkling Mint Tea',
    titleZh: '灵动双子：薄荷青茶与气泡橙花',
    tryKeywordsEn: ['Mint Leaves', 'White Tea', 'Neroli', 'Grapefruit', 'Ozone'],
    tryKeywordsZh: ['野生薄荷', '高山冷白茶', '气泡橙花', '多汁西柚', '通透空气感'],
    avoidKeywordsEn: ['Heavy Church Incense', 'Dense Gourmand Caramel'],
    avoidKeywordsZh: ['厚重寺庙香火', '浓稠焦糖甜腻'],
    topEn: ['Crushed Spearmint', 'Grapefruit Zest', 'Green Lemon'],
    topZh: ['手揉薄荷叶', '西柚果皮', '青柠檬'],
    midEn: ['Cold Steeped White Tea', 'Orange Flower', 'Cyclamen'],
    midZh: ['冷萃白茶', '轻橙花', '仙客来水汽'],
    baseEn: ['Blonde Woods', 'Clean Musk', 'Ambroxan'],
    baseZh: ['浅色木质', '贴肤白麝香', '降龙涎醚'],
    descEn: 'Playful intellect dancing on the wind: sparkling, refreshing botanicals that never stay still.',
    descZh: '如微风穿梭于初夏枝头：轻盈敏捷的薄荷茶香与澄澈橙花，充满灵气与生动表达。'
  },
  cancer: {
    titleEn: 'Gentle Harbor: Clean Linen & Milky Woods',
    titleZh: '温柔港湾：纯棉净衫与温润檀木',
    tryKeywordsEn: ['White Musk', 'Cotton Flower', 'Sandalwood', 'Pear', 'Warm Milk'],
    tryKeywordsZh: ['洁净白麝香', '木棉花', '温和檀香', '清甜青梨', '轻柔体香'],
    avoidKeywordsEn: ['Aggressive Leather', 'Pungent Animalic Spices'],
    avoidKeywordsZh: ['侵略性强硬皮革', '辛辣刺鼻动物感'],
    topEn: ['Clean Aldehydes', 'Crisp Pear', 'Morning Dew'],
    topZh: ['纯净轻醛', '多汁青梨', '晨间水露'],
    midEn: ['Cotton Flower', 'Soft Peony', 'Waterlily'],
    midZh: ['棉花暖意', '粉白牡丹', '睡莲'],
    baseEn: ['Australian Sandalwood', 'White Musk', 'Vanilla Pod'],
    baseZh: ['澳洲檀香木', '柔滑白麝香', '微暖香草'],
    descEn: 'A warm, safe emotional sanctuary: clean sheets bathed in morning sunlight and comforting milky sandalwood.',
    descZh: '如回到最安全的避风港：晒过阳光的蓬松白被单，伴随轻柔治愈的奶香木质与无尽包容。'
  },
  leo: {
    titleEn: 'Radiant Sovereign: Golden Amber & Noble Bergamot',
    titleZh: '耀目王者：金辉琥珀与尊贵佛手柑',
    tryKeywordsEn: ['Calabrian Bergamot', 'Golden Amber', 'Cardamom', 'Cedar', 'Tonka'],
    tryKeywordsZh: ['卡拉布里亚佛手柑', '金黄琥珀', '小豆蔻', '贵族雪松', '零陵香豆'],
    avoidKeywordsEn: ['Overly Watery Weak notes', 'Dusty Vintage Powders'],
    avoidKeywordsZh: ['过于寡淡水生', '陈旧浑浊粉感'],
    topEn: ['Sun-drenched Bergamot', 'Bitter Mandarin', 'Pink Pepper'],
    topZh: ['暖阳佛手柑', '多汁蜜柑', '粉红胡椒'],
    midEn: ['Cardamom', 'Orange Blossom', 'Cedarwood'],
    midZh: ['小豆蔻', '贵气橙花', '干冽雪松'],
    baseEn: ['Warm Ambergris', 'Tonka Bean', 'Precious Sandalwood'],
    baseZh: ['暖阳琥珀', '零陵香豆', '珍贵老山檀'],
    descEn: 'Luminous presence that commands attention with elegance and generous warmth, never harshness.',
    descZh: '自带光环的明亮与高贵：金灿灿的柑橘阳光与温热琥珀木质交融，尊贵大气而不失亲和。'
  },
  virgo: {
    titleEn: 'Crystalline Order: Cold White Tea & Dry Vetiver',
    titleZh: '澄澈秩序：冷白茶与干爽香根草',
    tryKeywordsEn: ['White Tea', 'Haitian Vetiver', 'Crisp Cedar', 'Iris', 'Bergamot'],
    tryKeywordsZh: ['高山冷白茶', '海地香根草', '干冽雪松', '清冷鸢尾', '佛手柑'],
    avoidKeywordsEn: ['Messy Sweet Gourmands', 'Chaotic Heavy Smoke'],
    avoidKeywordsZh: ['杂乱腻人甜食调', '呛人浓烈烟熏'],
    topEn: ['Chilled Bergamot', 'Green Tea', 'Galbanum'],
    topZh: ['冰镇佛手柑', '绿茶嫩芽', '白松香'],
    midEn: ['Cold White Tea', 'Florentine Iris', 'Bamboo'],
    midZh: ['冷萃白茶', '佛罗伦萨鸢尾', '冷冽竹影'],
    baseEn: ['Haitian Vetiver', 'Atlas Cedar', 'Clean Skin Musk'],
    baseZh: ['海地香根草', '干爽雪松', '无暇贴肤麝香'],
    descEn: 'Flawless precision and pristine cleanliness: cool tea leaves resting on architectural, dry vetiver woods.',
    descZh: '极致纯粹的克制与优雅：冷沏白茶的微苦清润，被严谨利落的香根草与雪松稳稳托起。'
  },
  libra: {
    titleEn: 'Harmonious Grace: Silk Peony & Soft Cedarwood',
    titleZh: '优雅平衡：丝绒牡丹与温和雪松',
    tryKeywordsEn: ['Peony', 'White Freesia', 'Soft Cedar', 'Neroli', 'Ambrette'],
    tryKeywordsZh: ['丝绒牡丹', '白色小苍兰', '温和雪松', '橙花', '黄葵籽'],
    avoidKeywordsEn: ['Unbalanced Bitter Medicine', 'Harsh Animalic notes'],
    avoidKeywordsZh: ['突兀苦涩药感', '粗粝动物臭味'],
    topEn: ['White Freesia', 'Bergamot', 'Mandarin'],
    topZh: ['白色小苍兰', '佛手柑', '甜柑橘'],
    midEn: ['Pink Peony', 'Dewy Rose', 'Neroli'],
    midZh: ['柔美牡丹', '晨露玫瑰', '纯净橙花'],
    baseEn: ['Soft Cedarwood', 'White Musk', 'Warm Amber'],
    baseZh: ['温润雪松', '贴肤白麝香', '透亮琥珀'],
    descEn: 'The art of effortless aesthetic balance: a delicate floral bouquet cushioned in smooth modern woods.',
    descZh: '天生的审美艺术家：如一束剪裁适度的清新花束置于现代艺术木几上，温婉得体，毫无棱角。'
  },
  scorpio: {
    titleEn: 'Magnetic Shadow: Cold Incense, Black Tea & Deep Woods',
    titleZh: '神秘暗影：冷香焚木与深邃红茶',
    tryKeywordsEn: ['Black Tea', 'Smoky Incense', 'Dark Cedar', 'Patchouli', 'Black Pepper'],
    tryKeywordsZh: ['发酵红茶', '静谧焚香', '深邃雪松', '纯澈广藿', '黑胡椒'],
    avoidKeywordsEn: ['Childish Candy Florals', 'Bland Citrus Cleaners'],
    avoidKeywordsZh: ['幼稚劣质糖果香', '寡淡平庸清洁剂味'],
    topEn: ['Smoked Black Tea', 'Pink Pepper', 'Bay Leaf'],
    topZh: ['轻烟红茶', '粉红胡椒', '月桂叶'],
    midEn: ['Frankincense', 'Dark Rose', 'Guaiac Wood'],
    midZh: ['冷香乳香', '暗夜玫瑰', '愈创木'],
    baseEn: ['Indonesian Patchouli', 'Cedarwood', 'Clean Smoke'],
    baseZh: ['印尼广藿香', '古老雪松', '静谧冷烟'],
    descEn: 'Intriguing depth with magnetic restraint: smoky incense embers swirling into rich fermented tea and dark forest woods.',
    descZh: '深不可测的迷人引力：幽暗冷木与轻烟焚香萦绕在黑茶之间，克制中涌动着无尽故事感。'
  },
  sagittarius: {
    titleEn: 'Wanderer’s Horizon: Wild Pine, Juniper & Coastal Sea Salt',
    titleZh: '旷野之风：自由松针、杜松子与海盐',
    tryKeywordsEn: ['Juniper Berry', 'Pine Needles', 'Sea Salt', 'Sage', 'Grapefruit'],
    tryKeywordsZh: ['杜松子', '旷野松针', '英伦海盐', '鼠尾草', '粉红西柚'],
    avoidKeywordsEn: ['Suffocating Heavy Powders', 'Claustrophobic Sweetness'],
    avoidKeywordsZh: ['沉闷窒息脂粉感', '逼仄黏腻甜香'],
    topEn: ['Iced Juniper Berries', 'Grapefruit', 'Ocean Mist'],
    topZh: ['冰镇杜松子', '多汁西柚', '海浪水汽'],
    midEn: ['Wild Pine Needles', 'Coastal Sage', 'Rosemary'],
    midZh: ['旷野松针', '海岸鼠尾草', '野生迷迭香'],
    baseEn: ['Driftwood', 'Fir Balsam', 'Vetiver'],
    baseZh: ['风干海漂木', '冷杉香脂', '香根草'],
    descEn: 'The intoxicating breath of open horizons: high alpine pine forests meeting endless, salt-kissed ocean winds.',
    descZh: '奔向辽阔旷野的自由灵魂：高山冷杉松针与浩瀚海浪风暴交汇，爽朗开阔，意气风发。'
  },
  capricorn: {
    titleEn: 'Timeless Monolith: Dry Cedarwood, Cypress & Cool Iris',
    titleZh: '坚毅磐石：干冽雪松、柏木与清冷鸢尾',
    tryKeywordsEn: ['Atlas Cedar', 'Cypress', 'Iris Root', 'Oakmoss', 'Nutmeg'],
    tryKeywordsZh: ['干爽雪松', '深山柏木', '清冷鸢尾根', '深绿橡苔', '肉豆蔻'],
    avoidKeywordsEn: ['Fluffy Sugar Bubblegum', 'Unfocused Fruit Splashes'],
    avoidKeywordsZh: ['轻浮泡泡糖甜感', '散漫劣质果汁'],
    topEn: ['Italian Cypress', 'Bergamot', 'Cardamom'],
    topZh: ['意大利柏木', '佛手柑', '清凉小豆蔻'],
    midEn: ['Florentine Iris', 'Cedar Heartwood', 'Nutmeg'],
    midZh: ['佛罗伦萨鸢尾', '雪松心木', '肉豆蔻'],
    baseEn: ['Oakmoss', 'Smoked Vetiver', 'Clean Amber'],
    baseZh: ['深山橡苔', '微熏香根草', '透亮琥珀'],
    descEn: 'Architectural composure and enduring authority: noble dry cypress and cedarwood refined by contemplative iris.',
    descZh: '岁月雕琢的沉着与自律：如一座耸立于雪线之上的古典石木建筑，高远、庄严而无比坚韧。'
  },
  aquarius: {
    titleEn: 'Abstract Ether: Ozonic Bamboo & Cold Aldehydes',
    titleZh: '空灵异想：冷氧竹影与极简降龙涎醚',
    tryKeywordsEn: ['Cold Ozone', 'Bamboo', 'Ambroxan', 'Aldehydes', 'White Wood'],
    tryKeywordsZh: ['冷氧水汽', '空灵翠竹', '降龙涎醚', '透明轻醛', '极简白木'],
    avoidKeywordsEn: ['Predictable Old-school Florals', 'Heavy Commercial Syrups'],
    avoidKeywordsZh: ['千篇一律传统老花香', '俗气商业甜水'],
    topEn: ['Cold Atmospheric Air', 'Crisp Green Apple', 'Sparkling Aldehydes'],
    topZh: ['高空冷气流', '清脆青苹果', '气泡轻醛'],
    midEn: ['Bamboo Leaves', 'Water Lily', 'Hedione'],
    midZh: ['青翠竹影', '清晨睡莲', '高定水感分子'],
    baseEn: ['Ambroxan', 'Iso E Super', 'White Cedar'],
    baseZh: ['现代降龙涎醚', '木质龙涎异构体', '白雪松'],
    descEn: 'Futuristic purity and unconventional vision: crystalline cold air flowing through minimalist bamboo architecture.',
    descZh: '超越常规的未来极简美学：如冷氧山风穿透极简竹林建筑，清澈空灵，独树一帜。'
  },
  pisces: {
    titleEn: 'Poetic Dreamscape: Waterlily, Summer Rain & Soft Musk',
    titleZh: '灵性梦境：睡莲水汽、夏雨与柔滑白麝香',
    tryKeywordsEn: ['Waterlily', 'Lotus', 'Rain', 'White Musk', 'Peony'],
    tryKeywordsZh: ['睡莲', '晨露莲花', '夏雨水汽', '柔滑白麝香', '清幽牡丹'],
    avoidKeywordsEn: ['Harsh Dry Smoke', 'Sharp Pungent Spices'],
    avoidKeywordsZh: ['粗糙干燥浓烟', '刺鼻尖锐香辛料'],
    topEn: ['Morning Dewdrops', 'Lotus Blossom', 'Melon Mist'],
    topZh: ['晨间水珠', '清雅莲花', '微润甜瓜水汽'],
    midEn: ['Waterlily', 'Dewy Rosewater', 'Freesia'],
    midZh: ['水中睡莲', '纯露玫瑰', '小苍兰'],
    baseEn: ['Silk White Musk', 'Blonde Cedar', 'Clean Ambergris'],
    baseZh: ['丝缎白麝香', '浅色雪松', '纯净龙涎香'],
    descEn: 'An ethereal watercolor reverie: dewy lotus floating on tranquil misty ponds, enveloped in celestial softness.',
    descZh: '如一幅浸透烟雨的淡彩水墨画：晨露睡莲在幽静水面上漂浮，被无边无际的柔软与诗意包裹。'
  }
};
