// 1. Crea una variable para cada operación aritmética

// suma
let sum = 5 + 4
    /*let a = 4
    let b = 5
    console.log(a + b)
    */
// resta
let rest = 6 - 2
    /*let c = 2
    let d = 6
    console.log(a - b)
    */

//multiplicacion
let mult = 7 * 5
    /*let e = 7
    let f = 5
    console.log(a * b)
    */

//division
let div = 9 / 3
    /*let g = 9
    let h = 3
    console.log(g / h)
    */

//modulo
let mod = 89 % 4
    /*let i = 89
    let j = 4
    console.log(g % h)
    */

    /*
//exponente
let expo = 9 ** 3 
    let k = 9
    let l = 3
    console.log(k ** l)
    */

     /*
// incremento
let inc = 9++ 
   let m = 9
    console.log(m++ )
    */

    /*
// decremento
let dec = 1-- 
    let n = 1
    console.log(n--)
    */

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let a = 4
a += div
a -= sum
a *= rest
a /= mult
a %= mod



// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3)
console.log(1 < 3)
console.log(5 == 5)
console.log(5 >= 3)
console.log(1 <= 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 == 3)
console.log(1 > 3)
console.log(5 < 5)
console.log(5 <= 3)
console.log(1 >= 3)


// 5. Utiliza el operador lógico and
console.log(5 == 5 && 89 > 1)
console.log(5 < 3 && 2 == 2)

// 6. Utiliza el operador lógico or
console.log(5 == 5 || 89 > 1)
console.log(5 < 3 || 2 == 2)

// 7. Combina ambos operadores lógicos
console.log(5 == 5 && 89 < 1 || 2 < 3  ) 

// 8. Añade alguna negación
console.log(!(5 == 5 && 89 > 1))
console.log(!(5 < 3 && 2 == 2))

// 9. Utiliza el operador ternario
