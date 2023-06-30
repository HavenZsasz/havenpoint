


function durchschnitt(zahl1, zahl2, zahl3) {
    
    return (zahl1+zahl2+zahl3) /3;
    

}

console.log(durchschnitt(3, 4, 6));

var array = [5, 4, 3, 2,1 ];
var anderesArray = [1,2,3,4,5];
array.reverse();
for(var i=0; i<5; i++) {
console.log(array[i])
}
var combine = array.concat(anderesArray);
for(i=0; i<10;i++) {
    console.log(combine[i]);
}

function ds(zahlen) {

    if(zahlen&&zahlen.length > 0) {
        var summe=0;
        for(var i=0; i<zahlen.length; i++) {
            summe += zahlen[i];
        }
        return summe/zahlen.length;
    }
    else {
        return 0;
    }

}



console.log(ds([5,6,4,3]));

function dsa() {
    if (arguments && arguments.length >0) { 
        var summe=0;
        for(var i=0; i<arguments.length; i++) {
            summe += arguments[i];
        }
        return summe/arguments.length + "\n";

    } else {
        return 0;
    }
}

console.log(dsa(10, 10, 10, 10)); //arguments sammelt überschüssige Parameter, sprich es kann einen Array (idealerweise für die selben Datentypen) ersetzen

function concat(trenner, ...strings) { //... machen den letzten Parameter zum Resteparameter; er sammelt alle verbleibenden Argumente

    if(strings.length == 0) return "";
    let result = strings[0]; //Restparameter ist ein Array
    for(let i=1; i<strings.length; i++) {
        result += trenner;
        result += strings[i];
    }
    return result;

}

console.log(concat(", ", "Tick", "Trick", "Track")); //Komma als trenner und Tick,Trick und Track als ...strings

//Im Gegensatz zu arguments ist der Resteparamter innerhalb der Funktion ein echtes Array und enthält wirklich nur die restlichen Parameter (arguments enthält alle!);er steht immer als letztes und es gitb nur einen

//Spread-Operator:

let zahlen = [1,2,3];
let mehrZahlen = [3,4,5];
let alleZahlen= [...zahlen, ...mehrZahlen]; //[1,2,3,4,5,6]
let zweiArrays= [zahlen, mehrZahlen]; //[1,2,3] & [4,5,6]

//-------------------------------------------------------------

function concat2(trenner, ...strings) {
    if(strings.length ==0) return 0;
    let ergebnis = strings[0];
    for(let s of strings.slice(1)) { //slice sorgt für Überspringen des ersten Wertes von strings; die Schleife weist nacheinander die Werte des Arrays rechts von 'of' der Variablen links von 'of' zu; Zählvariable muss somit nicht mehr selbst verwaltet werden
        ergebnis += trenner;
        ergebnis += s;
    }
    return ergebnis;
}

//Destrukturierende Zuweisung: 

/*let [a,b,c] = [1,"zwei", {}];
a = 1;
b= "zwei";
c= {};

//Beispiel: 
let arr = ["eins","zwei","drei"];
let [a,,b] = arr; //-> a=eins, b=drei; zweite Stelle wird durch doppeltes Komma übersprungen
/*Variablen vertauschen: [a,b] =[b,a] */

//------------------------------------------------------------------------------

function findeMaximum(array=[5, 10, 100, 5, 1000, 34324, 2424124, 22, 244224, 32444]) {
    var max;
    if(array[0] == 10) {
        throw "Fehlercode -1"; 
    }
    if(array && array.length > 0) {
        for (var i=0;i<array.length; i++){
            if(!max || array[i]>max){
                max=array[i];
            }
        }
    }
    return max;
}

console.log(findeMaximum());


//-------------------------------------------------------------------------------------
//Vergleichsfunktionen
function vergleich(zahl1, zahl2) {
    return zahl1-zahl2;
}

var array;

array.sort(vergleich);

//oder: 
/*array.sort(function(zahl1, zahl2){return zahl1-zahl2;}); FUnktion wurde anonym übergeben





