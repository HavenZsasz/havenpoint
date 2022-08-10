function setupAnmelden() {
    document.getElementById("anmelden").addEventListener("click", dropAnmelden);
}

function dropAnmelden() {
    document.getElementById('over-all').style.animation="signIn 0.5s forwards";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("close-login-box").addEventListener("click", closeSignIn);
    
}

function closeSignIn() {
    document.getElementById('over-all').style.animation="signInClose 0.2s forwards";
    document.getElementById("login-box").style.display = "none";

}

window.addEventListener("load", setupAnmelden);