function setupOverviewSwitcher_m() {
    document.getElementById("shop-info_m").addEventListener("click", switchToInfo_m);
    document.getElementById("shop-bewertungen_m").addEventListener("click", switchToRatings_m);
    localStorage.setItem("position_m", "overview");
}

var overview_m = document.getElementById("shop-overview_m");
var info_m = document.getElementById("shop-info_m");
var ratings_m = document.getElementById("shop-bewertungen_m");
var position_m;



 

function switchToInfo_m() {
    localStorage.setItem("position_m", "info");

    overview_m.style.borderBottom = "none";
    ratings_m.style.borderBottom = "none";
    info_m.style.borderBottom = "3px solid rgb(0, 220, 253)";
    overview_m.removeEventListener("click", switchToOverview_m);
    info_m.removeEventListener("click", switchToInfo_m);
    ratings_m.removeEventListener("click", switchToRatings_m);
    overview_m.addEventListener("click", switchToOverview_m);
    ratings_m.addEventListener("click", switchToRatings_m);
    document.getElementById("seiteninhalt_m").style.display = "none";
    document.getElementById("seiteninhalt-bewertungen_m").style.display = "none";
    document.getElementById("seiteninhalt-infos_m").style.display = "block";


}

function switchToRatings_m() {
    localStorage.setItem("position_m", "ratings");
    overview_m.style.borderBottom = "none";
    info_m.style.borderBottom = "none";
    ratings_m.style.borderBottom = "3px solid rgb(0, 220, 253)";
    overview_m.removeEventListener("click", switchToOverview_m);
    info_m.removeEventListener("click", switchToInfo_m);
    ratings_m.removeEventListener("click", switchToRatings_m);
    info_m.addEventListener("click", switchToInfo_m);
    overview_m.addEventListener("click", switchToOverview_m);
    document.getElementById("seiteninhalt-infos_m").style.display = "none";
    document.getElementById("seiteninhalt_m").style.display = "none";
    document.getElementById("seiteninhalt-bewertungen_m").style.display = "block";

}

function switchToOverview_m() {
    localStorage.setItem("position_m", "overview");
    info_m.style.borderBottom = "none";
    ratings_m.style.borderBottom = "none";
    overview_m.style.borderBottom = "3px solid rgb(0, 220, 253)";
    overview_m.removeEventListener("click", switchToOverview_m);
    info_m.removeEventListener("click", switchToInfo_m);
    ratings_m.removeEventListener("click", switchToRatings_m);
    info_m.addEventListener("click", switchToInfo_m);
    ratings_m.addEventListener("click", switchToRatings_m);
    document.getElementById("seiteninhalt-bewertungen_m").style.display = "none";
    document.getElementById("seiteninhalt-infos_m").style.display = "none";
    document.getElementById("seiteninhalt_m").style.display = "block";



}

window.addEventListener("load", setupOverviewSwitcher_m);