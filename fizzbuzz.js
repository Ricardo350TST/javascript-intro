// FizzBuzz

/* FizzBuzz es un ejercicio clásico de programación que ayuda a mejorar el pensamiento lógico y la estructura de los bucles 
condicionales. Tu tarea es escribir un programa JavaScript que recorra los números del 1 a 100 y siga estas reglas:

- Si un número es múltiplo de 3, imprime "Fizz".
- Si un número es múltiplo de 5, imprime "Buzz".
- Si un número es múltiplo de 3 y de 5, imprime "FizzBuzz".
- Si un número no es múltiplo de 3 ni de 5, simplemente imprime el número.
*/

for(let index = 1; index <= 100; index++){
    if((index % 3 === 0) && (index % 5 === 0)){
        console.log('FizzBuzz');
    } 
    else if(index % 3 === 0){
        console.log('Fizz');
    }
    else if(index % 5 === 0){
        console.log ('Buzz');
    }
    else{
        console.log (index);
    }
}