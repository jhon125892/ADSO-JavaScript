const prompt = require('prompt-sync')();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}


class Pedido {
  constructor() {
    this.productos = []; // lista de productos
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    for (let p of this.productos) {
      total += p.precio;
    }
    return total;
  }
}
let p1 = new Producto("Pan", 2000);
let p2 = new Producto("Leche", 3500);

let pedido = new Pedido();
pedido.agregarProducto(p1);
pedido.agregarProducto(p2);

console.log("Total del pedido: $" + pedido.calcularTotal());
