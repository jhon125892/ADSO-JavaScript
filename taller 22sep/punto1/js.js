
const infoDiv = document.getElementById('info');
console.log('Texto del div con ID "info":', infoDiv.textContent);


const detalleParrafo = document.querySelector('.detalle');
detalleParrafo.textContent = "Este es un detalle modificado";

const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
    parrafo.style.backgroundColor = 'lightblue';
});