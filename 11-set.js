//set no admite elementos duplicados 

const { getMaxListeners } = require("events")

// declaracion 
let mySet = new Set()

// inicializacion se ponen corchetes dentro de los parentesis para inicializar con datos 

mySet = new Set(`mandy`, `perez`, `mandsss`, 25, true) 
console.log(mySet)  // si no ponemos corchetes pone solo agarra el primer dato

mySet = new Set([`mandy`, `perez`, `mandsss`, 25, true]) 
console.log(mySet)


//metodos comunes 
//add añadir al final 
mySet.add(`armanperezc@gmail.com`)
console.log(mySet) 
mySet.add(`mandsssdev@gmail.com`)
console.log(mySet)

// delete se usa diciendo el valor del elemento que queremos borrar

mySet.delete(`armanperezc@gmail.com`)
console.log(mySet)

// haciendo esta operacion nos devolvera un boolean, indicando si ha ocurrido o no el delete
console.log(mySet.delete(`armanperezc@gmail.com`))

// ejemplo de crear un  condicion con el delete
// if  (mySet.delete(/* valor que querramos borrar*/ ))
//    { /* operacion o funcion que querramos cumolir*/

//} else { /* operacion o funcion que querramos cumolir*/

//} 



// has buscar elemento en el set

console.log(mySet.has(`perez`))
console.log(mySet.has(`armanperezc@gmail.com`))

//SIZE tamaño deel set
console.log(mySet.size)


// convetir un set a un array 

let myArray = Array.from(mySet)
console.log(myArray)




