
function dropdown_mehr_m() {

    var inserate = document.getElementById("inserate_m");
    var mehr = document.getElementById("mehr_m");
    var neuware = document.getElementById("neuware_m");
    document.getElementById('all_m').style.animation="allSwipeLeft 0.5s forwards";
    
    document.getElementById("dropdown-mehr_m").style.animation= "dropDownOpen 1s forwards";
    document.getElementById("neuware_m").setAttribute("href", "");
    document.getElementById("entdecken_m").style.pointerEvents = "none";
    document.getElementById("neuware_m").style.pointerEvents = "none";
    document.getElementById("click-logo_m").style.pointerEvents = "none";
    document.getElementById("plus-container_m").removeEventListener("click", plusOpen_m);
    
    var dropdownDiv = document.getElementById("dropdown-mehr_m");
    dropdownDiv.style.display = "block";




}

function dropdown_close_m() {
    
    var mehr = document.getElementById("mehr_m");
    var neuware = document.getElementById("neuware_m");
    var dropdownDiv = document.getElementById("dropdown-mehr_m");
    var wholeSite = document.getElementById("all_m");
    document.getElementById("dropdown-mehr_m").style.animation= "dropDownClose 0.5s forwards";
    wholeSite.style.animation = "allSwipeRight 1s forwards";
    document.getElementById("entdecken_m").style.pointerEvents = "all";
    document.getElementById("click-logo_m").style.pointerEvents = "all";
    document.getElementById("plus-container_m").addEventListener("click", plusOpen_m);
}
