function setup_d() {

    document.getElementById("darkmodeDesktop_d").addEventListener("click", toggleDarkmode_d);
    

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {


        if (prefersDarkScheme.matches) {
            
            addDarkness_d();

        } else {
            removeDarkness_d();
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            removeDarkness_d();
        } else if (counterDarkmodeHavn == 1) {
            addDarkness_d();

        } else {

            if (prefersDarkScheme.matches) {
                addDarkness_d();
            } else {
                removeDarkness_d();
            }

        }

    }
}

var counterDarkmodeHavn;

function toggleDarkmode_d() {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
        removeDarkness_d();
    } else {
        if (localStorage.getItem("counterDarkmodeHavn") == 0) {
            var counterDarkmodeHavn = 1;
            addDarkness_d();
            localStorage.setItem('counterDarkmodeHavn', '1');
        } else if(localStorage.getItem("counterDarkmodeHavn") == 1) {
            removeDarkness_d();
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        } else {
            removeDarkness_d();
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        }

    }

    

}

function addDarkness_d () {

    document.body.classList.add("dark-theme_d");
    document.getElementById("clickLogo_d").src = "/images/logoNightKomprimiert1.png";
    document.getElementById("profilepic_d").src = "/images/logoNightKomprimiert1.png";
    
}

function removeDarkness_d () {

    document.body.classList.remove("dark-theme_d");
    document.getElementById("clickLogo_d").src = "/images/logoDayKomprimiert1.png";
    document.getElementById("profilepic_d").src = "/images/logoDayKomprimiert1.png";
    
}




    window.addEventListener("load", setup_d);
