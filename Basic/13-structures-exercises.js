/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ['perro', 'gato', 'elefante', 'jirafa', 'león'];

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('tigre'); // Añade al principio
animals.push('oso'); // Añade al final

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1); // Elimina el tercer elemento (índice 2)

// 4. Crea un set que almacene cinco libros

let books = new Set(['La magia de pensar en grande', 'El monje que vendió su Ferrari', 'La biblia', 'Hyperfocus', 'Compound effect']);

// 5. Añade dos más. Uno de ellos repetido

books.add('Compound effect'); // Añade un libro repetido
books.add('El poder del ahora'); // Añade otro libro
console.log(books); // Muestra el set de libros

// 6. Elimina uno concreto a tu elección

books.delete('La magia de pensar en grande'); // Elimina un libro específico
console.log(books); // Muestra el set de libros

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre']
]);
console.log(months); // Muestra el mapa de meses

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

months.has(5) ? console.log(`Si lo contiene, el mes número 5 es: ${months.get(5)}`) : console.log('El mes número 5 no existe.');

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summerMonths = ['Junio', 'Julio', 'Agosto'];
months.set('Verano', summerMonths);
console.log(months); // Muestra el mapa actualizado con los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arraySet = ['JavaScript', 'Python', 'Java', 'C++', 'JavaScript', 'Python', 'Java', 'C++', 'JavaScript']; // Array con un elemento repetido
console.log(arraySet); // Muestra el array original
let uniqueSet = new Set(arraySet); // Transforma el array a un Set para eliminar duplicados
console.log(uniqueSet); // Muestra el Set con elementos únicos
let setMap = new Map([['Lenguajes', uniqueSet]]); // Almacena el Set en un Map
console.log(setMap); // Muestra el Map que contiene el Set