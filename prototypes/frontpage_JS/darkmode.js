function setup() {
    
    document.getElementById("lightmode").addEventListener("click", toggleDarkmode);
    document.getElementById("darkmode").addEventListener("click", toggleDarkmode);
    document.getElementById("auto-dark-light").addEventListener("click", toggleDarkmode);

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light").style.color = "#121212";
            document.getElementById("darkmode").style.backgroundColor = "#121212";
            document.getElementById("darkmode").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode").style.backgroundColor = "#121212";
            document.getElementById("lightmode").style.color = "rgb(228, 221, 221)";


        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "black";
            document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode").style.backgroundColor = "#bbb";
            document.getElementById("lightmode").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#bbb";
            document.getElementById("darkmode").style.color = "black";
            
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("lightmode").style.backgroundColor = "white";
            document.getElementById("lightmode").style.color = "black";
        } else if (counterDarkmodeHavn == 1) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("darkmode").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("darkmode").style.color = "#121212";
        
        } else {

            if (prefersDarkScheme.matches) {
                document.body.classList.add("dark-theme");
                logo.setAttribute("src", "logoNightKomprimiert1.png");
                document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
                document.getElementById("auto-dark-light").style.color = "#121212";

            } else {
                document.body.classList.remove("dark-theme");
                logo.setAttribute("src", "logoDayKomprimiert1.png");
                document.getElementById("auto-dark-light").style.backgroundColor = "black";
                document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253";

            }

        }

    }
}

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
    } else if(event.target == document.getElementById("darkmode")) {
        localStorage.setItem('counterDarkmodeHavn', '1');
        document.body.classList.add("dark-theme");
        logo.setAttribute("src", "logoNightKomprimiert1.png");
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
            document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#121212";
            document.getElementById("darkmode").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode").style.backgroundColor = "#121212";
            document.getElementById("lightmode").style.color = "rgb(228, 221, 221)";

        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "black";
            document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode").style.backgroundColor = "#bbb";
            document.getElementById("lightmode").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#bbb";
            document.getElementById("darkmode").style.color = "black";
        }

    }





}




window.addEventListener("load", setup);