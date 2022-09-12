
function dropdown_mehr() {

    var inserate = document.getElementById("inserate");
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    document.getElementById('all').style.animation="allSwipeLeft 0.5s forwards";
    
    document.getElementById("dropdown-mehr").style.animation= "dropDownOpen 1s forwards";
    document.getElementById("neuware").setAttribute("href", "");
    document.getElementById("entdecken").style.pointerEvents = "none";
    document.getElementById("neuware").style.pointerEvents = "none";
    document.getElementById("click-logo").style.pointerEvents = "none";
    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    
    var dropdownDiv = document.getElementById("dropdown-mehr");
    dropdownDiv.style.display = "block";




}

function dropdown_close() {
    
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    var dropdownDiv = document.getElementById("dropdown-mehr");
    var wholeSite = document.getElementById("all");
    document.getElementById("dropdown-mehr").style.animation= "dropDownClose 0.5s forwards";
    wholeSite.style.animation = "allSwipeRight 1s forwards";
    document.getElementById("entdecken").style.pointerEvents = "all";
    document.getElementById("click-logo").style.pointerEvents = "all";
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}
