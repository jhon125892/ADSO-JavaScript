const prompt = require('prompt-sync')();

class Usuario {
  #correo
  constructor(nombre, correo) {
    this.nombre = nombre
    this.correo = correo
  }
  get correo() {
    return this.#correo
  }
  set correo(valor) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
      this.#correo = valor
    } else {
      console.log('Correo inválido')
    }
  }
}

const u = new Usuario('Marta', 'marta@example.com')
console.log(u.correo)
u.correo = 'no_valido'
