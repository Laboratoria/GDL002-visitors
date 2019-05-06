//notificacion de visita al iniciar como usuario verificado
var noty = document.getElementById("time__noty") //variable para mandar a llamar la notificacion
var mostrar = document.getElementById("mostrar") //muestra la notificacion
var ocultar = document.getElementById("ocultar")//el usuario puede parar la notificacion

var aparecer = function() { //funcion para activar la notificacion con cosole para ver que ocurra
    console.log("mostrar")
    var noty = document.getElementById("time__noty")
    noty.style.animation = "fastup 10s linear forwards"
    //  animacion: duracion 10seg;
    noty.classList.add("time__noty")
}

var desaparecer = function() { //para la notificacion
    console.log("ocultar")
    //console para ver el funcionamiento
    noty.style.animation = ''
}

//mostrar notificacion

mostrar.addEventListener("click", aparecer)

ocultar.addEventListener("click", desaparecer)