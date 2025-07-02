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

    get alias() {
        return this.#alias;
    }
}



// 8. Modifica la clase con getters y setters para que use propiedades privadas

class PersonWithPrivateProperties {
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
    set name(newName) {
        this.#name = newName;
    }
    get age() {
        return this.#age;
    }
    set age(newAge) {
        this.#age = newAge;
    }
    get alias() {
        return this.#alias;
    }
    set alias(newAlias) {
        this.#alias = newAlias;
    }
}
const person2 = new PersonWithPrivateProperties("Oscar", 31, "Caonabo");
console.log(person2.name); 

// 9. Utiliza los get y set y muestra sus valores



// 10. Sobrescribe un método de una clase que utilice herencia 