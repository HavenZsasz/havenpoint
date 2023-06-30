function whatsIn_d() {

    if(!localStorage.getItem("cartUsed") || localStorage.getItem("cartUsed") <1) {
        document.getElementById("artikelImWarenkorb_d").style.display = "none";
        document.getElementById("div-empty-cart_d").style.display = "none";


    } else {

        var artikel1 = localStorage.getItem("artikel1");
        var artikel2 = localStorage.getItem("artikel2");
        if(!localStorage.getItem("artikel1") || localStorage.getItem("artikel1") < 1) {
            document.getElementById("artikelImWarenkorb_d").style.display = "none";
        } else {
            document.getElementById("artikelImWarenkorb_d").style.display = "flex";
            document.getElementById("mengezahl_d").innerHTML = artikel1;
        }

        document.getElementById("div-empty-cart_d").style.display = "flex";


    }

}


window.addEventListener("load", whatsIn_d);