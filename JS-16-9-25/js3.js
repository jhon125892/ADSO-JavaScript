const divAgregarTexto = document.querySelector("#texto")
divAgregarTexto.textContent = "Texto agregado desde java script";
divAgregarTexto.style.backgroundColor = "#FF5733";

//cnsultar todos los elementos de etiqueta li

const liPaises = document.querySelectorAll("li");
console.log(liPaises);

liPaises.forEach(pais => {
    console.log(pais.textContent);
});

//agregar un pais

const nuevoLi = document.createElement("li");
nuevoLi.textContent = "Bolivia";

const ulPaises = document.querySelector("#listaPaises");

//agregar un li 
ulPaises.appendChild(nuevoLi);
ulPaises.innerHTML=ulPaises.getHTML() + "<li>Ecuador</li>";