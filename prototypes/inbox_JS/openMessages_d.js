


window.addEventListener("load", setup_d);




function setup_d () {



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
    
    document.querySelector(".messagesContainer_d").style.transition = "1s";
    document.querySelector(".messagesContainer_d").style.width = "40%";
    document.querySelector(".messagesContainer_d").style.left = "5%";



    document.getElementById("test").style.display = "flex";
    document.getElementById("test").style.transition = "1s";
    document.getElementById("test").style.width = "40%";
    document.getElementById("test").style.left = "55%";
    





}
































































