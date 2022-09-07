
  function CambiarImagen(){
    code = "00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem;
    imagen.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
    console.log(`00: ${BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]}, 01: ${BICIS_URLS[("01" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]}, 02: ${BICIS_URLS[("02" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]}, 03: ${BICIS_URLS[("03" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]}`);
    console.log(code);
  }


  var imagen = document.getElementById('imagen');

  var camara = "00";
  var bg = 0;
  var type = 0;
  var groudset = 0;
  var rin = 0;
  var base = 0;
  var estilo = 0;
  var diseno = 0;
  var anoz = "NA"
  var seatpost = 0;
  var headset = 0;
  var stem = 0;

  var typeC = 1, groudsetC = 1, rinC =1, baseC =1, estiloC =1, disenoC=1,anozC =1, seatpostC=0,headsetC =0,stemC=0;
  var typeP = 1, groudsetP = 1, rinP =1, baseP =1, estiloP =1, disenoP=1,anozP =1, seatpostP=0,headsetP =0,stemP=0;

  
  const colors = {
    'Small' : 'blue',
    'Medium' : 'green',
    'Medium' : 'grey',
    'XLarge' : 'blue'
  }

  code = camara + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem;
  code ="000000011BR000"
  webflowSrc = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62';


  const BICIS_URLS = {
//Camara 06
'060001100PL000':webflowSrc +'d037d232cdff8cdc43401e_060001100PL000.png',
'060001100BR000':webflowSrc +'d037d2016f1d38b538985b_060001100BR000.png',
'060001100PU000':webflowSrc +'d037d2647b2cbd435ccb10_060001100PU000.png',
'060001100NA000':webflowSrc +'d037d12d3baf5f2d9de519_060001100NA000.png',
'060001100BL000':webflowSrc +'d037cecd07e825d699f824_060001100BL000.png',
'060001000BR000':webflowSrc +'d037cb3d07ea778696c060_060001000BR000.png',
'060001000NA000':webflowSrc +'d037cb32cdffff9a433f51_060001000NA000.png',
'060001000BL000':webflowSrc +'d037ca7c2d09c69bd3741f_060001000BL000.png',
'060001000PU000':webflowSrc +'d037caaecc9106152c04ed_060001000PU000.png',
'060001000PL000':webflowSrc +'d037c94112801bf570f30a_060001000PL000.png',
'060000100PU000':webflowSrc +'d037c9b69bc9c6b71cf786_060000100PU000.png',
'060001000PL000':webflowSrc +'d037c94112801bf570f30a_060001000PL000.png',
'060000100PU000':webflowSrc +'d037c9b69bc9c6b71cf786_060000100PU000.png',
'060000100PL000':webflowSrc +'d037c6016f1d63f93897c3_060000100PL000.png',
'060000100BL000':webflowSrc +'d037c13536f81108a8284c_060000100BL000.png',
'060000000NA000':webflowSrc +'d037c0016f1d9e33389776_060000000NA000.png',
'060000000PU000':webflowSrc +'d037c0c7bb9c6e9cde76b3_060000000PU000.png',
'060000000BL000':webflowSrc +'d037bf687fc5af5fe068d5_060000000BL000.png',
'060000000BR000':webflowSrc +'d037bf784283322b3da576_060000000BR000.png',
'060000100BR000':webflowSrc +'d037bf0a9389ffe765869f_060000100BR000.png',
'060001111PU000':webflowSrc +'d037baaecc91c2212c03dc_060001111PU000.png',
'060001111PL000':webflowSrc +'d037b83ab65ffcc7bfa387_060001111PL000.png',
'060001111NA000':webflowSrc +'d037b790100cbf3ad6653d_060001111NA000.png',
'060001111BR000':webflowSrc +'d037b36ae936da291991c6_060001111BR000.png',
'060001111BL000':webflowSrc +'d037b3016f1d08ae389744_060001111BL000.png',
'060001011NA000':webflowSrc +'d037b308633fbb03c8f855_060001011NA000.png',
'060001011PU000':webflowSrc +'d037b30a938969f665867a_060001011PU000.png',
'060001011PL000':webflowSrc +'d037b3b69bc92c881cf714_060001011PL000.png',
'060001011BR000':webflowSrc +'d037af5816277e228f3c52_060001011BR000.png',
'060001011BL000':webflowSrc +'d037ac647b2c85b15cc94f_060001011BL000.png',
'060000111PU000':webflowSrc +'d037ac0bdbd5698a684850_060000111PU000.png',
'060000111PL000':webflowSrc +'d037a72c7ca63b8fb91183_060000111PL000.png',
'060000111NA000':webflowSrc +'d037a658162752988f3c3c_060000111NA000.png',
'060000011PL000':webflowSrc +'d037a52c7ca6ab93b91160_060000011PL000.png',
'060000011BL000':webflowSrc +'d037a508633fcc25c8f7a7_060000011BL000.png',
'060000011PU000':webflowSrc +'d037a51dbabb04817b910c_060000011PU000.png',
'060000111BR000':webflowSrc +'d037a42d3baf6b789de3d0_060000111BR000.png',
'060000111BL000':webflowSrc +'d037a4cbc6a5993e337e67_060000111BL000.png',
'060000011BR000':webflowSrc +'d037a33710e47a06c5ea23_060000011BR000.png',
'060000011NA000':webflowSrc +'d037a27078433b35d735dd_060000011NA000.png',
'060001112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86752f3e2f3815ed38_060001112PL000.png',
'060001112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86cc9b0a4ef034e4c3_060001112PU000.png',
'060001112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace86d9540d65bd0d9c91_060001112BR000.png',
'060001112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dace866ace2c6ce90ca058_060001112NA000.png',
'060001012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6546f28af04b0bbf6_060001012BL000.png',
'060001012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd69276a8fbb3081595_060001012NA000.png',
'060001012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6bcc3eb6def61f828_060001012PU000.png',
'060000112PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6377793aea75758a7_060000112PU000.png',
'060001012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd6379f30411a75f627_060001012BR000.png',
'060001112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd66802b6f9b28898b0_060001112BL000.png',
'060001012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd56d17023de64a1704_060001012PL000.png',
'060000112PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd5bcc3eb0c9b61f7ed_060000112PL000.png',
'060000112NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2c266a352944daa9e_060000112NA000.png',
'060000112BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2a8593413e9217513_060000112BL000.png',
'060000012BL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd230e8f0ca999b2045_060000012BL000.png',
'060000012BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd2cf7baf869f6e0f85_060000012BR000.png',
'060000012PU000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd1dccf0eca0fc46979_060000012PU000.png',
'060000112BR000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd19b93434adb978cb1_060000112BR000.png',
'060000012PL000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd130e8f09d289b203b_060000012PL000.png',
'060000012NA000' : 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62dacbd0c266a3a5f54daa98_060000012NA000.png',
}



