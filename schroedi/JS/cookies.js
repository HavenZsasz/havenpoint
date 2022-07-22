
window.addEventListener("load", setup);

function setup () {

    document.getElementById("wert").addEventListener("blur", writer3);

}

function writer(){

    var name = document.getElementById("name");
    var wert = document.getElementById("wert");

    document.cookie = name.value + "=" + wert.value + "; expires=Tue, 21 Jul 2022 16:27:00 UTC";
    //Um einen Cookie zu löschen, setzt man einen Cookie mit demselben Namen und einem Verfallsdatum in der Vergangenheit. Somit wird er gelöscht

    name.value = "";
    wert.value = "";

    document.getElementById("ausgabe").innerHTML = document.cookie;


}

//Auf den localStorage zugreifen:


//localStorage.setItem("Zucker", "2kg");
//localStorage["Eier"] = 12; //Im localStorage werden nur Strings gespeichert, will man einen Integer muss das über parseInt() passieren
// alert(localStorage.getItem("Eier"));
// alert(localStorage["Zucker"]);

//Es ist sinnvoll, erst zu checken, ob der localStorage überhaupt zur Verfügung steht:
if(window.localStorage){

}

for(var i = 0; i < localStorage.length; i++) {

    var name = localStorage.key(i);
    var wert = localStorage[name];

    //alert(name + " " + wert);

}

function writer2() {

    var name1 = document.getElementById("name").value;
    var wert1 = document.getElementById("wert").value;

    localStorage.setItem(name1, wert1);
    //oder: localStorage[name1] = wert1;

    
    var target = document.getElementById("zettel");

    while(target.firstChild) {
        target.removeChild(target.firstChild);
    }
    
    for(var i = 0; i < localStorage.length; i++) {

        var name2  = localStorage.key(i);
        var wert2 = localStorage[name2];

        

        var node = document.createElement("li");

        var text = document.createTextNode(name2 + ": " + wert2 + " ");
        
        node.appendChild(text);

        target.appendChild(node);


    }

    name1 = "";
    wert2 = "";


}

//Mit den folgenden Zeilen kann man statt eines Objekts auch einen String im localStorage speichern
//bzw. auslesen:

//var arr = [1,2,3,4,5];
//var arr2 = [];
//localStorage["arr"] = JSON.stringify(arr);
//arr2 = JSON.parse(localStorage["arr"]);
//console.log(arr2);
//console.log(localStorage);







function writer3() {

    var name1 = document.getElementById("name").value;
    var wert1 = document.getElementById("wert").value;
    var arr = [];

    var string = name1+", "+wert1;


    
    var target = document.getElementById("zettel");

    while(target.firstChild) {
        target.removeChild(target.firstChild);
    }

    

    

    name1 = "";
    wert2 = "";


}

//File API




function init() {

    document.getElementById("dateien").addEventListener("change", chooseFile3);

    document.getElementById("knopf").addEventListener("click", function() {
        document.getElementById("dateien").click(); //Dies simuliert den Klick auf unserem PseudoButton
    })

    document.getElementById("abwurf").addEventListener("dragover", drueberziehen);
    document.getElementById("abwurf").addEventListener("dragenter", hoveringin);
    document.getElementById("abwurf").addEventListener("dragleave", hoveringout);
    document.getElementById("abwurf").addEventListener("drop", chooseFile4);
    document.getElementById("abwurf").addEventListener("drop", hoveringout);

    //document.getElementById("abwurf").addEventListener("dragover", hovering);

}

function chooseFile(event) {

    var dateien = event.target.files;

    for(var i = 0; i < dateien.length; i++) {

        displayInfo(dateien[i]);

    }

}

function displayInfo(datei) {

    var tr = document.createElement("tr");
    tr.appendChild(createColumn(datei.name));
    tr.appendChild(createColumn(datei.type)); //gibt den Mime-Type: "ungenau"/"genau" z.B. "image"/"jpeg"
    tr.appendChild(createColumn(datei.lastModifiedDate.toLocaleDateString())); 
    tr.appendChild(createColumn(datei.size));
    document.getElementById("printer").appendChild(tr);



}

function createColumn(attri) {

    var cell = document.createElement("td");
    cell.appendChild(document.createTextNode(attri));
    return cell;

}


//chooseFile2



function chooseFile2(event) {

    if(event.target.files[0]) {

        var leser = new FileReader();
        leser.addEventListener("load", bildLaden);
        leser.addEventListener("error", fehler);
        leser.addEventListener("loadstart", starter);
        leser.addEventListener("progress", fortschritt);
        leser.addEventListener("loadend", beendet);

        leser.readAsDataURL(event.target.files[0]);
    }

}

function bildLaden(event) {
    var img = document.createElement("img");
    img.setAttribute("alt", "Geladenes Bild");
    img.setAttribute("src", event.target.result);
    console.log(event.target.result);
    document.getElementById("printer").appendChild(img);
}

function fehler(event) {

    var meldung;

    switch(event.target.error.name) {
        case "NotFoundError": meldung = "Datei nicht gefunden"; break; //Bei Case muss nach erfolgreichem Case mit break die Prüfung abgebrochen werden, sonst wird automatisch der Befehl des nächsten Case auch ausgelöst
        case "EncodingError": meldung = "Datei ist zu lang"; break;
        case "SecurityError": //hier wird nun beispielsweise automatisch das meldung des nächsten Case übernommen
        case "NotReadableError": meldung = "Darf Datei nicht lesen"; break;
        default: meldung = "Keine Ahnung, aber irgendwas funzt nicht";
    }
    alert(meldung);
    
}

function starter(){
    document.getElementById("start").innerHTML = "Das Laden beginnt!";
}

function fortschritt(event) {

    document.getElementById("prozent").innerHTML = ((event.loaded * 100)/event.total);

}

function beendet() {
    document.getElementById("ende").innerHTML = "Das Laden ist beendet";
}


window.addEventListener("load", init);


//chooseFile3

function chooseFile3(event) {

    if(event.target.files[0]) {
        var filer = new FileReader();
        filer.addEventListener("load", text);
        filer.readAsText(event.target.files[0], "UFT-8");
    }

}

function text(event){
    
    var paper = document.getElementById("rezept");
    var zeilen = event.target.result.split("\n");
    var titel = document.createElement("h1");
    titel.appendChild(document.createTextNode(zeilen[0]));
    paper.appendChild(titel);

    var rest = document.createElement("ul");
    paper.appendChild(rest);

    for(var i = 1; i < zeilen.length; i++) {
        var element = document.createElement("li");
        element.appendChild(document.createTextNode(zeilen[i]));
        paper.appendChild(element);
    }



}

function hoveringin(event) {

    event.target.classList.add("hover");

}

function hoveringout(event) {
    event.target.classList.remove("hover");
}

function hovering(event) {
    event.target.classList.toggle("hover");
}

//Folgende Funktion ist in html5 notwendig, dass die vorherige Klasse beim drag&drop gestoppt wird

function drueberziehen (event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

//chooseFile4 -> Lösung bei Drag&Drop:

function chooseFile4(event) {
    event.stopPropagation();
    event.preventDefault();
    var data = new FileReader();
    data.addEventListener("load", text);
    data.readAsText(event.dataTransfer.files[0], "UFT-8");
}
