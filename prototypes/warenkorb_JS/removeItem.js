function removeCartSetup_m() {

    document.getElementById("entfernen_m").addEventListener("click", removeItem_m);
    document.getElementById("entfernen2_m").addEventListener("click", removeItem_m);

    
}

function removeItem_m() {
    localStorage.setItem("cartUsed", 0);
    localStorage.setItem("artikel1", 0);
    localStorage.setItem("artikel2", 0);
    whatsIn();
}

window.addEventListener("load", removeCartSetup_m);