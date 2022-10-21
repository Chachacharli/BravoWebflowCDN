alert("En proceso...")

// Variables para seccion de geometria
var geometrias = ['Endurance', 'Allrounder', 'Race']
var elem = document.querySelector('#geometriaBici');
var geometriaFinal; //variable a tomar para el carro

// Variables para seccion de tamano 
let sizeOutput = document.getElementById("sizeOutput")
var finalSize;

//Variables de manubrios
var manubrioFinal = 0;
var groupsetFinal = 0;


/* -------------- Radio Buttons Inputs -------------- */  

// Manubrios
$('input[name="manubrio"]').click( function(){
    manubrioFinal = this.value
    alert(manubrioFinal)

} )

//Grupo
$('input[name="groupset"]').click( function(){
      alert(this.value)
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


