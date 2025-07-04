/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try {
    let sum = 10 + undifinedVariable;
} catch (error) {
    console.error("Error capturado:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    let sum = 10 + undefinedVariable;
} catch (error) {
    console.error("Error capturado:", error.message);
} finally {
    console.log("Bloque finally ejecutado, independientemente de si hubo error o no.");
}

// 3. Lanza una excepción genérica

try {
    throw new Error("Este es un error genérico lanzado manualmente.");
} catch (error) {
    console.error("Error capturado:", error.message);
}

// 4. Crea una excepción personalizada

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
try {
    throw new CustomError("Este es un error personalizado.");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// 5. Lanza una excepción personalizada

function validateAge(age) {
    if (age < 0) {
        throw new CustomError("La edad no puede ser negativa.");
    }
    return age;
}   
try {
    validateAge(-5);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

// 6. Lanza varias excepciones según una lógica definida

function checkNumber(num) {
    if (typeof num !== 'number') {
        throw new TypeError("El valor debe ser un número.");
    }
    if (num < 0) {
        throw new RangeError("El número no puede ser negativo.");
    }
    return num;
}
try {
    checkNumber("texto");
} catch (error) { 
    if (error instanceof TypeError) {
        console.error("Error de tipo:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Error de rango:", error.message);
    } else {
        console.error("Error desconocido:", error.message);
    }
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    let result = 10 / 0; // Esto no lanza una excepción, pero lo usamos como ejemplo
    console.log(result);
    throw new Error("Un error genérico para capturar.");
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error de tipo:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Error de rango:", error.message);
    } else {
        console.error("Error capturado:", error.message);
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const values = ["10", "20.5", "texto", "30", "40.1"];
for (let value of values) {
    try {
        let floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            throw new TypeError(`No se puede convertir "${value}" a un número.`);
        }
        console.log(`El valor "${value}" convertido a float es: ${floatValue}`);
    } catch (error) {
        console.error("Error al convertir:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {    
        throw new CustomError(`El objeto no tiene la propiedad "${prop}".`);
    }   
    return obj[prop];
}
try {
    const person = { name: "Oscar", age: 31 };
    console.log(checkProperty(person, "name")); // "Oscar"
    console.log(checkProperty(person, "address")); // Lanzará una excepción
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`${error.name}: ${error.message}`);
    } else {
        console.error("Error desconocido:", error.message);
    }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(operation, retries = 10) {
    let attempts = 0;
    while (attempts < retries) {
        try {
            return operation();
        } catch (error) {
            attempts++;
            console.error(`Intento ${attempts} fallido: ${error.message}`);
            if (attempts === retries) {
                throw new Error("Se alcanzó el número máximo de reintentos.");
            }
        }
    }
}
try {
    const result = retryOperation(() => {
        // Simulamos una operación que puede fallar
        if (Math.random() < 0.7) {
            throw new Error("Error aleatorio al ejecutar la operación.");
        }
        return "Operación exitosa";
    });
    console.log(result);
}catch (error) {
    console.error("Error final:", error.message);
}
