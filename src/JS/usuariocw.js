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
  var emailusuariocw = document.getElementById("email").value;
  var contrasenausuariocw = document.getElementById("contraseña").value;

  firebase.auth().signInWithEmailAndPassword(emailusuariocw, contrasenausuariocw)
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
      contenido.innerHTML = `<script src = "../pantallas/usuarioscw.html"> </script>
    <p>Bienvenidx ${user.email}</p>
    <h1> </h1>
    

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


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


//función para guardar los datos del usuario visitante
function guardar() {

    var nombre = document.getElementById("nombre").value; //variable para guardar el nombre
    var apellido = document.getElementById("apellido").value; // variable para guardar el apellido
    var email = document.getElementById("email").value; // variable para guardar la dirección de correo electronico
   


    // los datos se guardan en la colección de visitantes con la compilacion de datos ordenada
    db.collection("usuariocw").add({
            nombre: nombre,
            apellido: apellido,
            email: email
           

        })
        .then(function(docRef) { //si todo sale bien el then da una referencia y la valida correctamente
            console.log("Document written with ID: ", docRef.id);
            var nombre = document.getElementById("nombre").value = ''; //se agregó un string vacio para reiniciar los campos cuando los datos se guarden//
            var apellido = document.getElementById("apellido").value = '';
            var email = document.getElementById("email").value = '';
         

        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}