const prompt = require('prompt-sync')();

function nombresMayusculas(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i].toUpperCase());
    }
    return resultado;
}
console.log(nombresMayusculas(["Juan", "Laura", "John"]));
console.log(nombresMayusculas(["Maria", "Cindy", "Cristian"]));