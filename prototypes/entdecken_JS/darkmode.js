function setup() {

    document.getElementById("darkmode").addEventListener("click", toggleDarkmode);

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {


        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");


        } else {
            document.body.classList.remove("dark-theme");
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            document.body.classList.remove("dark-theme");
        } else if (counterDarkmodeHavn == 1) {
            document.body.classList.add("dark-theme");

        } else {

            if (prefersDarkScheme.matches) {
                document.body.classList.add("dark-theme");
            } else {
                document.body.classList.remove("dark-theme");
            }

        }

    }
}

var counterDarkmodeHavn;

function toggleDarkmode() {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 0;
        localStorage.setItem('counterDarkmodeHavn', '0');
        document.body.classList.remove("dark-theme");
    } else {
        if (localStorage.getItem("counterDarkmodeHavn") == 0) {
            var counterDarkmodeHavn = 1;
            document.body.classList.add("dark-theme");
            localStorage.setItem('counterDarkmodeHavn', '1');
        } else if(localStorage.getItem("counterDarkmodeHavn") == 1) {
            document.body.classList.remove("dark-theme");
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        } else {
            document.body.classList.remove("dark-theme");
            var counterDarkmodeHavn = 0;
            localStorage.setItem('counterDarkmodeHavn', '0');

        }









    }

}




    window.addEventListener("load", setup);