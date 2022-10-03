

var shopButton_d = document.getElementById("shopUmschalteShop_d");
var infoButton_d = document.getElementById("shopUmschalteInfo_d");
var bewertungButton_d = document.getElementById("shopUmschalteBewertung_d");

var shop_d = document.getElementById("shopInserate_d");
var info_d = document.getElementById("shopInfo_d");
var bewertung_d = document.getElementById("shopBewertung_d");

function setup_d () {

    shopButton_d.addEventListener("click", showShop_d);
    infoButton_d.addEventListener("click", showInfo_d);
    bewertungButton_d.addEventListener("click", showBewertungen_d);

}

function showShop_d () {

    info_d.setAttribute("style", "display:none");
    infoButton_d.setAttribute("style", "border:none");
    bewertung_d.setAttribute("style", "display:none");
    bewertungButton_d.setAttribute("style", "border:none");

    shop_d.setAttribute("style", "display:block");
    shopButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");



}

function showInfo_d () {

    shop_d.setAttribute("style", "display:none");
    shopButton_d.setAttribute("style", "border:none");
    bewertung_d.setAttribute("style", "display:none");
    bewertungButton_d.setAttribute("style", "border:none");

    info_d.setAttribute("style", "display:block");
    infoButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");



}

function showBewertungen_d () {

    shop_d.setAttribute("style", "display:none");
    shopButton_d.setAttribute("style", "border:none");
    info_d.setAttribute("style", "display:none");
    infoButton_d.setAttribute("style", "border:none");

    bewertung_d.setAttribute("style", "display:block");
    bewertungButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");





}




window.addEventListener("load", setup_d);