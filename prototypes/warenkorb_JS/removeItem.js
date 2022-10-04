function removeCartSetup_m() {

    document.getElementById("entfernen_m").addEventListener("click", removeItem_m);

    
}

function removeItem_m() {
    localStorage.setItem("cartUsed", 0);
    whatsIn();
}

window.addEventListener("load", removeCartSetup_m);