function setupaddToCart_m() {
    document.getElementById("in-den-warenkorb_m").addEventListener("click", addTocard_m);

}

var cartUsed;


function addTocard_m(event) {

    cartUsed = parseInt(localStorage.getItem("cartUsed")) + 1;
    if(cartUsed > 9) {
        document.getElementById("cart-counter_m").style.width = "20px";

    }

    document.getElementById("cart-counter_m").innerHTML = cartUsed;
    document.getElementById("cart-counter_m").style.justifyContent = "center";
    document.getElementById("cart-counter_m").style.alignItems = "center";
    document.getElementById("cart-counter_m").style.paddingLeft = "2px";

    localStorage.setItem("cartUsed", JSON.stringify(cartUsed));



    



    
    
    if(event.target == document.getElementById("in-den-warenkorb_m")) {
       
        document.getElementById("div-cart_m").style.display = "flex";
    }

}

window.addEventListener("load", setupaddToCart_m);