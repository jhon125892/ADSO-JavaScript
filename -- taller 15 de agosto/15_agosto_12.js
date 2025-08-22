let precios = new Map();
let historial = [];
let productosUnicos = new Set();

function agregarProducto(nombre, precio) {
    precios.set(nombre, precio);
    historial.push(nombre);
    productosUnicos.add(nombre);
}

agregarProducto("Pan", 1500);
agregarProducto("Queso", 4200);
agregarProducto("Pan", 1500);
agregarProducto("Café", 8000);

console.log("Productos únicos:", productosUnicos);
console.log("Precios:", precios);
console.log("Historial:", historial);
