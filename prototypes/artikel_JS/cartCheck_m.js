
function setupCartCheck_m() {

    if(localStorage.getItem("cartUsed") > 0) {
        document.getElementById("div-cart_m").style.display = "flex";
        cartUsed = parseInt(localStorage.getItem("cartUsed")) +1;
    if(cartUsed > 9) {
        document.getElementById("cart-counter_m").style.width = "20px";

    }
    cartUsed = parseInt(localStorage.getItem("cartUsed"))

    document.getElementById("cart-counter_m").innerHTML = cartUsed;
    document.getElementById("cart-counter_m").style.justifyContent = "center";
    document.getElementById("cart-counter_m").style.alignItems = "center";
    document.getElementById("cart-counter_m").style.paddingLeft = "2px";

    localStorage.setItem("cartUsed", JSON.stringify(cartUsed));


    } else if(!localStorage.getItem("cartUsed") || localStorage.getItem("cartUsed") < 1) {
        document.getElementById("div-cart_m").style.display = "none";
    }


    
}


window.addEventListener("load", setupCartCheck_m);