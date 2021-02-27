var boton = document.getElementById("button-real");
var imagen = document.getElementById("imagen")

boton.addEventListener("click", botonOprimido);

function botonOprimido(){
    imagen.src = "./imagenes/leo-out.jpg"
}