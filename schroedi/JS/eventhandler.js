


function wechsler() {
    document.getElementById("klick").classList.toggle("geklickt");
}

function wechs() {

    document.getElementById("test").innerHTML = "Arsch";
    document.getElementById("test").classList.toggle("geklickt");

}

function changer () {
    document.getElementById("new").classList.toggle("geklickt");
}


window.addEventListener("load", setup);

function setup () {
    document.getElementById("new").addEventListener("click", changer);
    document.getElementById("starter").addEventListener("click", caller);
    document.getElementById("starterdouble").addEventListener("dblclick", callerdouble);
    document.getElementById("new").addEventListener("mouseover", hallo);
}

function caller(event) {
    if(event.shiftKey) {
    alert("Konstruktion nicht abgeschlossen!");
    }else {
        alert("Falscher Startcode!")
    }
}
function callerdouble(event) {
    alert("Konstruktion nicht abgeschlossen!");
    
}

function hallo() {
    
    alert("Hallo! Das ist sehr cool!");
    
}














