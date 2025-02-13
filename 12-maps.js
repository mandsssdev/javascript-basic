// Map

// Declaración

let myMap = new Map()
console.log(myMap)

// inicializacion 

myMap = new Map([
    ["name", " mandy"],
    ["email", "mandsssdev@gmail.com"],
    ["age", 25 ]
])

console.log(myMap)


//metodos y propiedades

// .set("","") -añadir y actualizar valores mediante una clave
myMap.set("alias", "mandsss")
myMap.set("name", "mandy perez")

console.log(myMap)

// .get("") - devuelve el valor de la clave añadida

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// .has("") - devuelve un boolean indicando si hay un valor en la clave añadida

console.log(myMap.has("name"))
console.log(myMap.has("surname"))

//.delete("") - borra el valor que haya en clave que hemos ingresado 

myMap.delete("email")
console.log(myMap)

//.keys() devuelve las claves añadisdas haste el monento 

console.log(myMap.keys())

//.value() - delvuelve los valores añadidos ahsta el momento 

console.log(myMap.values())

// .size -devuelve la cantidad de pares en el map

console.log(myMap.size)

//.entries() devuelve cada par de elmentos 

console.log(myMap.entries())

//.clear() - borra todo el mapa

myMap.clear()
console.log(myMap)

