
const formulario = document.getElementById('formulario')


// Arrays para validar los datos que el usuario ingresó
const usuarios = [
    {
        user: 'ricardo',
        pass: '1234'
    },
    {
        user: 'zaira',
        pass: '12345'
    },
    {
        user: 'angel',
        pass: '123456'
    },
    {
        user: 'julio',
        pass: '1234567'
    },
]

// Función para mostrar los errores
function mostrarError(tipo) {
    let span = document.getElementById('error');

    span.innerHTML = tipo
    span.classList.remove('hide')
    setTimeout(() => {
        span.classList.add('hide')
    }, 5000)
}

// Función para validar los input
function validar(username, password) {

    let usuarioEncontrado = false;

    for(i = 0; i < usuarios.length; i++){
        if (username === usuarios[i].user) {
            usuarioEncontrado = true;
            if(password === usuarios[i].pass){
                console.log('Binvenido',usuarios[i].user);
                window.location.href = './dashboard.html'
            } else {
                mostrarError('Password incorrecto');
                
            }
        }

        if(!usuarioEncontrado){
            mostrarError('Usuario no encontrado');            
        }
    }
}

// Formulario para agregar usuario y contraseña
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    let usuario = document.getElementById('inputUsuario').value.toLocaleLowerCase();
    let password = document.getElementById('inputPassword').value.toLocaleLowerCase();

    validar(usuario, password)
    
})