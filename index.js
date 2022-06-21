let nombre = prompt("Ingrese el nombre del alumno")
let apellido = prompt ("Ingrese el apellido del alumno")
let numeroCalificaciones = parseInt(prompt("Ingrese cantidad de notas a promediar"))
let suma = 0;
let promedio = 0;

for (let i = 1; i <= numeroCalificaciones; i++){
    let calificacion = parseFloat(prompt("Ingresa calificación n°" + i));
    suma = suma + calificacion;
}
promedio = suma / numeroCalificaciones;

alert("El promedio del alumno " + nombre + " " + apellido + " es: " + promedio)