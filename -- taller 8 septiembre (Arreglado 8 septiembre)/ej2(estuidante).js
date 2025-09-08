const prompt = require('prompt-sync')();

class Estudiante {
  constructor(nombre, materias) {
    this.nombre = nombre
    this.materias = materias
  }
  listarMaterias() {
    return this.materias.join(', ')
  }
}

const e = new Estudiante('Ana', ['Matematicas', 'Historia', 'Programacion'])
console.log(e.listarMaterias())
