


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

    var buttons = ["antrieb2", "schild2", "waffe2", "teleport2", "holo2"];
    for(var p = 0; p < buttons.length; p++){
        
        document.getElementById(buttons[p]).addEventListener("click",activate);
    }  

    var tims = ["tim","tim1","tim2"];
    for(var i = 0; i < tims.length; i++) {
        document.getElementById(tims[i]).addEventListener("click", titim);
    }

    document.getElementById("launch").addEventListener("click", lelele);
    
    window.addEventListener("mousemove", zeiger);
    window.addEventListener("keyup", tastendruck);
   

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


function activate (event) {
    var anzeigen = document.getElementById(event.target.id + "-anz");
    var helper = document.getElementById("helper");

    if(anzeigen.innerHTML == "OFFLINE") {
        anzeigen.innerHTML = "ONLINE";
        helper.innerHTML = "FUNKIONIERT";
    }else {
        anzeigen.innerHTML = "OFFLINE";
        helper.innerHTML = "FUNKTIONIERT AUCH";
    }

}


function titim(event) {

    alert("Hallo");
    event.stopPropagation(); //Stoppt die Funktion nach der ersten Ausführung, sonst wird die Funktion für alle umgebenden elemente nochmals getriggered
    event.preventDefault(); //Stoppt alles war der Browser machen könnte, z.B. Links öffnen obwohl man es nicht will

}

function lelele(event) {

    if(event.shiftKey) {
        alert("Klappt alles");
        window.addEventListener("keyup", fly);
    }else {
        alert("Dat war nix");
    }

}


function fly (event) {

    if(event.keyCode == 37) {
        alert("Links");
    }else if(event.keyCode == 38) {
        alert("Vorwärts");
    }else if (event.keyCode == 39) {
        alert("Rechts");
    }else if (event.keyCode == 40) {
        alert("So, jetzt is schluss!");
        window.removeEventListener("keyup", fly);
    }

}

function zeiger (event) {
    document.getElementById("maus").innerHTML = event.clientX + " " + event.clientY;
}

function tastendruck(event) {

    document.getElementById("taste").innerHTML = "    " + event.keyCode;

}


















