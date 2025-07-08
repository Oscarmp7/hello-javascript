/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
console.log("Ejercicio 1: Función que retorna otra función");
function greetingGeneration(name) {
  return () => {
    console.log(`¡Hola ${name}! Bienvenido a tu nueva casa.`);
  };
}

const greet = greetingGeneration("Oscar");
greet();

// 2. Implementa una función currificada que multiplique 3 números
console.log("Ejercicio 2: Función currificada que multiplica 3 números");
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(multiply(22)(13)(41));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente.
console.log("Ejercicio 3: Función recursiva para calcular potencia");
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent < 0) {
    return 1 / power(base, -exponent);
  }
  return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8
console.log(power(2, -3)); // 0.125
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("Ejercicio 4: Función createCounter con closure");
createCounter = (initialValue) => {
  let count = initialValue;

  return {
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
    getValue: () => {
      return count;
    },
  };
};
const counter = createCounter(10);
console.log(counter.getValue()); // 10
counter.increment();
console.log(counter.getValue()); // 11
counter.decrement();
console.log(counter.getValue()); // 10

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("Ejercicio 5: Función sumManyTimes con Rest parameters");
sumManyTimes = (multiplier, ...numbers) => {
  const total = numbers.reduce((acc, curr) => acc + curr, 0);
  return total * multiplier;
};
console.log(sumManyTimes(2, 1, 2, 3)); // 12
console.log(sumManyTimes(3, 4, 5)); // 27

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

console.log("Ejercicio 6: Callback con suma de números");
function sumWithCallback(valor, callback) {
  const total = valor.reduce((acc, curr) => acc + curr, 0);
  callback(total);
}
function printResult(result) {
  console.log(`El resultado de la suma es: ${result}`);
}
sumWithCallback([5, 4, 3, 2, 1], printResult);

// 7. Desarrolla una función parcial
console.log("Ejercicio 7: Función parcial");
function partialSum(func, ...argPartial) {
  return function (...argRest) {
    return func(...argPartial, ...argRest);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const partialAdd = partialSum(add, 1, 2);
console.log(partialAdd(3)); // 6

// 8. Implementa un ejemplo que haga uso de Spread

/* 🎯 Reto Oficial - Spread Operator PRO
Estás desarrollando un sistema para carritos de compra en una tienda.
Cada cliente tiene:

Un carrito base con productos iniciales

Un nuevo pedido que hizo después con más productos

Tu objetivo es:

Crear una función llamada combinarCarrito que reciba:

carritoBase (un array de productos)

nuevoPedido (otro array de productos)

La función debe:

Combinar ambos arrays sin modificar el original

Eliminar productos duplicados (usa lógica de negocio: si un producto tiene el mismo nombre, es duplicado)

La función debe devolver el carrito final ordenado alfabéticamente por nombre de producto

🧠 Condiciones extra para hacerlo mejor:
Cada producto debe ser un objeto con al menos: { nombre, cantidad }

El producto con el mismo nombre se suma en cantidad */

console.log("Ejercicio 8: Uso del Spread Operator");
function combinarCarrito(carritoBase, nuevoPedido) {
  const carritoFinal = [...carritoBase, ...nuevoPedido];
  const carritoSinDuplicados = {};
  carritoFinal.forEach((product) => {
    if (carritoSinDuplicados[product.nombre]) {
      carritoSinDuplicados[product.nombre].cantidad += product.cantidad;
    } else {
      carritoSinDuplicados[product.nombre] = { ...product };
    }
  });
    return Object.values(carritoSinDuplicados).sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
    );
}

const carritoBase = [
  { nombre: "Manzana", cantidad: 2 },
  { nombre: "Plátano", cantidad: 3 },
];
const nuevoPedido = [
  { nombre: "Manzana", cantidad: 1 },
  { nombre: "Naranja", cantidad: 4 },
  { nombre: "Plátano", cantidad: 2 },
];
const carritoFinal = combinarCarrito(carritoBase, nuevoPedido);
console.log(carritoFinal);


// 9. Implementa un retorno implícito

console.log("Ejercicio 9: Retorno implícito");
const greetingName = (nombre) => `¡Hola, ${nombre}!`;
console.log(greetingName("Oscar"));


// 10. Haz uso del this léxico
console.log("Ejercicio 10: Uso del this léxico");
const robot = {
    name: "R2D2",
    presentarse: function () {
        setTimeout (() => { console.log(`Hola, soy ${this.name}`); }, 1000);
    }
};
robot.presentarse(); // Hola, soy R2D2