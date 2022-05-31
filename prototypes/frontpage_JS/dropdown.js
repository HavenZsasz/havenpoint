function setup_dropdown_mehr() {

    document.getElementById("mehr").addEventListener("click", dropdown_mehr);
    document.getElementById("close-mobile-dropdown").addEventListener("click", dropdown_close);

}

function dropdown_mehr() {

    var inserate = document.getElementById("inserate");
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    mehr.style.display = "none";
    inserate.style.display = "none";
    neuware.style.display = "none";
    var dropdownDiv = document.getElementById("dropdown-mehr");
    var wholeSite = document.getElementById("all");
    dropdownDiv.style.display = "block";
    wholeSite.style.marginRight = "55%";




}

function dropdown_close() {
    var inserate = document.getElementById("inserate");
    var mehr = document.getElementById("mehr");
    var neuware = document.getElementById("neuware");
    mehr.style.display = "block";
    inserate.style.display = "block";
    neuware.style.display = "block";
    var dropdownDiv = document.getElementById("dropdown-mehr");
    var wholeSite = document.getElementById("all");
    dropdownDiv.style.display = "none";
    wholeSite.style.marginRight = "0%";
}

window.addEventListener("load", setup_dropdown_mehr);