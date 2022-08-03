let diapositivaActual = 1;
  
$('#brushed').click(function(e) {
    $('#flechaDerecha').trigger('click');
update(2);
diapositivaActual =2;
console.log(diapositivaActual);
});
  $('#sandblast').click(function(e) {
  $('#flechaDerecha').trigger('click');
  console.log("SELECCIONADO");
  update(2);
  diapositivaActual =2;
  console.log(diapositivaActual);
});

$('#rombos').click(function(e) {
        $('#flechaDerecha').trigger('click');
  update(3);
  diapositivaActual =3;
  console.log(diapositivaActual);         
});

$('#invertido').click(function(e) {
    $('#flechaDerecha').trigger('click');
  update(3);
        diapositivaActual =3;
  console.log(diapositivaActual);  
});

$('#none').click(function(e) {
    $('#flechaDerecha').trigger('click');
  update(3);
  diapositivaActual =3;
  console.log(diapositivaActual);  
});




const subdot1 = document.querySelector('#subdot1');
const subdot2 = document.querySelector('#subdot2');
const subdot3 = document.querySelector('#subdot3');

subdot1.addEventListener('click', ()=>{
update(1);	
        switch (diapositivaActual) {
          case 1:
      break;
          case 2:
      diapositivaActual = 1;
                $('#flechaIzquierda').trigger('click');
      
      break;
          case 3:
      diapositivaActual = 1;
      $('#flechaIzquierda').trigger('click');
                $('#flechaIzquierda').trigger('click');
      break;          
  }
});

subdot2.addEventListener('click', ()=>{
update(2);	
        switch (diapositivaActual) {
          case 1:
      diapositivaActual = 2;          
          $('#flechaDerecha').trigger('click');
      break;
          case 2:          
      break;
          case 3:
      diapositivaActual = 2;          
      $('#flechaIzquierda').trigger('click');
      break;          
  }
});

subdot3.addEventListener('click', ()=>{
update(3);	
        switch (diapositivaActual) {
          case 1:
      diapositivaActual = 3;          
                $('#flechaIzquierda').trigger('click');
      break;
          case 2:
      diapositivaActual = 3;          
                $('#flechaDerecha').trigger('click');
      break;
          case 3:

      break;          
  }
});

window.addEventListener("load",function(){
const loader = document.getElementById("loader");
const idiomas = document.getElemmentById('idiomas');
console.log(loader);
loader.className += " hidden";
loader.style.display = "felx";

});
const progress = document.getElementById("progress1");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;
//change 1 to 3
function update(currentActive) {
stepCircles.forEach((circle, i) => {
if (i < currentActive) {
  circle.classList.add("active");
} else {
  circle.classList.remove("active");
}
});
const activeCircles = document.querySelectorAll(".active");
progress.style.width =
((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";  
}
