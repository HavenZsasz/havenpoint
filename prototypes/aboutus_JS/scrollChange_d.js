

window.addEventListener("load", setup_d);



window.addEventListener("scroll", scroller_d);


function setup_d () {



}


function scroller_d (event) {


    var starter_d = document.getElementById("startingBanner_d");

    var scroller_d = window.pageYOffset;

    if(scroller_d < 150) {
        starter_d.style.backgroundColor = "rgb(18,18,18)";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoNightKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "1";
        document.getElementById("bannerWechsel2_d").style.opacity = "0";

        document.getElementById("textContainer1_d").style.transform = "scale(1,0)";

    }else if (scroller_d >= 150 && scroller_d < 500) {
        starter_d.style.backgroundColor = "white";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoDayKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "0";
        document.getElementById("bannerWechsel2_d").style.opacity = "1";

        document.getElementById("textContainer1_d").style.transform = "scale(1,1)";
        document.getElementById("textContainer1_d").style.opacity = "1";
        document.getElementById("textContainer2_d").style.opacity = "0";


    }else if (scroller_d >= 500 && scroller_d < 660) {
        
        
    }else if (scroller_d >= 660) {
        document.getElementById("textContainer1_d").style.opacity = "0";
        document.getElementById("textContainer2_d").style.opacity = "1";
        document.getElementById("textContainer2_d").style.position = "absolute";
        document.getElementById("textContainer2_d").style.position = "fixed";
        document.getElementById("textContainer2_d").style.top = "110px";
    }


    console.log(scroller_d);


}