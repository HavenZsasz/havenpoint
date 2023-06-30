
function logout_m() {
    localStorage.removeItem("loginHavn");
    document.location.reload();
}