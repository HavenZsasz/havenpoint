function loginSaveSetup() {


    if (localStorage.getItem("loginHavnn")) {

        window.open("https://htmlpreview.github.io/?https://raw.githubusercontent.com/HavenZsasz/havenpoint/main/prototypes/frontpage.html", "_self");

    } else {

        document.getElementById("start").addEventListener("click", loginSave);

    }

}

function loginSave() {
    var emailInput = document.getElementById("email").value;
    var passwortInput = document.getElementById("passwort").value;



    if (emailInput == "admin" && passwortInput == "0") {
        var loginHavn = "signedIn";
        localStorage.setItem('loginHavn', 'signedIn');
        window.open("https://htmlpreview.github.io/?https://raw.githubusercontent.com/HavenZsasz/havenpoint/main/prototypes/frontpage.html", "_self");

    } else {

        window.alert("Anmeldedaten sind ungültig! Probiers mal mit 'admin' und '0'");

    }






}

window.addEventListener("load", loginSaveSetup);