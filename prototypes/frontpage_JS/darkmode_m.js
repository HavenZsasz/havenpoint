

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var counterDarkmodeHavn;

function toggleDarkmode(event) {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
    }

    if (event.target == document.getElementById("lightmode")) {
        localStorage.setItem('counterDarkmodeHavn', '0');
        document.body.classList.remove("dark-theme");
        document.getElementById("lightmode").style.backgroundColor = "white";
        document.getElementById("lightmode").style.color = "black";
        document.getElementById("darkmode").style.backgroundColor = "#bbb";
        document.getElementById("darkmode").style.color = "black";
        document.getElementById("auto-dark-light").style.backgroundColor = "#bbb";
        document.getElementById("auto-dark-light").style.color = "black";
        logo.setAttribute("src", "logoDayKomprimiert1.png");
        document.getElementById("logo-bg").setAttribute("src", "Hintergrund.png");
    } else if(event.target == document.getElementById("darkmode")) {
        localStorage.setItem('counterDarkmodeHavn', '1');
        document.body.classList.add("dark-theme");
        logo.setAttribute("src", "logoNightKomprimiert1.png");
        document.getElementById("logo-bg").setAttribute("src", "HintergrundDark.png");
        document.getElementById("darkmode").style.backgroundColor = "rgb(0, 220, 253)";
        document.getElementById("darkmode").style.color = "black";
        document.getElementById("lightmode").style.backgroundColor = "#121212";
        document.getElementById("lightmode").style.color = "rgb(228, 221, 221)";
        document.getElementById("auto-dark-light").style.backgroundColor = "#121212";
        document.getElementById("auto-dark-light").style.color = "rgb(228, 221, 221)";

    } else {
        localStorage.setItem('counterDarkmodeHavn', '3');

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "HintergrundDark.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#121212";
            document.getElementById("darkmode").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode").style.backgroundColor = "#121212";
            document.getElementById("lightmode").style.color = "rgb(228, 221, 221)";

        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "Hintergrund.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "black";
            document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode").style.backgroundColor = "#bbb";
            document.getElementById("lightmode").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#bbb";
            document.getElementById("darkmode").style.color = "black";
        }

    }





}