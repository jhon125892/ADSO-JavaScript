const btnContador = document.querySelector("#btnContador")

if (localStorage.getItem("contador")===null) {
    localStorage.setItem("contador", 0);
}else {
    btnContador.textContent = localStorage.getItem("contador");
}

btnContador.addEventListener("click", () => {
    let conta=parseInt(localStorage.getItem("contador"));
    conta++;
    localStorage.setItem("contador", conta);
    btnContador.textContent = localStorage.getItem("contador")
})