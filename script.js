let arrayTexto = []
let arrayMensaje = []
let mensajeEncriptado
let mensajeCopiado
let mensajeDesencriptado

let botonEncriptar = document.getElementById('boton-encriptar')
botonEncriptar.addEventListener('click', encriptar)

let mostrarEncriptacion = document.getElementById('mostrar-encriptacion')
mostrarEncriptacion.style.display = 'none'

function encriptar() {

    let sectionNoFound = document.getElementById('texto-vacio');
    sectionNoFound.style.display = 'none'
  
    let mostrarEncriptacion = document.getElementById('mostrar-encriptacion')
    mostrarEncriptacion.style.display = 'block'

    let textoInput = document.getElementById('ingresar-texto').value
    
    arrayTexto = textoInput.split('')
    console.log(arrayTexto);

    for (let i = 0; i < arrayTexto.length; i++) {
        if(arrayTexto[i] == "a") {
            arrayTexto[i] = "ai"
        } else if(arrayTexto[i] == "e") {
            arrayTexto[i] = "enter"
        } else if(arrayTexto[i] == "i") {
            arrayTexto[i] = "imes"
        } else if(arrayTexto[i] == "o") {
            arrayTexto[i] = "ober"
        } else if(arrayTexto[i] == "u") {
            arrayTexto[i] = "ufat"
        }       
    }

    document.getElementById('ingresar-texto').value = " "
    console.log(arrayTexto)
    
    mensajeEncriptado = arrayTexto.join('')

    console.log(mensajeEncriptado)

    mostrarMensaje();

}

function mostrarMensaje() {

    let encriptacion = document.getElementById('mensaje-encriptado')
    encriptacion.innerHTML = mensajeEncriptado
    
}

function copiarEncriptado() {
    mensajeCopiado = document.getElementById('mensaje-encriptado')
    mensajeCopiado.select()
    document.execCommand('copy')
    alert('copiado')

    mensajeCopiado.value = " "
}

function desEncriptar() {
    let textoEncriptado = document.getElementById('ingresar-texto').value
    console.log(textoEncriptado)
    arrayMensaje = textoEncriptado.split('ai')
    console.log(arrayMensaje)
    mensajeDesencriptado 
}