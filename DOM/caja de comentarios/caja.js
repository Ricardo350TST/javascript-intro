
// Obtener elementos del DOM

const formulario = document.getElementById('formulario'); // ID del form en HTML
const comentarioInput = document.getElementById('comentario'); // El text area
const listaComentarios = document.getElementById('listaComentarios'); // El nuevo DIV

// Función para agregar un comentario.
function agregarComentario(event) {
    event.preventDefault(); // Se evita que la página se recargue al enviar el formulario

    // Obtener el texto del comentario
    const textoComentario = comentarioInput.value.trim(); //trim() evita espacios en blanco

    if(textoComentario === ''){
        alert('Por favor, escribe un comentario.');
        return;
    }

    // Crear un nuevo div para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario'); // Clase en CSS para darle estilo al comentario

    // Crear el párrafo con el comentario
    const parrafo = document.createElement('p');
    parrafo.textContent = textoComentario; 

    // Crear la fecha y hora actual 
    const fecha = new Date ();
    const fechaFormateada = fecha.toLocaleDateString() + ' a las ' + fecha.toLocaleTimeString();
    
    const fechaElemento = document.createElement('span'); // Creamos una etiqueta span para mostrar la fecha.
    fechaElemento.classList.add('fecha'); // Clase en CSS para darle estilo al comentario.
    fechaElemento.textContent = `Publicado el ${fechaFormateada}`;

    // Crear el botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('eliminar'); // Clase en CSS para darle estilo al comentario.
    
    // Crear el icono de Font Awesome
    const iconoEliminar = document.createElement('i');
    iconoEliminar.classList.add('fas', 'fa-trash'); // Icono de basurero (fa-trash)

    // Agregar el icono dentro del botón
    botonEliminar.appendChild(iconoEliminar);

    // Agregar evento para eliminar el comentario
    botonEliminar.addEventListener('click', function(){
        listaComentarios.removeChild(nuevoComentario); // removeChild() - Elimina un elemento hijo
    });

    // Agregar elementos al nuevo comentario
    nuevoComentario.appendChild(parrafo); // appenChild() - Agrega un nuevo elemento
    nuevoComentario.appendChild(fechaElemento);
    nuevoComentario.appendChild(botonEliminar);

    // Agregar el comentario a la lista
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar el campo de texto
    comentarioInput.value = '';
}

// Agregar evento al formulario
formulario.addEventListener('submit', agregarComentario);