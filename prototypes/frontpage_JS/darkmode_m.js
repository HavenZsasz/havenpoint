

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var counterDarkmodeHavn;

function toggleDarkmode_m(event) {
    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {
        var counterDarkmodeHavn = 3;
        localStorage.setItem('counterDarkmodeHavn', '3');
    }

    if (event.target == document.getElementById("lightmode_m")) {
        localStorage.setItem('counterDarkmodeHavn', '0');
        document.body.classList.remove("dark-theme_m");
        document.getElementById("lightmode_m").style.backgroundColor = "white";
        document.getElementById("lightmode_m").style.color = "black";
        document.getElementById("darkmode_m").style.backgroundColor = "#bbb";
        document.getElementById("darkmode_m").style.color = "black";
        document.getElementById("auto-dark-light_m").style.backgroundColor = "#bbb";
        document.getElementById("auto-dark-light_m").style.color = "black";
        logo_m.setAttribute("src", "/prototypes/assets/logoDayKomprimiert1.png");
        document.getElementById("inbox-icon").setAttribute("src", "/prototypes/assets/inbox-icon.svg");
        document.getElementById("cart-icon_m").setAttribute("src", "/prototypes/assets/cart.svg");
        document.getElementById("logo-bg_m").setAttribute("src", "/prototypes/assets/Hintergrund.png");
    } else if(event.target == document.getElementById("darkmode_m")) {
        localStorage.setItem('counterDarkmodeHavn', '1');
        document.body.classList.add("dark-theme_m");
        logo_m.setAttribute("src", "/prototypes/assets/logoNightKomprimiert1.png");
        document.getElementById("inbox-icon").setAttribute("src", "/prototypes/assets/inbox-icon-white.svg");
        document.getElementById("cart-icon_m").setAttribute("src", "/prototypes/assets/cartDark.svg");
        document.getElementById("logo-bg_m").setAttribute("src", "/prototypes/assets/HintergrundDark.png");
        document.getElementById("darkmode_m").style.backgroundColor = "rgb(0, 220, 253)";
        document.getElementById("darkmode_m").style.color = "black";
        document.getElementById("lightmode_m").style.backgroundColor = "#121212";
        document.getElementById("lightmode_m").style.color = "rgb(228, 221, 221)";
        document.getElementById("auto-dark-light_m").style.backgroundColor = "#121212";
        document.getElementById("auto-dark-light_m").style.color = "rgb(228, 221, 221)";

    } else {
        localStorage.setItem('counterDarkmodeHavn', '3');

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme_m");
            logo_m.setAttribute("src", "/prototypes/assets/logoNightKomprimiert1.png");
                    document.getElementById("inbox-icon").setAttribute("src", "/prototypes/assets/inbox-icon-white.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "/prototypes/assets/HintergrundDark.png");
            document.getElementById("cart-icon_m").setAttribute("src", "/prototypes/assets/cartDark.svg");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light_m").style.color = "black";
            document.getElementById("darkmode_m").style.backgroundColor = "#121212";
            document.getElementById("darkmode_m").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode_m").style.backgroundColor = "#121212";
            document.getElementById("lightmode_m").style.color = "rgb(228, 221, 221)";

        } else {
            document.body.classList.remove("dark-theme_m");
            logo_m.setAttribute("src", "/prototypes/assets/logoDayKomprimiert1.png");
            document.getElementById("inbox-icon").setAttribute("src", "/prototypes/assets/inbox-icon.svg");
            document.getElementById("cart-icon_m").setAttribute("src", "/prototypes/assets/cart.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "/prototypes/assets/Hintergrund.png");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "black";
            document.getElementById("auto-dark-light_m").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode_m").style.backgroundColor = "#bbb";
            document.getElementById("lightmode_m").style.color = "black";
            document.getElementById("darkmode_m").style.backgroundColor = "#bbb";
            document.getElementById("darkmode_m").style.color = "black";
        }

    }





}