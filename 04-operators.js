//operadores 

//operadores aritmeticos 

let a = 5
let b = 10

console.log(a + b) //suma 
console.log(a - b) //resta
console.log(a * b) //multiplicacion 
console.log(a / b) //division

console.log(a % b) //modulo
console.log(a ** b) //exponente

a++ //incremento
console.log(a)

b-- //decremento 
console.log(b)


//operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)


// operaciones de comparacion 

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // igualdad por valor
console.log(a == "6") // igualdad por valor
console.log(a === a) // igualdad por idrentidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // comparando por valor
console.log(a !== "6") // comparando por identidad 
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


//truthy values (valores verdaderos)

//todos los numeros positivos y negativos diferentes de cero 
// todas las cdenas de textos vacias
// el boolean true


//falsy values

// 0
// 0n
// null
// undefined
// NaN
// el boolean false 
// cadenas vacias  



//operadores logicos 

//and (&&) tienen cumplirse todas las comparaciones 
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20) 
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||) solo es necesario q se cumpla una comparacion
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20) 
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40) // alcompliorse la comparacion del or(||) el and(&&) se cancela


// not (!) niega todo lo q se encuentre por destras suyo 
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20)) // al añadir not(!) esta sentecia pasa a ser verdadera 
console.log(!(5 < 10 || 15 < 20)) // al añadir not(!) esta sentecia pasa a ser falsa


// operadores ternarios

const isRaining = false

isRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo")