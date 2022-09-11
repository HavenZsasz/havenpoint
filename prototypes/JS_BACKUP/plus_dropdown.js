function setupPlus() {
    document.getElementById("plus-container").addEventListener("click", plusOpen);

}

function plusOpen() {

    setTimeout(fTimeout, 400);


    document.getElementById("plus-container").style.animation = "rotate 0.5s forwards";

    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    document.getElementById("plus-container").addEventListener("click", plusClose);



}

function fTimeout() {

    document.getElementById("plus-dropdown").style.display = "block";

}

function plusClose() {

    document.getElementById("plus-container").style.animation = "rotateBack 1s forwards";
    document.getElementById("plus-dropdown").style.display = "none";
    document.getElementById("plus-container").removeEventListener("click", plusClose);
    document.getElementById("plus-container").addEventListener("click", plusOpen);

}

window.addEventListener("load", setupPlus);
