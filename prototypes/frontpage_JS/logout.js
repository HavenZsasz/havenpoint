function setupLogout() {
    document.getElementById("logout").addEventListener("click", logout);
}

function logout() {
    localStorage.removeItem("loginHavn");
    document.location.reload();
}

window.addEventListener("load", setupLogout);