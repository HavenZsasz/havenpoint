function loginCheck_m() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("login-inhalt_m").style.display = "none";
        document.getElementById("round-container-mobile_m").style.display = "none";
        document.getElementById("anmelden_m").style.display = "inline";
    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("anmelden_m").style.display = "none";
        document.getElementById("login-inhalt_m").style.display = "block";
        document.getElementById("round-container-mobile_m").style.display = "flex";
    }
}

window.addEventListener("load", loginCheck_m);

