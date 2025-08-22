const prompt = require('prompt-sync')();

function reemplazarElemento(arr, valorViejo, valorNuevo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valorViejo) {
            arr[i] = valorNuevo;
        }
    }
    return arr;
}

// Cambié los números
console.log(reemplazarElemento([10, 20, 30, 40], 20, 200));

// Cambié los colores y sus posiciones
console.log(reemplazarElemento(["amarillo", "negro", "morado"], "morado", "naranja"));
