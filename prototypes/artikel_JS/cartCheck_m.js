
function setupCartCheck_m() {
    if(localStorage.getItem("cartUsed")) {
        document.getElementById("div-cart_m").style.display = "flex";
    }

    
}

window.addEventListener("load", setupCartCheck_m);