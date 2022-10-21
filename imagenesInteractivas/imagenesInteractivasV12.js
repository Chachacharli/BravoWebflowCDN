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

//variables codigo
const camara = '00';
const bg = 0;
const type = 0;
var seatpost = 0;
var headset = 0;
var stem = 0;


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
var estiloFinal = 0;
var colorFinal = 'NA';


// CODE BIKE
var CODE = '000000011NA000'

/* -------------- Radio Buttons Inputs -------------- */  

// Manubrios

$('input[name="manubrio"]').click(function(){
    manubrioFinal = this.value;
    CambiarImagen();

});


//Grupo
$('input[name="groupset"]').click( function(){
    groupsetFinal = this.value;
    CambiarImagen();

});   

//Rines
$('input[name="rines"]').click( function(){
    rinesFinal = this.value;
    CambiarImagen();

});   

//Base
$('input[name="base"]').click( function(){
    baseFinal = this.value;
    CambiarImagen();

});

//Diseno
$('input[name="diseno"]').click( function(){
    var v = this.value;
    if(v == 3){
        disenoFinal = 0;
        estiloFinal = 0; 
    }else if(v == 0){
        disenoFinal = 1;
        estiloFinal = 1; 
    }else if(v == 1){
        disenoFinal = 2;
        estiloFinal = 1; 
    }
    CambiarImagen();
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

    CODE =  bg + type + groupsetFinal + rinesFinal + baseFinal + estiloFinal + disenoFinal + colorFinal + seatpost + headset + stem;

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

    imagen.src = BICIS_URLS[("00" + CODE)]
    completeImg1.src = BICIS_URLS[("06" + CODE)]
    completeImg2.src = BICIS_URLS[("01" + CODE)]
    completeImg3.src = BICIS_URLS[("06" + CODE)]
    completeImg4.src = BICIS_URLS[("00" + CODE)]
    completeImg5.src = BICIS_URLS[("02" + CODE)]
    completeImg6.src = BICIS_URLS[("03" + CODE)]
    completeImg7.src = BICIS_URLS[("04" + CODE)]
    grupo1.src = BICIS_URLS[("02" + CODE)]
    ruedos1.src =BICIS_URLS[("06" + CODE)]
    ruedos2.src = BICIS_URLS[("03" + CODE)]
     
    imagenMobile.src = BICIS_URLS[("00" + CODE)]
    completeImg1Mobile.src = BICIS_URLS[("06" + CODE)]
    completeImg2Mobile.src = BICIS_URLS[("01" + CODE)]
    completeImg3Mobile.src = BICIS_URLS[("06" + CODE)]
    completeImg4Mobile.src = BICIS_URLS[("00" + CODE)]
    completeImg5Mobile.src = BICIS_URLS[("02" + CODE)]
    completeImg6Mobile.src = BICIS_URLS[("03" + CODE)]
    completeImg7Mobile.src = BICIS_URLS[("04" + CODE)]
    grupoMobile1.src = BICIS_URLS[("02" + CODE)]
    ruedos1Mobile.src =BICIS_URLS[("06" + CODE)]
    ruedos2Mobile.src = BICIS_URLS[('03'+ CODE)]

};


