
function setupCartCheck_m() {

    if(!localStorage.getItem("cartUsed")) {
        
        localStorage.setItem("cartUsed", 0);
    }

    if(!localStorage.getItem("artikel1")) {
        localStorage.setItem("artikel1", 0);
    }

    if(!localStorage.getItem("artikel2")) {
        localStorage.setItem("artikel2", 0);
    }

    cartUsed = parseInt(localStorage.getItem("cartUsed"));

    if(cartUsed > 0) {
        document.getElementById("div-cart_m").style.display = "flex";
    if(cartUsed > 9) {
        document.getElementById("cart-counter_m").style.width = "20px";

    }

    if(cartUsed > 99) {
        document.getElementById("cart-counter_m").style.width = "25px";
    }
    

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