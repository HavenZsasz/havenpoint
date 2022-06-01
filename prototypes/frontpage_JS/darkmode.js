function setup() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-theme");
        logo.setAttribute("src", "logoNightKomprimiert1.png");

    } else {
        document.body.classList.remove("dark-theme");
        logo.setAttribute("src", "logoDayKomprimiert1.png");
    }
}


window.addEventListener("load", setup);