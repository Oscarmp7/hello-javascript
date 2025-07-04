/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

    function logError(message) {
        console.error(`Error: ${message}`);
    }

    logError("Este es un mensaje de error de prueba.");

// 2. Crea una función que utilice warn correctamente

    function logWarn (message) {
        console.warn(`Advertencia: ${message}`);
    }

    logWarn("Este es un mensaje de advertencia.");

// 3. Crea una función que utilice info correctamente

    function logInfo(message) {
        console.info(`Información: ${message}`);
    }
    logInfo("Este es un mensaje informativo.");

// 4. Utiliza table

    const users = [
        { name: "Oscar", age: 31, occupation: "Developer" },
        { name: "Ana", age: 28, occupation: "Designer" },
        { name: "Luis", age: 35, occupation: "Manager" }
    ];
    console.table(users);

// 5. Utiliza group

    function logGroupedMessages() {
        console.group("Mensajes agrupados");
        console.log("Mensaje 1: Este es el primer mensaje.");
        console.log("Mensaje 2: Este es el segundo mensaje.");
        console.log("Mensaje 3: Este es el tercer mensaje.");
        console.groupEnd();
    }
    logGroupedMessages(); 

// 6. Utiliza time

    function logExecutionTime() {
        console.time("Tiempo de ejecución");
    
        for (let i = 0; i <= 10000000; i++) {
            // Simulamos una operación que toma tiempo
            if (i === 10000000) {
                console.log("Operación finalizada.");
            } else if (i === 5000000) {
                console.log("A mitad de camino...");
            } else if (i === 2500000) {
                console.log("Un cuarto del camino...");
            } else if (i === 7500000) {
                console.log("Tres cuartos del camino...");
            } else if (i === 1000000) {
                console.log("Un millón alcanzado...");
            } else if (i === 500000) {
                console.log("Medio millón alcanzado...");
            }
        }
        console.timeEnd("Tiempo de ejecución");
    }

    logExecutionTime();

// 7. Valida con assert si un número es positivo

    function assertPositiveNumber(num) {
        console.assert(num >= 0, `El número ${num} no es positivo.`);
    }
    assertPositiveNumber(5); // No mostrará nada, ya que 5 es positivo
    assertPositiveNumber(-3); // Mostrará un mensaje de error, ya que -3 no es positivo

// 8. Utiliza count

    function countOccurrences(arr) {
        arr.forEach(item => {
            console.count(`Elemento: ${item}`);
        });
    }
    countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);

// 9. Utiliza trace

    function logTrace() {
        console.trace("Traza de la función");
    }
    function callLogTrace() {
        logTrace();
    }
    callLogTrace(); // Llamamos a la función que a su vez llama a logTrace


// 10. Utiliza clear

    console.clear(); // Limpia la consola
