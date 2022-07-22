
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

    document.getElementById("dateien").addEventListener("change", chooseFile2);

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






function chooseFile2(event) {

    if(event.target.files[0]) {

        var leser = new FileReader();
        leser.addEventListener("load", bildLaden);
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


window.addEventListener("load", init);
