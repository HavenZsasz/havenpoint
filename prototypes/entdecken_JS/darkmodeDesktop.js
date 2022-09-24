
const prefersDarkScheme_d = window.matchMedia("(prefers-color-scheme: dark)");


function setup_d() {


    document.getElementById("lighter_d").addEventListener("click",toggleLightMode_d);
    document.getElementById("darker_d").addEventListener("click", toggleDarkmode_d);
    document.getElementById("system_d").addEventListener("click", toggleMode_d);

    
    

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {


        if (prefersDarkScheme.matches_d) {
            
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

            if (prefersDarkScheme_d.matches) {
                addDarkness_d();
            } else {
                removeDarkness_d();
            }

        }

    }

    //setColorToDarkModeButton_d ();
}

var counterDarkmodeHavn;

function toggleMode_d() {

    if(prefersDarkScheme_d.matches) {
        var counterDarkmodeHavn = 1;
        localStorage.setItem('counterDarkmodeHavn', '1');
        addDarkness_d();
    }else {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
        removeDarkness_d();
    }

}

function toggleLightMode_d () {

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
        removeDarkness_d();
    } else {
        if(localStorage.getItem("counterDarkmodeHavn") == 1) {
            removeDarkness_d();
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');
        }else {
            return;
        }
    }
    
}

function toggleDarkmode_d () {

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 1;
        localStorage.setItem('counterDarkmodeHavn', '1');
        addDarkness_d();
    } else {
        if(localStorage.getItem("counterDarkmodeHavn") == 0) {
            addDarkness_d();
            var counterDarkmodeHavn = 1;
            localStorage.setItem('counterDarkmodeHavn', '1');
        }else {
            return;
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


function systemAddDarkness_d () {

}

function systemRemoveDarkness_d () {

}






    window.addEventListener("load", setup_d);
