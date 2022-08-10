function loginSaveSetup() {

    document.getElementById("start").addEventListener("click", loginSave);

}

function loginSave() {
    var emailInput = document.getElementById("email");
    var passwortInput = document.getElementById("passwort");

    if(emailInput.value == admin && passwortInput.value == "0") {
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        window.open("https://htmlpreview.github.io/?https://raw.githubusercontent.com/HavenZsasz/havenpoint/main/prototypes/frontpage.html","_self");

    }
}

window.addEventListener("load", loginSaveSetup);