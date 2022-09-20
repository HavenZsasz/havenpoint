
function dropdown_mehr_m() {

    document.getElementById('all_m').style.animation="allSwipeLeft 0.5s forwards";
    
    document.getElementById("dropdown-mehr_m").style.animation= "dropDownOpen 1s forwards";
    document.getElementById("click-logo_m").style.pointerEvents = "none";
    var dropdownDiv_m  = document.getElementById("dropdown-mehr_m");
    dropdownDiv_m .style.display = "block";




}

function dropdown_close_m() {
    
    var wholeSite_m  = document.getElementById("all_m");
    document.getElementById("dropdown-mehr_m").style.animation= "dropDownClose 0.5s forwards";
    wholeSite_m.style.animation = "allSwipeRight 1s forwards";
    document.getElementById("click-logo_m").style.pointerEvents = "all";
}
