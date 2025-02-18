
// Crea una función que reciba un array de números y retorne cuántos números son pares.

function contarPares(numeros) {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0 ) {
            console.log(numeros[i]);
            contador++;
        }
    }
    return contador;
}

//console.log(contarPares ([1,2,3,4,5,6,7,8]));

// Crear una función que reciba un array de número y retorne el número más grande.

function encontrarMayor(numeros) {
    let mayor = numeros[0]
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > mayor) {
            mayor = numeros [i]
        }
    }
    return mayor;
}

//console.log (encontrarMayor([20, 10, 5, 3, 2, 21, 19]));

/* Crear un objeto estudiante con nombre, edad y un array de notas, también crear una función que reciba un objeto
y que retorne el promedio de las notas. */

const estudiante = {
    nombre: 'Ricardo',
    edad: 23,
    notas: [80, 90, 70]
}

function calcularPromedio(estudiante) {
    let suma = 0;
    for (let i = 0; i < estudiante.notas.length; i++){
        suma += estudiante.notas[i]
    }
    return suma / estudiante.notas.length;
}

//console.log('El promedio de:', estudiante.nombre, 'es', calcularPromedio(estudiante));


/* Crear una función que reciba un array de objetos con estudiantes y que retorne un nuevo
array con los nombres y los promedios. */

const estudiantes = [
    {nombre: 'Ricardo', notas: [70, 50, 100]},
    {nombre: 'José', notas: [100, 70, 75]},
    {nombre: 'Mauricio', notas: [80, 90, 65]},
]

function generarReporte(estudiantes) {
    let reporte = [];
    for (let i = 0; i < estudiantes.length; i++){
        let suma = 0;
        for (let j = 0; j < estudiantes[i].notas.length; j++){
            suma += estudiantes[i].notas[j]
        }
        let promedio = suma / estudiantes[i].notas.length
        reporte.push({ nombre: estudiantes[i].nombre, 
        promedio: promedio})
    }
    return reporte;
}

console.log (generarReporte(estudiantes));