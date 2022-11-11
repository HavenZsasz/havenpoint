

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var counterDarkmodeHavn;
var logo_m = document.getElementById("logo_m");

function loadHeader_m() {

    if (localStorage.getItem("counetrDarkmodeHavn") == 0) {
        document.body.classList.remove("dark-theme_m");
        logo_m.setAttribute("src", "assets/logoDayKomprimiert1.png");
        document.getElementById("logo-bg_m").setAttribute("src", "assets/Hintergrund");
    } else if(localStorage.getItem("counetrDarkmodeHavn") == 1) {
        document.body.classList.add("dark-theme_m");
        logo_m.setAttribute("src", "assets/logoNightKomprimiert1.png");
        document.getElementById("logo-bg_m").setAttribute("src", "assets/HintergrundDark.png");

    } else {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoNightKomprimiert1.png");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/HintergrundDark.png");

        } else {
            document.body.classList.remove("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoDayKomprimiert1.png");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/Hintergrund.png");
        }

    }





}

window.addEventListener("load", loadHeader_m);