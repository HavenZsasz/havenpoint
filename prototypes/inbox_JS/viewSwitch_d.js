


window.addEventListener("load", setup_d);



function setup_d () {

    document.getElementById("haendlerKnopfBig_d").addEventListener("click", openHaendlerMessageBig_d);
    document.getElementById("userKnopfBig_d").addEventListener("click", openUserMessageBig_d);
    


}


function openHaendlerMessageBig_d () {

    document.getElementById("user_d").setAttribute("style", "display:none;");
    document.getElementById("haendler_d").setAttribute("style","display:flex;");
    
    document.getElementById("haendlerKnopfBig_d").setAttribute("style","border-bottom:2px solid rgb(0,220,253);");
    document.getElementById("userKnopfBig_d").setAttribute("style","border-bottom:none;");

    document.getElementById("messagesDetail_d").style.transition = "none";
    document.getElementById("messagesDetail_d").style.left = "30%";
    document.getElementById("messagesDetail_d").style.display = "none";
    document.getElementById("messagesDetail2_d").style.transition = "none";
    document.getElementById("messagesDetail2_d").style.left = "30%";
    document.getElementById("messagesDetail2_d").style.display = "none";
    



}


function openUserMessageBig_d () {


    document.getElementById("haendler_d").setAttribute("style", "display:none;");
    document.getElementById("user_d").setAttribute("style","display:flex;");
    
    document.getElementById("userKnopfBig_d").setAttribute("style","border-bottom:2px solid rgb(0,220,253);");
    document.getElementById("haendlerKnopfBig_d").setAttribute("style","border-bottom:none;");

    document.getElementById("messagesDetail_d").style.transition = "none";
    document.getElementById("messagesDetail_d").style.left = "30%";
    document.getElementById("messagesDetail_d").style.display = "none";
    document.getElementById("messagesDetail2_d").style.transition = "none";
    document.getElementById("messagesDetail2_d").style.left = "30%";
    document.getElementById("messagesDetail2_d").style.display = "none";
    


}



