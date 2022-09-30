function removeCartSetup_m() {

    document.getElementById("cart-remove_m").addEventListener("click", removeItem_m);

    
}

function removeItem_m() {
    localStorage.setItem("cartUsed", 0);
}

window.addEventListener("load", removeCartSetup_m);