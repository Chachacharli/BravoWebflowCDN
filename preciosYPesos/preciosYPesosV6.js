
/* PESOS */

const PESO_105 = 25417
const PESO_ULTRANEGRA = 959


const actualizadores = document.querySelectorAll('.actualizarprecio')
console.log('ACTUALIZADORES')
console.log(actualizadores);



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