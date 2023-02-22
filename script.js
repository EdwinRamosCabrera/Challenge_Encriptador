let arrayTexto = []
let arrayMensaje = []
let mensajeEncriptado
let encriptacion

let botonEncriptar = document.getElementById('boton-encriptar')
botonEncriptar.addEventListener('click', condicionEncriptar)

let textoInput = document.getElementById('ingresar-texto')

let resultados = document.getElementById('resultados')

let tituloEncriptacion = document.querySelector('.titulo-encriptacion')

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
    tituloEncriptacion.innerHTML = "MENSAJE ENCRIPTADO"

    let sectionNoFound = document.getElementById('indicaciones');
    sectionNoFound.style.display = 'none'
  
    let mostrarEncriptacion = document.getElementById('mostrar-encriptacion')
    mostrarEncriptacion.style.display = 'flex'

    arrayTexto = textoInput.value.split('')

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
    
    resultados.value =  arrayTexto.join('')
}

function copiarEncriptado() {
    resultados.select()
    document.execCommand('copy')
    resultados.value = ''
    textoCopiado() 
}

function desEncriptar() {
    tituloEncriptacion.innerHTML = "MENSAJE DESENCRIPTADO"

    mensajeDesencriptado = textoInput.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
 
    resultados.value = mensajeDesencriptado

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


