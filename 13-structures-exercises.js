
// 1. Crea un array que almacene cinco animales

let myArray 
myArray = ["leon", "tigre", "elefante", "ballena", "perro" ]
console.log(myArray)
// 2. Añade dos más. Uno al principio y otro al final
myArray.push("gato")
myArray.unshift("aguila")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set()
mySet = new Set(["libro 1", "libro 2", "libro 3", "libro 4", "libro 5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
// en set no se pueden añadir elemntos

console.log(mySet.add("libro 6").add("libro 7"))

// 6. Elimina uno concreto a tu elección

console.log(mySet.delete("libro 7"))
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, `marzo`],
    [4, `abril`],
    [5, `mayo`],
    [6, `junio`],
    [7, `julio`],
    [8, `agosto`],
    [9, `septiembre`],
    [10, `octubre`],
    [11, `noviembre`],
    [12, `diciembre`]

])
console.log(myMap)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5))
console.log(myMap.get(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set("verano","julio, agosto y septiembre")
console.log(myMap)


// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2

console.log(myArray2)

let mySet2 = new Set(myArray2)

console.log(mySet2)

let myMap2 = new Map(mySet2)

console.log(myMap2)

