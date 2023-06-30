

window.addEventListener("load", setup);

function setup() {

    

    document.getElementById("funkt").addEventListener("click", schmutz);
    

}

function schmutz() {
    console.log("HÄ?");
    alert("Hä???");
}

function sender() {
    var request = new XMLHttpRequest();
    request.addEventListener("load", ajaxLoaded);
    request.addEventListener("error", ajaxError);
    request.open("get", "/schroedi/derkoenig.php?situation=die%20pest%20wuetet"); //%20 steht in der URL für eine Leerzeichen
    //hier wird nun die situation per "get" mitversendet. Bei sich wiederholenden Botschaften get verwenden, ansonsten post
    //beispiel für post: wenn man nur eine Pizza bestellen und nicht pro klick eine neue, ist post richtig
    request.send();
}

function sendingPost() {
    var post = new XMLHttpRequest();
    post.addEventListener("load", ajaxLoaded);
    post.addEventListener("error", ajaxError);
    post.open("post","/schroedi/postIstDa");

    //Mann kann auch bereits bestehende Formulare einlesen und per ajax absenden
    var formular = document.getElementById("mein-formular");

    var data = new FormData(formular);
    data.append("eingabe", "Diesen Text will ich verschicken");
    post.send(data);
}

function ajaxLoaded(event) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Der König befiehlt " + event.target.responseText));
    document.getElementById("ausgabe").appendChild(p);

}
function ajaxError () {
    alert("Error");
}

function ajaxLoadedTax(event) {

    var answer = JSON.parse(event.target.responseText);
    var text = "";
    text += answer.tipp;
    text += ": ";
    text += answer.nachricht;
    text += " Du hast noch ";
    text += answer.versuche;
    text += " Versuch(e)";

    var p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    document.getElementById("ausgabe").appendChild(p);

    if(!answer.nochEinTipp) {
        alert(answer.nachricht + " Versuch es nochmal");
        newGame();
    }




}

function steuern() {
    var tipp = parseInt(document.getElementById("geld").value);
    console.log("Working");
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.addEventListener("load", ajaxLoadedTax);
    ajaxRequest.addEventListener("error", ajaxError);
    ajaxRequest.open("post", "/schroedi/steuern.php");

    var steuer = new FormData();
    steuer.append("tipp", tipp);
    ajaxRequest.send(steuer);
}

function ajaxLoadedTax(event) {

    var answer = JSON.parse(event.target.responseText);
    var text = "";
    text += answer.tipp;
    text += ": ";
    text += answer.nachricht;
    text += " Du hast noch ";
    text += answer.versuche;
    text += " Versuch(e)";

    var p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    document.getElementById("ausgabe").appendChild(p);

    if(!answer.nochEinTipp) {
        alert(answer.nachricht + " Versuch es nochmal");
        newGame();
    }




}

function newGame() {
    var starter = new XMLHttpRequest();
    starter.open("post", "/schroedi/steuern.php");

    var gamer = new FormData();
    gamer.append("neuerVersuch", "true");
    starter.send(gamer);
    document.getElementById("ausgabe").innerHTML = "";

}