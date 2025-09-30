let libros=[];


export default class agregarLibro {
    constructor(titulo, autor, editorial, idioma) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.idioma = idioma;
    }

    mostrarInfo() {
        return `${this.titulo} -${this.autor} ${this.editorial} ${this.idioma}`
    }
}