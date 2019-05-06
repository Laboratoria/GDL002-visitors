//notificacion de visita con duracion de 8seg
var noty = document.getElementById("time__noty")
var mostrar = document.getElementById("mostrar")
var ocultar = document.getElementById("ocultar")

var aparecer = function() {
    console.log("mostrar")
    var noty = document.getElementById("time__noty")
    noty.style.animation = "fastup 10s linear forwards"
    //  animation: duracion 10seg;
    noty.classList.add("time__noty")
}

var desaparecer = function() {
    console.log("ocultar")
    //console para ver el funcionamiento
    noty.style.animation = ""
}

//mostrar notificacion

mostrar.addEventListener("click", aparecer)

ocultar.addEventListener("click", desaparecer)