const numero1 = parseFloat(prompt("Introduce el numero 1:"));
        const numero2 = parseFloat(prompt("Introduce el numero 2:"));

        document.getElementById("numero1").innerText= 'Numero 1: ' + (numero1)
        document.getElementById("numero2").innerText= 'Numero 2: ' + (numero2)

        // operaciones
        
        const suma = numero1 + numero2;
        console.log("La suma es: " + suma);
            document.getElementById("suma").innerHTML='<b>Suma: </b>' + (suma)
        //document.write("La suma es: " + suma);
        const resta = numero1 - numero2;
        console.log("La resta es: " + resta);
            document.getElementById("resta").innerHTML='<b>Resta: </b>' + (resta)
        //document.write("La resta es: " + resta);
        const multiplicacion = numero1 * numero2;
        console.log("La multiplicación es: " + multiplicacion);
            document.getElementById("multiplicacion").innerHTML='<b>Multiplicacion: </b>' + (multiplicacion)
        //document.write(#La multiplicación es: " + multiplicacion);
        const division = Math.floor(numero1 / numero2);
        console.log("La multiplicación es: " + divison);
            document.getElementById("division").innerHTML='<b>Division: </b> ' + (division)
       // document.write("La división es: " + division);