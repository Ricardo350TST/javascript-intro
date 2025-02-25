
/**
 * 
 * Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
 * 
 * Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, 
anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. 
Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y 
eliminar capítulos del libro.
 */

// Objeto del libro
const libro = {
    titulo: "Maze-Runner: Correr o morir",
    autor: "James Dashner",
    dia: 6,
    mes: "octubre",
    anio: 2009,
    estado: "disponible",
    capitulos: ["Thomas llega al laberinto", "Los corredores", "Los penitentes", "El laberinto"],

    // Función para mostrar la información del libro
    describirLibro: function () {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en la fecha de ${this.dia} de ${this.mes} de ${this.anio}, el estado del libro es: ${this.estado}.`
    },

    // Función para mostrar la lista de capitulos
    listarCapitulos: function () {
        console.log(`Capítulos de ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index + 1}. ${capitulo}`);
        })
    },

    // Función para agregar un capítulo
    agregarCapitulos: function (nuevoCapitulo) {
        this.capitulos.push(nuevoCapitulo);
        console.log(`Capítulo: ${nuevoCapitulo} Agregado.`);
        this.listarCapitulos();
    },

    // Función para eliminar un capítulo
    eliminarCapitulos: function (eliminarCapitulo) {
        const index = this.capitulos.indexOf(eliminarCapitulo);
        
        if (index !== -1) { 
            this.capitulos.splice(index, 1);
            console.log(`Capítulo: "${eliminarCapitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${eliminarCapitulo}" no se encontró.`);
        }
    
        this.listarCapitulos();
    }
    
}

console.log(libro.describirLibro());
libro.agregarCapitulos('El fin del laberinto.');
libro.eliminarCapitulos('El laberinto');

