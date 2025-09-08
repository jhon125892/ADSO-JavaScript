const prompt = require('prompt-sync')();

class Persona {
  constructor(id, nombre, correo) {
    this.id = id
    this.nombre = nombre
    this.correo = correo
  }
}

class Aprendiz extends Persona {
  constructor(id, nombre, correo, puntajeIcfes) {
    super(id, nombre, correo)
    this.puntajeIcfes = puntajeIcfes
  }
  info() {
    return `${this.nombre}, ICFES: ${this.puntajeIcfes}`
  }
}

class Instructor extends Persona {
  constructor(id, nombre, correo, especialidad) {
    super(id, nombre, correo)
    this.especialidad = especialidad
  }
  info() {
    return `${this.nombre}, Especialidad: ${this.especialidad}`
  }
}

const apr = new Aprendiz('1', 'Sofía', 'sofia@mail.com', 350)
const inst = new Instructor('2', 'Carlos', 'carlos@mail.com', 'Programación')
console.log(apr.info())
console.log(inst.info())
