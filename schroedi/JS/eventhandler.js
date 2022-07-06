


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




function setup () {
    document.getElementById("new").addEventListener("click", changer);
    document.getElementById("starter").addEventListener("click", caller);
    document.getElementById("starterdouble").addEventListener("dblclick", callerdouble);
    document.getElementById("new").addEventListener("mouseover", hallo);

    
    

    var seiten = ["wahl1", "wahl2", "wahl3", "wahl4"];
    for(var i = 0 ; i < seiten.length; i++) {
        document.getElementById(seiten[i]).addEventListener("mouseover",hover);
        document.getElementById(seiten[i]).addEventListener("mouseout", hover);
    }

    var boxen = ["er1", "er2", "er3", "er4", "er5"];
    for(var i = 0; i < boxen.length; i++) {
        document.getElementById(boxen[i]).addEventListener("mouseover", adder);
    }
}

window.addEventListener("load", setup);

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

function hover(event) {
   
    event.target.parentElement.classList.toggle("hover"); //event.target nimmt das angeklickte element; .parentElement nimmt dann das übergeordnete Element(hier das div)
    
}


function adder(event) {
    var counter = event.target.innerHTML;
    counter++;
    event.target.innerHTML = counter;
}














