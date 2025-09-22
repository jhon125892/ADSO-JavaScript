const clickHandler = () => {
    alert("Botón clickeado");
};


const clickMeBtn = document.querySelector('#clickMe');
const removeEventBtn = document.querySelector('#removeEvent');


clickMeBtn.addEventListener('click', clickHandler);


removeEventBtn.addEventListener('click', () => {
    clickMeBtn.removeEventListener('click', clickHandler);
    alert("eliminado");
});