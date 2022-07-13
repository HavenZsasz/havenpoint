


//Mit DOM-Operationen kann man Elemente auswählen im Dokument

//document.getElementById("first").getElementsByTagName("span");
//Gleicher Effekt mit dem CSS-Selektor:
//document.querySelectorAll("#first span");




function setup () {

    var notDone = document.getElementById("aufgabenNotDone").getElementsByTagName("li");
    var done = document.getElementById("aufgabenDone").getElementsByTagName("li");

    sorter(notDone);
    sorter(done);

    document.getElementById("erledigen").addEventListener("click", checken2);
    
    var links = document.getElementById("second").getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", checken3);
    }

    document.getElementById("all").addEventListener("click", checkenallwhile);
    document.getElementById("testing").addEventListener("click", testerer);
    document.getElementById("vanisher").addEventListener("click", vanish);
    document.getElementById("turner").addEventListener("click", turning);
    document.getElementById("inserter").addEventListener("click", inserting);

    var klicks = document.getElementById("fourth").getElementsByTagName("li");
    for(var j = 0; j < klicks.length; j++) {
        
        klicks[j].addEventListener("click", schieber);
        klicks[j].addEventListener("click", needed);
        
    }

    

}


window.addEventListener("load", setup);
window.addEventListener("load", sorter);

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

function checkenallwhile () {
    var items = document.getElementById("second").getElementsByClassName("offen");

    while(items.length > 0) {
        items[0].classList.add("erledigt");
        items[0].classList.remove("offen");
    }
}

function testerer () {
    var items = document.getElementById("second").getElementsByClassName("offen");
    alert(items.nodeName);
}

function vanish() {
    var target =  document.getElementById("third").firstElementChild;
    while(target.firstChild) {
        
        target.removeChild(target.firstChild);
        
    }
}


function turning () {
    var target = document.getElementById("aufgaben2");
    var erg = [];
    var counter = 0;

    while (target.firstChild) {
        erg[counter] = target.removeChild(target.firstChild); //alternativ: erg.push(target.removeChild(target.firstChild));
        console.log(erg);
        counter++;
    }
    var index = erg.length - 1;
    for(var i = 0; i < erg.length; i++) {
        target.appendChild(erg[index]); //alternativ: target.appendChild(erg.pop());
        index--;
    }

    /*target.insertBefore(target.firstChild, target.lastChild);*/ //Setzt einen bestimmten Node vor einem bestimmten Node ein

}


function inserting ()  {

    var erg = document.getElementById("newone").value;
    var node = document.createElement("li"); //Erstellen des ElementNodes
    var text = document.createTextNode(erg); //Text muss erst noch in einen TextNode gepackt werden
    var target = document.getElementById("aufgaben2");

    node.appendChild(text); //Der Text wird an das Element angehängt
    node.classList.add("offen"); //Dem Ganzen wird noch eine Klasse zugewiesen
    
    target.appendChild(node); //Der Node wird der Liste angehängt

    document.getElementById("newone").value = "";

    console.log(target.getAttribute("id")); //Zeigt das Attribut eines Elements, geht auch mit class und name

    target.setAttribute("class", "testweise"); //Setzt die Klasse eines bestimmten Elements, geht auch mit id, name
    target.className = "testweise2"; //Ist die Alternative zu oben
    console.log(target.getAttribute("class"));

    target.style.backgroundColor = "lightblue"; //So kann man auf das style Attribut eines Elements zugreifen
   
    console.log(window.getComputedStyle(target).backgroundColor); //So kann man auf die Angaben des StyleSheets zugreifen


}


function schieber(event) {
    var listeNotDone = document.getElementById("aufgabenNotDone");
    var listeDone = document.getElementById("aufgabenDone");


    if(event.target.className == "offen") {

        var ether = listeNotDone.removeChild(event.target);
        ether.className = "erledigt";
        listeDone.appendChild(ether);
        return;

    }

    if(event.target.className == "erledigt") {

        var ether = listeDone.removeChild(event.target);
        ether.className = "offen";
        listeNotDone.appendChild(ether);
        return;

    }


}

function needed() {

    var sorter1 = document.getElementById("aufgabenNotDone").getElementsByTagName("li");
    var sorter2 = document.getElementById("aufgabenDone").getElementsByTagName("li");

    sorter(sorter1);
    sorter(sorter2);



}

function sorter(notDone) {

    

    var erg = [];
    var comp;
    var index = 0;

    if(notDone.length > 0 ) {
        for(var i = 0; i < notDone.length; i++) {

            index = i;

            comp = notDone[i].textContent;

            for(var j = 0; j < notDone.length; j++) {

                if(notDone[j].textContent < comp ) {
                    
                    comp = notDone[j].textContent;
                    index = j;
                }

            }
            
            erg[i] = comp;
            
            notDone[index].textContent = "Zzzzzzzzzzz";       

        }
           
        for(var z = 0; z < erg.length; z++) {
            notDone[z].textContent = erg[z];
        } 

    } 



}
















