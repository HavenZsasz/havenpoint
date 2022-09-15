
function dropAnmelden() {
    document.getElementById('over-all').style.animation="signIn 0.5s forwards";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("close-login-box").addEventListener("click", closeSignIn);
    document.getElementById("login").addEventListener("click", loginSave);
    
}

function openRegister() {

}

function closeSignIn() {
    document.getElementById('over-all').style.animation="signInClose 0.1s forwards";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("login-mail").value = "";
    document.getElementById("login-passwort").value = "";
    document.getElementById("logindaten-falsch").style.display ="none";
    document.getElementById("login-mail").style.backgroundColor ="rgb(120,120,120)";
    document.getElementById("login-passwort").style.backgroundColor ="rgb(120,120,120)";


}

function loginSave() {

    var emailInput = document.getElementById("login-mail").value;
    var passwortInput = document.getElementById("login-passwort").value;
    



    if (emailInput == "admin" && passwortInput == "0") {
        document.getElementById("logindaten-falsch").style.display = "none";
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        document.getElementById("logout").style.display ="block";
        document.location.reload();
        document.getElementById("login-mail").style.backgroundColor = "rgb(120,120,120)";
        document.getElementById("login-passwort").style.backgroundColor = "rgb(120,120,120)";
        

    } else {


        if(passwortInput != 0 && emailInput == "admin") {
            document.getElementById("login-mail").style.backgroundColor = "rgb(120,120,120)";
            document.getElementById("login-passwort").style.backgroundColor = "red";
            document.getElementById("logindaten-falsch").style.display = "block";
            document.getElementById("logindaten-falsch").innerHTML = "Das Passwort ist falsch!";

        } else {
            document.getElementById("login-mail").style.backgroundColor = "red";
            document.getElementById("login-passwort").style.backgroundColor = "red";
            document.getElementById("logindaten-falsch").style.display = "block";
            document.getElementById("logindaten-falsch").innerHTML = "Die E-Mail Adresse bzw. das dazugehörige Passwort ist falsch!";

        }
       

    }
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