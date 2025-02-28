
// Obtener elementos del DOM

const formulario = document.getElementById('formulario'); // ID del form en HTML
const comentarioInput = document.getElementById('comentario'); // El text area
const listaComentarios = document.getElementById('listaComentarios'); // El nuevo DIV

// Función para obtener comentarios del Local Storage
function obtenerComentarios(){
    return JSON.parse(localStorage.getItem('comentarios')) || [];
}

// Función para guardar los comentarios en Local Storage
function guardarComentarios(comentarios) {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

// Función para mostrar comentarios guardados
function mostrarComentarios() {
    listaComentarios.innerHTML = ''; // Limpiamos antes de mostrarlos

    const comentarios = obtenerComentarios();

    comentarios.forEach((comentario) => {
        agregarComentarioDOM(comentario.texto, comentario.fecha);
    });
}

// Función para agregar comentario al DOM y al Local Storage
function agregarComentario(event) {
    event.preventDefault(); // Se evita que la página se recargue al enviar el formulario

    // Obtener el texto del comentario
    const textoComentario = comentarioInput.value.trim(); //trim() evita espacios en blanco

    if(textoComentario === ''){
        alert('Por favor, escribe un comentario.');
        return;
    }

    // Crear la fecha y hora actual 
    const fecha = new Date ();
    const fechaFormateada = fecha.toLocaleDateString() + ' a las ' + fecha.toLocaleTimeString();

    // Agregar comentario al DOM
    agregarComentarioDOM(textoComentario, fechaFormateada);

    // Guardar en Local Storage
    const comentarios = obtenerComentarios();
    comentarios.push({ texto: textoComentario, fecha: fechaFormateada });
    guardarComentarios(comentarios);

    // Limpiar el campo del texto
    comentarioInput.value = '';
}

// Función para agregar comentarios al DOM
function agregarComentarioDOM(texto, fecha) {

    // Crear un nuevo div para el comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario'); // Clase en CSS para darle estilo al comentario

    // Crear el párrafo con el comentario
    const parrafo = document.createElement('p');
    parrafo.textContent = texto; 

    // Creamos el span para la fecha y hora
    const fechaElemento = document.createElement('span'); // Creamos una etiqueta span para mostrar la fecha.
    fechaElemento.classList.add('fecha'); // Clase en CSS para darle estilo al comentario.
    fechaElemento.textContent = `Publicado el ${fecha}`;

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
        if(confirm('¿Seguro que deseas eliminar este comentario?')){
            eliminarComentario(texto);
            listaComentarios.removeChild(nuevoComentario); // removeChild() - Elimina un elemento hijo
        }
    });

    // Agregar elementos al nuevo comentario
    nuevoComentario.appendChild(parrafo); // appenChild() - Agrega un nuevo elemento
    nuevoComentario.appendChild(fechaElemento);
    nuevoComentario.appendChild(botonEliminar);

    // Agregar el comentario a la lista
    listaComentarios.appendChild(nuevoComentario);
}

// Función para eliminar un comentario del Local Storage
function eliminarComentario(texto) {
    let comentarios = obtenerComentarios(); // Primero obtenemos los comentarios
    comentarios = comentarios.filter(comentario => comentario.texto !== texto); // Luego filtramos
    guardarComentarios(comentarios); // Guardamos los cambios
}

// Cargar comentarios al inicio
mostrarComentarios();

// Agregar evento al formulario
formulario.addEventListener('submit', agregarComentario);