// node ejercicio118.js

const prompt = require('prompt-sync')();

function menu(){
    
    let opcion=0
    do{
        console.clear()
        console.log("-- Menu de Opciones --")
        console.log("1. Area de circulo")
        console.log("2. Adivinar numero de 1 a 100")
        console.log("3. Salir")
        console.log(" ")
        opcion= parseInt(prompt("Ingrese la opcion: "))


            switch(opcion) {
        case 1:
            let radio=0
            radio=parseFloat(prompt("Ingrese el area del circulo: "))
            area= Math.PI * (radio ** 2)
            console.log(`El area de tu circulo es: ${area}`)
            prompt("Presione Enter para continuar...");
            break;
        case 2:
            console.log("2");
            prompt("Presione Enter para continuar...");
            break;
        case 3:
            console.log("3");
            prompt("Presione Enter para continuar...");
            break;
        default:
            console.log("Opción inválida");
            prompt("Presione Enter para continuar...");
            break;
        }
    }   while(opcion!=3)
}

menu();
