const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Crear el contenedor de la tarea
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Crear el texto de la tarea
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        taskSpan.textContent = taskText;

        // Crear el icono de chequeo
        const checkIcon = document.createElement('span');
        checkIcon.classList.add('check-icon');
        checkIcon.textContent = '✔️'; // Icono de verificación

        // Crear el icono de eliminación
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete-icon');
        deleteIcon.textContent = '❌'; // Icono de eliminación

        // Añadir eventos a los iconos
        checkIcon.addEventListener('click', () => {
            checkIcon.classList.toggle('completed');
        });

        deleteIcon.addEventListener('click', () => {
            if (confirm('Estás seguro de que quieres eliminar esta tarea?')) {
                taskDiv.remove();
            }
        });

        // Ensamblar la tarea
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(checkIcon);
        taskDiv.appendChild(deleteIcon);

        // Agregar la tarea a la lista
        taskList.appendChild(taskDiv);

        // Limpiar el input
        taskInput.value = '';
    }
});