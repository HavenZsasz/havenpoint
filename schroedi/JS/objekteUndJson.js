
var cat = {};

cat.name = "Lucy"; //Beide Zeilen haben das gleiche Ergebnis
cat["name"] = "Lucy"; //Vorteil dieser Schreibweise: Auch Leerzeichen, Punkte etc sind in der deklarierung möglich. Sind bei der Punktschreibweise drüber nicht möglich
//BSP: cat["her favourite food?"] = "Tuna"; -> Das ist nur mit der Array-Schreibweise möglich
//Zusätzlich kann in eckigen Klammern auch variablen verwendet werden:
var eigenschaft = "age";
cat[eigenschaft] = 10;



cat.rasse = "sibirisch";
cat.weight = 4.5;
cat.mutter = {};
cat.mutter.name = "Silke";
cat.alive = null;

document.write(cat["name"]);
document.write(cat.name);
document.write(cat["age"]);

window.addEventListener("load", filler);


var katze = {};
katze.name = "Killer";
katze.besitzer = "Deine Mutter";
katze.alter = 10;
katze.gewicht = 100000;
katze.rasse = "amsel";








function filler() {


    var stuff = document.getElementsByTagName("input");
    
    for(var i = 0; i < stuff.length; i++) {

        stuff[i].value = katze[stuff[i].id];

    }

}

