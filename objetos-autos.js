/*
Crear un objeto "auto" con propiedades como marca, modelo, año, y un método mostrarInfo que imprima la información del auto.
*/

const auto = {
    marca: "BMW",
    modelo: "BMW Serie 1",
    año: "2023",

    // Función para mostrar la información del auto
    mostrarInfo: function(){
        return `El automóvil de la marca ${this.marca} con el modelo ${this.modelo} es lanzado en el año ${this.año}`
    }
}

console.log(auto.mostrarInfo());


