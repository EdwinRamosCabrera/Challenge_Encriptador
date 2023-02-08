let botonEncriptar = document.getElementById('boton-encriptar');
botonEncriptar.addEventListener('click', encriptar);

function encriptar() {
    let textoInput = document.getElementById('ingresar-texto').value;
    console.log(textoInput)

    let arrayTexto = textoInput.split('');
    console.log(arrayTexto);

    for (let i = 0; i < arrayTexto.length; i++) {
        if(arrayTexto[i] == "a") {
            arrayTexto[i] = "ai";
        } else if(arrayTexto[i] == "e") {
            arrayTexto[i] = "enter";
        } else if(arrayTexto[i] == "i") {
            arrayTexto[i] = "imes";
        } else if(arrayTexto[i] == "o") {
            arrayTexto[i] = "ober";
        } else if(arrayTexto[i] == "u") {
            arrayTexto[i] = "ufat";
        }       
    }

    console.log(arrayTexto);
}