$('#brushed').click(function(){
      base = 0;
      typeC = 60000;
      typeP = 1;
      CambiarImagen();         

  });
  $('#sandblast').click(function(){
    base = 1;
    typeC = 60000;
    typeP = 1;
      CambiarImagen();         
  });

  //diseno
  $('#rombos').click(function(){
    estilo = 1;
    diseno = 1;
    disenoC=500;
    estiloP = 1;
      CambiarImagen();         

  });
  $('#none').click(function(){
      estilo = 0;
      diseno = 0; 
      disenoC=500;
      estiloP = 1;
      CambiarImagen();         

  });
  $('#invertido').click(function(){
    estilo = 1;
    diseno = 2;
    disenoC=500;
    estiloP = 1;
    CambiarImagen();         

  });


  //color
  $('#NA').click(function(){
    anoz = "NA";
    typeP = 1;
    anozP = 1;
      CambiarImagen();         

  });
  $('#BL').click(function(){
    anoz = "BL";
    anozC = 2;
    anozP = 1;
      CambiarImagen();         

  });
  $('#BR').click(function(){
    anoz = "BR";
      anozC = 3;
      anozP = 1;
      CambiarImagen();         

  });
  $('#PU').click(function(){
    anoz = "PU";
    anozC = 4;
    anozP = 1;
      CambiarImagen();         

  });
  $('#PL').click(function(){
    anoz = "PL";
    anozC = 5;
    anozP = 1;

    CambiarImagen();         

  }); 
