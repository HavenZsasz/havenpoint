

var shopButton_d = document.getElementById("shopUmschalteShop_d");
var infoButton_d = document.getElementById("shopUmschalteInfo_d");
var bewertungButton_d = document.getElementById("shopUmschalteBewertung_d");
var activityButton_d = document.getElementById("shopUmschalteActivity_d");

var shop_d = document.getElementById("shopInserate_d");
var info_d = document.getElementById("shopInfo_d");
var bewertung_d = document.getElementById("shopBewertung_d");
var activity_d = document.getElementById("shopActivity_d");

function setup_d () {

    var whichSiteLoaded_d = localStorage.getItem("whichSiteLoaded_d");

    shopButton_d.addEventListener("click", showShop_d);
    infoButton_d.addEventListener("click", showInfo_d);
    bewertungButton_d.addEventListener("click", showBewertungen_d);
    document.getElementById("profilRatings_d").querySelector("div").addEventListener("click", showBewertungen_d);
    activityButton_d.addEventListener("click", showActivity_d);

    if(whichSiteLoaded_d == 0 || whichSiteLoaded_d == undefined) {
        showShop_d();
    }else if(whichSiteLoaded_d == 1) {
        showInfo_d();
    }else if(whichSiteLoaded_d == 2) {
        showBewertungen_d();
    }else if(whichSiteLoaded_d == 3) {
        showActivity_d();
    }

}

function showShop_d () {

    info_d.setAttribute("style", "display:none");
    infoButton_d.setAttribute("style", "border:none");
    bewertung_d.setAttribute("style", "display:none");
    bewertungButton_d.setAttribute("style", "border:none");
    activity_d.setAttribute("style", "display:none");
    activityButton_d.setAttribute("style", "border:none");

    shop_d.setAttribute("style", "display:flex");
    shopButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");

    localStorage.setItem("whichSiteLoaded_d","0");



}

function showInfo_d () {

    shop_d.setAttribute("style", "display:none");
    shopButton_d.setAttribute("style", "border:none");
    bewertung_d.setAttribute("style", "display:none");
    bewertungButton_d.setAttribute("style", "border:none");
    activity_d.setAttribute("style", "display:none");
    activityButton_d.setAttribute("style", "border:none");

    info_d.setAttribute("style", "display:flex");
    infoButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");

    localStorage.setItem("whichSiteLoaded_d","1");

}

function showBewertungen_d () {

    shop_d.setAttribute("style", "display:none");
    shopButton_d.setAttribute("style", "border:none");
    info_d.setAttribute("style", "display:none");
    infoButton_d.setAttribute("style", "border:none");
    activity_d.setAttribute("style", "display:none");
    activityButton_d.setAttribute("style", "border:none");

    bewertung_d.setAttribute("style", "display:flex");
    bewertungButton_d.setAttribute("style", "border-bottom:1px solid rgb(0, 220, 253)");


    localStorage.setItem("whichSiteLoaded_d","2");


}

function showActivity_d () {

    shop_d.setAttribute("style", "display:none");
    shopButton_d.setAttribute("style", "border:none");
    info_d.setAttribute("style", "display:none");
    infoButton_d.setAttribute("style", "border:none");
    bewertung_d.setAttribute("style", "display:none");
    bewertungButton_d.setAttribute("style", "border:none");

    activity_d.setAttribute("style", "display:flex");
    activityButton_d.setAttribute("style", "border-bottom:1px solid rgb(0,220,253)");

}




window.addEventListener("load", setup_d);