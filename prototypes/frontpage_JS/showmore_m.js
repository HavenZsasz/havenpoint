

function showMore_m(event) {
    if(event.target == document.getElementById("mehr-anzeigen_m")) {
        document.getElementById("flex-for-mehr-anzeigen_m").style.display = "none";
        document.getElementById("alle-vorschlaege-container-interessant-2_m").style.display = "flex";

    } else if(event.target == document.getElementById("mehr-anzeigen-2_m")) {
        document.getElementById("flex-for-mehr-anzeigen-2_m").style.display = "none";
        document.getElementById("alle-vorschlaege-container-trend-2_m").style.display = "flex";

    }
    

}
