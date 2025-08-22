const prompt = require('prompt-sync')();

function CrearAlumno(Nombre, Notas) {
    let Alumno = {
        Nombre: Nombre,
        Notas: Notas,
        Promedio: function() {
            let Suma = 0;
            for (let i = 0; i < this.Notas.length; i++) {
                Suma = Suma + this.Notas[i];
            }
            return Suma / this.Notas.length;
        }
    };
    return Alumno;
}

let Estudiante = CrearAlumno("Sofia", [4.5, 3.8, 5.0, 4.0, 3.6]);

console.log("Nombre:", Estudiante.Nombre);
console.log("Notas:", Estudiante.Notas);
console.log("Promedio:", Estudiante.Promedio());
