window.addEventListener("load", setup);


function setup () {

    //#region MostVisited Event-Listener

    var leftClickMostVisited = document.querySelectorAll(".leftClickMostVisited_d");

    for(var i = 0; i < leftClickMostVisited.length; i++) {
        leftClickMostVisited[i].addEventListener("click", scrollToLeft);
    }

    var rightClickMostVisited = document.querySelectorAll(".rightClickMostVisited_d");

    for(var i = 0; i < rightClickMostVisited.length; i++) {
        rightClickMostVisited[i].addEventListener("click", scrollToRight);
    }




//#endregion


}


//#region ////////////////////// MOSTVISITED ////////////////

//Bestimmt wie weit maximal gescrolled werden kann
var maxScrollLeft = document.getElementById("mostVisited_d").scrollWidth - document.getElementById("mostVisited_d").clientWidth;


//Scrollt entsprechend
function scrollToLeft (event) {
    
    event.target.parentNode.scrollLeft -= maxScrollLeft;
}

function scrollToRight (event) {
    
    event.target.parentNode.scrollLeft += maxScrollLeft;
}









//#endregion