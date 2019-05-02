let config = {
    apiKey: "AIzaSyCszMU_MgKV2XeIUYai4dpaUNlU6zz7IOw",
    authDomain: "gurukeys-c2844.firebaseapp.com",
    databaseURL: "https://gurukeys-c2844.firebaseio.com",
    projectId: "gurukeys-c2844",
    storageBucket: "gurukeys-c2844.appspot.com",
    messagingSenderId: "1036765580106"
  };
firebase.initializeApp(config);


var db = firebase.firestore();




function iniciarenco() {
    var conombre = document.getElementById("conombre").value; //variable para guardar el nombre
    var coemail = document.getElementById("coemail").value; // variable para guardar la dirección de correo electronico
    var empresa = document.getElementById("empresa").value; // variable para guardar el motivo de visita


    db.collection("coworkers").add({
      email: coemail,
      name: conombre,
      hour: firebase.firestore.FieldValue.serverTimestamp(), //pinta la hora de entrada del usuario
      empresa: empresa
    })
    .then(function(docRef){
console.log("ID: ", docRef.id);
var conombre = document.getElementById("conombre").value = '';
var empresa = document.getElementById("empresa").value = ''; // variable para guardar el motivo de visita
var coemail = document.getElementById("coemail").value = '';
var iniciarenco = document.getElementById("inciarenco");

    })
    .catch(function(error){
        console.error("Error en: ", error);

    });

}


  
function aparece(user) {
    var user = user;
    var contenido = document.getElementById("contenido");
    if (user.emailVerified) {
        contenido.innerHTML = `
      <p>Bienvenidx ${user.email}
      <div id="contenido">
       <p> tienes una notificación </p><br>
       <br>
       <input type="button" value="mostrar" id="mostrar">
      <button onclick = "cerrarco()" placeholder="Hasta pronto">Cerrar sesión</button>
      </div>
      `;
    }
  }


 

  function convertTimestamp(timestamp){
    return dateFns.format(timestamp, 'MM/DD/YYYY')
    
    }
    var unixNow = (new Date()) ;
    document.write(convertTimestamp(unixNow));

 

    function functEmpresa() {
        var x = document.getElementById("empresa");
        var i = x.selectedIndex;
        document.getElementById("demo").innerHTML = x.options[i].text;
    }
    
    function ingresocowor() {
        //se ingresa la contraseña, correo y se le da un valor, firebase cacha el error en caso de existir y regresa un console con el error
        var emailco = document.getElementById("emailco").value;
        var contraco = document.getElementById("contraco").value;
      
        firebase.auth().signInWithEmailAndPassword(emailco, contraco)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);
            });
      }
    

      function cerrarco() {
        firebase.auth().signOut()
            .then(function() {
                console.log("saliendo...")
      
            })
            .catch(function(error) {
                console.log(error)
            })
      }
      
      function verificarco() {
        var user = firebase.auth().currentUser;
      
        user.sendEmailVerification().then(function() {
            // Email sent.
            console.log("enviando correo...")
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });
      }
      

function observadorco() {
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
  observadorco();
  
  