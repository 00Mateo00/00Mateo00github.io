
var escuchar_teclado = document.addEventListener("keydown",reload);

function reload(x){
    if (x.keyCode==82){
        console.log("dmnt");
        leo();
    }
    
}

var boton = document.getElementById("button-real");
var imagen = document.getElementById("imagen")

boton.addEventListener("click", botonOprimido);

function botonOprimido(){
    imagen.src = "./imagenes/leo-out.jpg"
}

function leo(){
    imagen.src="./imagenes/leo.png"
}