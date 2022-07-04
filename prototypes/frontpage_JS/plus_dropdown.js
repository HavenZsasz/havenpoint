function setupPlus() {
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}

function plusOpen() {    
    document.getElementById("plus-container").removeEventListener("click", plusOpen);
    document.getElementById("plus-container").addEventListener("click", plusClose);
}

function plusClose() {
    document.getElementById("plus-container").removeEventListener("click", plusClose);
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}

window.addEventListener("load", setupPlus);
