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

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("Anita lava la tina")); // true

// 3. Crea una función que reciba un array de edades y devuelva solo las que sean mayores o iguales a 18.

function filterAdults(ages) {
    return ages.filter(age => age >= 18);
}
console.log(filterAdults([15, 20, 17, 18, 22, 16])); // [20, 18, 22]

// 4. Recibe un array de números y devuelve la suma de todos los que sean múltiplos de 3 o 5.

function sumMultiplesOf3And5(numbers) {
    return numbers.reduce((sum, num) => {
        if (num % 3 === 0 || num % 5 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}
console.log(sumMultiplesOf3And5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 33

// 5.  Usa .reduce() para devolver el producto de todos los elementos de un array de números.

function productOfArray(numbers) {
    return numbers.reduce((product, num) => product * num, 1);  
}
console.log(productOfArray([1, 2, 3, 4, 5])); // 120

// 6. Crea una función que reciba un string y un número, y devuelva el string repetido ese número de veces.
function repeatString(str, num) {
    return str.repeat(num);
}
console.log(repeatString("Hola ", 3)); // "Hola Hola Hola "

// 7. Dado un string tipo "hola mundo desde javascript", devuelve "Hola Mundo Desde Javascript".

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"

// 8. Recibe un array de números y devuelve el segundo más grande (sin ordenar el array).

function secondLargest(numbers) {
    const uniqueNumbers = [...new Set(numbers)]; 
    if (uniqueNumbers.length < 2) return null; 
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1]; 
}
console.log(secondLargest([10, 20, 30, 40, 50])); 

// 9. Recibe un string y devuelve cuántas palabras tiene. (¡Ojo! No letras, palabras).
function countWords(str) {
    return str.trim().split(/\s+/).length; // Usamos \s+ para dividir por espacios
}
console.log(countWords("Hola mundo, ¿cómo estás?")); 

// 10. Crea una función que reciba dos arrays y devuelva uno nuevo intercalando sus valores.

function interleaveArrays(arr1, arr2) { 
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) result.push(arr1[i]);
        if (i < arr2.length) result.push(arr2[i]);
    }
    
    return result;
}
console.log(interleaveArrays([1, 2, 3], ['a', 'b', 'c', 'd'])); // [1, 'a', 2, 'b', 3, 'c', 'd']
