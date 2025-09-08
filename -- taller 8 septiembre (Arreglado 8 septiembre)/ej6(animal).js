const prompt = require('prompt-sync')();
class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }
}

class Perro extends Animal {
  sonido() {
    return `${this.nombre} dice: Guau`
  }
}

class Gato extends Animal {
  sonido() {
    return `${this.nombre} dice: Miau`
  }
}

const perro = new Perro('Firulais')
const gato = new Gato('Michi')
console.log(perro.sonido())
console.log(gato.sonido())
