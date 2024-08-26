// primo.js

/**
 * Verifica si un número es primo.
 * @param {number} num - El número a verificar.
 * @returns {boolean} - Retorna true si el número es primo, false en caso contrario.
 */
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Ejemplo 
const numero = 29;
console.log(`El número ${numero} ${esPrimo(numero) ? 'es' : 'no es'} primo.`);
