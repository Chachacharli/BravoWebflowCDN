  function CambiarImagen(){
        imagen.src = BICIS_URLS[("00" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
        imagen2.src = BICIS_URLS[("04" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
        imagen3.src = BICIS_URLS[("06" + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem)]
        console.log(imagen2)
        console.log(imagen3)

        precio = typeC + groudsetC + rinC + baseC+  estiloC + disenoC + anozC  +seatpostC+headsetC+ stemC;
        peso = typeP + groudsetP + rinP + baseP+  estiloP + disenoP + anozP  +seatpostP+headsetP+ stemP;

        innerPrecio.innerHTML = ("$"+precio)
        innerPeso.innerHTML = (peso +"Kg");
      }

      var innerPeso = document.getElementById('innerPeso');
      var innerPrecio = document.getElementById('innerPrecio');
      var imagen = document.getElementById('imagen');
      var imagen2 = document.getElementById('imagen2');
      var imagen3 = document.getElementById('imagen3');

      $("input[name=bases][value= 0 ]").attr('checked', 'checked');
      $("input[name=rines][value= 0 ]").attr('checked', 'checked');
      $("input[name=groupset][value= 0 ]").attr('checked', 'checked');

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

      

      code = camara + bg + type + groudset + rin + base + estilo + diseno + anoz + seatpost + headset + stem;
      code ="000000011BR000"
      webflowSrc = 'https://uploads-ssl.webflow.com/6149043a3c69c4356cdb74b7/62';
      const BICIS_URLS = {
  

    //Camata 01
    '000000011BR000' : webflowSrc +'cdf4d096635f3b9ace1875_000000011BR000.png', 
    '000000011BL000' : webflowSrc +'cdf4cecf93ed0cef29ad28_000000011BL000.png', 
    '000000011NA000' : webflowSrc +'cdf4d2bdc9adb57733debe_000000011NA000.png', 
    '000000011PL000' : webflowSrc +'cdf4d0cf93ed5e6929ad60_000000011PL000.png', 
    '000000011PU000' : webflowSrc +'cdf4d071d253283b7a69d4_000000011PU000.png', 
    '000000111BL000' : webflowSrc +'cdf4d171d253fb657a69d5_000000111BL000.png', 
    '000000111BR000' : webflowSrc +'cdf4d1cf93ed80fb29ad65_000000111BR000.png', 
    '000000111NA000' : webflowSrc +'cdf4cf6e3bd9a843053906_000000111NA000.png', 
    '000000111PL000' : webflowSrc +'cdf4d2cf93edf9c529ad66_000000111PL000.png', 
    '000000111PU000' : webflowSrc +'cdf4d4c98653097463d109_000000111PU000.png', 
    '000001011BL000' : webflowSrc +'cdf4d7d6c33ae66a7cddb9_000001011BL000.png', 
    '000001011BR000' : webflowSrc +'cdf4d756b85db7092b55e1_000001011BR000.png', 
    '000001011NA000' : webflowSrc +'cdf4d807de4e5ec9de89ad_000001011NA000.png', 
    '000001011PL000' : webflowSrc +'cdf4d788e7e13351224a8e_000001011PL000.png', 
    '000001011PU000' : webflowSrc +'cdf4d707de4e4ffdde89ab_000001011PU000.png', 
    '000001111BL000' : webflowSrc +'cdf4d796635f7abdce18a5_000001111BL000.png', 
    '000001111BR000' : webflowSrc +'cdf4d8c0b1efa67750b91d_000001111BR000.png', 
    '000001111NA000' : webflowSrc +'cdf4deeb73d1d2beb6aa74_000001111NA000.png', 
    '000001111PL000' : webflowSrc +'cdf4dfc0b1ef0c6650b95e_000001111PL000.png', 
    '000001111PU000' : webflowSrc +'cdf4dfdfb27b7d357057ac_000001111PU000.png',
    '000000100NA000' : webflowSrc +'cedb42f27d050c6a2d4b75_000000100NA000.png',
    '000000000PL000' : webflowSrc +'cedb43ee83f7716dc71c28_000000000PL000.png',
    '000000000PU000' : webflowSrc +'cedb442ab9f20527403935_000000000PU000.png',
    '000000100BR000' : webflowSrc +'cedb44caee4248a8b44fe6_000000100BR000.png',
    '000000100PU000' : webflowSrc +'cedb453075ee1620390489_000000100PU000.png',
    '000000100BL000' : webflowSrc +'cedb442b272f0c8c446d7d_000000100BL000.png',
    '000000000BR000' : webflowSrc +'cedb4509417aeab0379a31_000000000BR000.png',
    '000000000NA000' : webflowSrc +'cedb457f810801e92c4cd6_000000000NA000.png',
    '000001000BL000' : webflowSrc +'cedb462ab9f2611b403959_000001000BL000.png',
    '000001000BR000' : webflowSrc +'cedb46dadba9a05b9015c9_000001000BR000.png',
    '000001000NA000' : webflowSrc +'cedb47155fca9eba1f133e_000001000NA000.png',
    '000001100BR000' : webflowSrc +'cedb48ee83f73ca7c71c46_000001100BR000.png',
    '000001100NA000' : webflowSrc +'cedb48f858d86cf517157b_000001100NA000.png',
    '000001000PL000' : webflowSrc +'cedb49ee83f73cd1c71c47_000001000PL000.png',
    '000001100BL000' : webflowSrc +'cedb4945e2db7e2afdfab3_000001100BL000.png',
    '000001100PU000' : webflowSrc +'cedb4c155fca36361f1353_000001100PU000.png',
    '000000000BL000' : webflowSrc +'cedb4e3075eee44f39052e_000000000BL000.png',
    '000001100PL000' : webflowSrc +'cedb4e1080c206a6f8d23f_000001100PL000.png',
    '000000100PL000' : webflowSrc +'cedb41ee83f762fac71c22_000000100PL000.png',
    //Camara 05
    '040000011PL000': webflowSrc +'d0369290100c7a41d649dd_040000011PL000.png',
    '040000011NA000':webflowSrc +'d03693dd830171be3cdcce_040000011NA000.png',
    '040000111BL000':webflowSrc +'d03693c851de0184616d77_040000111BL000.png',
    '040000111BR000':webflowSrc +'d03693cd07e8549799e1d4_040000111BR000.png',
    '040000011PU000':webflowSrc +'d036930a93897c01657d76_040000011PU000.png',
    '040000011BL000':webflowSrc +'d036943536f83a2ca8214c_040000011BL000.png',
    '040000011BR000':webflowSrc +'d0369491c162422e5b7f43_040000011BR000.png',
    '040000111NA000':webflowSrc +'d03695016f1d73ea388d11_040000111NA000.png',
    '040000111PU000':webflowSrc +'d03695dd830179a43cdcd1_040000111PU000.png',
    '040000111PL000':webflowSrc +'d03699c156d87aa9759157_040000111PL000.png',
    '040001011BL000':webflowSrc +'d0369ae3bf263a5f914172_040001011BL000.png',
    '040001011BR000':webflowSrc +'d0369b79897d1a0db2ed24_040001011BR000.png',
    '040001011PL000':webflowSrc +'d0369baecc912b0d2bf56e_040001011PL000.png',
    '040001111BL000':webflowSrc +'d0369c1dbabb3f6b7b872f_040001111BL000.png',
    '040001011PU000':webflowSrc +'d0369dd352666976dd0bab_040001011PU000.png',
    '040001111BR000':webflowSrc +'d0369ef1d266f836dfefc1_040001111BR000.png',
    '040001111NA000':webflowSrc +'d0369f05041a9c562252b0_040001111NA000.png',
    '040001011NA000':webflowSrc +'d036a558162732e28f3366_040001011NA000.png',
    '040001111PU000':webflowSrc +'d036a5687fc574b7e05e59_040001111PU000.png',
    '040001111PL000':webflowSrc +'d036a6d4ca7e65172f9699_040001111PL000.png',
    '040000100NA000':webflowSrc +'d036c91dbabb5a8f7b89b8_040000100NA000.png',
    '040000000PU000':webflowSrc +'d036c93710e4411ec5e28e_040000000PU000.png',
    '040000100BL000':webflowSrc +'d036c9f1d2662e20dff1a1_040000100BL000.png',
    '040000000BL000':webflowSrc +'d036c985a6cb7864800542_040000000BL000.png',
    '040000100BR000':webflowSrc +'d036c9d4ca7ee1cd2f984f_040000100BR000.png',
    '040000000NA000':webflowSrc +'d036cacdb1dee785107f8e_040000000NA000.png',
    '040000000PL000':webflowSrc +'d036ca3ab65f4625bf9e6f_040000000PL000.png',
    '040000000BR000':webflowSrc +'d036cb79897d5f8fb2ee5d_040000000BR000.png',
    '040000100PU000':webflowSrc +'d036cccc3b31adb658ec67_040000100PU000.png',
    '040001000PL000':webflowSrc +'d036cd90100cca2ad64d2c_040001000PL000.png',
    '040001000BR000':webflowSrc +'d036cd58162765b28f3414_040001000BR000.png',
    '040000100PL000':webflowSrc +'d036cd05041a03d522547e_040000100PL000.png',
    '040001100BR000':webflowSrc +'d036ceac0f8ab83f33e03c_040001100BR000.png',
    '040001000PU000':webflowSrc +'d036d24112809f4370e6f7_040001000PU000.png',
    '040001100BL000':webflowSrc +'d036d2cdb1de0729108043_040001100BL000.png',
    '040001000BL000':webflowSrc +'d036d390100c0fa9d64d8b_040001000BL000.png',
    '040001100NA000':webflowSrc +'d036d3aecc91d7522bf7e5_040001100NA000.png',
    '040001100PL000':webflowSrc +'d036d3d3526686f3dd0f88_040001100PL000.png',
    '040001100PU000':webflowSrc +'d036d39d852b23ada98f27_040001100PU000.png',
    '040001000NA000':webflowSrc +'d036d83536f86609a82459_040001000NA000.png',
    //Camara 07
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
  }


  
  $('#brushed').click(function(){
          base = 0;
          typeC = 2;
          typeP = 1;
          CambiarImagen();         

      });
      $('#sandblast').click(function(){
        base = 1;
        typeC = 3;
        typeP = 1;
          CambiarImagen();         
      });

      //diseno
      $('#rombos').click(function(){
        estilo = 1;
        diseno = 1;
        disenoC=1
        estiloP = 1;
          CambiarImagen();         

      });
      $('#none').click(function(){
          estilo = 0;
          diseno = 0; 
          disenoC=2
          estiloP = 1;
          CambiarImagen();         

      });
      $('#invertido').click(function(){
        estilo = 2;
        diseno = 2;
        disenoC=3
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
      $('#aluminio').click(function(){
        rin = 0;
        rinC =1;
        rinP = 1;
          CambiarImagen();         

         
      });
      $('#carbon').click(function(){
        rin = 1;
        rinC =2;
        rinP = 1;
        CambiarImagen();         
      });      
