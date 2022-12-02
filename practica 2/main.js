'use strict'

console.log("hola");

let accion = () => {
    console.log("holii");
    const colores = [ "red", "blue", "pink", "black"];
    parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)];
}

let parrafoInicial = document.querySelector("#parrafoInicial");

parrafoInicial.addEventListener( 'click', function(){
    accion();
})