function setupProfileDropdown() {
    document.getElementById("round-container-mobile").addEventListener("click", openProfileDropdown);
}

function openProfileDropdown() {

    document.getElementById("round-container-mobile").removeEventListener("click", openProfileDropdown);
    document.getElementById("round-container-mobile").addEventListener("click", closeProfileDropdown);
    document.getElementById("round-container-dropdown").style.display = "block";


}

function closeProfileDropdown() {

    document.getElementById("round-container-mobile").removeEventListener("click", closeProfileDropdown);
    document.getElementById("round-container-mobile").addEventListener("click", openProfileDropdown);
    document.getElementById("round-container-dropdown").style.display = "none";


}

window.addEventListener("load", setupProfileDropdown);