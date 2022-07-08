


//Mit DOM-Operationen kann man Elemente auswählen im Dokument

//document.getElementById("first").getElementsByTagName("span");
//Gleicher Effekt mit dem CSS-Selektor:
//document.querySelectorAll("#first span");




function setup () {

    document.getElementById("erledigen").addEventListener("click", checken2);
    
    var links = document.getElementById("second").getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", checken3);
    }

    document.getElementById("all").addEventListener("click", checkenall);

}


window.addEventListener("load", setup);

function checken () {

    var bearbeitet = document.getElementById("aufgaben").getElementsByClassName("offen");
    
    // Problem hier ist: Wenn mehrere Style-Klassen hinterlegt sind, 
    // werden alle mit der folgenden Klasse überschrieben: 
    //bearbeitet[0].className = "erledigt";

    //Deshalb gibt es Folgendes:
    var be = bearbeitet[0]; //!HIER SEHR WICHTIG, SONST KANN MAN NACH DEM REMOVE NICHT MEHR AUF DAS OBJEKT ZUGREIFEN, DA DAS STATEMENT OBEN NACH DER KLASSE "offen" SUCHT!

    be.classList.remove("offen"); 
    //Auch möglich, statt der Variablen oben: Einfach die beiden Statements vertauschen, erst die neue Klasse on top hinzufügen, und dann "offen" entfernen. 
    //Dann ist die Reihenfolge allerdings sehr wichtig und sollte mit einem Kommentar vermerkt werden
    be.classList.add("erledigt");
    


}
function checken2() {

    var bearbeitet2 = document.getElementById("aufgaben").getElementsByClassName("offen");
    var be2 = bearbeitet2[0];
    streicher(be2);
    

}

function streicher(nodeElement) {

    if(!nodeElement) throw "Parameter Aufgabe wird benötigt";

    nodeElement.classList.remove("offen");
    nodeElement.classList.add("erledigt");

}

function checken3 (event) {

    streicher(event.target.parentElement);
    event.preventDefault(); //Verhindert bei Links mit Navigation, dass man von der Seite tatsächlich weg navigiert.

}


function checkenall() {

    var items = document.getElementById("second").getElementsByClassName("offen");
    var lange = items.length;
    var b = items[0];
    for(var i = 0; i < lange; i++) {
        b = items[0];
        streicher(b);
    }

}
















