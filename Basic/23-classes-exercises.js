/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }


// 2. Añade un método a la clase que utilice las propiedades

    class PersonWithMethod {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
        }
    }

// 3. Muestra los valores de las propiedades e invoca a la función

    const person1 = new PersonWithMethod("Oscar", 31);
    console.log(person1.name); 
    console.log(person1.age); 
    console.log(person1.greet()); 

// 4. Añade un método estático a la primera clase

class PersonWithStaticMethod {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static createDefaultPerson() {
        return new PersonWithStaticMethod("Caonabo", 270);
    }
}

// 5. Haz uso del método estático

    const defaultPerson = PersonWithStaticMethod.createDefaultPerson();
    console.log(defaultPerson);
    

// 6. Crea una clase que haga uso de herencia

class Laptop extends Person {
    constructor(name, age, brand, model) {
        super(name, age);
        this.brand = brand;
        this.model = model;
    }
}

const myLaptop = new Laptop("Oscar", 31, "Apple", "MacBook Pro");
console.log(myLaptop);

// 7. Crea una clase que haga uso de getters y setters

class PersonWithGettersSetters {
    #name;
    #age;
    #alias;

    constructor(name, age, alias) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
    }
    get name() {
        return this.#name;
    }

    set alias(newAlias) {
        this.#alias = newAlias;
    }
}
// Creamos una instancia de la clase PersonWithGettersSetters
const person2 = new PersonWithGettersSetters("Oscar", 31, "Oscardev");


// 8. Modifica la clase con getters y setters para que use propiedades privadas

person2.alias = "LaPampara"; // Usando el setter
// person2.name = "Andrés"; // Esto no funcionará porque name no tiene setter

// 9. Utiliza los get y set y muestra sus valores

console.log(person2.name); // Oscar
console.log(person2.alias); // Oscardev
console.log(person2.age); // 31

// 10. Sobrescribe un método de una clase que utilice herencia 

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("El animal emite un sonido genérico");
    }
}

class Dog extends Animal {
    sound() {
        console.log(`${this.name} ladra: ¡Guau!`);
    }
}           
const myDog = new Dog("Rex");
myDog.sound(); // Rex ladra: ¡Guau!