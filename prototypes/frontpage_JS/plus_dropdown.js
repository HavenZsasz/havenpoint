function setupPlus() {
    document.getElementById("plus-container").addEventListener("click", plusOpen);
    document.getElementById("plus-container").addEventListener("touchstart", plusOpen);

}

function plusOpen() {    
    document.getElementById("plus-container").style.animation = "rotate 1s forwards";
    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    document.getElementById("plus-container").addEventListener("click", plusClose);
}

function plusClose() {

    document.getElementById("plus-container").removeEventListener("click", plusClose);
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}

window.addEventListener("load", setupPlus);
