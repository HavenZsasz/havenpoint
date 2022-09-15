
function logout() {
    localStorage.removeItem("loginHavn");
    document.location.reload();
}