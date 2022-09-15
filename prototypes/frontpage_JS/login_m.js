
function dropAnmelden_m() {
    document.getElementById('over-all_m').style.animation="signIn 0.5s forwards";
    document.getElementById("login-box_m").style.display = "block";
    document.getElementById("close-login-box_m").addEventListener("click", closeSignIn_m);
    document.getElementById("login_m").addEventListener("click", loginSave_m);
    
}

function openRegister_m() {

}

function closeSignIn_m() {
    document.getElementById('over-all_m').style.animation="signInClose 0.1s forwards";
    document.getElementById("login-box_m").style.display = "none";
    document.getElementById("login-mail_m").value = "";
    document.getElementById("login-passwort_m").value = "";
    document.getElementById("logindaten-falsch_m").style.display ="none";
    document.getElementById("login-mail_m").style.backgroundColor ="rgb(120,120,120)";
    document.getElementById("login-passwort_m").style.backgroundColor ="rgb(120,120,120)";


}

function loginSave_m() {

    var emailInput_m  = document.getElementById("login-mail_m").value;
    var passwortInput_m  = document.getElementById("login-passwort_m").value;

    if(emailInput_m == "TheKingIsDead"){

        var audio_m = new Audio("secretsource.mp3");
        audio_m.play();
        closeSignIn_m();
        dropdown_close_m();
        document.getElementById("secretsource-h_m").innerHTML = "Long live the King";


    } else {

        if (emailInput_m  == "admin" && passwortInput_m  == "0") {
            document.getElementById("logindaten-falsch_m").style.display = "none";
            var loginHavn = "signedIn";
            localStorage.setItem('loginHavn', 'signedIn');
            document.getElementById("logout_m").style.display ="block";
            document.location.reload();
            document.getElementById("login-mail_m").style.backgroundColor = "rgb(120,120,120)";
            document.getElementById("login-passwort_m").style.backgroundColor = "rgb(120,120,120)";
            
    
        } else {
    
    
            if(passwortInput_m  != 0 && emailInput_m  == "admin") {
                document.getElementById("login-mail_m").style.backgroundColor = "rgb(120,120,120)";
                document.getElementById("login-passwort_m").style.backgroundColor = "red";
                document.getElementById("logindaten-falsch_m").style.display = "block";
                document.getElementById("logindaten-falsch_m").innerHTML = "Das Passwort ist falsch!";
    
            } else {
                document.getElementById("login-mail_m").style.backgroundColor = "red";
                document.getElementById("login-passwort_m").style.backgroundColor = "red";
                document.getElementById("logindaten-falsch_m").style.display = "block";
                document.getElementById("logindaten-falsch_m").innerHTML = "Die E-Mail Adresse bzw. das dazugehörige Passwort ist falsch!";
    
            }
           
    
        }

    }
    



   
}

function switchLogin_m(event) {

    var registrieren_m  = document.getElementById("registrieren_m");
    var login_m  = document.getElementById("login_m");

    if(event.target.id == "registrieren_m") {
        if(registrieren_m.className == "no-show_m") {
            registrieren_m.classList.remove("no-show_m");
            login_m.classList.add("no-show_m");
            var login_laser_m = login_m.getElementsByTagName("span");
            setInvisible_m(login_laser_m);
            var registrierung_laser = registrieren.getElementsByTagName("span");
            setVisible_m(registrierung_laser_m);
            document.getElementById("caption_login_m").innerHTML = "Registrierung";
            document.getElementById("regi-box_m").setAttribute("style", "display: block");
        }
    }

    if(event.target.id == "login_m") {
        if(login_m.className == "no-show_m") {
            login_m.classList.remove("no-show_m");
            registrieren_m.classList.add("no-show_m");
            var login_laser_m = login_m.getElementsByTagName("span");
            setVisible_m(login_laser_m);
            var registrierung_laser_m = registrieren_m.getElementsByTagName("span");
            setInvisible_m(registrierung_laser_m);
            document.getElementById("caption_login_m").innerHTML = "Login";
            document.getElementById("regi-box_m").setAttribute("style","display:none");
        }
    }



}

function setInvisible_m (laser_m) {

    for(var i = 0; i < laser_m.length; i++) {
        laser_m[i].setAttribute("style", "display:none");
    }

}

function setVisible_m (laser_m) {
    
    for(var i = 0; i < laser_m.length; i++) {
        laser_m[i].setAttribute("style", "display:block");
    }
}