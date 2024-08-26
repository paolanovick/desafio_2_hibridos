// index.mjs

import esPrimo from './primo.mjs';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno

const numero = process.env.NUMERO_PRIMO || 29; // ejemplo
console.log(`El número ${numero} ${esPrimo(numero) ? 'es' : 'no es'} primo.`);
