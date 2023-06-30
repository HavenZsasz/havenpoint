


window.addEventListener("load", setup);
window.addEventListener("load", bildLader);

function setup () {

    geo();
    ecma();




}

function bildLader() {
    var suffix = suffixLoader();
    var bilder = document.getElementsByTagName("img");
    for(var i = 0; i < bilder.length; i++) {
        var bild = bilder[i];
        var source = bild.getAttribute("data-src");
        var anfangDateiEnde = source.lastIndexOf(".");
        source = source.substring(0, anfangDateiEnde) + suffix + source.substring(anfangDateiEnde);
        console.log(source);
        bild.src = source;
    }
}

function suffixLoader() {

    if(window.innerWidth < 382) {
        console.log(300);
        return "";
    }else if (window.innerWidth < 763) {
        console.log(700);
        return "-med";
    }else {
        console.log("großßßß");
        return "-big";
    }

}

function geo() {
    if(navigator.geolocation) {
        var navi = navigator.geolocation.getCurrentPosition(function(position) {
            var breite = position.coords.latitude;
            console.log(breite);
            var laenge = position.coords.longitude;
            console.log(laenge);
        });
    }
}

function ecma () {
    var test1 = "Tester";
    var test2 = "Tester2";
    var map = new Map();
    map.set("Arasaka", "24.11.1998");
    for(let [schluessel, wert] of map) {
        alert(schluessel + " " + wert);
    }
    alert (`Hallo das ist ein Test ${test1} ${test2}`); //So lassen sich Strings besser zusammenführen
    //In die geschweiften Klammern können auch Funktionen aufgerufen werden
}

//Klasse und neue Art der Vererbung an Prototypen

class Katze {
    constructor (name, rasse, besitzer) {
        this.name = name;
    }
    miau();
}

class Katze extends Haustier {

}

class Lucy extends Katze {
    miau() {
        if(Math.random() > 0.5) {
            super.miau(); //super greift auf eine Methode aus einem der überliegenden Prototypen zu, die im eigenen Objekttype eigentlich überschrieben wurde
        }
    }
}