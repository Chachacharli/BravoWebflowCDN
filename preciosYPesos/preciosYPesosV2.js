
const actualizadores = document.querySelectorAll('.actualizarprecio')
console.log(actualizadores);

actualizadores.forEach(e => {
  e.addEventListener('click', ()=>{
    console.log('PRECIO CAHNGE')
    console.log(e.id);

  
});
});
