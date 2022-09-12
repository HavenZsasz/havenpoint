function setup() {

    document.getElementById("darkmode").addEventListener("click", toggleDarkmode);
    

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {


        if (prefersDarkScheme.matches) {
            
            addDarkness();

        } else {
            removeDarkness();
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            removeDarkness();
        } else if (counterDarkmodeHavn == 1) {
            addDarkness();

        } else {

            if (prefersDarkScheme.matches) {
                addDarkness();
            } else {
                removeDarkness();
            }

        }

    }
}

var counterDarkmodeHavn;

function toggleDarkmode() {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
        removeDarkness();
    } else {
        if (localStorage.getItem("counterDarkmodeHavn") == 0) {
            var counterDarkmodeHavn = 1;
            addDarkness();
            localStorage.setItem('counterDarkmodeHavn', '1');
        } else if(localStorage.getItem("counterDarkmodeHavn") == 1) {
            removeDarkness();
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        } else {
            removeDarkness();
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        }

    }

    

}

function addDarkness () {

    document.body.classList.add("dark-theme");
    document.getElementById("clickLogo").src = "/images/logoNightKomprimiert1.png";
    document.getElementById("profilepic").src = "/images/logoNightKomprimiert1.png";
    
}

function removeDarkness () {

    document.body.classList.remove("dark-theme");
    document.getElementById("clickLogo").src = "/images/logoDayKomprimiert1.png";
    document.getElementById("profilepic").src = "/images/logoDayKomprimiert1.png";
    
}




    window.addEventListener("load", setup);
