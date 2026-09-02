import 'dotenv/config';
import { app } from './app.js';
const port=Number(process.env.PORT)||8787;
const host='0.0.0.0';
app.listen(port,host,()=>console.log(`Fragrance Compass API listening on ${host}:${port}`));
