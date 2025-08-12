// node ejercicio128.js
// 
const prompt = require('prompt-sync')();

function saludar(nombre){
    return `Hola ${nombre}`
}

let mensaje= saludar("Maria")
console.log(mensaje)

// funcion flecha

const multiplicar=(a, b) =>a*b

console.log(multiplicar(5, 9)) // 45