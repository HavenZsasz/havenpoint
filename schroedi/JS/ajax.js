
var ajaxRequest = new XMLHttpRequest();


ajaxRequest.addEventListener("load", ajaxGeladen);
ajaxRequest.addEventListener("error", ajaxFehler);

ajaxRequest.open("get", "http://localhost/ajaxURL");
ajaxRequest.send();

function ajaxGeladen(event) {
    var ergebnis = JSON.parse(event.target.responseText);
}