function setup() {
    
    document.getElementById("lightmode").addEventListener("click", toggleDarkmode);
    document.getElementById("darkmode").addEventListener("click", toggleDarkmode);
    document.getElementById("auto-dark-light").addEventListener("click", toggleDarkmode);

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");

        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
        }
    } else {

        counter = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
        } else if (counterDarkmodeHavn == 1) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
        } else {

            if (prefersDarkScheme.matches) {
                document.body.classList.add("dark-theme");
                logo.setAttribute("src", "logoNightKomprimiert1.png");

            } else {
                document.body.classList.remove("dark-theme");
                logo.setAttribute("src", "logoDayKomprimiert1.png");
            }

        }

    }
}

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var counterDarkmodeHavn;

function toggleDarkmode(event) {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage["ccounterDarkmodeHavn"] = JSON.stringify(counterDarkmodeHavn);
    }

    if (event.target == document.getElementById("lightmode")) {
        counterDarkmodeHavn = 0;
        localStorage["ccounterDarkmodeHavn"] = JSON.stringify(counterDarkmodeHavn);
        document.body.classList.remove("dark-theme");
        logo.setAttribute("src", "logoDayKomprimiert1.png");
    } else if(event.target == document.getElementById("darkmode")) {
        counterDarkmodeHavn = 1;
        localStorage["counterDarkmodeHavn"] = JSON.stringify(counterDarkmodeHavn);
        document.body.classList.add("dark-theme");
        logo.setAttribute("src", "logoNightKomprimiert1.png");
    } else {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");

        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
        }

    }





}




window.addEventListener("load", setup);