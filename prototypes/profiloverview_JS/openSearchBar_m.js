function setupSearchBar_m() {
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);
}

function openSearchbar_m() {
    document.getElementById('over-div-suchfeld_m').style.display="flex";
    document.getElementById("suchlupe_m").addEventListener("click", closeSearchbar_m);

}

function closeSearchbar_m() {
    document.getElementById('over-div-suchfeld_m').style.display="none";
    document.getElementById("suchlupe_m").addEventListener("click", openSearchbar_m);

}

window.addEventListener("load", setupSearchBar_m);