
/*
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).

*/

// Declaramos el arreglo de frutas
const frutas = [
    "manzana", "pera", "manzana", "naranja", "pera", "platano", "manzana", "naranja", "platano", "kiwi"
];

// Objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// Usando un ciclo for para contar las frutas
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    // Si la fruta ya existe en el objeto, sumamos 1
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, la inicializamos en 1
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas:", conteoFrutas);