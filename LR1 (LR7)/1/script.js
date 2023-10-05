var fInputLine = document.getElementById('F');
var cInputLine = document.getElementById('C');

fInputLine.onkeyup = function(){
  cInputLine.value = ((5 / 9) * (parseFloat(fInputLine.value) - 32));
}

cInputLine.onkeyup = function(){
  fInputLine.value = ((parseFloat(cInputLine.value) * 9) / 5 + 32);
}