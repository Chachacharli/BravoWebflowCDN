alert("En proceso...")

//Constantes

//Imagenes desktop
const imagen = document.getElementById('imagen');
const completeImg1 = document.getElementById('completeImg1');
const completeImg2 = document.getElementById('completeImg2');
const completeImg3 = document.getElementById('completeImg3');
const completeImg4 = document.getElementById('completeImg4');
const completeImg5 = document.getElementById('completeImg5');
const completeImg6 = document.getElementById('completeImg6');
const completeImg7 = document.getElementById('completeImg7');
const grupo1 =  document.getElementById('grupo1');
const ruedos1 = document.getElementById('ruedos1');
const ruedos2 =  document.querySelector('#ruedos2');
const manubrioImg1 = document.querySelector('#manubrioImg1');

//Imagenes Mobile
const imagenMobile = document.getElementById('imagenMobile');
const completeImg1Mobile = document.getElementById('completeImg1Mobile');
const completeImg2Mobile = document.getElementById('completeImg2Mobile');
const completeImg3Mobile = document.getElementById('completeImg3Mobile');
const completeImg4Mobile = document.getElementById('completeImg4Mobile');
const completeImg5Mobile = document.getElementById('completeImg5Mobile');
const completeImg6Mobile = document.getElementById('completeImg6Mobile');
const completeImg7Mobile = document.getElementById('completeImg7Mobile');
const grupoMobile1 =  document.getElementById('grupoMobile1');
const grupoMobile2 =  document.getElementById('grupoMobile2');
const ruedos1Mobile = document.getElementById('ruedos1Mobile');
const ruedos2Mobile =  document.getElementById('ruedos2Mobile');
const manubrioImgMobile1 = document.querySelector('#manubrioImgMobile1');


const webflowSrc = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62';
const gifImgLoading = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62e8909354b3000715341c62_loader.gif';

// Variables para seccion de geometria
var geometrias = ['Endurance', 'Allrounder', 'Race']
var elem = document.querySelector('#geometriaBici');
var geometriaFinal; //variable a tomar para el carro

// Variables para seccion de tamano 
var finalSize;

//Variables de inputs radio buttons
var manubrioFinal = 0;
var groupsetFinal = 0;
var rinesFinal = 0;
var baseFinal = 0;
var disenoFinal = 0;
var colorFinal = 0;


/* -------------- Radio Buttons Inputs -------------- */  

// Manubrios

$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;

});


//Grupo
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;
});   

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
});   

//Base
$('input[name="base"]').click( function(){
    baseFinal = this.value;
});

//Diseno
$('input[name="diseno"]').click( function(){
    disenoFinal = this.value;
});

//Color
$('input[name="color"]').click( function(){
    colorFinal = this.value;
});



//Se asigna el tamano
$('input[name="sizeBike"]').click(function(){
    finalSize = this.value;
});
//Se asigna el valor de la geometria
var rangeValue = function(){
    geometriaFinal = elem.value;    
}




function CambiarImagen(){

    imagen.src = gifImgLoading;
    completeImg1.src =gifImgLoading;
    completeImg2.src = gifImgLoading;
    completeImg3.src = gifImgLoading;
    completeImg4.src = gifImgLoading;
    completeImg5.src = gifImgLoading;
    completeImg6.src = gifImgLoading;
    completeImg7.src = gifImgLoading;
    grupo1.src = gifImgLoading;
    ruedos1.src = gifImgLoading;
    ruedos2.src = gifImgLoading;

     
    imagenMobile.src = gifImgLoading;
    completeImg1Mobile.src = gifImgLoading;
    completeImg2Mobile.src = gifImgLoading;
    completeImg3Mobile.src = gifImgLoading;
    completeImg4Mobile.src = gifImgLoading;
    completeImg5Mobile.src = gifImgLoading;
    completeImg6Mobile.src = gifImgLoading;
    completeImg7Mobile.src = gifImgLoading;
    grupoMobile1.src = gifImgLoading;
    ruedos1Mobile.src =gifImgLoading;
    ruedos2Mobile.src = gifImgLoading;
    imagen.src = BICIS_URLS[("00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg1.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg2.src = BICIS_URLS[("01" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg3.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg4.src = BICIS_URLS[("00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg5.src = BICIS_URLS[("02" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg6.src = BICIS_URLS[("03" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg7.src = BICIS_URLS[("04" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    grupo1.src = BICIS_URLS[("02" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    ruedos1.src =BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    ruedos2.src = BICIS_URLS[("03" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
     
    imagenMobile.src = BICIS_URLS[("00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg1Mobile.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg2Mobile.src = BICIS_URLS[("01" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg3Mobile.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg4Mobile.src = BICIS_URLS[("00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg5Mobile.src = BICIS_URLS[("02" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg6Mobile.src = BICIS_URLS[("03" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    completeImg7Mobile.src = BICIS_URLS[("04" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    grupoMobile1.src = BICIS_URLS[("02" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    ruedos1Mobile.src =BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    ruedos2Mobile.src = BICIS_URLS[('03'+ bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]

};


