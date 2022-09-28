function setupaddToCart_m() {
    document.getElementById("in-den-warenkorb_m").addEventListener("click", addTocard_m);

}
var cartcounter_m = 0;

function addTocard_m(event) {
    cartcounter_m += 1;
    if(!localStorage.getItem("cartUsed")) {
        var cartUsed;
        localStorage.setItem("cartUsed", 1);
    }

    cartcounter_m = localStorage.getItem("cartUsed");
    cartcounter_m = parseInt(cartcounter_m + 1);
    let stringer = cartcounter_m.toString();

    document.getElementById("cart-counter_m").innerHTML = stringer;
    localStorage.setItem("cartUsed", stringer);

    
    
    if(event.target == document.getElementById("in-den-warenkorb_m")) {
        if(localStorage.getItem("cartused"))
        document.getElementById("div-cart_m").style.display = "flex";
    }

}

window.addEventListener("load", setupaddToCart_m);