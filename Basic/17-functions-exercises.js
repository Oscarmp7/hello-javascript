/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

export function sum(a, b) {
    return a + b;   
}
console.log('Suma de 5 + 10' + ' = ' + sum(5, 10)); 


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

function findMax(array) {
    if (array.length === 0) {
        return null;
    } else {
        let max = array[0]; 
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]; 
            }
        }
        return max; 
    }
}

console.log('Número máximo en el array [10, 205, 98, 73, 5000, 2, 25] es: ' + findMax([10, 205, 98, 73, 5000, 2, 25])); // Ejemplo de uso

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

function countVowels(str) {
    const vowels = 'aeiouáéíóú';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}   
console.log('El número de vocales en "Hola, ¿cómo estás?" es: ' + countVowels("Hola, ¿cómo estás?")); 

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}

console.log('Array original: ["hola", "mundo", "javascript"]');
console.log('Array en mayúsculas:', toUpperCaseArray(["hola", "mundo", "javascript"])); 

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // No es primo
        }
    }

    return true; // Es primo
}
console.log(`¿El número 29 es primo? ` + isPrime(29)); // Ejemplo de uso

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.


// Usando .filter que es más eficiente para este caso segun documentación de MDN
console.log('Elementos comunes entre los arrays [1, 2, 3, 4, 5] y [4, 5, 6, 7, 8] con .filter:');
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
function findCommonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(findCommonElements(array1, array2)); 

// Usando .forEach que es menos eficiente pero también válido
console.log('Elementos comunes entre los arrays [1, 2, 3, 4, 5] y [4, 5, 6, 7, 8] con .forEach:');
function findCommonElementsForEach(arr1, arr2) {
    let commonElements = [];
    arr1.forEach(value => {
        if (arr2.includes(value)) {
            commonElements.push(value);
        }
    });
    return commonElements;
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function sumEvenNumbers(arr) {
    let sum = 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            sum += num;
        } 
    }) 
    console.log(`Suma de números pares en el array [1, 2, 3, 4, 5, 6]: ${sum}`);
}
sumEvenNumbers([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]); 

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function squareNumbers(arr) {
    return arr.map(num => num ** 2);
}
console.log('Array original: [1, 2, 3, 4, 5]');
console.log('Array con números al cuadrado:', squareNumbers([1, 2, 3, 4, 5])); 

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// Usando .split, .reverse y .join es la mejor opción para invertir el orden de las palabras en una cadena de texto segun la documentación de MDN

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
console.log('Cadena original: "Hola mundo, ¿cómo estás?"');
console.log('Cadena con palabras en orden inverso: ' + reverseWords("Hola mundo, ¿cómo estás?"));

//usando forEach sin .plit, ni .reverse apara invertir el orden de las palabras en una cadena de texto
function reverseWordsForEach(str) {
    let words = [];
    let currentWord = '';
    for (let char of str) {
        if (char === ' ') {
            if (currentWord) {
                words.unshift(currentWord); // Añade al principio
                currentWord = '';
            }
        } else {
            currentWord += char;
        }
    }
    if (currentWord) {
        words.unshift(currentWord); // Añade la última palabra
    }
    return words.join(' ');
}
console.log('Cadena original: "Hola mundo, ¿cómo estás?"');
console.log('Cadena con palabras en orden inverso usando forEach: ' + reverseWordsForEach("Hola mundo, ¿cómo estás?"));

// 10. Crea una función que calcule el factorial de un número dado.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(`El factorial de 5 es: ${factorial(5)}`);