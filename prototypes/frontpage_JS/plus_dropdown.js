function setupPlus() {
    document.getElementById("plus-container").addEventListener("click", plusOpen);

}
 var plusCounter = 0;
function plusOpen() {    

    if(plusCounter == 0) {
        document.getElementById("plus-container").style.animation = "rotate 1s forwards";
        document.getElementById("plus-container").removeEventListener("click", plusOpen);
        document.getElementById("plus-container").addEventListener("click", plusClose);

    } else {

    }

}

function plusClose() {

    document.getElementById("plus-container").style.animation = "rotateBack 1s forwards";

    document.getElementById("plus-container").removeEventListener("click", plusClose);
    document.getElementById("plus-container").addEventListener("click", plusOpen);
}

window.addEventListener("load", setupPlus);
