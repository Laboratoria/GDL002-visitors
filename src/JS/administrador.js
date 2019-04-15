

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


//función para guardar los datos del usuario visitante
function guardar(){

  var nombre = document.getElementById("nombre").value; //variable para guardar el nombre
  var apellido = document.getElementById("apellido").value; // variable para guardar el apellido
  var email = document.getElementById("email").value; // variable para guardar la dirección de correo electronico
  var fecha = document.getElementById("fecha").value; // variable para guardar la fecha de entrada
  var motivo = document.getElementById("motivo").value; // variable para guardar el motivo de visita

  

// los datos se guardan en la colección de visitantes
  db.collection("visitantes").add({
    nombre: nombre,
    apellido: apellido,
    entrada: fecha,
    email: email,
    motivo: motivo
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    var nombre = document.getElementById("nombre").value =  '';  //se agregó un string vacio para reiniciar los campos cuando los datos se guarden//
  var apellido = document.getElementById("apellido").value = '';
  var email = document.getElementById("email").value = '';
  var fecha = document.getElementById("fecha").value = '';
  var motivo = document.getElementById("motivo").value = '';
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

}
//usamos forEach para crear un ciclo
//=+ hacemos que se agregue un nuevo dato
//Leer datos en la tabla 

var tabla = document.getElementById("tabla");
db.collection("visitantes").onSnapshot((querySnapshot) => {
  tabla.innerHTML = ' ';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla.innerHTML += `  
      <tr>
      <th scope="row"> ${doc.id} </th>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().entrada}</td>
        <td> ${doc.data().email}</td>
        <td> ${doc.data().motivo}</td>
      </tr>
      `
      ;
  });
});
// se cambio db.collection("visitantes").get (.onSnapshot(querySnapshot) => {
// por db.collection("visitantes").onSnapshot((querySnapshot) => {
  //para que agregue cambios en tiempo real sin tener que actualizar la pag