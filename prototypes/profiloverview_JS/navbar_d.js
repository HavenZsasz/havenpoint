

window.addEventListener("load", setup_d);


function setup_d() {

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


function openLoggedInDropDown_d () {

    document.getElementById("loggedInDropDownSquare_d").setAttribute("style","display:flex");

    document.getElementById("profileclick_d").addEventListener("click", closeLoggedInDropDown_d);

}

function closeLoggedInDropDown_d() {

    document.getElementById("loggedInDropDownSquare_d").setAttribute("style","display:none");
    document.getElementById("profileclick_d").removeEventListener("click", closeLoggedInDropDown_d);
}





//#endregion

