

function restar(numero1, numero2) {
    return numero1 + numero2
}

let resultado = restar (4, 2);

// MANERAS DE DECLARAR FUNCIONES

// Arrow function

const hola = (letra1, letra2) => {
    console.log (letra1, letra2);
}

hola ('👽', '😒');

// Anónimas

const hola2 = function(){
    console.log ('SOY ANONIMA');
}

hola2();

function limite(nombre) {
    setTimeout (() => {
        alert (`Entrega tu examen, ${nombre}`)
    }, 3000)
}

limite('Ricardo')

// Scope GLOBAL

const global = 'Soy un global';

function mostrar(){
    console.log (global)
}

mostrar()
console.log (global)

// Scope LOCAL

function local() {
    
}