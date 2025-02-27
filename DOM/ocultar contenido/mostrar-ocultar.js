
/*

Crear una página que tenga un párrafo oculto por defecto. 
Al hacer clic en un botón, el párrafo debe aparecer, y al hacer clic nuevamente, el párrafo debe desaparecer.

Instrucciones:
Crea una página HTML con un párrafo y un botón.
El párrafo debe estar inicialmente oculto (puedes usar la propiedad display: none; en CSS).
Cuando el usuario haga clic en el botón, el párrafo debe aparecer si está oculto, o desaparecer si ya está visible.
El texto del botón debe cambiar cada vez que el usuario haga clic: si el párrafo está oculto, 
el botón debe decir "Mostrar contenido", y si está visible, debe decir "Ocultar contenido".

*/

let parrafo = document.getElementById('parrafo');
let boton = document.getElementById('cambiarContenido');


boton.addEventListener('click', function(){
    if(parrafo.style.display === 'none'){
        parrafo.style.display = 'block'; // Muestra el contenido
        boton.textContent = 'Ocultar contenido';
    } else {
        parrafo.style.display = 'none'; // Oculta el contenido
        boton.textContent = 'Mostrar contenido';
    }
});
