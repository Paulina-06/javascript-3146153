const pantalla = document.querySelector('#moticos')
const btn1 = document.querySelector('#boton1')
const btn2 = document.querySelector('#boton2')
const btn3 = document.querySelector('#boton2')


function blancoynegro (){
    console.log('imagenmodificada')
    pantalla.style.filter = "grayscale(%100)"
}



btn1.addEventListener("click", blancoynegro)