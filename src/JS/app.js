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

  const imageData = context.getImageData(0, 0, snapshotCanvas.width, snapshotCanvas.height);
  console.log(imageData);
  const converToURL = snapshotCanvas.toDataURL('image/png');
  snapshot.src = snapshotCanvas.toDataURL("image/png");
  player.style.display = 'none';
  whiskyButton.style.display = 'none';
  document.getElementById("hiddenPicture").innerHTML = converToURL;


});
navigator.mediaDevices.getUserMedia({
      video: true
  })
  .then(handleSuccess);



// //jan
// document.getElementById("hiddenPicture").style.display= "none";

// var player = document.getElementById('player');
// var snapshotCanvas = document.getElementById('snapshot');
// var captureButton = document.getElementById('capture');

// var handleSuccess = function(stream) {
// // Attach the video stream to the video element and autoplay.
// player.srcObject = stream;
// };

// captureButton.addEventListener('click', function() {
// var context = snapshotCanvas.getContext('2d');
// // Draw the video frame to the canvas.
// const showImage = context.drawImage(player, 0, 0, snapshotCanvas.width,
//     snapshotCanvas.height);

// const imageData = context.getImageData(0, 0, snapshotCanvas.width,snapshotCanvas.height);
// console.log(imageData);
// const converToURL = snapshotCanvas.toDataURL('image/png');
// document.getElementById("hiddenPicture").innerHTML=converToURL;//si se quita .innerHTML genera un arreglo

// });


// navigator.mediaDevices.getUserMedia({video: true})
//   .then(handleSuccess);