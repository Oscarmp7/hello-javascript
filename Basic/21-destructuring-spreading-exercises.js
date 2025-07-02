/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

const array = [1, 2, 3, 4, 5];
const [first, second] = array;
console.log(first, second); // 1 2

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const numbers = [10, 20];
const [a, b, c = 25] = numbers
console.log(a, b, c); // 10 20 25

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const personalbar = {name: "Alice", age: 30, city: "Wonderland"};
const { name, age} = personalbar;
console.log(name, age); // Alice 30

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const user = { username: "Bob", role: "admin", country: "USA" };
const {username: nombreUsuario, role: tipoUsuario} = user;
console.log(nombreUsuario);
console.log(tipoUsuario); 

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const nestedObject = {
    user: {
        id: 1,
        info: {
            name: "Charlie",
            age: 25
        }
    }
};
const { user: { info: { name: nestedName, age: nestedAge } } } = nestedObject;
console.log(nestedName, nestedAge); 

// 6. Usa propagación para combinar dos arrays en uno nuevo

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArrays = [...array1, ...array2];
console.log(combinedArrays);

// 7. Usa propagación para crear una copia de un array

const originalArray = [1, 2, 3, 4];
const copiedArray = [...originalArray]
console.log(copiedArray); 

// 8. Usa propagación para combinar dos objetos en uno nuevo

const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 }; 
const combinedObject = { ...object1, ...object2 };
console.log(combinedObject); 
// 9. Usa propagación para crear una copia de un objeto

const originalObject = { x: 10, y: 20, z: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); 

// 10. Combina desestructuración y propagación

const person = {
    name: "Dave",
    age: 40,
    hobbies: ["reading", "gaming", 'cooking', 'coding', 'travelling']
};
const { name: personName, hobbies: [firstHobby, ...otherHobbies] = [] } = person;
console.log(personName, firstHobby, otherHobbies); // Dave reading [ 'gaming' ]