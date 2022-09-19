

window.addEventListener("load", setup_d);


function setup_d() {
    

    

    
    //#region slideshow Event-Listener
    var dotArray_d = document.querySelectorAll(".dot_d");
    darkMode_d(dotArray_d);

    document.getElementById("clickLeft_d").addEventListener("click", slideLeft_d);
    document.getElementById("clickRight_d").addEventListener("click", slideRight_d);
    document.getElementById("slideshow_d").addEventListener("mouseover", showButtons_d);
    document.getElementById("slideshow_d").addEventListener("mouseout", hideButtons_d);

    
    activateHover_d(dotArray_d);

    slideDefault_d();
    //#endregion

    //#region Tabs Event-Listener

    var tabs_d = document.getElementById("menu_d").getElementsByTagName("a");

    for(var i = 1; i < tabs_d.length; i++) {
        tabs_d[i].addEventListener("mouseover", erweiterung_aktivieren_d);
        tabs_d[i].addEventListener("mouseout", erweiterung_deaktivieren_d);
    }

    
    document.getElementById("tab_erweiterungen_d").addEventListener("mouseout", erweiterung_deaktivieren_d);
    
    //#endregion


    //#region Login-Maske Event-Listener
    document.getElementById("profileclick_d").addEventListener("click",openLogin_d);
    document.getElementById("login-background_d").addEventListener("click",closeLogin_d);
    document.getElementById("close-login-box_d").addEventListener("click", closeLogin_d);

    document.getElementById("login_d").addEventListener("click",switchLogin_d);
    document.getElementById("registrieren_d").addEventListener("click", switchLogin_d);

    document.getElementById("login_d").addEventListener("click", loginSave_d);

    document.getElementById("logout_d").addEventListener("click", logout_d);



    //#endregion

}

//#region /////////////////////// SLIDER ///////////////////////

var counter_d = 0;
var dotHoverColor_d;
var dotNormalColor_d;

//Checkt, ob DarkMode oder LightMode und setzt die Farbe der Buttons entsprechend
function darkMode_d(dotArray_d) {
    if(counterDarkmodeHavn == 0) {
        dotHoverColor_d = "#717171";
        dotNormalColor_d = "#bbb";
    }else if (counterDarkmodeHavn == 1) {
        dotHoverColor_d = "#bbb";
        dotNormalColor_d = "#717171";
    }
    //Hiermit werden erstmal alle Buttons auf ihre Farbe gesetzt, je nach Dark/LightMode
    for(var i = 0; i < dotArray_d.length; i++) {
        dotArray_d[i].setAttribute("style","background-color:"+dotNormalColor_d);
    }
}

//Hover-Funktionen nötig, da ich in anderen Funktionen die Background-color ändere und so die Pseudo-Klasse :hover nicht mehr greift

function activateHover_d(dotArray_d) {
    for(var i = 0; i < dotArray_d.length; i++) {
        dotArray_d[i].addEventListener("mouseover", buttonHover_d);
        dotArray_d[i].addEventListener("mouseout", buttonHoverOff_d);

    }

}
function buttonHover_d(event) {
    event.target.setAttribute("style", "background-color:" + dotHoverColor_d);
    
}
function buttonHoverOff_d(event) {
    event.target.setAttribute("style", "background-color:" + dotNormalColor_d);
}


function slideDefault_d() {

    var slides_d = document.querySelectorAll(".slider_d");
    var length_d = slides_d.length;

    var dot_d = document.querySelectorAll(".dot_d"); 

    if(slides_d) {
        if(length_d > 1) {
            
            for(var i = 1; i < length_d; i++) {
                slides_d[i].setAttribute("style","display:none");
            }
            dot_d[0].removeEventListener("mouseout",buttonHoverOff_d); //Sorgt dafür, dass der Hover Effekt funktioniert und der Button Grau bleibt, wenn er es sein soll
            dot_d[0].setAttribute("style", "background-color:"+dotHoverColor_d);
            
        }
    }
    
}

