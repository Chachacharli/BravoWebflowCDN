
var geometrias = ['Endurance', 'Allrounder', 'Race']

var elem = document.querySelector('#geometriaBici');

var rangeValue = function(){
  var newValue = elem.value;
  var target = document.querySelector('.geometria');
  target.innerHTML = geometrias[newValue];
}

elem.addEventListener("input", rangeValue);