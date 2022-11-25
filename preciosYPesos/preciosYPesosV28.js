
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
let PESO_GRUPO = 25417
let PESO_RUEDOS = 5083
let PESO_MANUBRIO = 957
let PESO_BASE = 4500
let PESO_DISENO = 0
let PESO_TAMANO = 0

/* PRECIOS */

let PRECIO_FRAMESET = 45000
let PRECIO_GRUPO = 25417
let PRECIO_RUEDOS = 5083
let PRECIO_MANUBRIO = 957
let PRECIO_BASE = 4500
let PRECIO_DISENO = 0
let PRECIO_TAMANO = 0


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
            console.log(event.target)
            PRECIO_TAMANO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})


LIST_OF_GROUPSET.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_GRUPO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})

LIST_OF_RINES.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            console.log(event.target.getAttribute('precio'))
            PRECIO_RUEDOS = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})

LIST_OF_MANUBRIO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_MANUBRIO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})

LIST_OF_BASE.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_BASE = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})

LIST_OF_DISENO.forEach( (e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log(event.target)
            PRECIO_DISENO = parseInt(event.target.getAttribute('precio'), 10) 
            SetPrecio();
        }    
});
})


function SetPrecio(){
    console.log('set precio')
    innerPrecio.innerText = PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;
    innerPrecioM.innerText = PRECIO_GRUPO + PRECIO_RUEDOS + PRECIO_MANUBRIO + PRECIO_BASE + PRECIO_DISENO + PRECIO_TAMANO;

}