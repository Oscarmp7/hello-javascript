/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/


// 4. Importa una función

import { greet } from './31.1-export-files.js';
console.log(greet('Oscar')); 
// 5. Importa una constante

import { PI } from './31.1-export-files.js';
console.log(`El valor de PI es: ${PI}`);

// 6. Importa una clase

import { Person } from './31.1-export-files.js';
const person = new Person('Oscar', 31);
console.log(person.introduce()); // "Hola, soy Oscar y tengo 31 años."

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

    //no lo permite, ya que no se puede exportar por defecto más de una cosa a la vez

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

    // No se puede importar por defecto más de una cosa a la vez, así que no se puede hacer

// 9. Exporta una función, una constante y una clase desde una carpeta

 // Exportando desde archivos diferentes en la carpeta modules

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

import { sum } from './modules/math.js';
import { PI as pi } from './modules/constants.js';
import { Person as User } from './modules/Person.js';
console.log(`La suma de 5 y 10 es: ${sum(5, 10)}`); // "La suma de 5 y 10 es: 15"
console.log(`El valor de PI es: ${pi}`); // "El valor de PI es: 3.14159"
const user = new User('Ana', 28);
console.log(user.introduce()); // "Hola, soy Ana y tengo 28 años."