/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 2. Accede y muestra su valor

    console.log(person);

// 3. Agrega una nueva propiedad

person.country = "USA";
console.log(person);

// 4. Elimina una de las 3 primeras propiedades

delete person.age;
console.log(person);

// 5. Agrega una función e invócala

person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}
person.greet();

// 6. Itera las propiedades del objeto

for (let key in person) {
    console.log(key + ": " + person[key]);
}


// 7. Crea un objeto anidado

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: {
        name: "John",
        age: 30
    }
};
console.log(car);

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(car.owner.name); // John
console.log(car.owner.age);  // 30

// 9. Comprueba si los dos objetos creados son iguales

console.log(person === car); // false, son objetos diferentes

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name === car.owner.name); // true, ambos son "John"