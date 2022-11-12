

window.addEventListener("load", setup_d);



window.addEventListener("scroll", scroller_d);


function setup_d () {



}


function scroller_d (event) {


    var main_d = document.querySelectorAll(".main_d")[0];

    var scroller_d = window.pageYOffset;

    if(scroller_d < 150) {
        main_d.style.backgroundColor = "rgb(18,18,18)";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoNightKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "1";
        document.getElementById("bannerWechsel2_d").style.opacity = "0";
    }else if (scroller_d >= 150) {
        main_d.style.backgroundColor = "white";
        //document.getElementById("bannerWechsel_d").src = "/prototypes/assets/logoDayKomprimiert1.png";
        document.getElementById("bannerWechsel_d").style.opacity = "0";
        document.getElementById("bannerWechsel2_d").style.opacity = "1";
    }


    console.log(scroller_d);


}