// Seleccionar un enlace usando getElementsByTagName y cambiar su href
const enlace = document.getElementsByTagName('a')[0];
if (enlace) {
    enlace.href = "https://www.google.com";
}

// Seleccionar un elemento con la clase 'titulo' y cambiar su contenido
const titulo = document.querySelector('.titulo');
if (titulo) {
    titulo.textContent = "Título Modificado";
}

// Cambiar el color de fondo del <body>
document.body.style.backgroundColor = 'lightgray';