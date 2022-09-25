

function plusOpen_m() {

    setTimeout(fTimeout_m, 400);


    document.getElementById("plus-container_m").style.animation = "rotate 0.5s forwards";
    document.getElementById("plus-container_m").style.border = "0";
    document.getElementById("plus-container_m").removeEventListener("click", plusOpen_m);
    document.getElementById("plus-container_m").addEventListener("click", plusClose_m);



}

function fTimeout_m() {

    document.getElementById("plus-dropdown_m").style.display = "block";
    document.getElementById("seiteninhalt_m").style.marginTop = "-20px";

}

function plusClose_m() {

    document.getElementById("plus-container_m").style.animation = "rotateBack 1s forwards";
    document.getElementById("plus-dropdown_m").style.display = "none";
    document.getElementById("seiteninhalt_m").style.marginTop = "0px";
    if(localStorage.getItem("counterDarkmodeHavn") == undefined || localStorage.getItem("counterDarkmodeHavn") == 0) {
        document.getElementById("plus-container_m").style.border = "1px solid rgb(51, 51, 51)";
    } else {
        if(localStorage.getItem("counterDarkmodeHavn") == 3) {
            if(prefersDarkScheme.matches) {
                document.getElementById("plus-container_m").style.border = "1px solid rgba(221, 216, 216, 0.558)";

            } else {
                document.getElementById("plus-container_m").style.border = "1px solid rgb(51, 51, 51)";

            }
        } else {
            document.getElementById("plus-container_m").style.border = "1px solid rgba(221, 216, 216, 0.558)";

        }
    }
    document.getElementById("plus-container_m").removeEventListener("click", plusClose_m);
    document.getElementById("plus-container_m").addEventListener("click", plusOpen_m);

}
