let nombre = prompt("Ingrese el nombre del alumno")
let apellido = prompt ("Ingrese el apellido del alumno")
let calificaciones = parseInt(prompt("Ingrese cantidad de notas a promediar"))
let suma = 0;
let promedio = 0;

for (let i = 1; i <= calificaciones; i++){
    let calificacion = parseFloat(prompt("Ingresa calificación n°" + i));
    suma = suma + calificacion;
}
promedio = suma / calificaciones;

alert("El promedio del alumno " + nombre + " " + apellido + " es: " + promedio)