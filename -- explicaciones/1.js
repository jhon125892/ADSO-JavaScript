// node 1.js
const prompt = require('prompt-sync')();

let cuenta= {
    titular: "Monica Galindo",
    saldo: 2500000,
    mostrarSaldo: function(){
        return `La cuenta de ${this.titular} su saldo es ${this.saldo}`
    }

}

console.log(cuenta.mostrarSaldo())
cuenta.saldo -=1000000
console.log(cuenta.mostrarSaldo())