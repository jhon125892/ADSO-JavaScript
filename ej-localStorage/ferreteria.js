const url = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/main/productos_ferreteria.json";
let listaProductos = [];


if (localStorage.contador == null) {
  document.querySelector("#txtContador").value = 0;
} else {
  document.querySelector("#txtContador").value = localStorage.contador;
}

function addCar() {
  let contador = parseInt(localStorage.contador || "0");
  contador++;
  localStorage.contador = contador;
  document.querySelector("#txtContador").value = localStorage.contador;
}

fetch(url)
  .then((respuesta) => respuesta.json())
  .then((productos) => {
    console.log(productos);
    listaProductos = productos;
    mostrarProductos();
  })
  .catch((error) => console.log("Error cargando JSON:", error));

function mostrarProductos() {
  let datos = "";
  listaProductos.forEach((producto) => {
    datos += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
        <div class="card h-100">
          <div class="card-header fw-bold text-center">
            ${producto.nombre}
          </div>
          <div class="card-body text-center">
            <img src="${producto.foto}" width="150"/>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span>Precio: $${producto.precio}</span>
            <button class="btn btn-danger text-white btn-sm" onclick="addCar()">Add</button>
          </div>
        </div>
      </div>`;
  });

  document.querySelector("#Productos").innerHTML = datos;
}