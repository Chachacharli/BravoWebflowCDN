
const innerPrecio = document.querySelector('#innerPrecio')
const innerPeso = document.querySelector('#innerPeso')
const innerPrecioM = document.querySelector('#innerPrecioM')
const innerPesoM = document.querySelector('#innerPesoM')

const LIST_OF_SIZEBIKE = $('input[name="sizeBike"]')

let frame_set_chk = false

/* PESOS */

let PESO_FRAMESET = 45000
let PESO_GRUPO
let PESO_RUEDOS
let PESO_MANUBRIO
let PESO_BASE
let PESO_DISENO
let PESO_TAMANO


const frameSetChecBoxPP = document.querySelector('#frameSetChecBox')
console.log(frameSetChecBoxPP.checked)

frameSetChecBoxPP.addEventListener('change', (e)=>{
        frame_set_chk = (e.target.checked)
        console.log(frame_set_chk)
    
})

const asdf = $('input[name="sizeBike"]')
const asdf12 = $('input[name="groupset"]')

$('input[name="sizeBike"]').click(function(){
    console.log(this.getAttribute('precio'))
})

$('input[name="groupset"]').click(function(){
    console.log('groupset')
    console.log(this.getAttribute('precio'))
})

$('input[name="rines"]').click(function(){
    console.log('rines')
    console.log(this.getAttribute('precio'))
})

$('input[name="manubrio"]').click(function(){
    console.log('manubrio')
    console.log(this.getAttribute('precio'))
})

$('input[name="base"]').click(function(){
    console.log('base')
    console.log(this.getAttribute('precio'))
})

$('input[name="diseno"]').click(function(){
    console.log('diseno')
    console.log(this.getAttribute('precio'))
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