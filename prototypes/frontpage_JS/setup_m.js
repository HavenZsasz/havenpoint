function frontpageSetup() {
/*----------Darkmode-Loader----------*/
    document.getElementById("lightmode").addEventListener("click", toggleDarkmode);
    document.getElementById("darkmode").addEventListener("click", toggleDarkmode);
    document.getElementById("auto-dark-light").addEventListener("click", toggleDarkmode);

    if (localStorage.getItem("counterDarkmodeHavn") == undefined) {

        if (prefersDarkScheme.matches) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "HintergrundDark.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("auto-dark-light").style.color = "#121212";
            document.getElementById("darkmode").style.backgroundColor = "#121212";
            document.getElementById("darkmode").style.color = "rgb(228, 221, 221)";
            document.getElementById("lightmode").style.backgroundColor = "#121212";
            document.getElementById("lightmode").style.color = "rgb(228, 221, 221)";


        } else {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "Hintergrund.png");
            document.getElementById("auto-dark-light").style.backgroundColor = "black";
            document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253)";
            document.getElementById("lightmode").style.backgroundColor = "#bbb";
            document.getElementById("lightmode").style.color = "black";
            document.getElementById("darkmode").style.backgroundColor = "#bbb";
            document.getElementById("darkmode").style.color = "black";
            
        }
    } else {

        counterDarkmodeHavn = JSON.parse(localStorage["counterDarkmodeHavn"]);
        if (counterDarkmodeHavn == 0) {
            document.body.classList.remove("dark-theme");
            logo.setAttribute("src", "logoDayKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "Hintergrund.png");
            document.getElementById("lightmode").style.backgroundColor = "white";
            document.getElementById("lightmode").style.color = "black";
        } else if (counterDarkmodeHavn == 1) {
            document.body.classList.add("dark-theme");
            logo.setAttribute("src", "logoNightKomprimiert1.png");
            document.getElementById("logo-bg").setAttribute("src", "HintergrundDark.png");
            document.getElementById("darkmode").style.backgroundColor = "rgb(0, 220, 253)";
            document.getElementById("darkmode").style.color = "#121212";
        
        } else {

            if (prefersDarkScheme.matches) {
                document.body.classList.add("dark-theme");
                logo.setAttribute("src", "logoNightKomprimiert1.png");
                document.getElementById("logo-bg").setAttribute("src", "HintergrundDark.png");
                document.getElementById("auto-dark-light").style.backgroundColor = "rgb(0, 220, 253)";
                document.getElementById("auto-dark-light").style.color = "#121212";

            } else {
                document.body.classList.remove("dark-theme");
                logo.setAttribute("src", "logoDayKomprimiert1.png");
                document.getElementById("logo-bg").setAttribute("src", "Hintergrund.png");
                document.getElementById("auto-dark-light").style.backgroundColor = "black";
                document.getElementById("auto-dark-light").style.color = "rgb(0, 220, 253";

            }

        }

    }
    /*----------Darkmode-Loader-ENDE----------*/
    /*----------Dropdown-Loader----------*/


    document.getElementById("mehr").addEventListener("click", dropdown_mehr);
    document.getElementById("close-mobile-dropdown").addEventListener("click", dropdown_close);


    /*----------Dropdown-Loader-ENDE----------*/
    /*----------login-Loader----------*/



    document.getElementById("anmelden").addEventListener("click", dropAnmelden);
    document.getElementById("login").addEventListener("click",switchLogin);
    document.getElementById("registrieren").addEventListener("click", switchLogin);



    /*-----------login-loader-ENDE----------*/
    /*-----------logout-loader----------*/



    document.getElementById("logout").addEventListener("click", logout);



    /*----------logout-loader-ENDE----------*/
    /*----------move-slides-loader----------*/



    var timeoutauto = setTimeout(autoslide, 6000);



    /*----------move-slides-loader-ENDE----------*/
    /*----------plus-dropdown-loader----------*/



    document.getElementById("plus-container").addEventListener("click", plusOpen);



    /*----------plus-dropdown-ENDE----------*/
    /*----------profile-dropdown-loader----------*/



    document.getElementById("round-container-mobile").addEventListener("click", openProfileDropdown);



    /*-----------profile-dropdown-loader-ENDE----------*/
    /*----------showmore-loder----------*/



    document.getElementById("mehr-anzeigen").addEventListener("click", showMore);
    document.getElementById("mehr-anzeigen-2").addEventListener("click", showMore);



    /*-----------showmore-loder-ENDE----------*/




}

window.addEventListener("load", frontpageSetup);
