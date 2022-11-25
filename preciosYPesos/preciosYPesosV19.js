
const innerPrecio = document.querySelector('#innerPrecio')
const innerPeso = document.querySelector('#innerPeso')
const innerPrecioM = document.querySelector('#innerPrecioM')
const innerPesoM = document.querySelector('#innerPesoM')

const LIST_OF_SIZEBIKE = Object.values($('input[name="sizeBike"]')).splice(0,6)
const LIST_OF_GROUPSET = Object.values($('input[name="groupset"]')).splice(0,2)
const LIST_OF_RINES = Object.values($('input[name="rines"]')).splice(0,2)
const LIST_OF_MANUBRIO = Object.values($('input[name="manubrio"]')).splice(0,2)
const LIST_OF_BASE = Object.values($('input[name="base"]')).splice(0,2)
const LIST_OF_DISENO = Object.values($('input[name="diseno"]')).splice(0,3)

let frame_set_chk = false

/* PESOS */

let PESO_FRAMESET = 45000
let PESO_GRUPO
let PESO_RUEDOS
let PESO_MANUBRIO
let PESO_BASE
let PESO_DISENO
let PESO_TAMANO

/* PRECIOS */

const frameSetChecBoxPP = document.querySelector('#frameSetChecBox')
console.log(frameSetChecBoxPP.checked)

frameSetChecBoxPP.addEventListener('change', (e)=>{
        frame_set_chk = (e.target.checked)
        console.log(frame_set_chk)
    
})

const asdf = $('input[name="sizeBike"]')
const asdf12 = $('input[name="groupset"]')

LIST_OF_SIZEBIKE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})


LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})

LIST_OF_RINES.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})

LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})

LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})

LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
          console.log(event.target.getAttribute('precio'))
        }    
});
})


/*
actualizadores.forEach(e => {
  e.addEventListener('click', ()=>{
    SET_PRECIO();
});
});


function SET_PRECIO(){
    actualizadores.forEach(e =>{
        console.log(e.checked)
        if(e.checked){
            console.log('cheked')
            console.log(e.id);
        }else{
            console.log(e.id)
            console.log('not checked')
        }
    });
}

*/
/*
let allCheckBox = document.querySelectorAll('.shapes')

  allCheckBox.forEach((checkbox) => { 
  checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(event.target.value)
    }
  })
})

*/