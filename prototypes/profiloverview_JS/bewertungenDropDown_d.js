window.addEventListener("load", setup_d);




function setup_d () {



    var dropper_d = document.querySelectorAll(".droperDowner_d");

    for(var i = 0; i < dropper_d.length; i++) {
        dropper_d[i].addEventListener("click", dropDown_d)
    }




}



function dropDown_d(event) {


    var parent = event.target.parentNode.parentNode;

    parent.setAttribute("style", "display:none");

    parent.parentNode.querySelector(".customerReview_d").setAttribute("style","display:flex");


}