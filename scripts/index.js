document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  const url = "https://www.youtube.com/";
  const mensaje = '<a href= ${{url}} > <h4>vamos a la clase</h4> </a>';

//   function checkIn(){
//     let x1 = document.getElementById("1Checka").checked;
//     let x2 = document.getElementById("1Checkb").checked;
//     let x3 = document.getElementById("1Checkc").checked;
//       if(x1 && x2 || x1 && x3 || x2 && x3 ){
//         alert("Por favor selecciona una opción únicamente")
//         console.log("Por favor selecciona una opción únicamente")
        
//       }
//       else{
//         if (x1){
//           alert("Opción uno como la seleccionada")
//           console.log("Opción uno como la seleccionada")
//         }
//         if (x2){
//           alert("Opción dos como la seleccionada")
//           console.log("Opción dos como la seleccionada")
//         }
//         if (x3){
//           alert("Opción tres como la seleccionada")
//           console.log("Opción tres como la seleccionada")
//       }
//   }
// }

function myFunction() {
  var x1 = document.getElementById("myChecka").checked;
  
  var x2 = document.getElementById("myCheckb").checked;
  
  var x3 = document.getElementById("myCheckc").checked;
  
  
  if(!x1 && !x2 && !x3){
  	alert("Selecciona una opción")
    document.getElementById("demo").innerHTML = "<p>Selecciona una opción</p>";
  }
  	if(x1 && x2 || x1 && x3 || x2 && x3 ){
    	alert("Por favor selecciona una opción únicamente")
        document.getElementById("demo").innerHTML = "<p>Por favor, selecciona una opción únicamente</p>";
        
    }
    else{
   	if (x1){
    alert("Opción uno como la seleccionada")
    document.getElementById("demo").innerHTML = x1;
    }
      	if (x2){
    alert("Opción dos como la seleccionada")
    document.getElementById("demo").innerHTML = x2;
    }
      	if (x3){
    alert("Opción tres como la seleccionada")
    document.getElementById("demo").innerHTML = x3;
    }
    }
    }
    
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var btnSend = document.getElementById("close");


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  console.log("Envio de datos por el modal")
}

btnSend.onclick = function() {
  // modal.style.display = "none";
  console.log("Envio de datos por el modal")
  document.getElementById("demo").innerHTML = 
    "<h5>Da clic en el link de abajo</h5>";
  
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
