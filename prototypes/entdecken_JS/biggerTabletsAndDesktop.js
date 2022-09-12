

window.addEventListener("load", setup);


function setup() {

    
    //#region slideshow Event-Listener
    document.getElementById("clickLeft").addEventListener("click", slideLeft);
    document.getElementById("clickRight").addEventListener("click", slideRight);
    document.getElementById("slideshow").addEventListener("mouseover", showButtons);
    document.getElementById("slideshow").addEventListener("mouseout", hideButtons);

    var dotArray = document.querySelectorAll(".dot");
    activateHover(dotArray);

    slideDefault();
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

//Hover-Funktionen nötig, da ich in anderen Funktionen die Background-color ändere und so die Pseudo-Klasse :hover nicht mehr greift

function activateHover(dotArray) {
    for(var i = 0; i < dotArray.length; i++) {
        dotArray[i].addEventListener("mouseover", buttonHover);
        dotArray[i].addEventListener("mouseout", buttonHoverOff);
    }

}
function buttonHover(event) {
    event.target.setAttribute("style", "background-color:#717171");
    
}
function buttonHoverOff(event) {
    event.target.setAttribute("style", "background-color: #bbb");
}

function slideDefault() {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    var dot = document.querySelectorAll(".dot");

    

    if(slides) {
        if(length > 1) {
            
            for(var i = 1; i < length; i++) {
                slides[i].setAttribute("style","display:none");
            }
            dot[0].removeEventListener("mouseout",buttonHoverOff); //Sorgt dafür, dass der Hover Effekt funktioniert und der Button Grau bleibt, wenn er es sein soll
            dot[0].setAttribute("style", "background-color:#717171");
            
        }
    }
    
}

function currentSlide(page) {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    var dot = document.querySelectorAll(".dot");

    if(slides) {
        if(length > 1) {
            
            for(var i = 0; i < length; i++) {
                    slides[i].setAttribute("style","display:none");
                    dot[i].setAttribute("style","background-color:#bbb");
            }
            
        }
    }
    
    slides[page].setAttribute("style", "display:block");
    dot[page].setAttribute("style","background-color:#717171");
    activateHover(document.querySelectorAll(".dot"));
    dot[page].removeEventListener("mouseout",buttonHoverOff);

}

function slideLeft() {

    var slides = document.querySelectorAll(".slider");
    var dot = document.querySelectorAll(".dot");

    

    if(counter >= 0) {
        slides[counter].setAttribute("style", "display:none");
        dot[counter].setAttribute("style","background-color:#bbb");
        counter = counter - 1;

        if(counter < 0) {
            counter = slides.length - 1;
        }
        slides[counter].setAttribute("style", "display:block");
        dot[counter].setAttribute("style","background-color:#717171");
        activateHover(document.querySelectorAll(".dot"));
        dot[counter].removeEventListener("mouseout",buttonHoverOff);
    }
    

}
function slideRight() {

    var slides = document.querySelectorAll(".slider");
    var dot = document.querySelectorAll(".dot");
    var length = slides.length;

    if(counter <= length-1) {
        slides[counter].setAttribute("style", "display:none");
        dot[counter].setAttribute("style","background-color:#bbb");
        counter = counter +1;

        if(counter > length - 1) {
            counter = 0;
        }
        slides[counter].setAttribute("style", "display:block");
        dot[counter].setAttribute("style","background-color:#717171");
        activateHover(document.querySelectorAll(".dot"));
        dot[counter].removeEventListener("mouseout",buttonHoverOff);
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
            document.getElementById("regi-box").setAttribute("style", "display: block");
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
            document.getElementById("regi-box").setAttribute("style","display:none");
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








