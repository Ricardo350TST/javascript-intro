// CLASE 2

// Hacer una app que se encargue de validar si la persona es apta para recibir la licencia de conducir. 

// Validar que el usuario haya ganado el examen teórico, práctico y tenga buena visión. 

/*let teorico = true;
let practico = true;
let vista = true;

if (teorico === true && practico === true && vista === true) {
    alert('Felicidades, haz conseguido tu licencia de conducir.');
}
else if (practico === false){
    alert('Lo sentimos, haz fallado en el examen práctico, repítelo.');
}
else if (vista === false){
    alert('Lo sentimos, haz fallado en el examen de la vista.');
}
else if (teorico === false){
    alert('Lo sentimos, haz fallado en el examen teórico, repítelo.');
}
else{
    alert('Contacta administrador.');
}*/

/* App para validar entrada al parque temático.
 1. Edad y altura, tener 12 años y medir más de 140cm
 2. Pago o pase, debe de haber hecho el pago de $20 o tener un pase VIP.
 3. Condición de salud, NO debe de tener restricciones médicas.
 4. Acompañante, si el visitante es menor de 16 años debe estar acompañado por un adulto. */

 let edad = Number (prompt('Ingresa tu edad:'));
 
 if (edad >= 12) {

    let altura = Number (prompt('Ingresa tu altura en CM:'));

    if (altura >= 140){

        if (edad < 16) {
            let acompañante = prompt('Eres menor de 16 años, ¿te acompaña un adulto? si - no').toLocaleLowerCase();

            if (acompañante === 'si') {

                let pago = prompt('¿Hiciste el pago de la entrada? si - no').toLocaleLowerCase();

                if (pago === 'si'){

                    let salud = prompt('¿Tienes alguna condición médica? si - no').toLocaleLowerCase();   

                    if (salud === 'no') {           
                        console.log('Puedes ingresar con tu acompañante, bienvenidos!');
                    } 
                    else if (salud === 'si'){
                        console.log('Lo sentimos, no puedes ingresar con alguna condición médica.');
                    }
                }
                else if(pago === 'no'){

                    let pase = prompt('¿Tienes un pase VIP? si - no').toLocaleLowerCase();

                    if (pase === 'si'){
                        let salud = prompt('¿Tienes alguna condición médica? si - no').toLocaleLowerCase();   

                        if (salud === 'no') {           
                            console.log('Puedes ingresar con tu acompañante, bienvenidos!');
                        } 
                        else if (salud === 'si'){
                            console.log('Lo sentimos, no puedes ingresar con alguna condición médica.');
                        }
                    } else {
                        console.log('Lo sentimos, no puedes ingresar sin pago o un pase VIP.')
                    } 
                }
            } else {
                console.log('Lo sentimos, no puedes ingresar sin acompañante.')
            }
        }
        else if (edad >= 16 && altura >= 140){

            let pago = prompt('¿Hiciste el pago de la entrada? si - no').toLocaleLowerCase();

            if (pago === 'si') {

                let salud = prompt('¿Tienes alguna condición médica? si - no').toLocaleLowerCase();   

                if (salud === 'no') {           
                    console.log('Puedes ingresar al parque, bienvenido!');
                } 
                else if (salud === 'si'){
                    console.log('Lo sentimos, no puedes ingresar con alguna condición médica.');
                }
            }
            else if(pago === 'no'){
                
                let pase = prompt('¿Tienes un pase VIP? si - no').toLocaleLowerCase();

                if (pase === 'si'){
                    let salud = prompt('¿Tienes alguna condición médica? si - no').toLocaleLowerCase();   

                    if (salud === 'no') {           
                        console.log('Puedes ingresar al parque, bienvenido!');
                    } 
                    else if (salud === 'si'){
                        console.log('Lo sentimos, no puedes ingresar con alguna condición médica.');
                    }
                }
                else {
                    console.log('Lo sentimos, no puedes ingresar sin pago o un pase VIP.')
                }
            }
        }
    }
    else if (edad >= 12 && altura < 140){
        console.log('Lo sentimos, no puedes ingresar con una altura menor a 140cm.');
    }
 } 
 else if (edad < 12){
    console.log('Lo sentimos, tienes que tener al menos 12 años para poder ingresar.');
    }
    


