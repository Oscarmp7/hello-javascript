/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

    let a = 15;
    let b = -25;
    let x = 10;
    let y = 20;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(y / x);
    console.log(a % b);
    console.log(a ** b);

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let newVariable = 3
    newVariable += 2;
    console.log(newVariable);
    newVariable -= 2;
    console.log(newVariable);
    newVariable /= 2;
    console.log(newVariable);
    newVariable *= 2;
    console.log(newVariable);
    newVariable %= 2;
    console.log(newVariable);
    newVariable **= 2;
    console.log(newVariable);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    let c = a > b;
    console.log (c);
    c = y >= x;
    console.log (c);
    c = b <= b;
    console.log (c);
    c = y !== b;
    console.log (c);
    c = x === 10;
    console.log (c);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    let d = a < b;
    console.log (d);
    d = y <= x;
    console.log (d);
    d = b > b;
    console.log (d);
    d = y === b;
    console.log (d);
    d = x !== 10;
    console.log (d);

// 5. Utiliza el operador lógico and

    c = a > b && y >= x;
    console.log(c)

// 6. Utiliza el operador lógico or

    d = a < b || y == x;
    console.log(d)

// 7. Combina ambos operadores lógicos

    d = a > b && y >= x || a == y;
    console.log(d)

// 8. Añade alguna negación
    
    d = !(a > b) && y >= x || a == y;
    console.log(d)
    
    // 9. Utiliza el operador ternario
    
    const imTired = true;
    imTired ? console.log("Vete a descansar") : console.log("Sigue trabajando");
    
    // 10. Combina operadores aritméticos, de comparáción y lógicas
    
    d = !(a > b) && y >= x || a == y;
    console.log(d)