
/* PESOS */

const PESO_105 = 25417
const PESO_ULTRANEGRA = 959


const actualizadores = document.querySelectorAll('.actualizarprecio')
console.log(actualizadores);

actualizadores.forEach(e => {
  e.addEventListener('click', ()=>{
    console.log('PRECIO CAHNGE')
    if(e.checked)
    console.log(e.id);

  
});
});
