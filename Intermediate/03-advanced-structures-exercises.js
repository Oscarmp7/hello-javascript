/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 1: Total a pagar con descuento si corresponde");
console.log(`-----------------------------------------------------------`)
const products = [
  { nombre: "Laptop", precio: 1200, disponible: true, cantidad: 1 },
  { nombre: "Mouse", precio: 25, disponible: true, cantidad: 2 },
  { nombre: "Teclado", precio: 45, disponible: false, cantidad: 1 }
];

const total = products
.filter(product => product.disponible)
.map(product => product.precio * product.cantidad)
.reduce((acc, current) => acc + current, 0);
console.log(`Total a pagar: $${total}`);
// Si el total supera $1000, aplicar descuento
if (total > 1000) {
    const discount = total * 0.1;
    const totalWithDiscount = total - discount;
    console.log(`¡Descuento aplicado del 10%! Nuevo total: $${totalWithDiscount}`);
} else {    
    console.log("No se aplica descuento.");
}


// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 2: Números elevados al cubo y filtrados (pares)");
console.log(`-----------------------------------------------------------`)
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Números originales:", numbersArray)
const cubedEvens = numbersArray.map(num => num ** 3)
console.log("Números elevados al cubo:", cubedEvens);
const cubedNum = cubedEvens.filter(cubedNum => cubedNum % 2 === 0);
console.log("Números elevados al cubo y filtrados (pares):", cubedNum);


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

console.log(`-------------------------------------------`)
console.log("Ejercicio 3: Cursos, módulos y lecciones");
console.log(`-------------------------------------------`)

const courses = [
  {
    curso: "JavaScript",
    modulos: [
      ["Introducción a JS", "Variables en JS", "Funciones en JS"],
      ["Arrays en JS", "Objetos en JS"]
    ]
  },
  {
    curso: "Python",
    modulos: [
      ["Sintaxis de Py", "Condicionales en Py"],
      ["Bucles en Py", "Funciones en Py"]
    ]
  }
];

const allLessons = courses.flatMap(courses => courses.modulos.flat());
console.log("Todas las lecciones:", allLessons);

const allLessonsByCourse = courses.map(course => ({
    curso: course.curso,
    lecciones: course.modulos.flat()
}));
 
allLessonsByCourse.forEach(course => {
    console.log(`Curso: ${course.curso}`);
    console.log(course.lecciones.map(leccion => `- ${leccion}`).join('\n')); // Imprime las lecciones de cada curso
});

// 4. Ordena un array de números de mayor a menor

console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 4: Ordenación de números de mayor a menor");
console.log(`-----------------------------------------------------------`)
const unsortedNumbers = [3, 1, 4, 2, 5, 6, 10, 8, 7, 9];
unsortedNumbers.sort((a, b) => b - a);
console.log("Números ordenados de mayor a menor:");
 unsortedNumbers.forEach((num, index) => {
    console.log(`${index + 1}. ${num}`);
});

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 5: Unión, intersección y diferencia de sets");
console.log(`-----------------------------------------------------------`)
const usuariosDia1 = new Set(["Ana", "Luis", "Carlos", "María"]);
const usuariosDia2 = new Set(["Carlos", "María", "Pedro", "Elena"]);

// Unión
const union = new Set([...usuariosDia1, ...usuariosDia2]);
console.log("Unión de usuarios:", [...union].join(', '));
console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
// Intersección
const intersection = new Set([...usuariosDia1].filter(user => usuariosDia2.has(user)));
console.log("Intersección de usuarios:", [...intersection].join(', '));
console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
// Diferencia
const difference = new Set([...usuariosDia1].filter(user => !usuariosDia2.has(user)));
console.log("Diferencia de usuarios (usuarios del día 1 que no están en el día 2):", [...difference].join(', '));

// 6. Itera los resultados del ejercicio anterior

console.log(`-----------------------------------------------------------`)
console.log("Ejercicio 6: Iterar resultados del ejercicio anterior");
console.log(`-----------------------------------------------------------`)

console.log(`\n📋 Usuarios en UNIÓN:\n-----------------------`);
union.forEach(user => console.log(`✅ ${user}`));

console.log(`\n📋 Usuarios en INTERSECCIÓN:\n----------------------------`);
intersection.forEach(user => console.log(`🔁 ${user}`));

console.log(`\n📋 Usuarios en DIFERENCIA (día 1, no en día 2):\n----------------------------------------------`);
difference.forEach(user => console.log(`❌ ${user}`));


// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

console.log(`----------------------------------------------------------------------`)
console.log("Ejercicio 7: Iterar resultados de un mapa con informacion de usuarios");
console.log(`----------------------------------------------------------------------`)

const usuarios = new Map();
usuarios.set(1, {
  nombre: "Oscar",
  edad: 31,
  email: "omatosperez851@gmail.com"
});
usuarios.set(2, {
  nombre: "Daniela",
  edad: 25,
  email: "DanielaGisselle@gmail.com"
});
usuarios.set(3, {
  nombre: "Helen",
  edad: 35,
  email: "HelenPerez@gamil.com"
});
usuarios.set(4, {
  nombre: "Daniela",
  edad: 5,
  email: "DaniG@gamil.com"
});

usuarios.forEach((usuarios,id) =>{
  console.log(`👤 Usuario #${id}`)
  console.log(` Usuario: ${usuarios.nombre}`)
  console.log(` Edad: ${usuarios.edad}`)
  console.log(` E-mail: ${usuarios.email}`) 
})

// 8. Dado el mapa anterior, crea un array con los nombres

console.log(`----------------------------------------------------------------------`)
console.log("Ejercicio 8: basado el mapa anterior, crear un array con los nombres");
console.log(`----------------------------------------------------------------------`)

const nombres = []

usuarios.forEach((usuarios) => {
  nombres.push(usuarios.nombre)
})

console.log("🧾 Lista completa de nombres:");
nombres.forEach((nombre, index) => {
  console.log(`${index + 1}. ${nombre}`);
});



// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
console.log(`------------------------------------------------------------------------------------------`)
console.log("Ejercicio 9: basado el mapa anterior, array con los email de los usuarios mayores de edad");
console.log(`------------------------------------------------------------------------------------------`)

const emails = []
usuarios.forEach((usuarios) => {
  if ((usuarios.edad >= 18)) {
    emails.push(usuarios.email)
  }
})

const emailSet = new Set(emails)

console.log(`\nEstos son los emails únicos (como Set):`);
emailSet.forEach((email) => {
  console.log(`🔹${email}`);
});


// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
console.log("Ejercicio 10: Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario");
console.log(`---------------------------------------------------------------------------------------------------------------------------------------------------------------------------`)
const objectFromMap = Object.fromEntries(usuarios)

const usuariosArray = Object.values(objectFromMap);
const emailUserPairs = usuariosArray.map(usuario => [usuario.email, usuario]);
const emailUserMap = new Map(emailUserPairs);

emailUserMap.forEach((usuario, email) => {
  console.log(`✉️ ${email} → ${usuario.nombre}, ${usuario.edad} años`)
});



