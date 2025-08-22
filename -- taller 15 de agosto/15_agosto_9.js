const prompt = require('prompt-sync')();

function indiceDeValor(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }
    return -1;
}

// Cambié los números
console.log(indiceDeValor([5, 15, 25, 35], 25));

// Cambié las letras
console.log(indiceDeValor(["a", "s", "d", "f"], "s"));
