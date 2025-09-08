const prompt = require('prompt-sync')();

class Empleado {
  #sueldo
  constructor(nombre, sueldo) {
    this.nombre = nombre
    this.#sueldo = sueldo
  }
  aplicarAumento(porcentaje) {
    this.#sueldo += this.#sueldo * (porcentaje / 100)
  }
  obtenerSueldo() {
    return this.#sueldo
  }
}

const emp = new Empleado('Luis', 2000)
emp.aplicarAumento(10)
console.log(emp.obtenerSueldo())
