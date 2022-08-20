
window.addEventListener("load", setup);


function setup() {

    slideDefault();
    document.getElementById("clickLeft").addEventListener("click", slideLeft);
    document.getElementById("clickRight").addEventListener("click", slideRight);


}

//#region /////////////////////// SLIDER ///////////////////////

var counter = 0;

function slideDefault() {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    if(slides) {
        if(length > 1) {
            
            for(var i = 1; i < length; i++) {
                slides[i].setAttribute("style","display:none");
            }
        }
    }
    
}

function slideLeft() {

    var slides = document.querySelectorAll(".slider");

    

    if(counter > 0) {
        slides[counter].setAttribute("style", "display:none");
        counter = counter - 1;
        slides[counter].setAttribute("style", "display:block");
    }

    

}
function slideRight() {

    var slides = document.querySelectorAll(".slider");
    var length = slides.length;

    if(counter < length-1) {
        slides[counter].setAttribute("style", "display:none");
        counter = counter +1;
        slides[counter].setAttribute("style", "display:block");
    } 

}
//#endregion