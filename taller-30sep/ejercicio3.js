const tareas = document.querySelectorAll(".tarea");
const columnas = document.querySelectorAll(".columna");

tareas.forEach(tarea => {
  tarea.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text", tarea.textContent);
    tarea.classList.add("arrastrando");
  });

  tarea.addEventListener("dragend", () => {
    tarea.classList.remove("arrastrando");
  });
});

columnas.forEach(col => {
  col.addEventListener("dragover", e => e.preventDefault());
  col.addEventListener("drop", e => {
    e.preventDefault();
    let texto = e.dataTransfer.getData("text");
    let nuevaTarea = document.createElement("div");
    nuevaTarea.className = "tarea";
    nuevaTarea.setAttribute("draggable", "true");
    nuevaTarea.textContent = texto;
    col.appendChild(nuevaTarea);
  });
});
