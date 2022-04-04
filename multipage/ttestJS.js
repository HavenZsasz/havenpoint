


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
    for(let s of strings.slice(1)) {
        ergebnis += trenner;
        ergebnis += s;
    }
    return ergebnis;
}

