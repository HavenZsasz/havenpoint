

function plusOpen() {

    setTimeout(fTimeout, 400);


    document.getElementById("plus-container").style.animation = "rotate 0.5s forwards";
    document.getElementById("plus-container").style.border = "0";
    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    document.getElementById("plus-container").addEventListener("click", plusClose);



}

function fTimeout() {

    document.getElementById("plus-dropdown").style.display = "block";
    document.getElementById("seiteninhalt").style.marginTop = "50px";

}

function plusClose() {

    document.getElementById("plus-container").style.animation = "rotateBack 1s forwards";
    document.getElementById("plus-dropdown").style.display = "none";
    document.getElementById("seiteninhalt").style.marginTop = "0px";
    if(localStorage.getItem("counterDarkmodeHavn") == undefined || localStorage.getItem("counterDarkmodeHavn") == 0) {
        document.getElementById("plus-container").style.border = "1px solid rgb(51, 51, 51)";
    } else {
        if(localStorage.getItem("counterDarkmodeHavn") == 3) {
            if(prefersDarkScheme.matches) {
                document.getElementById("plus-container").style.border = "1px solid rgba(221, 216, 216, 0.558)";

            } else {
                document.getElementById("plus-container").style.border = "1px solid rgb(51, 51, 51)";

            }
        } else {
            document.getElementById("plus-container").style.border = "1px solid rgba(221, 216, 216, 0.558)";

        }
    }
    document.getElementById("plus-container").removeEventListener("click", plusClose);
    document.getElementById("plus-container").addEventListener("click", plusOpen);

}
