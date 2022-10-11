function setupaddToCart_m() {
    document.getElementById("in-den-warenkorb_m").addEventListener("click", addTocard_m);
    document.getElementById("testtesttest").addEventListener("click", hurensohn);

}

function hurensohn() {
    alert("hurensohn");
}

var cartUsed;
var artikel1;
var artikel2;


function addTocard_m(event) {


    if(event.target == document.getElementById("in-den-warenkorb_m")) {
        console.log("funzt");
        artikel1 = parseInt(localStorage.getItem("artikel1")) + 1;
        localStorage.setItem("artikel1", JSON.stringify(artikel1));
    } else {
        alert("test");
        artikel2 = parseInt(localStorage.getItem("artikel2")) + 1;
        localStorage.setItem("artikel2", JSON.stringify(artikel2));

    }


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