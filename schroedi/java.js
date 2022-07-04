


var test = 1

document.write("Hallo Hallo " + test); //Einzeile Kommentare sind so umzusetzen

var TAGE_IM_JAHR = 365; //Variablen nur in Großbuchstaben sollten nicht verändert werden (reine Konvention)
const DAYS_PER_YEAR = 365 //Legt im neuesten JS eine Variable fest, die nicht verändert werden kann, Konstante


function schuheZaehler() {

    var TAGE = 365;
    var regale = document.getElementById("rega").value;
    regale = parseInt(regale); //Sorgt dafür, dass der String in Int umgerechnet wird
    var paare = document.getElementById("paa").value;
    paare = parseInt(paare);
    var paaredaneben = document.getElementById("paaredaneb").value;
    paaredaneben = parseInt(paaredaneben);
    var paaregesamt = paaredaneben + paare * regale;
    var schuhe = paaregesamt * 2;
    var meineID = "schuhe"
    document.getElementById(meineID).innerHTML = schuhe; //innerHTML ist eine Variable von <span>. Diese bestimmt den geschriebenen Inhalt

}

function alarm() {
    alert("ALLLAAAARRMMM");
}

var tester = "HALLO";

function kaufen() {

    var textfeld = document.getElementById("kaufa");
    var liste = document.getElementById("ketten");
    var artikel = textfeld.value;
    liste.innerHTML = liste.innerHTML + " " + artikel;
    textfeld.value = "";


}

function stringAdder () {
    var getter = document.getElementById("erst").value;

    var plus = getter.indexOf("+");

    var erst = getter.substring(0,plus);
    var zweit = getter.substring(plus,getter.length);

    erst = parseInt(erst);
    zweit = parseInt(zweit);

    document.getElementById("addition").innerHTML = erst + zweit;
    document.getElementById("erst").value = "";

}


function schreibeFehler (meldung) {
    var text = document.getElementById("fehler");
    text.innerHTML = text.innerHTML + meldung + "<br>";
}

function vorname () {
    var vor = document.getElementById("vorname").value;
    if(vor == "" || vor == "Klausie") {
        schreibeFehler("Geben Sie einen Namen ein, der nicht Klausie heißt!");
    }
}
function nachname () {
    var nach = document.getElementById("nachname").value;
    if(nach == "") {
        schreibeFehler("Geben Sie einen Nachnamen ein!");
    }
}
function email() {
    var mail = document.getElementById("email").value;
    if(mail.indexOf("@") == -1) {
        schreibeFehler("Geben sie eine richtige Mail-Adresse ein");
    }
}

function pruefeFormular() {
    document.getElementById("fehler").innerHTML = "";
    vorname();
    nachname();
    email();
}

function quersumme (zahl) {
    if(!zahl) return NaN;
    zahlstring = zahl.toString();
    var ergebnis = parseInt(zahlstring.charAt(0)) + parseInt(zahlstring.charAt(1));
    return ergebnis;
}

function mean (zahl1, zahl2) {

    if(!zahl1 && !zahl2) {
        return NaN;
    }
    if(!zahl1) {
        zahl1 = 0;
        return zahl2;
    }
    if(!zahl2) {
        zahl2 = 0;
        return zahl1;
    }

    return (zahl1+zahl2)/2;


}

function durchschnitt (zahl1, zahl2) {

    if(!zahl1 && zahl1 !== 0) return NaN; //Da 0 auch falsy ist, die und Bedingung
    var summe = zahl1;
    var zaehler = 1;
    if(zahl2 || zahl2 === 0) {
        summe += zahl2;
        zaehler++;
    }
    return summe/zaehler;


}

function meanfor (zahlen) {
    var length = 0;
    var sum = 0;
    if(zahlen.length == 0 && !zahlen) {
        return 0;
    }
    for(var i = 0; i<zahlen.length; i++){

        if(zahlen[i] != undefined) {
            sum = sum + zahlen[i];
        }else {
            sum = sum + 0;
        }
        

        if(zahlen[i] != undefined) {
            length = length + 1;
        }

    }

    if(length == 0) {
        return 0;
    }

    return sum/length;

}

function noparameter () { //Wenn der Funktion keine Parameter übergeben werden oder zuviele, werden diese alle im Objekt arguments gespeichert

    for(var i = 0; i<arguments.length; i++) {
        document.write(arguments[i]);
    }

}


function quersumme (zahl) {

    zahl = zahl.toString();
    if(zahl.length != 2) throw "Nur zweistellige Zahlen erlaubt"; //Wirft Fehler in die Konsole
    var ergebnis = parseInt(zahl.charAt(0)) + parseInt(zahl.charAt(1));
    return ergebnis;

}






























