

window.addEventListener("load", setup_d);



window.addEventListener("scroll", scroller_d);


function setup_d() {



}

function classSelector(name, opacity) {

    var classes = document.querySelectorAll("." + name);

    for (var i = 0; i < classes.length; i++) {
        classes[i].style.opacity = opacity;
    }


}




function scroller_d(event) {


    var mainContainer_d = document.querySelector(".main_d");
    var starter_d = document.getElementById("startingBanner_d");


    var scroller_d = window.pageYOffset;

    if (scroller_d < 350) {

        
        document.getElementById("navbar_d").style.display = "flex";


        mainContainer_d.style.backgroundColor = "rgb(18,18,18)";
        starter_d.style.backgroundColor = "rgb(18,18,18)";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoNightKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "1";
        document.getElementById("bannerWechsel2_d").style.opacity = "0";

        document.getElementById("textContainer1_d").style.transform = "scale(1,0)";

    } else if (scroller_d >= 350 && scroller_d < 1000) {

        
        document.getElementById("navbar_d").style.display = "none";



        mainContainer_d.style.backgroundColor = "white";
        starter_d.style.backgroundColor = "white";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoDayKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "0";
        document.getElementById("bannerWechsel2_d").style.opacity = "1";

        document.getElementById("textContainer1_d").style.transform = "scale(1,1)";
        document.getElementById("textContainer1_d").style.opacity = "1";


        //document.querySelector(".textContainer2_d").style.opacity = "0";
        classSelector("textContainer2_d", "0");

        mainContainer_d.style.top = "31px";
        mainContainer_d.style.position = "fixed";

    } else if (scroller_d >= 1000 && scroller_d < 1600) {

        mainContainer_d.style.top = "1000px";
        mainContainer_d.style.position = "absolute";

        document.getElementById("descriptionContainer2_d").style.position = "relative";
        document.getElementById("descriptionContainer2_d").style.opacity = "0";

    } else if (scroller_d >= 1600 && scroller_d < 1800) {


        document.getElementById("descriptionContainer2_d").style.position = "fixed";
        document.getElementById("descriptionContainer2_d").style.opacity = "1";


    } else if (scroller_d >= 1800 && scroller_d < 2400) {

        //document.querySelector(".textContainer2_d").style.opacity = "1";
        classSelector("textContainer2_d", "1");

        document.getElementById("descriptionContainer2_d").style.right = "0";

       

    } else if (scroller_d >= 2400 && scroller_d < 2600) {

        var righter_d = scroller_d - 2399;



        document.getElementById("descriptionContainer2_d").style.right = "-" + righter_d + "%";


    } else if (scroller_d >= 2600) {








    }


    console.log(scroller_d);


}









