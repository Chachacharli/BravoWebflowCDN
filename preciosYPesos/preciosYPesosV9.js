
/* PESOS */

const PESO_105 = 25417
const PESO_ULTRANEGRA = 959


const actualizadores = document.querySelectorAll('.actualizarprecio')
console.log('ACTUALIZADORES')
console.log(actualizadores);


const sizeCheckBoxesP = document.querySelectorAll('.buttonSizeLayout')
const radioBtnCustomP = document.querySelectorAll('.radioBtnCustom')
const radioButton3P = document.querySelectorAll('.radioButton3')


console.log('SIZES')
console.log(sizeCheckBoxesP)

console.log('RADIOMED')
console.log(radioBtnCustomP)


console.log('COLORS')
console.log(radioButton3P)


$('input[name="sizeBike"]').click(function(){
    console.log(this.getAttribute('precio'))
})

$('input[name="rines"]').click(function(){
    console.log(this.getAttribute('precio'))
})

$('input[name="manubrio"]').click(function(){
    console.log(this.value)
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