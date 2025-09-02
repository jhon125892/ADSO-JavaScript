import Alcancia from " ./alcancia.js"
let miAlcancia = null

const crearAlcancia=()=>{
    miAlcancia = new Alcancia()
}

const actualizarDatosInterfaz=()=>{
    document.querySelector("#txtMonedas200").value=miAlcancia.moneda200
    document.querySelector("#txtmonedas500").value=miAlcancia.moneda500
    document.querySelector("#txtMonedas1000").value=miAlcancia.moneda1000
    document.querySelector("#txtTotalAlcancia").value=miAlcancia.calcularTotalAhorrado

}

document.querySelector("img200").addEventListener("click",()=>{
    miAlcancia.agregarMoneda200
    actualizarDatosInterfaz()
})

const inicializarAlcancia=()=>{
    crearAlcancia()
    actualizarDatosInterfaz()
}

inicializarAlcancia()