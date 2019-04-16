// Initialize Firebase
let config = {
  apiKey: "AIzaSyCszMU_MgKV2XeIUYai4dpaUNlU6zz7IOw",
  authDomain: "gurukeys-c2844.firebaseapp.com",
  databaseURL: "https://gurukeys-c2844.firebaseio.com",
  projectId: "gurukeys-c2844",
  storageBucket: "gurukeys-c2844.appspot.com",
  messagingSenderId: "1036765580106"
};
firebase.initializeApp(config);

var database = firebase.database();

function registrar() { //funcion para registrar con variable email y contraseña en caso de ser admin
    
    var email = document.getElementById ("email").value;
    var contrasena = document.getElementById ("contraseña").value;

    //var dropDownSelecter = document.getElementById ("dropDownSelecter").value;
    //console.log (email);
    //console.log (contrasena);

    firebase.auth().createUserWithEmailAndPassword(email, contrasena) //se crea el usuario verificando  con correo electronico
    .then(function(){
        verificar()
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log (errorCode);
        console.log (errorMessage);
      });
}
//ingreso de Administrador verificado
function ingreso() {
    //se ingresa la contraseña, correo y se le da un valor, firebase cacha el error en caso de existir y regresa un console con el error
    var emailadministrador = document.getElementById ("emailadministrador").value;
    var contrasenaadministrador = document.getElementById ("contraseñaadministrador").value;

    firebase.auth().signInWithEmailAndPassword(emailadministrador, contrasenaadministrador)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log (errorCode);
        console.log (errorMessage);
      });
    }
    function observador () {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log ("existe usuario activo")
                aparece(user);
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              console.log("***********");
              console.log(user.emailVerified)
              console.log("***********");

              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // ...
            } else {
              // User is signed out.
              console.log ("no existe usuario activo")
              // ...
            }
          });
    }
    observador ();

    function aparece(user){
        var user = user;
        var contenido = document.getElementById("contenido");
        if (user.emailVerified){
        contenido.innerHTML = `<script src = "../pantallas/administracion.html"> </script>
        <p>Bienvenidx ${user.email}</p>
        <h1>Estos son los visitantes del Día </h1>
        
        <button onclick = "cerrar()" >Cerrar sesión</button>
        `;
        }
    }

//funcion cerrar de firebase le di funcionalidad y un console para comprobar lo que esta pasando
    function cerrar(){
        firebase.auth().signOut()
        .then(function(){
            console.log("saliendo...")

        })
        .catch(function(error){
            console.log(error)
        })
    }
    function verificar (){
        var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo...")
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
    }

    //camara funcion de google
    function camera(){
var camera = document.getElementById('camera');
var frame = document.getElementById('frame');

camera.addEventListener('change', function(e) {
  var file = e.target.files[0];
  // Do something with the image file.
  frame.src = URL.createObjectURL(file);
});

    }

var player = document.getElementById('player');

var handleSuccess = function(stream) {
  player.srcObject = stream;
};

navigator.mediaDevices.getUserMedia({video: true})
    .then(handleSuccess);


var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById("capture");
var videoTracks;

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};
function capture(){
captureButton.addEventListener( function() {
  var context = snapshot.getContext('2d');
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
      snapshotCanvas.height);
      //stop all video streams.
      videoTracks.forEach(function(track) {track.stop()});
});

navigator.mediaDevices.getUserMedia({video: true})
    .then(handleSuccess);
}
 
    
