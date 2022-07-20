
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

window.addEventListener("load", setup1);

function setup1() {
    document.getElementById("thisform").addEventListener("blur", katzeJSON.update.bind(katzeJSON));
    document.getElementById("bdaytrigger").addEventListener("click", bdayListe.eintrag.bind(bdayListe));

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
    }




}



katzeJSON.nerven1 = function() {

    for(var i = 0; i < 5; i++) {
        alert("miau!");
    }

}

var bdayListe = {
    name: "",
    tag: "",

    eintrag: function() {
        var name = document.getElementById("name1").value;
        var tag = document.getElementById("bday").value;
        bdayListe[name.value] = tag.value;
        tag.value = "";
        name.value = "";

        for(var eintrag in bdayListe) {
            document.write(bdayListe[eintrag]);
        }


    }

}



