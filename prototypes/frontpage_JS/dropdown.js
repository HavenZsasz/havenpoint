function setup_dropdown_mehr() {

    document.getElementById("mehr").addEventListener("click", dropdown_mehr);

}

function dropdown_mehr() {

    var dropdownDiv = document.getElementById("dropdown-mehr");
    var wholeSite = document.getElementById("all");
    var helper1 = document.getElementById("helper");
    helper1.innerHTML = "HIDDEN";
    dropdownDiv.style.display = "block";
    


}

window.addEventListener("load", setup_dropdown_mehr);