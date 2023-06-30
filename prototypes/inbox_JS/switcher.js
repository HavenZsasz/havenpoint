function switchDivs_m() {
    document.getElementById("user_m").addEventListener("click", sw_m);
}

function sw_m() {
    document.getElementById("user_m").removeEventListener("click", sw_m);
    document.getElementById("haendler_m").addEventListener("click", swb_m);
    document.getElementById("haendler_m").style.borderBottom = "none";
    document.getElementById("user_m").style.borderBottom = "3px solid rgb(0,220,253)";
    document.getElementById("div-haendler_m").style.display = "none";
    document.getElementById("div-user_m").style.display = "block";
}

function swb_m() {
    document.getElementById("haendler_m").removeEventListener("click", sw_m);
    document.getElementById("user_m").addEventListener("click", sw_m);
    document.getElementById("user_m").style.borderBottom = "none";
    document.getElementById("haendler_m").style.borderBottom = "3px solid rgb(0,220,253)";
    document.getElementById("div-user_m").style.display = "none";
    document.getElementById("div-haendler_m").style.display = "block";

}

window.addEventListener("load", switchDivs_m);