// La URL de donde obtendremos los datos
 
const url1= 'https://jsonplaceholder.typicode.com/posts'

// 1. Obtener la tabla del HTML
const cuerpoTabla=document.getElementById('cuerpoTabla')

// 2. Usar fetch para obtener los datos
fetch(url1)
    .then(respuesta => respuesta.json())
    .then(datos => {
        // 3. Recorrer cada dato

        datos.forEach(usuario => {
              // 4. Crear una fila (<tr>) para cada usuario

                const fila = document.createElement('tr');
                // 5. Crear las celdas (<td>) y poner los datos en ellas

                fila.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.title}</td>
                    <td>${usuario.body}</td>
                `;
        // 6. Añadir la fila a la tabla

        cuerpoTabla.appendChild(fila);
        });
    })
       // Manejar cualquier error
    .catch(error => {
        console.error('Error al cargar archivos', error);
    });




