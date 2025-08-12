let cuenta= {
    titular: "Monica Galindo",
    saldo: "2500000",
    mostrarSaldo: function(){
        return `La cuenta de ${this.titular} su saldo es ${saldo}`
    }

}

console.log(cuenta.mostrarSaldo())
cuenta.saldo -=1000000
console.log(cuenta.mostrarSaldo())