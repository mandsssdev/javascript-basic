// arrays

// declaracion

let myArray = [] // usar siempre este 
let myArray2 = new Array (3)

console.log(myArray)
console.log(myArray2)

// inicializacion

myArray = [1]
myArray2 = new Array (1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2 , 3 , 4]
myArray2 = new Array (1, 2 , 3 , 4)

console.log(myArray)
console.log(myArray2)

// los arrays pueden guardar varios tipos de valores
myArray = [`mandy` , `perez`, `mandsss`, 25  ]
myArray2 = new Array (`mandy` , `perez`, `mandsss`, 25)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[0] = `mandy`
//myArray2[1]
myArray2[2] = `mandsss`

console.log(myArray2)


myArray = []
myArray[0] = `mandy`
//myArray[1]
myArray[2] = `mandsss`

console.log(myArray)


// metodos comunes 
 
myArray = []

// push sirve para añadir elementos en orden 
myArray.push(`mandy`)
myArray.push(`perez`)
myArray.push(`mandsss`)
myArray.push(25)

console.log(myArray)


// elimina el ultimo elemento del array y lo devuelve 
console.log(myArray.pop())
myArray.pop()
console.log(myArray.pop())

myArray.push(`mandy`)
myArray.push(`perez`)
myArray.push(`mandsss`)
myArray.push(25)

console.log(myArray)

myArray.pop()

myArray.push(`mandy`)
myArray.push(`perez`)
myArray.push(`mandsss`)
myArray.push(25)

console.log(myArray)

myArray.pop()
myArray.pop()

console.log(myArray)


//shift elimina el primer elemento del array y lo devuelve 

myArray.shift()
console.log(myArray)

console.log(myArray.shift())

// unshift agrega elementos al principio de la lista

myArray.unshift("hola", "armando")
console.log(myArray)

//length sirve para aber el tamaño del array va sin parentesis al final porque es una propiedad

console.log(myArray.length)


// clear borrar array

myArray =[]
// myArray.length = 0 esta comom alternativa 
console.log(myArray)


// slice te devuelve una parte del array q tu le indiques 

myArray.push(`mandy`, `perez`, `mandsss`, 25)

let myNewArray = myArray.slice(2, 4)

console.log(myNewArray)


// splice elimina los elementos indicados y puede añadir otros en su lugar 
 
myArray.splice(1, 3)
console.log(myArray)

myArray.push(`mandy`, `perez`, `mandsss`, 25)
myArray.splice(1 , 2 , `nueva entrada`)
console.log(myArray)