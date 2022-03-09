//JavaScript Syntax Glossar

console.log("Das ist Haven Point");
console.clear();

//Primitive Datentypen:
let haven = "Haven"; //(klassisch) Variable deklarieren und initialisieren; im Beispiel ein String
let point = "Point";
let zahl = 1;
let isBlack = true /*or false*/; //boolscher Wert
const pi = 3.1415; //Festlegen einer Konstante; nicht mehr veränderbar im Laufe des Programms
console.log(haven + point);
//oder
console.log("Haven Point");


//Komplexe Datentypen:
let kontakt = {  //JavaScript Objekt; Datenstrukturen zB für Kundendaten; Vorteilhaft für Serverkommunikation
    vorname: "Juergen",
    nachname: "Schwarz",
    alter: 20,
    isBlack: true


};

console.log(kontakt.vorname + " " + kontakt.nachname); //Zugriff auf Strukturelemente mit der Syntax structure.element

//Arrays

let check = ["Check1", "Check2", "Check3"]; //Ablegen im Arbeitsspeicher: liest sich von Stelle 0(^=1) bis Nulloperator(\0)
console.log("In diesem Test wurde " + check[0] + " ausgegeben");




