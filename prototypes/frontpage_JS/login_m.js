
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

    var emailInput = document.getElementById("login-mail_m").value;
    var passwortInput = document.getElementById("login-passwort_m").value;
    



    if (emailInput == "admin" && passwortInput == "0") {
        document.getElementById("logindaten-falsch_m").style.display = "none";
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        document.getElementById("logout_m").style.display ="block";
        document.location.reload();
        document.getElementById("login-mail_m").style.backgroundColor = "rgb(120,120,120)";
        document.getElementById("login-passwort_m").style.backgroundColor = "rgb(120,120,120)";
        

    } else {


        if(passwortInput != 0 && emailInput == "admin") {
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

function switchLogin_m(event) {

    var registrieren = document.getElementById("registrieren_m");
    var login = document.getElementById("login_m");

    if(event.target.id == "registrieren_m") {
        if(registrieren.className == "no-show_m") {
            registrieren.classList.remove("no-show_m");
            login.classList.add("no-show_m");
            var login_laser = login.getElementsByTagName("span");
            setInvisible(login_laser);
            var registrierung_laser = registrieren.getElementsByTagName("span");
            setVisible(registrierung_laser);
            document.getElementById("caption_login_m").innerHTML = "Registrierung";
            document.getElementById("regi-box_m").setAttribute("style", "display: block");
        }
    }

    if(event.target.id == "login_m") {
        if(login.className == "no-show_m") {
            login.classList.remove("no-show_m");
            registrieren.classList.add("no-show_m");
            var login_laser = login.getElementsByTagName("span");
            setVisible(login_laser);
            var registrierung_laser = registrieren.getElementsByTagName("span");
            setInvisible(registrierung_laser);
            document.getElementById("caption_login_m").innerHTML = "Login";
            document.getElementById("regi-box_m").setAttribute("style","display:none");
        }
    }



}

function setInvisible_m (laser) {

    for(var i = 0; i < laser.length; i++) {
        laser[i].setAttribute("style", "display:none");
    }

}

function setVisible_m (laser) {
    
    for(var i = 0; i < laser.length; i++) {
        laser[i].setAttribute("style", "display:block");
    }
}