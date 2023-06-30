

function openProfileDropdown_m() {

    document.getElementById("round-container-mobile_m").removeEventListener("click", openProfileDropdown_m);
    document.getElementById("round-container-mobile_m").addEventListener("click", closeProfileDropdown_m);
    document.getElementById("round-container-dropdown_m").style.display = "block";


}

function closeProfileDropdown_m() {

    document.getElementById("round-container-mobile_m").removeEventListener("click", closeProfileDropdown_m);
    document.getElementById("round-container-mobile_m").addEventListener("click", openProfileDropdown_m);
    document.getElementById("round-container-dropdown_m").style.display = "none";


}
