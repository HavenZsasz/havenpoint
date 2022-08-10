function setupAnmelden() {
    document.getElementById("anmelden").addEventListener("click", dropAnmelden);
}

function dropAnmelden() {
    document.getElementById('over-all').style.animation="signIn 0.5s forwards";
    document.getElementById("login-box").style.display = "block";
    
}

window.addEventListener("load", setupAnmelden);