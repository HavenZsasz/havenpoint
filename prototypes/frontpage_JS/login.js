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
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        document.getElementById("logout").style.display ="block";
        document.location.reload();
        

    } else {

        window.alert("Anmeldedaten sind ungültig!");

    }
}

window.addEventListener("load", setupAnmelden);