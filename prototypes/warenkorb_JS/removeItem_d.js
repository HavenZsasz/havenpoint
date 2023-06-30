function removeCartSetup_d() {

    document.getElementById("div-empty-cart_d").addEventListener("click", removeItem_d);

    
}

function removeItem_d() {
    localStorage.setItem("cartUsed", 0);
    localStorage.setItem("artikel1", 0);
    localStorage.setItem("artikel2", 0);
    whatsIn_d();
}

window.addEventListener("load", removeCartSetup_d);