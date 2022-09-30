



function setup_d () {


    defaultReview_d();

    


}











function defaultReview_d () {

    var reviews_d = document.querySelectorAll(".reviewSlider_d");

    for(var i = 1; i < reviews_d.length; i++) {
        reviews_d[i].setAttribute("style","display:none");
    }

    setInterval(spulWeiter,4000);

}


var counter_d = 0;

function spulWeiter() {

    var reviews_d = document.querySelectorAll(".reviewSlider_d");

    var length_d = reviews_d.length;

    if(counter_d+1 == length_d) {
        reviews_d[counter_d].setAttribute("style","display:none");
        counter_d = 0;
        reviews_d[counter_d].setAttribute("style","display:inline");
    }else {
    reviews_d[counter_d].setAttribute("style","display:none");
    reviews_d[counter_d+1].setAttribute("style","display:inline");
    counter_d = counter_d + 1;
    }

    






}





window.addEventListener("load", setup_d);