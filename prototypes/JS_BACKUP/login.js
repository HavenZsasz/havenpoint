function setupAnmelden() {
    document.getElementById("anmelden").addEventListener("click", dropAnmelden);
}

function dropAnmelden() {
    document.getElementById('over-all').style.animation="signIn 0.5s forwards";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("close-login-box").addEventListener("click", closeSignIn);
    document.getElementById("login").addEventListener("click", loginSave);
    
}

function closeSignIn() {
    document.getElementById('over-all').style.animation="signInClose 0.1s forwards";
    document.getElementById("login-box").style.display = "none";


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

window.addEventListener("load", setupAnmelden);