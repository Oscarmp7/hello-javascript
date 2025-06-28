/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Oscar";
if (myName === "Oscar") {
    console.log("Mi nombre es Oscar");
} else {
    console.log("Mi nombre no es Oscar");   
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Oscar";
let password = "1234";  
if (user === "Oscar" && password === "1234") {
    console.log("Usuario y contraseña correctos");
} else {
    console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -20
if (number > 0) {
    console.log('El número es positivo,' + ` digitaste ${number}`);
} else if (number < 0) {
    console.log('El número es negativo, ' + `digitaste ${number}`);
} else {
    console.log('El número es cero, ' + `digitaste ${number}`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let personAge = 16;
if (personAge >= 18) {
    console.log(`Puedes votar, tienes ${personAge} años`);
} else {
    let yearsToVote = 18 - personAge;
    console.log(`No puedes votar, te faltan ${yearsToVote} años para votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    let age = 17;   
    let ageStatus = age >= 18 ? "adulto" : "menor de edad";
    console.log(`Tienes ${age} años, por lo tanto eres: ${ageStatus}`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let month = 2; // 1: enero, 2: febrero, ..., 12: diciembre
    let monthName;
    let season;
    if (month === 12 || month === 1 || month === 2) {
        season = "Invierno";
    } else if (month === 3 || month === 4 || month === 5) {
        season = "Primavera";
    } else if (month === 6 || month === 7 || month === 8) {
        season = "Verano";
    } else if (month === 9 || month === 10 || month === 11) {
        season = "Otoño";
    } else {
        season = "Mes inválido";
    }

    switch (month) {
    case 1: monthName = "Enero"; season = "Invierno"; break;
    case 2: monthName = "Febrero"; season = "Invierno"; break;
    case 3: monthName = "Marzo"; season = "Primavera"; break;
    case 4: monthName = "Abril"; season = "Primavera"; break;
    case 5: monthName = "Mayo"; season = "Primavera"; break;
    case 6: monthName = "Junio"; season = "Verano"; break;
    case 7: monthName = "Julio"; season = "Verano"; break;
    case 8: monthName = "Agosto"; season = "Verano"; break;
    case 9: monthName = "Septiembre"; season = "Otoño"; break;
    case 10: monthName = "Octubre"; season = "Otoño"; break;
    case 11: monthName = "Noviembre"; season = "Otoño"; break;
    case 12: monthName = "Diciembre"; season = "Invierno"; break;
    default: monthName = season = "Mes inválido";
    }
    console.log(`El número del mes que introdujiste fue el: ${month}, y corresponde al mes de ${monthName}, que corresponde a la estación: ${season}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

switch (month) {
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
        console.log(`El mes de ${monthName} tiene 31 días.`);
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11:
        console.log(`El mes de ${monthName} tiene 30 días.`);
        break;
    case 2:
        console.log(`El mes de ${monthName} tiene 28 o 29 días, dependiendo si es bisiesto.`);
        break;
    default:
        console.log("Mes inválido");
}

// 1. Usa un switch para imprimir el nombre del día de la semana dependiendo del número (1-7)

    let dayNumber = 5; // 1: Lunes, 2: Martes, ..., 7: Domingo
switch (dayNumber) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día inválido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "ja"; // "es": Español, "en": Inglés, "fr": Francés
switch (language) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "ja":
        console.log("こんにちは (Konnichiwa)");
        break;
    default:
        console.log("Idioma no reconocido");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let monthForSeason = 12; // 1: enero, 2: febrero, ..., 12: diciembre
switch (monthForSeason) {   
    case 12:
    case 1:
    case 2:
        console.log("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Verano");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Otoño");
        break;
    default:
        console.log("Mes inválido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

    //lo hice con switch en el ejercicio 7 , so lo puedo hacer con if/else
    if (monthForSeason === 1 || monthForSeason === 3 || monthForSeason === 5 || monthForSeason === 7 || monthForSeason === 8 || monthForSeason === 10 || monthForSeason === 12) {
        console.log(`El mes de ${monthName} tiene 31 días.`);
    } else if (monthForSeason === 4 || monthForSeason === 6 || monthForSeason === 9 || monthForSeason === 11) {
        console.log(`El mes de ${monthName} tiene 30 días.`);
    } else if (monthForSeason === 2) {
        console.log(`El mes de ${monthName} tiene 28 o 29 días, dependiendo si es bisiesto.`);
    }
