'use strict'

console.log("listo");

let boton = document.querySelector(".iniciar");
let mensaje = document.querySelector(".modoActivado");

boton.addEventListener('click', function(e){
    alert("Que inicie el proceso");
    mensaje.style.display = "block";

    const cancion = new Audio('audio\\otoño_vivaldi.mp3');
    cancion.play();
});