let arrayTexto = []
let arrayMensaje = []
let mensajeEncriptado
let mensajeCopiado
let mensajeDesencriptado
let encriptacion

let textoInput = document.getElementById('ingresar-texto')

let botonEncriptar = document.getElementById('boton-encriptar')
botonEncriptar.addEventListener('click', condicionEncriptar)

let mostrarEncriptacion = document.getElementById('mostrar-encriptacion')
mostrarEncriptacion.style.display = 'none'

function condicionEncriptar(){
    if(textoInput.value === ""){
        alertTextoVacio();
    } else if(textoInput.value.match(/^[a-z ]*$/) ) {
        encriptar()
    } else {
        alertMayusculas()
    }   
}

function condicionDesencriptar(){
    if(textoInput.value === ""){
        alertTextoVacio();
    } else if(textoInput.value.match(/^[a-z ]*$/) ) {
        desEncriptar()
    } else {
        alertMayusculas()
    }    
}

function encriptar() {

    let sectionNoFound = document.getElementById('texto-vacio');
    sectionNoFound.style.display = 'none'
  
    let mostrarEncriptacion = document.getElementById('mostrar-encriptacion')
    mostrarEncriptacion.style.display = 'flex'
   
    arrayTexto = textoInput.value.split('')
    console.log(arrayTexto);  

    for (let i = 0; i < arrayTexto.length; i++) {
        switch (arrayTexto[i]) {
            case "a":
                arrayTexto[i] = "ai"
                break;
            case "e":
                arrayTexto[i] = "enter"
                break;
            case "i":
                arrayTexto[i] = "imes"
                break;       
            case "o":
                arrayTexto[i] = "ober"
                break; 
            case "u":
                arrayTexto[i] = "ufat"
                break; 
        }      
    }

    textoInput.value = ''
    
    mensajeEncriptado = arrayTexto.join('')

    mostrarMensaje();
}

function mostrarMensaje() {
    encriptacion = document.getElementById('mensaje-encriptado')
    encriptacion.innerHTML = mensajeEncriptado   
}

function copiarEncriptado() {
    mensajeCopiado = document.getElementById('mensaje-encriptado')
    mensajeCopiado.select()
    document.execCommand('copy')
    mensajeCopiado.value = ''
    textoCopiado() 
}

function ocultarAlerta() {
    alerta.style.display = 'none'
}


function desEncriptar() {
    let mensajeDesencriptado = document.querySelector('.titulo-encriptacion')
    mensajeDesencriptado.innerHTML = "MENSAJE DESENCRIPTADO"
  
    mensajeDesencriptado = textoInput.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
 
    mensajeCopiado.value = mensajeDesencriptado

    textoInput.value = ''
}

function alertTextoVacio() {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Campo vacio, por favor escribe algun texto',
      }) 
}

function alertMayusculas() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se permiten mayúsculas, caracteres especiales, ni acentos!',
      }) 
}

function textoCopiado() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'El texto ha sido Copiado!!!',
        showConfirmButton: false,
        timer: 1500
      })
}


