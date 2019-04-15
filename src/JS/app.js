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

function registrar() {
    
    var email = document.getElementById ("email").value;
    var contrasena = document.getElementById ("contraseña").value;

    var dropDownSelecter = document.getElementById ("dropDownSelecter").value;
    //console.log (email);
    //console.log (contrasena);

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)
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