
/* 

Crear una página donde el contenido de un título y un párrafo cambie cuando el usuario haga clic en un botón.

Crea una página HTML con un título <h1>, un párrafo <p>, y un botón <button>.
El título y el párrafo deben tener un contenido inicial.
Cuando el usuario haga clic en el botón, el contenido del título y el párrafo debe cambiar. El título puede decir algo como 
"¡Bienvenido a mi página!" y el párrafo debe decir "Este es el contenido inicial".
Después de hacer clic, el título debe decir "¡Contenido actualizado!" y el párrafo debe decir "El contenido ha sido cambiado".

*/

let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let boton = document.getElementById('cambiarContenido');

boton.addEventListener('click', function(){
    titulo.innerHTML = 'Contenido actualizado';
    parrafo.innerHTML = 'El contenido ha sido cambiado.';
});