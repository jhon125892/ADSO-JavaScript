const prompt = require('prompt-sync')();

class Circulo {
  constructor(radio) {
    this.radio = radio
  }
  calcularArea() {
    return Math.PI * this.radio ** 2
  }
}

const c = new Circulo(5)
console.log(c.calcularArea())
