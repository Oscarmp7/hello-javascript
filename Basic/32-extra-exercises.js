// File: Basic/32-extra-exercises.js
// --- a/file:///c%3A/Users/omato/OneDrive/Desktop/M

//1. Crea una función que reciba un string y devuelva cuántas veces aparece cada letra.
function countLetters(str) {
    const letters = str.toLowerCase().split('');
    const letterMap = new Map();

    for (let char of letters) {
        if (char === ' ') continue; // Ignorar espacios
        if (letterMap.has(char)) {
            letterMap.set(char, letterMap.get(char) + 1);
        } else {
            letterMap.set(char, 1);
        }
    }
    return letterMap;
}

console.log(countLetters("Hola, ¿cómo estás?")); 

// 2. Crea una función que reciba un string y devuelva true si es un palíndromo (se lee igual al derecho y al revés), ignorando mayúsculas y espacios.

// 3. Crea una función que reciba un array de edades y devuelva solo las que sean mayores o iguales a 18.

// 4. Recibe un array de números y devuelve la suma de todos los que sean múltiplos de 3 o 5.

// 5.  Usa .reduce() para devolver el producto de todos los elementos de un array de números.

// 6. Crea una función que reciba un string y un número, y devuelva el string repetido ese número de veces.

// 7. Dado un string tipo "hola mundo desde javascript", devuelve "Hola Mundo Desde Javascript".

// 8. Recibe un array de números y devuelve el segundo más grande (sin ordenar el array).

// 9. Recibe un string y devuelve cuántas palabras tiene. (¡Ojo! No letras, palabras).

// 10. Crea una función que reciba dos arrays y devuelva uno nuevo intercalando sus valores.