function currentSlide_d(page_d) {

    var slides_d = document.querySelectorAll(".slider_d");
    var length_d = slides_d.length;

    var dot_d = document.querySelectorAll(".dot_d");

    if(slides_d) {
        if(length_d > 1) {
            
            for(var i = 0; i < length_d; i++) {
                    slides_d[i].setAttribute("style","display:none");
                    dot_d[i].setAttribute("style","background-color:"+dotNormalColor_d);
            }
            
        }
    }
    
    slides_d[page_d].setAttribute("style", "display:block");
    dot_d[page_d].setAttribute("style","background-color:"+dotHoverColor_d);
    activateHover_d(document.querySelectorAll(".dot_d"));
    dot_d[page_d].removeEventListener("mouseout",buttonHoverOff_d);

}

function slideLeft_d() {

    var slides_d = document.querySelectorAll(".slider_d");
    var dot_d = document.querySelectorAll(".dot_d");

    

    if(counter_d >= 0) {
        slides_d[counter_d].setAttribute("style", "display:none");
        dot_d[counter_d].setAttribute("style","background-color:"+dotNormalColor_d);
        counter_d = counter_d - 1;

        if(counter_d < 0) {
            counter_d = slides_d.length - 1;
        }
        slides_d[counter_d].setAttribute("style", "display:block");
        dot_d[counter_d].setAttribute("style","background-color:" + dotHoverColor_d);
        activateHover_d(document.querySelectorAll(".dot_d"));
        dot_d[counter_d].removeEventListener("mouseout",buttonHoverOff_d);
    }
    

}
function slideRight_d() {

    var slides_d = document.querySelectorAll(".slider_d");
    var dot_d = document.querySelectorAll(".dot_d");
    var length_d = slides_d.length;

    if(counter_d <= length_d-1) {
        slides_d[counter_d].setAttribute("style", "display:none");
        dot_d[counter_d].setAttribute("style","background-color:"+dotNormalColor_d);
        counter_d = counter_d +1;

        if(counter_d > length_d - 1) {
            counter_d = 0;
        }
        slides_d[counter_d].setAttribute("style", "display:block");
        dot_d[counter_d].setAttribute("style","background-color:" + dotHoverColor_d);
        activateHover_d(document.querySelectorAll(".dot_d"));
        dot_d[counter_d].removeEventListener("mouseout",buttonHoverOff_d);
    } 

}

function showButtons_d () {
    var buttons_d = document.querySelectorAll(".clicker_d");
    buttons_d[0].setAttribute("style", "opacity:1");
    buttons_d[1].setAttribute("style", "opacity:1");
}

function hideButtons_d() {
    var buttons_d = document.querySelectorAll(".clicker_d");
    buttons_d[0].setAttribute("style", "opacity:0");
    buttons_d[1].setAttribute("style", "opacity:0");
}


//#endregion


//#region ############# TABS ##############



function erweiterung_aktivieren_d(event) {

    
   
    //Zuerst werden sämtliche sichtbaren tabs zurückgesetzt
    var tabs_d = document.getElementById("tab_erweiterungen_d").getElementsByClassName("erweiterungen_d");

    for(var i = 0; i < tabs_d.length; i++) {
        
        tabs_d[i].setAttribute("style", "display:none");
        
    }

    //Diese Klasse schaut nun, welches Tab aktiviert werden soll und macht dieses sichtbar
    erweiterung_aktivieren2_d(event);
    
    //dieser event-handler muss registriert werden, da sonst nicht der zugrundeliegende div mit dem Mouse-Over verknüpft wird
    document.getElementById("tab_erweiterungen_d").addEventListener("mouseover", erweiterung_aktivieren2_d);


    
}

