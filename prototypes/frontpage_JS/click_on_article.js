
function setupClickOnArticles() {

    var vorschlagContainer = document.getElementsByClassName("vorschlag-container");

    for(var i=0; i<vorschlagContainer.length; i++) {
        vorschlagContainer[i].addEventListener("click", openArticle);
    }



}

function openArticle(event) {
    var vorschlagContainer = document.getElementsByClassName("vorschlag-container");
    var target = event.target;
    for(var i=0; i<vorschlagContainer.length; i++) {
        vorschlagContainer[i].style.filter= "blur(10px)";
    }
    target.style.position = "absolute";
    target.style.filter = "blur(0)";
    target.style.width = "100%";
    target.style.height = "100%";
    target.style.zIndex = "2000";
    

}

window.addEventListener("load", setupClickOnArticles);