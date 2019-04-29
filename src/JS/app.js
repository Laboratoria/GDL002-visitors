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

  var email = document.getElementById("email").value;
  var contrasena = document.getElementById("contraseña").value;

  //var dropDownSelecter = document.getElementById ("dropDownSelecter").value;
  //console.log (email);
  //console.log (contrasena);

  firebase.auth().createUserWithEmailAndPassword(email, contrasena) //se crea el usuario verificando  con correo electronico
      .then(function() {
          verificar()
      })

      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorCode);
          console.log(errorMessage);
      });
}
//ingreso de Administrador verificado
function ingreso() {
  //se ingresa la contraseña, correo y se le da un valor, firebase cacha el error en caso de existir y regresa un console con el error
  var emailadministrador = document.getElementById("email").value;
  var contrasenaadministrador = document.getElementById("contraseña").value;

  firebase.auth().signInWithEmailAndPassword(emailadministrador, contrasenaadministrador)
      .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log(errorCode);
          console.log(errorMessage);
      });
}

function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log("existe usuario activo")
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
          console.log("no existe usuario activo")
          // ...
      }
  });
}
observador();

function aparece(user) {
  var user = user;
  var contenido = document.getElementById("contenido");
  if (user.emailVerified) {
      contenido.innerHTML = `
    <p>Bienvenidx ${user.email}</p>
    <h1>Estos son los visitantes del Día </h1>
    
  

    <div id="contenido">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col"> Nombre </th>
                    <th scope="col"> Apellido </th>
                    <th scope="col"> Fecha </th>
                    <th scope="col"> Email </th>
                    <th scope="col"> Motivo de visita </th>
                    <th scope="col"> Tiempo estimado de visita</th>
                    <th scope="col">Eliminar</th>
                    
                </tr>
            </thead>
            <tbody id="tabla">
    </div>
    </div>
  
    <div id="contenido">
</div>

    <button onclick = "cerrar()" >Cerrar sesión</button>
    `;
  }
}

//funcion cerrar de firebase le di funcionalidad y un console para comprobar lo que esta pasando
function cerrar() {
  firebase.auth().signOut()
      .then(function() {
          console.log("saliendo...")

      })
      .catch(function(error) {
          console.log(error)
      })
}

function verificar() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
      // Email sent.
      console.log("enviando correo...")
  }).catch(function(error) {
      // An error happened.
      console.log(error);
  });
}


//menu
function mymenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

//camara
var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var whiskyButton = document.getElementById('whisky');

var handleSuccess = function(stream) {
  //se concede el permiso y nos da acceso correcto a video con reproduciòn continua
  player.srcObject = stream;
};

whiskyButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  //Aparece el cuadro de video al lienzo.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
      snapshotCanvas.height);
  console.log(context.canvas.toDataURL());
});

navigator.mediaDevices.getUserMedia({
      video: true
  })
  .then(handleSuccess);

  //notificacion
  var messaging = firebase.messaging();

messaging.requestPermission()
  .then(function() {
    console.log('Se han aceptado las notificaciones');
    return messaging.getToken();
  })
  .then(function(token) {
    if(token) {
      guardarToken(token)
    } else {
      anulaToken();
    }
  
  })
  .catch(function(error) {
    mensajeFeedback(error);
    console.log('No se ha recibido permiso / token: ', error);
  });


  
