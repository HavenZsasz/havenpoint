
window.addEventListener("load", setup);

function setup () {

    document.getElementById("wert").addEventListener("blur", writer);

}

function writer(){

    var name = document.getElementById("name");
    var wert = document.getElementById("wert");

    document.cookie = name.value + "=" + wert.value;

    name.value = "";
    wert.value = "";

    document.getElementById("ausgabe").innerHTML = document.cookie;


}