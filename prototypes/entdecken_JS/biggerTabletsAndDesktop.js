

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
        tabs[i].addEventListener("mouseout", erweiterung_deaktivieren);
    }

    
    document.getElementById("tab_erweiterungen").addEventListener("mouseout", erweiterung_deaktivieren);
    
    //#endregion


    //#region Login-Maske Event-Listener
    document.getElementById("profileclick").addEventListener("click",openLogin);
    document.getElementById("login-background").addEventListener("click",closeLogin);

    document.getElementById("login").addEventListener("click",switchLogin);
    document.getElementById("registrieren").addEventListener("click", switchLogin);



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

function currentSlide(page) {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    if(slides) {
        if(length > 1) {
            
            for(var i = 0; i < length; i++) {
                    slides[i].setAttribute("style","display:none");
            }
        }
    }
    slides[page].setAttribute("style", "display:block");

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



//#region ########### LOGIN-MASKE ##########


function openLogin() {

    document.getElementById("login-background").setAttribute("style", "display: block");
    document.getElementById("login-box").setAttribute("style","display:block");

}

function closeLogin () {

    document.getElementById("login-box").setAttribute("style","display: none");
    document.getElementById("login-background").setAttribute("style", "display: none");

}


function switchLogin(event) {

    var registrieren = document.getElementById("registrieren");
    var login = document.getElementById("login");

    if(event.target.id == "registrieren") {
        if(registrieren.className == "no-show") {
            registrieren.classList.remove("no-show");
            login.classList.add("no-show");
            var login_laser = login.getElementsByTagName("span");
            setInvisible(login_laser);
            var registrierung_laser = registrieren.getElementsByTagName("span");
            setVisible(registrierung_laser);
            document.getElementById("caption_login").innerHTML = "Registrierung";
        }
    }

    if(event.target.id == "login") {
        if(login.className == "no-show") {
            login.classList.remove("no-show");
            registrieren.classList.add("no-show");
            var login_laser = login.getElementsByTagName("span");
            setVisible(login_laser);
            var registrierung_laser = registrieren.getElementsByTagName("span");
            setInvisible(registrierung_laser);
            document.getElementById("caption_login").innerHTML = "Login";
        }
    }



}

function setInvisible (laser) {

    for(var i = 0; i < laser.length; i++) {
        laser[i].setAttribute("style", "display:none");
    }

}

function setVisible (laser) {
    
    for(var i = 0; i < laser.length; i++) {
        laser[i].setAttribute("style", "display:block");
    }
}





//#endregion








