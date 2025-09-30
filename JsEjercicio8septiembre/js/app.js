import Libro from "./libro.js";

let libros = [];

document.addEventListener("click", () => {
    let titulo = document.querySelector("#txtTitulo").value;
    let autor = document.querySelector("#txtAutor").value;
    let editorial = document.querySelector("#txtEditorial").value;
    let idioma = document.querySelector("#txtIdioma").value;

    //crear un objeto libro
    const libro = new Libro(titulo, autor, editorial, idioma);
    //agregar al arreglo onjeto libro
     libros.push(libro);
    
})

const mostarLibrosTabla = () => {
    const tbody = document.querySelector("#filasTabla");
    let datos = "";
    libros.forEach(libro => {
       datos += "<tr>";
       datos += "<td>" + libro.titulo + "</td>"
       datos += "<td>" + libro.autor + "</td>"
       datos += "<td>" + libro.editorial + "</td>"
       datos += "<td>" + libro.idioma + "</td>"
    })
}
