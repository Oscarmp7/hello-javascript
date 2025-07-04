// 1. Exporta una función

export function greet(name) {
    return `Hola, ${name}!`;
}
 

// 2. Exporta una constante

export const PI = 3.14159;
 

// 3. Exporta una clase

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hola, soy ${this.name} y tengo ${this.age} años.`;
    }
}
