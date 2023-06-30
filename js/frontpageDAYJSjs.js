function Quadrat() {
    var eingabe  = document.getElementById('eingabe');
    var Ergebnis = eingabe.value * eingabe.value;
    alert("Das Quadrat von " + eingabe.value + " = " + Ergebnis);
    eingabe.value = 0;
   }
  
  var los  = document.getElementById('calculate');
  los.addEventListener ('click', Quadrat, true);