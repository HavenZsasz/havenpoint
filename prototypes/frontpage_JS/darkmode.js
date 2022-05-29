function setup() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    var helper = document.getElementById("helper");

    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme");
        logo.setAttribute("src", "logoNightKomprimiert1.png");
        helper.innerHTML = "Darkmode erkannt";

    } else {
        document.body.classList.remove("dark-theme");
        logo.setAttribute("src", "logoDayKomprimiert1.png");
    }
}


window.addEventListener("load", setup);