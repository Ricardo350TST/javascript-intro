/* Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. 
Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba. */

let nota = Number (prompt('Agrega la nota del estudiante:'))

if (nota >= 90 && nota <= 100){
    console.log('Excelente!, el estudiante aprobó con:', nota);
} else if (nota >= 75 && nota <= 89) {
    console.log('Bien!, el estudiante aprobó con', nota);
} else if (nota >= 60 && nota <= 74) {
    console.log('Suficiente!, el estudiante logró aprobar con:', nota);
} else if (nota < 60) {
    console.log('Lo sentimos!, el estudiante no aprueba con:', nota);
} else {
    console.log('Fuera de rango, agregar un valor entre 0 y 100');
}