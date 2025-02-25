
/*
const persona = {
    nombre: 'Ricardo',
    edad: 23,
    profesion: 'Desarrollador',
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`
    }
}

console.log(persona.saludar());
*/

// LIBRO

const libro = {
    titulo: 'El principito',
    autor: 'Antoine de Saint',
    publicacion: 1943,
    capitulos: ['Introducción', 'Encuentro con el zorro', 'El asteroide B-612'],


    // Función para mostrar la información del libro
    mostrarInfo: function () {
        return `${this.titulo} de ${this.autor} publicado en ${this.publicacion}`
    },

    // Función para mostrar los capítulos
    listarCapitulos: function () {
        console.log(`Capítulos de ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index + 1}. ${capitulo}`);
        })
    },

    // Función para agregar un nuevo capítulo
    agregarCapitulos: function (nuevoCapitulo) {
        this.capitulos.push(nuevoCapitulo)
        console.log(`Capítulo ${nuevoCapitulo} agregado.`);
        this.listarCapitulos();
    }
}

console.log(libro.mostrarInfo());
libro.agregarCapitulos('Test');