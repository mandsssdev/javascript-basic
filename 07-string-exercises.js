// 1. Concatena dos cadenas de texto
let string1 = "estoy en"

let string2 = "mi casa en madrid"
console.log(`${string1}, ${string2}`)

// 2. Muestra la longitud de una cadena de texto
console.log(string2.length)

// 3. Muestra el primer y último carácter de un string
console.log(string2 [0])
console.log(string2 [16])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(string2.toUpperCase())
console.log(string1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let jump = `quiero que 
llegue ya 
el verano`
console.log(jump)

// 6. Interpola el valor de una variable en un string
let whish = "para irme a la playa"
console.log(`me gusta el verano, ${whish}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(whish.replaceAll(` `,`-`))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(whish.includes(`playa`))

// 9. Comprueba si dos strings son iguales
console.log(string1 == string2)
console.log(string1 == string1)

let identityTest = "Estoy en"

console.log(identityTest == string1)
console.log(identityTest === string1)


// 10. Comprueba se dos string tienen la misma longitud
console.log(string1.length == string2.length)
console.log(string1.length == string1.length)