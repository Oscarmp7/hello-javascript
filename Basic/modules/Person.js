export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hola, soy ${this.name} y tengo ${this.age} años.`;
  }
}
