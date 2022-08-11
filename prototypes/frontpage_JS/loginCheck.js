function loginCheck() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("login-inhalt").style.display = "none";
        document.getElementById("round-container-mobile").style.display = "none";
        document.getElementById("anmelden").style.display = "inline";
        document.getElementById("plus-container").style.display = "none";
    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("anmelden").style.display = "none";
        document.getElementById("login-inhalt").style.display = "block";
        document.getElementById("round-container-mobile").style.display = "flex";
    }
}

window.addEventListener("load", loginCheck);