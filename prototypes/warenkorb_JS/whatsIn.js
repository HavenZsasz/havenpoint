function whatsIn() {

    if(!localStorage.getItem("cartUsed") || localStorage.getItem("cartUsed") <1) {
        document.getElementById("article-div_m").style.display = "none";
        document.getElementById("div-empty-cart_m").style.display = "flex";


    } else {
        var cart = localStorage.getItem("cartUsed");
        document.getElementById("div-empty-cart_m").style.display = "none";
        document.getElementById("mengezahl_m").innerHTML = cart;
        document.getElementById("article-div_m").style.display = "flex";

    }

}


window.addEventListener("load", whatsIn);