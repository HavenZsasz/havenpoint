function setupSearchBar_m() {
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);
}

function openSearchbar_m() {
    document.getElementById("suchlupe_m").removeEventListener("click", openSearchbar_m);
    document.getElementById('over-div-suchfeld_m').style.display="flex";
    document.getElementById("suchfeld_m").style.animation = "openSearchbar 0.5s forwards";
    document.getElementById("suchlupe_m").addEventListener("click", closeSearchbar_m);

}

function closeSearchbar_m() {
    document.getElementById("suchlupe_m").removeEventListener("click", closeSearchbar_m);
    document.getElementById("suchfeld_m").style.animation = "closeSearchbar 0.2s forwards";
    document.getElementById('over-div-suchfeld_m').style.display="none";
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);

}

window.addEventListener("load", setupSearchBar_m);