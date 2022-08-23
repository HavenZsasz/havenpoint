
window.addEventListener("load", setup);


function setup() {

    slideDefault();
    //#region slideshow Event-Listener
    document.getElementById("clickLeft").addEventListener("click", slideLeft);
    document.getElementById("clickRight").addEventListener("click", slideRight);
    document.getElementById("slideshow").addEventListener("mouseover", showButtons);
    document.getElementById("slideshow").addEventListener("mouseout", hideButtons);
    //#endregion


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

function showButtons () {
    var buttons = document.querySelectorAll(".clicker");
    buttons[0].setAttribute("style", "opacity:1");
    buttons[1].setAttribute("style", "opacity:1");
}

function hideButtons() {
    var buttons = document.querySelectorAll(".clicker");
    buttons[0].setAttribute("style", "opacity:0");
    buttons[1].setAttribute("style", "opacity:0");
}


//#endregion