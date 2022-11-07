


window.addEventListener("load", loader_d);




function loader_d () {



    var notRead_d = document.querySelectorAll(".messageNotRead_d");
    var read_d = document.querySelectorAll(".messageRead_d");


    for(var i = 0; i < notRead_d.length; i++) {
        notRead_d[i].addEventListener("click", openMessenger_d);
    }
    for(var i = 0; i < read_d.length; i++) {
        read_d[i].addEventListener("click", openMessenger_d);
    }

    updateScroll_d();


}







function openMessenger_d(event) {

    containerBorderReset_d();
    
    var userContainer_d = document.getElementById("user_d");
    var haendlerContainer_d = document.getElementById("haendler_d");

    var grundContainer_d = obersterContainerSelect_d(event.target); //Geht im Container nach oben, um nur dem Grund-Container eine Border zu geben
    grundContainer_d.style.border = "1px solid rgb(0, 220, 253)";
    //Sorgt dafür, dass nicht gelesene Nachricht nach dem Lesen zu gelesen werden
    if(grundContainer_d.classList == "messageNotRead_d") {
        grundContainer_d.classList.remove("messageNotRead_d");
        grundContainer_d.classList.add("messageRead_d");
    }


    userContainer_d.style.transition = "1s";
    userContainer_d.style.width = "40%";
    userContainer_d.style.left = "5%";

    haendlerContainer_d.style.transition = "1s";
    haendlerContainer_d.style.width = "40%";
    haendlerContainer_d.style.left = "5%";



    document.getElementById("messagesDetail_d").style.transition = "1s";
    document.getElementById("messagesDetail_d").style.width = "40%";
    document.getElementById("messagesDetail_d").style.left = "55%";
    





}

function obersterContainerSelect_d (node) {

    while((node.classList == "") ) {
        node = node.parentNode;
    }
    return node;


}

function containerBorderReset_d () {

    var notRead_d = document.querySelectorAll(".messageNotRead_d");
    var read_d = document.querySelectorAll(".messageRead_d");

    for(var i = 0; i < read_d.length; i++) {
        read_d[i].style.border = "none";
    }
    for(var i = 0; i < notRead_d.length; i++) {
        notRead_d[i].style.border = "none";
    }


}



function updateScroll_d () {
    var nachrichten = document.getElementById("messagesDetail_d");
    nachrichten.scrollTop = nachrichten.scrollHeight;
}































































