function darkInbox_m() {

if (localStorage.getItem("counterDarkmodeHavn") == undefined) {

    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme_m");

    } else {
        document.body.classList.remove("dark-theme_m");
    }
} else {

    counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
    if (counterDarkmodeHavn == 0) {
        document.body.classList.remove("dark-theme_m");
    } else if (counterDarkmodeHavn == 1) {
        document.body.classList.add("dark-theme_m");
    
    } else {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme_m");
        } else {
            document.body.classList.remove("dark-theme_m");
        }

    }

}
}

window.addEventListener("load", darkInbox_m);