

window.addEventListener("load", setup_d);



window.addEventListener("scroll", scroller_d);


function setup_d () {



}

function classSelector (name, opacity) {

    var classes = document.querySelectorAll("."+name);

    for(var i = 0; i < classes.length; i++) {
        classes[i].style.opacity = opacity;
    }


}






function scroller_d (event) {


    var mainContainer_d = document.querySelector(".main_d");
    var starter_d = document.getElementById("startingBanner_d");

    var scroller_d = window.pageYOffset;

    if(scroller_d < 350) {
        mainContainer_d.style.backgroundColor = "rgb(18,18,18)";
        starter_d.style.backgroundColor = "rgb(18,18,18)";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoNightKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "1";
        document.getElementById("bannerWechsel2_d").style.opacity = "0";

        document.getElementById("textContainer1_d").style.transform = "scale(1,0)";

    }else if (scroller_d >= 350 && scroller_d < 1000) {
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

    }else if (scroller_d >= 1000 && scroller_d < 1500) {
        
        mainContainer_d.style.top = "1000px";
        mainContainer_d.style.position = "absolute";

        document.getElementById("descriptionContainer2_d").style.position = "relative";
        document.getElementById("descriptionContainer2_d").style.opacity = "0";
        
    }else if (scroller_d >= 1500 && scroller_d < 1600) {

        
        document.getElementById("descriptionContainer2_d").style.position = "fixed";
        document.getElementById("descriptionContainer2_d").style.opacity = "1";
        

    }else if (scroller_d >= 1600) {

        //document.querySelector(".textContainer2_d").style.opacity = "1";
        classSelector("textContainer2_d", "1");

    }


    console.log(scroller_d);


}