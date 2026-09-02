import { copyFileSync, mkdirSync } from 'node:fs';
mkdirSync('server/dist/data',{recursive:true});
copyFileSync('server/data/fragrance-catalog-v1.json','server/dist/data/fragrance-catalog-v1.json');
