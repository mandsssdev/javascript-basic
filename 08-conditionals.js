// if, else if, else 

// if (si)

let age = 25

if (age == 25) {
    console.log(`la edad es 25`)
}

// else 

if (age == 25) {
    console.log(`la edad es 25`)
}
else {
    console.log(`la edad no es 25`)

}

// else if (siempre entre medias de "if" y "else")

if (age == 25) {
    console.log(`la edad es 25`)
} else if  (age < 18) {
    console.log(`es mennor de edad`)
} else {
    console.log(`la edad no es 25`)
}

// operador ternario vale para comparaciones simples

age == 25 ? console.log("la edad es 25") : console.log("la edad no es 25")

const message = age == 25 ? `la edad es 25` : `la edad no es 25`
console.log(message)

// switch

let day = 8
let dayName 

switch (day) {
    case 0:
        dayName = `lunes`
        break
    case 1:
        dayName = `martes`
        break  
    case 2:
        dayName = `miercoles`
        break      
    case 3:
        dayName = `jueves`
        break
    case 4:
        dayName = `viernes`
        break    
    case 5:
        dayName = `sábado`
        break 
    case 6:
        dayName = `domingo`
        break
    default:
        dayName = `numero de dia incorrecto`    
    
}

console.log(dayName)