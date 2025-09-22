const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = "Soy un nuevo div";


const antiguoDiv = document.querySelector('#antiguoDiv');


if (antiguoDiv) {
    antiguoDiv.parentNode.replaceChild(nuevoDiv, antiguoDiv);
}


console.log(document.body.innerHTML);