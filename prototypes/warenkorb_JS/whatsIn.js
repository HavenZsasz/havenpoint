function whatsIn() {

    if(!localStorage.getItem("cartUsed") || localStorage.getItem("cartUsed") <1) {
        document.getElementById("article-div_m").style.display = "none";
        document.getElementById("article2-div_m").style.display = "none";
        document.getElementById("div-empty-cart_m").style.display = "flex";


    } else {

        var artikel1 = localStorage.getItem("artikel1");
        var artikel2 = localStorage.getItem("artikel2");
        if(!localStorage.getItem("artikel1") || localStorage.getItem("artikel1") < 1) {
            document.getElementById("article-div_m").style.display = "none";
        } else {
            document.getElementById("article-div_m").style.display = "flex";
            document.getElementById("mengezahl_m").innerHTML = artikel1;
        }

        if(!localStorage.getItem("artikel2") || localStorage.getItem("artikel2") < 1) {
            document.getElementById("article2-div_m").style.display = "none";
        } else {
            document.getElementById("article2-div_m").style.display = "flex";
            document.getElementById("mengezahl-2_m").innerHTML = artikel2;
        }

        document.getElementById("div-empty-cart_m").style.display = "none";


    }

}


window.addEventListener("load", whatsIn);