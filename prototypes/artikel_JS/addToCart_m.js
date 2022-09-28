function setupaddToCart_m() {
    document.getElementById("in-den-warenkorb_m").addEventListener("click", addTocard_m);

}
var cartcounter_m;

function addTocard_m(event) {
    
    if(!localStorage.getItem("cartUsed")) {
        var cartUsed;
        localStorage.setItem("cartUsed", 1);
    }

    localStorage.setItem("cartUsed", ++cartUsed);
    document.getElementById("cart-counter_m").innerHTML = localStorage.getItem("cartUsed");


    
    
    if(event.target == document.getElementById("in-den-warenkorb_m")) {
       
        document.getElementById("div-cart_m").style.display = "flex";
    }

}

window.addEventListener("load", setupaddToCart_m);