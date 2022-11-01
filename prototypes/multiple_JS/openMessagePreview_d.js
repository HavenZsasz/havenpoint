
window.addEventListener("load", setup_d);



function setup_d () {

    document.getElementById("newMessage_d").addEventListener("click", openMessagePreview_d);
    document.getElementById("chatContainer_d").addEventListener("click", openMessagePreview_d);

    document.getElementById("haendlerKnopf_d").addEventListener("click", openHaendlerMessage_d);
    document.getElementById("userKnopf_d").addEventListener("click", openUserMessage_d);
    


}






function openMessagePreview_d () {

    document.getElementById("messagePreviewContainer_d").setAttribute("style", "right:0;");
    document.getElementById("closeMessagePreview_d").addEventListener("click", closeMessagePreview_d);


}

function closeMessagePreview_d ()  {
    document.getElementById("messagePreviewContainer_d").setAttribute("style", "right:-33%;");
    document.getElementById("closeMessagePreview_d").removeEventListener("click", closeMessagePreview_d);
}






function openHaendlerMessage_d () {

    document.getElementById("messagesInPreviewUser_d").setAttribute("style", "display:none;");
    document.getElementById("messagesInPreviewHaendler_d").setAttribute("style","display:flex;");
    
    document.getElementById("haendlerKnopf_d").setAttribute("style","border-bottom:2px solid rgb(0,220,253);");
    document.getElementById("userKnopf_d").setAttribute("style","border-bottom:none;");



}


function openUserMessage_d () {


    document.getElementById("messagesInPreviewHaendler_d").setAttribute("style", "display:none;");
    document.getElementById("messagesInPreviewUser_d").setAttribute("style","display:flex;");
    
    document.getElementById("userKnopf_d").setAttribute("style","border-bottom:2px solid rgb(0,220,253);");
    document.getElementById("haendlerKnopf_d").setAttribute("style","border-bottom:none;");




}


























