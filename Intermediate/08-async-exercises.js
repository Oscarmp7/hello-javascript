/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

console.log(`---------------------------------------`)
console.log("Ejercicio 1: Callback con retardo (2s) ");
console.log(`---------------------------------------`)

function saludar(nombre, callback) {
    setTimeout(() => {
        callback(`Hola, ${nombre}`);
    }, 2000);
}
saludar("Oscar", (mensaje) => console.log(mensaje));

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
console.log(`--------------------------------------------------------------`)
console.log("Ejercicio 2: task1 / task2 / task3 con callbacks (1s cada una)");
console.log(`--------------------------------------------------------------`)

function task1(callback) {
  setTimeout(() => {
    console.log("task1 ok");
    callback();
  }, 1000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("task2 ok");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("task3 ok");
    callback();
  }, 1000);
}
task1(() => task2(() => task3(() => console.log("Todas completadas (callbacks)"))));

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

console.log(`-------------------------------------------`)
console.log("Ejercicio 3: Promesa que verifica par/impar");
console.log(`-------------------------------------------`)

function verifyEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve("Número par");
    else reject("Número impar");
  });
}
verifyEven(4).then(console.log).catch(console.error);
verifyEven(7).then(console.log).catch(console.error);

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

console.log(`----------------------------------------`)
console.log("Ejercicio 4: Tres funciones con promesas");
console.log(`----------------------------------------`)

function firstTask() {
  return new Promise((res) => setTimeout(() => res("Primera tarea completada"), 1000));
}
function secondTask() {
  return new Promise((res) => setTimeout(() => res("Segunda tarea completada"), 2000));
}
function thirdTask() {
  return new Promise((res) => setTimeout(() => res("Tercera tarea completada"), 1500));
}
firstTask()
  .then((msg) => { console.log(msg); return secondTask(); })
  .then((msg) => { console.log(msg); return thirdTask(); })
  .then((msg) => console.log(msg, "Cadena lista (Promesas)"));


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

console.log(`------------------------------------`)
console.log("Ejercicio 5: Versión con async/await");
console.log(`------------------------------------`)

async function executeTasks() {
  const r1 = await firstTask();
  console.log(r1);
  const r2 = await secondTask();
  console.log(r2);
  const r3 = await thirdTask();
  console.log(r3);
  console.log("Secuencia completa (async/await)");
}
executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

console.log(`-------------------------`)
console.log("Ejercicio 6: getUser(id)");
console.log(`-------------------------`)

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 5) resolve({ id, nombre: "Usuario " + id });
      else reject("Usuario no encontrado");
    }, 2000);
  });
}
(async () => {
  try {
    console.log(await getUser(3));
    console.log(await getUser(7));
  } catch (err) {
    console.error(err);
  }
})();

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

console.log(`-----------------------`)
console.log("Ejercicio 7: Event Loop");
console.log(`-----------------------`)

function eventLoopDemo() {
  console.log("Inicio");
  setTimeout(() => console.log("setTimeout ejecutado"), 0);
  Promise.resolve().then(() => console.log("Promesa resuelta"));
  console.log("Fin");
}
eventLoopDemo(); // Orden: Inicio -> Fin -> Promesa resuelta -> setTimeout ejecutado

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

console.log(`------------------------`)
console.log("Ejercicio 8: Promise.all");
console.log(`------------------------`)

function p1() { return new Promise((res) => setTimeout(() => res("p1 ok"), 1000)); }
function p2() { return new Promise((res) => setTimeout(() => res("p2 ok"), 1500)); }
function p3() { return new Promise((res) => setTimeout(() => res("p3 ok"), 800)); }
Promise.all([p1(), p2(), p3()]).then(console.log);

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
console.log(`----------------------------------`)
console.log("Ejercicio 9: waitSeconds(segundos)");
console.log(`----------------------------------`)

function waitSeconds(segundos) {
  return new Promise((res) => setTimeout(res, segundos * 1000));
}
(async () => {
  await waitSeconds(3);
  console.log("Tiempo finalizado");
})();

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

console.log(`-------------------------------`)
console.log("Ejercicio 10: Cajero automático");
console.log(`-------------------------------`)

let balance = 500;
function checkBalance() {
  return new Promise((res) => setTimeout(() => res(balance), 1000));
}
function withdrawMoney(amount) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (amount <= balance) {
        balance -= amount;
        res(balance);
      } else {
        rej("Fondos insuficientes");
      }
    }, 2000);
  });
}

// Ayuda de depuración: confirma que la función existe antes de usarla
console.log("Tipo de checkBalance:", typeof checkBalance); // debería ser "function"

(async () => {
  try {
    // Si por alguna razón recibes "not defined", asegúrate de ejecutar
    // este bloque *después* de haber corrido las definiciones de arriba.
    console.log(`Saldo disponible: ${await checkBalance()}$`);
    console.log("Retirando 300$...");
    await withdrawMoney(300);
    console.log(`Operación exitosa, saldo restante: ${balance}$`);
    console.log("Retirando 300$...");
    await withdrawMoney(300);
  } catch (err) {
    console.error("Error:", err);
  }
})();