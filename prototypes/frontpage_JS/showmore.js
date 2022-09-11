function setupShowMore() {
    document.getElementById("mehr-anzeigen").addEventListener("click", showMoreInteresting);
}

function showMoreInteresting() {
    document.getElementById("mehr-anzeigen").style.display = "none";
    document.getElementById("alle-vorschlaege-container-interessant-2").style.display = "flex";

}

window.addEventListener("load", setupShowMore);