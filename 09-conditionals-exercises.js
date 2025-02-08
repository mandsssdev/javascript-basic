// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Armand" 
if (myName == "Armando") {
    console.log(`tu nombre es, Armando `)
}else {
    console.log(`tu nombre es imcorrecto`)
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "mandss"
let pswd = "password"
if (user == "mandss" && pswd == "password") {
    console.log(`bienvenido mandy`)
}else {
    console.log(`no recuerda su usuario y contraseña?`)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 5
let nunIdentity
if (num == "" ) {
    console.log(`el numero es 0`)
}else if (num > 0) { 
    console.log(`el numero es positivo`)
}else if (num < 0 ) { 
    console.log(`el numero es negativo`)
}else {
    console.log(`esto no es un numero`)
}

const numSwitch = 0
switch (true) {
    case numSwitch == 0:
        nunIdentity = "el numero es 0"
            break
    case numSwitch > 0 :
        nunIdentity = "el numero es positivo"
            break
    case numSwitch < 0 : 
        nunIdentity = "el numero es negativo"
            break
    default :
        nunIdentity = "eso no es un numero"
}
console.log(nunIdentity) 

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16
 
if (age >= 18) {
    console.log(` puede votar`)
} else if (age <=17 ){
    console.log(`no puede votar, le quedan ${ 18 - age} años`)
} else {
    console.log(`eso no es una edad`)
}

const age2 = 34

switch (true) {
        case age2 >= 18:
        console.log(`puede votar`)
            break
        case age2 <= 17:
        console.log(`no puede votar, le quedan ${18 - age2} años`)
            break
        default :
        console.log(`esto no es una edad`)    
}



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const message = age >= 18 ? `usted es adulto` : `usted es menor`
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2
let mes2 = mes
if (mes ==12 || mes == 1 || mes == 2 ) {
    console.log(`winter`)
}else if (mes >=3 && mes <= 5 ) {
    console.log(`spring`)
}else if (mes >= 6 && mes <= 8) {
    console.log(`summer`)
}else if (mes >=9 && mes <=11) {
    console.log(`autumn`)
}else {
    console.log(`valor no permitido`)
}

switch (true) {
    case mes ==12 || mes == 1 || mes == 2 :
        mes = "winter"
            break
    case mes >=3 && mes <= 5:
        mes = "spring"
            break
    case mes >= 6 && mes <= 8 : 
        mes = "summer"
            break
    case mes >=9 && mes <=11 : 
        mes = "autumn"
            break            
    default :
        mes = "valor no permitido"
}
console.log(mes)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes2 > 12 || mes2 < 1) {
    console.log(`este valor no esta permitido`)
}else if (mes2 == 2) {
    console.log(`febrero es el unico mes del año q tiene menos de 30 dias `)
}else if( mes2 % 2 == 0) {
    console.log(`este mes tiene 31 dias`)
}else if( mes2 % 2 == 1) {
    console.log(`este mes tiene 30 dias`)
}else {
    console.log(`este valor no esta permitido`)
}
// switch
let days 
switch (true) {
    case mes2 > 12 || mes2 < 1 : 
    days = `valor no permitido`
        break 
    case mes2 == 2 :
        days = `febrero es el unico mes del año q tiene menos de 30 dias `
            break
    case mes2 % 2 == 0 :
        days = `este mes tiene 31 dias`
            break
    case mes2 % 2 == 1 : 
        days = ` este mes tiene 30 dias`
            break       
    default :
        days = "valor no permitido"
}        
console.log(days)
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let greetings 
let lenguage = 7
switch (true) {
    case lenguage == `español` : 
        greetings =`hola`
            break
    case lenguage == `english` : 
        greetings =`hello`
            break
    case lenguage == `italian` : 
        greetings =`buongiorno`
            break
    default :
        greetings = `valor no permitido`
}
console.log(greetings)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hace de nuevo el ejerciciio 7