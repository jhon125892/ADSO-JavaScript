let productos = [];

const tbody = document.querySelector('tbody');
// CREAR PRODUCTO
let codigoActual = 1; // Código incremental
const form = document.getElementById('formProducto');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;

    // Crear el producto
    const producto = {
        codigo: codigoActual++, // Asigna y luego incrementa
        nombre: nombre,
        categoria: categoria,
        precio: precio
    };

    productos.push(producto); // Guarda el producto en el array
    agregarProductoTabla(producto); // Agrega la fila a la tabla
    form.reset(); // Limpia el formulario
});

// Función para agregar una fila a la tabla
function agregarProductoTabla(producto) {
    const fila = document.createElement('tr');

    // Columna Código
    const tdCodigo = document.createElement('td');
    tdCodigo.textContent = producto.codigo;
    fila.appendChild(tdCodigo);

    // Columna Nombre
    const tdNombre = document.createElement('td');
    tdNombre.textContent = producto.nombre;
    fila.appendChild(tdNombre);

    // Columna Categoría
    const tdCategoria = document.createElement('td');
    tdCategoria.textContent = producto.categoria;
    fila.appendChild(tdCategoria);

    // Columna Precio
    const tdPrecio = document.createElement('td');
    tdPrecio.textContent = producto.precio;
    fila.appendChild(tdPrecio);

    // Agregar fila al tbody
    tbody.appendChild(fila);
}

    
