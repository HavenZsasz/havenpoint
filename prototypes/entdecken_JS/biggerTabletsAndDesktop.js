
window.addEventListener("load", setup);


function setup() {

    slideDefault();
    //#region slideshow Event-Listener
    document.getElementById("clickLeft").addEventListener("click", slideLeft);
    document.getElementById("clickRight").addEventListener("click", slideRight);
    document.getElementById("slideshow").addEventListener("mouseover", showButtons);
    document.getElementById("slideshow").addEventListener("mouseout", hideButtons);
    //#endregion

    //#region Tabs Event-Listener

    var tabs = document.getElementById("menu").getElementsByTagName("a");

    for(var i = 1; i < tabs.length; i++) {
        tabs[i].addEventListener("mouseover", erweiterung_aktivieren);
    }

    
    document.getElementById("tab_erweiterungen").addEventListener("mouseout", erweiterung_deaktivieren);
    
    //#endregion
}

//#region /////////////////////// SLIDER ///////////////////////

var counter = 0;

function slideDefault() {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    if(slides) {
        if(length > 1) {
            
            for(var i = 1; i < length; i++) {
                slides[i].setAttribute("style","display:none");
            }
        }
    }
    
}

function slideLeft() {

    var slides = document.querySelectorAll(".slider");

    

    if(counter > 0) {
        slides[counter].setAttribute("style", "display:none");
        counter = counter - 1;
        slides[counter].setAttribute("style", "display:block");
    }

    

}
function slideRight() {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    if(counter < length-1) {
        slides[counter].setAttribute("style", "display:none");
        counter = counter +1;
        slides[counter].setAttribute("style", "display:block");
    } 

}

function showButtons () {
    var buttons = document.querySelectorAll(".clicker");
    buttons[0].setAttribute("style", "opacity:1");
    buttons[1].setAttribute("style", "opacity:1");
}

function hideButtons() {
    var buttons = document.querySelectorAll(".clicker");
    buttons[0].setAttribute("style", "opacity:0");
    buttons[1].setAttribute("style", "opacity:0");
}


//#endregion


//#region ############# TABS ##############


function erweiterung_aktivieren(event) {

    
   
    //Zuerst werden sämtliche sichtbaren tabs zurückgesetzt
    var tabs = document.getElementById("tab_erweiterungen").getElementsByClassName("erweiterungen");

    for(var i = 0; i < tabs.length; i++) {
        
        tabs[i].setAttribute("style", "display:none");
        
    }

    //Diese Klasse schaut nun, welches Tab aktiviert werden soll und macht dieses sichtbar
    erweiterung_aktivieren2(event);
    
    //dieser event-handler muss registriert werden, da sonst nicht der zugrundeliegende div mit dem Mouse-Over verknüpft wird
    document.getElementById("tab_erweiterungen").addEventListener("mouseover", erweiterung_aktivieren2);


    
}

function erweiterung_aktivieren2(event) {

    document.getElementById("tab_erweiterungen").setAttribute("style", "display:block");

    if(event.target.id == "neuware_tab") {
        document.getElementById("neuware_erweiterung").setAttribute("style", "display:flex");
    }
    if(event.target.id == "inserate_tab") {
        document.getElementById("inserate_erweiterung").setAttribute("style", "display:flex");
    }
    if(event.target.id == "dienstleistungen_tab") {
        document.getElementById("dienstleistungen_erweiterung").setAttribute("style", "display:flex");
    }
    if(event.target.id == "automobil_tab") {
        document.getElementById("automobil_erweiterung").setAttribute("style", "display:flex");
    }
    if(event.target.id == "immobilien_tab") {
        document.getElementById("immobilien_erweiterung").setAttribute("style", "display:flex");
    }

}

function erweiterung_deaktivieren() {

    document.getElementById("tab_erweiterungen").setAttribute("style", "display:none");


    
    

} 

//#endregion