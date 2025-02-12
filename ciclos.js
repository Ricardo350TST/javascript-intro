/*let index = 1;

while (index <= 10) {
    console.log(index);
    index++;
}*/

/*
for (let index = 1; index <= 10; index++){
    console.log ('Iteración', index)
}
*/

/*
const emojis = ['😀', '👽', '😒', true, 100, '🏉'];
//console.log (emojis.length);

for (let index = 0; index < emojis.length; index++) {
    console.log('Iteración', index);
    console.log (emojis[index]);
    
}
*/

let usuarioMarca = prompt('Ingresa la marca del carro:');
let usuarioColor = prompt('Ingresa el color del carro:');

const autos = [
    {marca: 'Toyota', modelo: 'Corolla', color: 'azul'},
    {marca: 'Honda', modelo: 'Civic', color: 'rojo'},
    {marca: 'Subaru', modelo: 'WRX', color: 'blanco'},
    {marca: 'BMW', modelo: 'M4', color: 'negro'},
    {marca: 'Ford', modelo: 'Mustang', color: 'amarillo'},
    {marca: 'Chevrolet', modelo: 'Model 3', color: 'plateado'},
]

// Filtrar por marca
let autoBuscado = null;

for (let index = 0; index < autos.length; index++){
    if(autos[index].marca === usuarioMarca){
        autoBuscado = autos[index]
        break;
    }
}

if(autoBuscado){
    console.log ('Auto encontrado', autoBuscado);
} else {
    console.log ('No se encontró la marca.');
}

// Filtrar por color 
const autosDeColor = []

for(let index = 0; index < autos.length; index++){
    if(autos[index].color === usuarioColor){
        autosDeColor.push(autos[index]);
    }
}

console.log('Lista de autos de color:', autosDeColor);



