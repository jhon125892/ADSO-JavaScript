const prompt = require('prompt-sync')();

class Autor {
  constructor(nombre, nacionalidad) {
    this.nombre = nombre;
    this.nacionalidad = nacionalidad;
  }
}


class Editorial {
  constructor(nombre, pais) {
    this.nombre = nombre;
    this.pais = pais;
  }
}


class Libro {
  constructor(titulo, autor, editorial) {
    this.titulo = titulo;
    this.autor = autor;         // relación con Autor
    this.editorial = editorial; // relación con Editorial
  }

  infoLibro() {
    console.log(`"${this.titulo}" de ${this.autor.nombre}, publicado por ${this.editorial.nombre}`);
  }
}


let autor1 = new Autor("Gabriel García Márquez", "Colombiana");
let editorial1 = new Editorial("Editorial Sudamericana", "Argentina");
let libro1 = new Libro("Cien años de soledad", autor1, editorial1);

libro1.infoLibro();
