function loginCheck() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("login-inhalt").style.display = "none";
        document.getElementById("round-container-mobile").style.display = "none";
    } else {
        document.getElementById("anmelden").style.display = "none";
    }
}

window.addEventListener("load", loginCheck);