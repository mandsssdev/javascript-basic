// string 
// cocatenacion 

let myName = "mandy"
let greetings = "hola," + myName + "!"
console.log(greetings)
console.log(typeof greetings)

// longitud
console.log(greetings.length)

// acceso a cacteres (empieza a contar desde 0)
console.log(greetings[4])
console.log(greetings[0])

// metodos comunes 
console.log(greetings.toUpperCase()) // cadena de texto todo a mayusculas 
console.log(greetings.toLowerCase()) // cadena de txto todo a minusculas 
console.log(greetings.indexOf("mandy")) // imprime en casilla se encuentra la palabra (en caso de no encontrasr imprime -1)
console.log(greetings.includes("hola")) // indica si esa palabra se encuentra en la cadena con true o false
console.log(greetings.slice( 0 , 7)) // imprime los espacios de la cadena de texto que le hemos pedido
console.log(greetings.replace("mandy", "mandsss")) // reemplaza una palabra por otra
console.log(greetings.length)


// templates literals (planillas literales )
// comillas invertidas nos permite crear textos en varias lineas 
let message = `¡hola este es 
mi curso de 
javascript!`

console.log(message)

// con las comillas invertidas podemos concatenar variables usando (${})
console.log(`¡hola, ${message}`)

