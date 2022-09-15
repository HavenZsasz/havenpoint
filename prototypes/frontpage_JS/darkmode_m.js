

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var counterDarkmodeHavn;

function toggleDarkmode_m(event) {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
    }

    if (event.target == document.getElementById("lightmode_m")) {
        localStorage.setItem('counterDarkmodeHavn', '0');
        document.body.classList.remove("dark-theme_m");
        document.getElementById("lightmode_m").style.backgroundColor = "white";
        document.getElementById("lightmode_m").style.color = "black";
        document.getElementById("darkmode_m").style.backgroundColor = "#bbb";
        document.getElementById("darkmode_m").style.color = "black";
        document.getElementById("auto-dark-light_m").style.backgroundColor = "#bbb";
        document.getElementById("auto-dark-light_m").style.color = "black";
        logo_m.setAttribute("src", "logoDayKomprimiert1.png");
        document.getElementById("logo-bg_m").setAttribute("src", "Hintergrund.png");
    } else if(event.target == document.getElementById("darkmode_m")) {
        localStorage.setItem('counterDarkmodeHavn', '1');
        document.body.classList.add("dark-theme_m");
        logo_m.setAttribute("src", "logoNightKomprimiert1.png");
        document.getElementById("logo-bg_m").setAttribute("src", "HintergrundDark.png");
        document.getElementById("darkmode_m").style.backgroundColor = "rgb(0, 220, 253)";
        document.getElementById("darkmode_m").style.color = "black";
        document.getElementById("lightmode_m").style.backgroundColor = "#121212";
        document.getElementById("lightmode_m").style.color = "rgb(228, 221, 221)";
        document.getElementById("auto-dark-light_m").style.backgroundColor = "#121212";
        document.getElementById("auto-dark-light_m").style.color = "rgb(228, 221, 221)";

    } else {
        localStorage.setItem('counterDarkmodeHavn', '3');

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme_m");
            logo_m.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("logo-bg_m").setAttribute("src", "HintergrundDark.png");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light_m").style.color = "black";
            document.getElementById("darkmode_m").style.backgroundColor = "#121212";
            document.getElementById("darkmode_m").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode_m").style.backgroundColor = "#121212";
            document.getElementById("lightmode_m").style.color = "rgb(228, 221, 221)";

        } else {
            document.body.classList.remove("dark-theme_m");
            logo_m.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("logo-bg_m").setAttribute("src", "Hintergrund.png");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "black";
            document.getElementById("auto-dark-light_m").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode_m").style.backgroundColor = "#bbb";
            document.getElementById("lightmode_m").style.color = "black";
            document.getElementById("darkmode_m").style.backgroundColor = "#bbb";
            document.getElementById("darkmode_m").style.color = "black";
        }

    }





}