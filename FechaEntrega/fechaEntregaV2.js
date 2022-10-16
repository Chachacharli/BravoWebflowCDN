

const fechaEntrega = document.querySelector("#fechaEntrega")

//Declaracion de variables  
let grupoEntrega = 0
let ruedosEntrega = 0
let manubrioEntrega = 0

//Declaracion de fecha actual
const newDate = new Date

//Declaracion de array
const arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octuubre", "Noviembre", "Diciembre"]

fechaEntrega.innerHTML = ((arrayMeses[newDate.getMonth()] + ' ' + newDate.getFullYear()));

function getDelivery() {

    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    month = month + 2
    month = month + grupoEntrega + ruedosEntrega + manubrioEntrega

    if(month>11){
        month = month - 11 
    }
    
    var day = (arrayMeses[month] + " " + year)

    fechaEntrega.innerHTML = day
    
}



$('#105').click(function(){
    grupoEntrega = 0
  });

$('#ultegra').click(function(){
    grupoEntrega = 1
  });

$('#aluminio').click(function(){
    ruedosEntrega = 0
  
  });  

  $('#carbon').click(function(){
    ruedosEntrega = 1
  
  });  

  $('#standard').click(function(){
    manubrioEntrega = 0
  });  

  $('#aero').click(function(){
     
    manubrioEntrega = 1
  });