function erweiterung_aktivieren2_d(event) {

    document.getElementById("tab_erweiterungen_d").setAttribute("style", "display:block");

    if(event.target.id == "neuware_tab_d") {
        document.getElementById("neuware_erweiterung_d").setAttribute("style", "display:flex");
    }
    if(event.target.id == "inserate_tab_d") {
        document.getElementById("inserate_erweiterung_d").setAttribute("style", "display:flex");
    }
    if(event.target.id == "dienstleistungen_tab_d") {
        document.getElementById("dienstleistungen_erweiterung_d").setAttribute("style", "display:flex");
    }
    if(event.target.id == "automobil_tab_d") {
        document.getElementById("automobil_erweiterung_d").setAttribute("style", "display:flex");
    }
    if(event.target.id == "immobilien_tab_d") {
        document.getElementById("immobilien_erweiterung_d").setAttribute("style", "display:flex");
    }

}

function erweiterung_deaktivieren_d() {

    document.getElementById("tab_erweiterungen_d").setAttribute("style", "display:none");

} 

//#endregion



//#region ########### LOGIN-MASKE ##########


function openLogin_d() {


        document.getElementById("login-background_d").setAttribute("style", "display: block");
        document.getElementById("login-box_d").setAttribute("style","display:block");
        window.addEventListener("keypress", function(e) {
            if(e.key === "Enter") {
                loginSave_d();
            }
        })

    
}

function closeLogin_d() {

    document.getElementById("login-box_d").setAttribute("style","display: none");
    document.getElementById("login-background_d").setAttribute("style", "display: none");

}


function switchLogin_d(event) {

    var registrieren_d = document.getElementById("registrieren_d");
    var login_d = document.getElementById("login_d");

    if(event.target.id == "registrieren_d") {
        if(registrieren_d.className == "no-show_d") {
            registrieren_d.classList.remove("no-show_d");
            login_d.classList.add("no-show_d");
            var login_laser_d = login_d.getElementsByTagName("span");
            setInvisible_d(login_laser_d);
            var registrierung_laser_d = registrieren_d.getElementsByTagName("span");
            setVisible_d(registrierung_laser_d);
            document.getElementById("caption_login_d").innerHTML = "Registrierung_d";
            document.getElementById("regi-box_d").setAttribute("style", "display: block");
        }
    }

    if(event.target.id == "login_d") {
        if(login_d.className == "no-show_d") {
            login_d.classList.remove("no-show_d");
            registrieren_d.classList.add("no-show_d");
            var login_laser_d = login_d.getElementsByTagName("span");
            setVisible_d(login_laser_d);
            var registrierung_laser_d = registrieren_d.getElementsByTagName("span");
            setInvisible_d(registrierung_laser_d);
            document.getElementById("caption_login_d").innerHTML = "Login";
            document.getElementById("regi-box_d").setAttribute("style","display:none");
        }
    }



}

function setInvisible_d (laser_d) {

    for(var i = 0; i < laser_d.length; i++) {
        laser_d[i].setAttribute("style", "display:none");
    }

}

function setVisible_d (laser_d) {
    
    for(var i = 0; i < laser_d.length; i++) {
        laser_d[i].setAttribute("style", "display:block");
    }
}


function loginSave_d() {

    var emailInput_d = document.getElementById("login-mail_d").value;
    var passwortInput_d = document.getElementById("login-passwort_d").value;
    



    if (emailInput_d == "admin" && passwortInput_d == "0") {
        document.getElementById("logindaten-falsch_d").style.display = "none";
        
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        document.location.reload();
        
      

    } else {


        if(passwortInput_d != 0 && emailInput_d == "admin") {
            document.getElementById("login-mail_d").style.backgroundColor = "rgb(120,120,120)";
            document.getElementById("login-passwort_d").style.backgroundColor = "red";
            document.getElementById("logindaten-falsch_d").style.display = "block";
            document.getElementById("logindaten-falsch_d").innerHTML = "Das Passwort ist falsch!";

        } else {
            document.getElementById("login-mail_d").style.backgroundColor = "red";
            document.getElementById("login-passwort_d").style.backgroundColor = "red";
            document.getElementById("logindaten-falsch_d").style.display = "block";
            document.getElementById("logindaten-falsch_d").innerHTML = "Die E-Mail Adresse bzw. das dazugehörige Passwort ist falsch!";

        }
       

    }

    window.removeEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            loginSave_d();
        }
    })
}





//#endregion








