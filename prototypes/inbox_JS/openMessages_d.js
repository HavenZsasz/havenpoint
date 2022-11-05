


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

}







function openMessenger_d(event) {
    
    var userContainer_d = document.getElementById("user_d");
    var haendlerContainer_d = document.getElementById("haendler_d");


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
































































