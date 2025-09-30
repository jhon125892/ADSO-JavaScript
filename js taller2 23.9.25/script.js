// URL de la API
const API_URL = 'https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/SENA-CTPI.matriculados.json';

// Elementos del DOM
const loginContainer = document.getElementById('login-container');
const mainContainer = document.getElementById('main-container');
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const userDisplay = document.getElementById('user-display');
const logoutBtn = document.getElementById('logout-btn');
const fichaSelect = document.getElementById('ficha-select');
const programaNombre = document.getElementById('programa-nombre');
const aprendicesTable = document.getElementById('aprendices-table').getElementsByTagName('tbody')[0];

// Datos de autenticación
const validPassword = 'adso3064975';

// Variable para almacenar los datos de la API
let datosAprendices = [];

// Verificar si el usuario ya está logueado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const storedUsername = localStorage.getItem('username');
    
    if (storedUsername) {
        // El usuario ya está logueado
        mostrarInterfazPrincipal(storedUsername);
        cargarDatosAPI();
    } else {
        // Mostrar formulario de login
        loginContainer.classList.remove('hidden');
        mainContainer.classList.add('hidden');
    }
});

// Manejar el envío del formulario de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validar credenciales
    if (username && password === validPassword) {
        // Guardar usuario en localStorage
        localStorage.setItem('username', username);
        
        // Mostrar interfaz principal
        mostrarInterfazPrincipal(username);
        cargarDatosAPI();
        
        // Limpiar formulario
        loginForm.reset();
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Credenciales incorrectas. Por favor, intente nuevamente.';
    }
});

// Manejar el botón de salir
logoutBtn.addEventListener('click', function() {
    // Eliminar datos del localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('codigoFicha');
    localStorage.removeItem('estadoFicha');
    localStorage.removeItem('nivelFormacion');
    localStorage.removeItem('nombrePrograma');
    
    // Volver al formulario de login
    loginContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden');
});

// Función para mostrar la interfaz principal
function mostrarInterfazPrincipal(username) {
    userDisplay.textContent = `Usuario: ${username}`;
    loginContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
}

// Función para cargar datos desde la API
function cargarDatosAPI() {
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos completos recibidos:', data);
            if (Array.isArray(data) && data.length > 0) {
                console.log('Primer elemento:', data[0]);
            } else {
                console.log('El JSON recibido no es un array o está vacío.');
            }
            datosAprendices = data;
            llenarSelectorFichas();
            // Si hay una ficha guardada en localStorage, seleccionarla
            const fichaGuardada = localStorage.getItem('codigoFicha');
            if (fichaGuardada) {
                fichaSelect.value = fichaGuardada;
                mostrarAprendicesPorFicha(fichaGuardada);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            errorMessage.textContent = 'Error al cargar los datos. Por favor, recargue la página.';
        });
}

// Función para llenar el selector de fichas
function llenarSelectorFichas() {
    // Obtener fichas únicas
    const fichasUnicas = [...new Set(datosAprendices.map(item => item.ficha))];

    // Limpiar selector
    fichaSelect.innerHTML = '<option value="">Seleccione una opción</option>';

    // Agregar opciones
    fichasUnicas.forEach(ficha => {
        const option = document.createElement('option');
        option.value = ficha;
        option.textContent = ficha;
        fichaSelect.appendChild(option);
    });
}

// Agregar evento al selector solo una vez
fichaSelect.addEventListener('change', function() {
    const fichaSeleccionada = this.value;

    if (fichaSeleccionada) {
        mostrarAprendicesPorFicha(fichaSeleccionada);

        // Guardar información de la ficha en localStorage
        const programa = datosAprendices.find(item => item.ficha === fichaSeleccionada);
        if (programa) {
            localStorage.setItem('codigoFicha', fichaSeleccionada);
            localStorage.setItem('nombrePrograma', programa.programa || '');
            localStorage.setItem('nivelFormacion', programa.nivel_formacion || '');
            localStorage.setItem('estadoFicha', programa.estado_ficha || '');
        }
    } else {
        // Limpiar tabla e información del programa
        aprendicesTable.innerHTML = '';
        programaNombre.textContent = '';
    }
});

// Función para mostrar aprendices por ficha
function mostrarAprendicesPorFicha(ficha) {
    // Filtrar aprendices por ficha
    const aprendicesFicha = datosAprendices.filter(item => item.ficha === ficha);
    
    // Obtener información del programa
    const programa = aprendicesFicha.length > 0 ? aprendicesFicha[0] : null;
    
    if (programa) {
        programaNombre.textContent = programa.programa || 'Información no disponible';
    }
    
    // Limpiar tabla
    aprendicesTable.innerHTML = '';
    
    // Llenar tabla con los aprendices
    aprendicesFicha.forEach(aprendiz => {
        const fila = document.createElement('tr');
        
        // Aplicar clase especial si el estado es "Retiro Voluntario"
        if (aprendiz.estado_aprendiz === 'Retiro Voluntario') {
            fila.classList.add('retiro-voluntario');
        }
        
        fila.innerHTML = `
            <td>${aprendiz.tipo_documento || ''}</td>
            <td>${aprendiz.documento || ''}</td>
            <td>${aprendiz.nombre || ''}</td>
            <td>${aprendiz.primer_apellido || ''}</td>
            <td>${aprendiz.segundo_apellido || 'undefined'}</td>
            <td>${aprendiz.estado_aprendiz || ''}</td>
        `;
        
        aprendicesTable.appendChild(fila);
    });
}