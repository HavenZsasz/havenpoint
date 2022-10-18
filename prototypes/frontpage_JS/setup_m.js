function frontpageSetup_m() {
/*----------Darkmode-Loader----------*/
    document.getElementById("lightmode_m").addEventListener("click", toggleDarkmode_m);
    document.getElementById("darkmode_m").addEventListener("click", toggleDarkmode_m);
    document.getElementById("auto-dark-light_m").addEventListener("click", toggleDarkmode_m);
    var logo_m = document.getElementById("logo_m");

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoNightKomprimiert1.png");
            document.getElementById("cart-icon_m").setAttribute("src", "assets/cartDark.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/HintergrundDark.png");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light_m").style.color = "#121212";
            document.getElementById("darkmode_m").style.backgroundColor = "#121212";
            document.getElementById("darkmode_m").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode_m").style.backgroundColor = "#121212";
            document.getElementById("lightmode_m").style.color = "rgb(228, 221, 221)";


        } else {
            document.body.classList.remove("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoDayKomprimiert1.png");
            document.getElementById("cart-icon_m").setAttribute("src", "assets/cart.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/Hintergrund.png");
            document.getElementById("auto-dark-light_m").style.backgroundColor = "black";
            document.getElementById("auto-dark-light_m").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode_m").style.backgroundColor = "#bbb";
            document.getElementById("lightmode_m").style.color = "black";
            document.getElementById("darkmode_m").style.backgroundColor = "#bbb";
            document.getElementById("darkmode_m").style.color = "black";
            
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            document.body.classList.remove("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoDayKomprimiert1.png");
            document.getElementById("cart-icon_m").setAttribute("src", "assets/cart.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/Hintergrund.png");
            document.getElementById("lightmode_m").style.backgroundColor = "white";
            document.getElementById("lightmode_m").style.color = "black";
        } else if (counterDarkmodeHavn == 1) {
            document.body.classList.add("dark-theme_m");
            logo_m.setAttribute("src", "assets/logoNightKomprimiert1.png");
            document.getElementById("cart-icon_m").setAttribute("src", "assets/cartDark.svg");
            document.getElementById("logo-bg_m").setAttribute("src", "assets/HintergrundDark.png");
            document.getElementById("darkmode_m").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("darkmode_m").style.color = "#121212";
        
        } else {

            if (prefersDarkScheme.matches) {
                document.body.classList.add("dark-theme_m");
                logo_m.setAttribute("src", "assets/logoNightKomprimiert1.png");
                document.getElementById("cart-icon_m").setAttribute("src", "assets/cartDark.svg");
                document.getElementById("logo-bg_m").setAttribute("src", "assets/HintergrundDark.png");
                document.getElementById("auto-dark-light_m").style.backgroundColor = "rgb(0, 220, 253)";
                document.getElementById("auto-dark-light_m").style.color = "#121212";

            } else {
                document.body.classList.remove("dark-theme_m");
                logo_m.setAttribute("src", "assets/logoDayKomprimiert1.png");
                document.getElementById("cart-icon_m").setAttribute("src", "assets/cart.svg");
                document.getElementById("logo-bg_m").setAttribute("src", "assets/Hintergrund.png");
                document.getElementById("auto-dark-light_m").style.backgroundColor = "black";
                document.getElementById("auto-dark-light_m").style.color = "rgb(0, 220, 253";

            }

        }

    }
    /*----------Darkmode-Loader-ENDE----------*/
    /*----------Dropdown-Loader----------*/


    document.getElementById("mehr_m").addEventListener("click", dropdown_mehr_m);
    document.getElementById("close-mobile-dropdown_m").addEventListener("click", dropdown_close_m);


    /*----------Dropdown-Loader-ENDE----------*/
    /*----------login-Loader----------*/



    document.getElementById("anmelden_m").addEventListener("click", dropAnmelden_m);
    document.getElementById("login_m").addEventListener("click",switchLogin_m);
    document.getElementById("registrieren_m").addEventListener("click", switchLogin_m);



    /*-----------login-loader-ENDE----------*/
    /*-----------logout-loader----------*/



    document.getElementById("logout_m").addEventListener("click", logout_m);



    /*----------logout-loader-ENDE----------*/
    /*----------move-slides-loader----------*/



    var timeoutauto_m = setTimeout(autoslide_m, 6000);



    /*----------move-slides-loader-ENDE----------*/
    /*----------plus-dropdown-loader----------*/



    document.getElementById("plus-container_m").addEventListener("click", plusOpen_m);



    /*----------plus-dropdown-ENDE----------*/
    /*----------profile-dropdown-loader----------*/



    document.getElementById("round-container-mobile_m").addEventListener("click", openProfileDropdown_m);



    /*-----------profile-dropdown-loader-ENDE----------*/
    /*----------showmore-loder----------*/



    document.getElementById("mehr-anzeigen_m").addEventListener("click", showMore_m);
    document.getElementById("mehr-anzeigen-2_m").addEventListener("click", showMore_m);



    /*-----------showmore-loder-ENDE----------*/




}

window.addEventListener("load", frontpageSetup_m);
