function setupaddToCart_d() {
    document.getElementById("inDenWarenkorbButton_d").addEventListener("click", addTocard_d);

}

var cartUsed;
var artikel1;
var artikel2;


function addTocard_d(event) {

    var artikelAnzahl_d = 0;

    artikelAnzahl_d = parseInt(document.getElementById("artikelAnzahl_d").value);

    console.log(artikelAnzahl_d);


        artikel1 = parseInt(localStorage.getItem("artikel1")) + artikelAnzahl_d;
        localStorage.setItem("artikel1", JSON.stringify(artikel1));


    cartUsed = parseInt(localStorage.getItem("cartUsed")) + artikelAnzahl_d;
    if(cartUsed > 9) {
        document.getElementById("cart-counter_d").style.width = "30px";

    } else if(cartUsed > 99) {
        document.getElementById("cart-counter_d").style.width = "35px";
    }

    document.getElementById("cart-counter_d").innerHTML = cartUsed;
    document.getElementById("cart-counter_d").style.justifyContent = "center";
    document.getElementById("cart-counter_d").style.alignItems = "center";
    document.getElementById("cart-counter_d").style.paddingLeft = "2px";

    localStorage.setItem("cartUsed", JSON.stringify(cartUsed));

    
    
    if(event.target == document.getElementById("inDenWarenkorbButton_d")) {
       
        document.getElementById("div-cart_d").style.display = "flex";
        
    }

}

window.addEventListener("load", setupaddToCart_d);