window.addEventListener("load", setup_d);




function setup_d () {



    var dropper_d = document.querySelectorAll(".liftGoesDown_d");

    for(var i = 0; i < dropper_d.length; i++) {
        dropper_d[i].addEventListener("click", dropDown_d)
    }




}



function dropDown_d(event) {


    var parent = event.target.parentNode.parentNode;

    parent.setAttribute("style", "display:none");

    parent.parentNode.querySelector(".customerReview_d").setAttribute("style","display:flex");

    parent.parentNode.querySelector("#arrowUp_d").addEventListener("click", dropUp_d);


}


function dropUp_d(event) {


    var parent = event.target.parentNode.parentNode;

    parent.setAttribute("style", "display:none");

    parent.parentNode.querySelector("#customerReviewKlein_d").setAttribute("style", "display:flex");



}