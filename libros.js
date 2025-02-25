/* Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

*/

// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro a la lista
function agregarLibro(titulo) {
    if (titulo && typeof titulo === 'string') {
        librosLeidos.push(titulo);
        console.log(`Libro agregado: "${titulo}"`);
    } else {
        console.log("Error: Ingresa un título válido.");
    }
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Lista de libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Ejemplo de uso
agregarLibro("Maze Runner: Correr o Morir");
agregarLibro("Cien años de soledad");
agregarLibro("Hábitos atómicos");
mostrarLibrosLeidos();

