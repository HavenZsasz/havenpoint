

function showMore(event) {
    if(event.target == document.getElementById("mehr-anzeigen")) {
        document.getElementById("flex-for-mehr-anzeigen").style.display = "none";
        document.getElementById("alle-vorschlaege-container-interessant-2").style.display = "flex";

    } else if(event.target == document.getElementById("mehr-anzeigen-2")) {
        document.getElementById("flex-for-mehr-anzeigen-2").style.display = "none";
        document.getElementById("alle-vorschlaege-container-trend-2").style.display = "flex";

    }
    

}
