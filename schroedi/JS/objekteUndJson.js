
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



window.addEventListener("load", setup1);

function setup1() {
    document.getElementById("thisform").addEventListener("blur", katzeJSON.update.bind(katzeJSON));
    document.getElementById("bdaytrigger").addEventListener("click", eintrag);

}


var katze = {};
katze.name = "Killer";
katze.besitzer = "Deine Mutter";
katze.alter = 10;
katze.gewicht = 100000;
katze.rasse = "amsel";








function filler() {


    var stuff = document.getElementsByTagName("input");
    
    for(var i = 0; i < stuff.length; i++) {

       
        if(katzeJSON[stuff[i].id]) {
            stuff[i].value = katzeJSON[stuff[i].id];
        }
        

        

    }

    //katzeJSON.gruß();

    

}

//Funktionen können entweder im Initalizer direkt angegeben werden
//Oder nachträglich angehangen werden als anonyme Funktion

var katzeJSON =  {

    name : "Lucy",
    besitzer: "Mama",
    alter: 10,
    gewicht: 10000,
    rasse: "amsel",
    impfungen: ["Tollwut", "Masern"],
    farbe: {
        grundfarbe: "weiß",
        akzente: "grau",
    },

    /*
    gruß: function() {
        alert("Hallo, mein Name lautet " + this.name);
        //this ist nicht immer eindeutig, zum Beispiel beim registrieren von Eventhandlern
        //deshalb gibt es die .bind funktion von unten
    } */

    update: function(event) {
        this[event.target.name] = event.target.value; //nimmt name des Forms und schreibt den Eingabetext in die entsprechende Eigenschaft des Objekts (z.B. ändert den Namen)
        console.log("triggered");
        console.log(this.name);
    },

    filler1: function() {


        var stuff = document.getElementsByTagName("input");
        
        for(var i = 0; i < stuff.length; i++) {
    
           
            if(katzeJSON[stuff[i].id]) {
                stuff[i].value = this[stuff[i].id];
            }
            
    
            
    
        }
    
        //katzeJSON.gruß();
    
        
    
    },




}

window.addEventListener("load", katzeJSON.filler1.bind(katzeJSON));



katzeJSON.nerven1 = function() {

    for(var i = 0; i < 5; i++) {
        alert("miau!");
    }

}

var bdayListe = {};
    

function eintrag() {
        var name = document.getElementById("name1");
        var tag = document.getElementById("bday");
        bdayListe[name.value] = tag.value;
        tag.value = "";
        name.value = "";

        var ul = document.getElementById("ausgabe");
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        for(var name in bdayListe) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(name + " - " + bdayListe[name]));
            ul.appendChild(li);

        }


}



function Dinosaurier(name, rasse, besitzer) {
    this.name = name;
    this.rasse = rasse;
    this.besitzer = besitzer;
}
Dinosaurier.prototype = {
    rawr: function() {
        alert(this.name + " sagt !RAWR!");
    }
}

var dino1 = new Dinosaurier("Zsasz", "T-Rex", "Lord Vasica");
var dino2 = new Dinosaurier("Tim", "Stego", "Lord Vasica");
var dino3 = new Dinosaurier("Lukas", "Ankylo", "Lord Vasica");
var dino4 = new Dinosaurier("Lea", "Argentinosaurus", "Lord Vasica");
var dino5 = new Dinosaurier("Saskia", "Brachiosaurus", "Lord Vasica");

function Lebensmittel() {}

function Speise() {}
Speise.prototype = new Lebensmittel();

function Getränk () {}
Getränk.prototype = new Lebensmittel();

function Kuchen () {}
Kuchen.prototype = new Speise();

function Sandwich () {}
Sandwicht.prototype = new Speise();

function Kaffee() {}
Kaffee.prototype = new Getränk();

