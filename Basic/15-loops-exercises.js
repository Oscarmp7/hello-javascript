/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20


    console.log("Imprimiendo números del 1 al 20 con for");
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

    console.log("Imprimiendo números del 1 al 20 con while");
    let i = 1;
    while (i <= 20) {
        console.log(i);
        i++;
    }

    console.log("Imprimiendo números del 1 al 20 con do...while");
    // Usando do...while
    let x = 1;
    do {
        console.log(x); 
        x++;
    } while (x <= 20);


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    

    console.log("Sumando números del 1 al 100 con for");
    let sum = 0;
    for (let z = 1; z <= 100; z++) {
        sum += z;   
    }

    console.log(`La suma de los números del 1 al 100 es: ${sum}`);

    console.log("Sumando números del 1 al 100 con while");
    let total = 0;
    let y = 1;
     while (y <= 100) {
        total += y;
        y++;
    }
    console.log(`La suma de los números del 1 al 100 es: ${total}`);

    console.log("Sumando números del 1 al 100 con do...while");
    let totalSum= 0;
    let a = 1;
    do {
        totalSum += a;
        a++;
    } while (a <= 100);
    console.log(`La suma de los números del 1 al 100 es: ${totalSum}`);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    
    console.log("Imprimiendo números pares del 1 al 50 con for");
    for (let j = 1; j <= 50; j++) {
        if (j % 2 === 0) {
            console.log(j);     
        }   
    }

    console.log("Imprimiendo números pares del 1 al 50 con while");
    let c = 1;
    while (c <= 50) {
        if (c % 2 === 0) {
            console.log(c);     
        }
        c++;
    }

    console.log("Imprimiendo números pares del 1 al 50 con do...while");
    let d = 1;
    do {
        if (d % 2 === 0) {
            console.log(d);   
        } 
        d++;
    } while (d <= 50);
        

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    
    const namesArray = ["Oscar", "Andrés", "Juan", "Carlos", "Alejandro", "José", "Luis", "Miguel", "David", "Javier", "Bienvenido"];
    console.log("Imprimiendo nombres del array con for...of");
    for (let name of namesArray) {
        console.log(name);
    }
    
    console.log("Imprimiendo nombres del array con for");
    for (let i = 0; i < namesArray.length; i++) {
        console.log(namesArray[i]);
    }

    console.log("Imprimiendo nombres del array con while");
    let index = 0;
    while (index < namesArray.length) {
        console.log(namesArray[index]);
        index++;
    }

    console.log("Imprimiendo nombres del array con do...while");
    let index2 = 0;
    do {
        console.log(namesArray[index2]);
        index2++;
    } while (index2 < namesArray.length);
    

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

   let text = `La **VIDA** es un regalo maravilloso. A veces, olvidamos que cada **respiración**,
   cada paso y cada sonrisa, es una oportunidad única de **agradecer**. 
   ¡OH! Cuántas veces hemos **dejado pasar** los momentos simples, 
   por estar distraídos con cosas que no importan tanto. 
   ¡Atesóralo TODO! Úsalo bien. ¡Disfruta, ríe, ama, y nunca dejes de soñar!`;
   let arrayVowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
   let countVowels = 0;
   console.log("Contando vocales en la cadena de texto");
   for (let char of text.toLowerCase()) {
       if (arrayVowels.includes(char)) {
           countVowels++;
        }
    }
    console.log(`El número de vocales en la cadena de texto es: ${countVowels}`);
    
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.
    
    /*
    */
    let arrayNumbers = [1, 2, 3, 4, 5];
    let productResult = 1;
    console.log("Multiplicando números del array");
    for (let number of arrayNumbers) {
        productResult *= number;
    }
    console.log(`El producto de los números del array es: ${productResult}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    /*
    */
   console.log("Tabla de multiplicar del 5");
   for (let i = 0; i <= 10; i++) {
       console.log(`5 x ${i} = ${5 * i}`);
    }
    
// 8. Usa un bucle para invertir una cadena de texto
    /*
    */
    let textToInvert = "¡Hola, JavaScript!";
    let invertedText = "";
    console.log("Invirtiendo la cadena de texto: " + textToInvert);
    for (let i = textToInvert.length - 1; i >= 0; i--) {
        invertedText += textToInvert[i];
    }
    console.log(`Cadena de texto invertida: ${invertedText}`);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    /*
    */
    let fibonacci = [0, 1];
    console.log("Generando los primeros 10 números de la secuencia de Fibonacci");
    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(`Los primeros 10 números de la secuencia de Fibonacci son: ${fibonacci.join(", ")}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    let numbersArray = [5, 12, 8, 20, 3, 15, 7, 30];
    let greaterThanTen = [];
    for (let number of numbersArray) {
        if (number > 10) {
            greaterThanTen.push(number);
        }
    }
    console.log(`Números mayores a 10: ${greaterThanTen.join(", ")}`);  