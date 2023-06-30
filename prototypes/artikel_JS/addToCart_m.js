function setupaddToCart_m() {
    document.getElementById("in-den-warenkorb_m").addEventListener("click", addTocard_m);

}

var cartUsed;
var artikel1;
var artikel2;


function addTocard_m(event) {

        artikel1 = parseInt(localStorage.getItem("artikel1")) + 1;
        localStorage.setItem("artikel1", JSON.stringify(artikel1));


    cartUsed = parseInt(localStorage.getItem("cartUsed")) + 1;
    if(cartUsed > 9) {
        document.getElementById("cart-counter_m").style.width = "20px";

    } else if(cartUsed > 99) {
        document.getElementById("cart-counter_m").style.width = "25px";
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