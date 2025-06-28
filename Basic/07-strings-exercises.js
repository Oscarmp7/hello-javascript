/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

    let textNombre = "Oscar"
    let textApellido = "Matos"
    let greeting = "Hola " + textNombre + ' ' + textApellido + "!"
// 1. Concatena dos cadenas de texto

    console.log(textNombre + " " + textApellido)

// 2. Muestra la longitud de una cadena de texto

    console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

    console.log(greeting[0], greeting [16])
    
// 4. Convierte a mayúsculas y minúsculas un string
    
    console.log(greeting.toUpperCase())
    console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

    console.log(`Esta es una cadena 
        de texto
        pero hecha en
        varias lineas
        no?`
    )

// 6. Interpola el valor de una variable en un string

    console.log(`Hola, ${textNombre} ${textApellido}!`)
    
// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(greeting.replaceAll (' ', '-'))
// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(greeting.includes (`Oscar`))

// 9. Comprueba si dos strings son iguales

    console.log(textNombre == textApellido) 

// 10. Comprueba si dos strings tienen la misma longitud

    console.log(textNombre.length == textApellido.length)