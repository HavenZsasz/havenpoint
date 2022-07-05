function setup_dropdown_mehr() {

    document.getElementById("mehr").addEventListener("click", dropdown_mehr);
    document.getElementById("close-mobile-dropdown").addEventListener("click", dropdown_close);

}

function dropdown_mehr() {

    var inserate = document.getElementById("inserate");
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    document.getElementById('all').style.animation="allSwipeLeft 0.5s forwards";
    
    document.getElementById("dropdown-mehr").style.animation= "dropDownOpen 1s forwards";
    document.getElementById("entdecken").setAttribute("href", "");
    document.getElementById("neuware").setAttribute("href", "");
    document.getElementById("entdecken").style.pointerEvents = "none";
    document.getElementById("neuware").style.pointerEvents = "none";
    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    
    mehr.style.display = "none";
    var dropdownDiv = document.getElementById("dropdown-mehr");
    dropdownDiv.style.display = "block";




}

function dropdown_close() {
    
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    mehr.style.display = "block";
    var dropdownDiv = document.getElementById("dropdown-mehr");
    var wholeSite = document.getElementById("all");
    document.getElementById("dropdown-mehr").style.animation= "dropDownClose 0.5s forwards";
    wholeSite.style.animation = "allSwipeRight 1s forwards";
    document.getElementById("entdecken").setAttribute("href", "entdecken.html");
    document.getElementById("entdecken").style.pointerEvents = "all";
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}

window.addEventListener("load", setup_dropdown_mehr);