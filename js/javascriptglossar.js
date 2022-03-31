//---JavaScript Syntax Glossar---

console.log("Das ist Haven Point");
console.clear();

//--Primitive Datentypen--
var test = 1; //var ermöglicht globale bzw. funktionsbezogene Deklarationen; let hingegen nur auf den Block, Befehl oder Ausdruck beschränkt
let haven = "Haven"; //(klassisch) Variable deklarieren und initialisieren; im Beispiel ein String
let point = "Point";
let zahl = 1;
let isBlack = true /*or false*/; //boolscher Wert
const pi = 3.1415; //Festlegen einer Konstante; nicht mehr veränderbar im Laufe des Programms
console.log(haven + point);
//oder
console.log("Haven Point");


//--Komplexe Datentypen--
let kontakt = {  //JavaScript Objekt; Datenstrukturen zB für Kundendaten; Vorteilhaft für Serverkommunikation
    vorname: "Juergen",
    nachname: "Schwarz",
    alter: 20,
    isBlack: true


};

console.log(kontakt.vorname + " " + kontakt.nachname); //Zugriff auf Strukturelemente mit der Syntax structure.element

//--Arrays--

let check = ["Check1", "Check2", "Check3"]; //Ablegen im Arbeitsspeicher: liest sich von Stelle 0(^=1) bis Nulloperator(\0)
console.log("In diesem Test wurde " + check[0] + " ausgegeben"); //Zugriff durch den Index, welcher die Stelle markiert: Array[Index]
let newcheck = "Check4";
check.push(newcheck); //Array erweitern und an neuem Block Inhalt einer Variable einsetzen
//Alternativ:
newcheck = prompt(); //Eingabe durch stdin

//--Funktionen--
let ergebnis = celsiusInFahrenheit(15);
console.log("15 Grad Celsius = " + ergebnis);
function celsiusInFahrenheit(celsius){ //Parameter  wird innerhalb des Rückgabeprozesses direkt verrechnet

    return x * (9/5)+32;

}

//--Texteingabe--

let input = prompt("Bitte Grad Celsius eingeben"); //prompt ist die Scanfunktion
ergebnis = celsiusInFahrenheit(input);
function celsiusInFahrenheit(celsius){ //Parameter  wird innerhalb des Rückgabeprozesses direkt verrechnet

    return x * (9/5)+32;

}

//--Verzweigungen--

function ifElse(test) {
    if(test===15){

        console.log("Du bist nicht alt genug");


    } else{


        if(test>17){

        } else if(test===17){

        }else {

        }
    }


}

//--for-Schleife--

let forS = [0, 1, 2];

for(let i = 0; i<3; i++ ){ //klassische Syntax mit Schleifenvariable

    console.log(forS[i]);



}








