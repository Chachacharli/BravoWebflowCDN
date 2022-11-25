
/* PESOS */

const PESO_105 = 25417
const PESO_ULTRANEGRA = 959


const actualizadores = document.querySelectorAll('.actualizarprecio')
console.log('ACTUALIZADORES')
console.log(actualizadores);


actualizadores.forEach(e =>{
    if(e.checked){
        console.log('cheked')
        console.log(e.id);
    }else{
        console.log(e.id)
        console.log('not checked')
    }
});

actualizadores.forEach(e => {
  e.addEventListener('click', ()=>{
  
});
});
