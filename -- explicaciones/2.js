// node 2.js //

const prompt = require("prompt-sync")()

const numero1= prompt("Ingrese el numero entero inferior")
const numero2= prompt("Ingrese el numero entero superior")

if (numero1>numero2){
    let mayor=numero1
    let menor=numero2

}else{
    let mayor=numero2
    let menor=numero1
}

for(let valor=menor;valor<=mayor;valor++){
    if (valor%3===0){
        console.log(valor)
    }

}