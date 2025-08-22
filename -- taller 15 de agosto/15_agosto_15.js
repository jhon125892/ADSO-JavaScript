const prompt = require("prompt-sync")();

let cuentas = [];
let consecutivo = 0;

function crearCuenta() {
    let year = new Date().getFullYear();
    consecutivo = consecutivo + 1;
    let codigo = year + "-" + consecutivo;
    let fecha = new Date().toISOString().slice(0, 10);
    let saldo = 0;
    let cuenta = { codigo: codigo, fechaCreacion: fecha, saldo: saldo };
    cuentas.push(cuenta);
    console.log("Cuenta creada:", cuenta);
}

function buscarCuenta(codigo) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].codigo === codigo) {
            return cuentas[i];
        }
    }
    return null;
}

function consignarCuenta() {
    let codigo = prompt("cdigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("Cuenta inexistente o no encontrada.");
        return;
    }
    let valor = parseFloat(prompt("Valor a consignar: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor No Válido");
        return;
    }
    cuenta.saldo = cuenta.saldo + valor;
    console.log("Nuevo saldo:", cuenta.saldo);
}

function retirarCuenta() {
    let codigo = prompt("Codigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("Cuenta inexistente o no encontrada");
        return;
    }
    let valor = parseFloat(prompt("Valor a retirar: "));
    if (isNaN(valor) || valor <= 0) {
        console.log("Valor inválido");
        return;
    }
    if (valor > cuenta.saldo) {
        console.log("Fondos insuficiente");
        return;
    }
    cuenta.saldo = cuenta.saldo - valor;
    console.log("Nuevo saldo:", cuenta.saldo);
}

function consultarCuentaPorCodigo() {
    let codigo = prompt("codigo de la cuenta: ");
    let cuenta = buscarCuenta(codigo);
    if (!cuenta) {
        console.log("Cuenta No Encontrada");
        return;
    }
    console.log("cuenta:", cuenta);
}

function listarCuentas() {
    if (cuentas.length === 0) {
        console.log("No existen cuentas.");
        return;
    }
    for (let i = 0; i < cuentas.length; i++) {
        console.log(cuentas[i]);
    }
}

function menu() {
    let salir = false;
    while (!salir) {
        console.log("MENU BANCO ADSO");
        console.log("1. Crear Cuenta");
        console.log("2. Consignar Cuenta");
        console.log("3. Retirar Cuenta");
        console.log("4. Consultar Cuenta por Codigo");
        console.log("6 Listar Cuentas");
        console.log("7. Salir");
        let op = prompt("Ingresar opcion (1-7): ");
        switch (op) {
            case "1":
                crearCuenta();
                break;
            case "2":
                consignarCuenta();
                break;
            case "3":
                retirarCuenta();
                break;
            case "4":
                consultarCuentaPorCodigo();
                break;
            case "6":
                listarCuentas();
                break;
            case "7":
                salir = true;
                break;
            default:
                console.log("Opcion No Valida");
        }
    }
    console.log("Fin");
}
menu();
