
window.addEventListener("load", setup_d);



function setup_d () {

    document.getElementById("newMessage_d").addEventListener("click", openMessagePreview);
    document.getElementById("chatContainer_d").addEventListener("click", openMessagePreview);
    


}






function openMessagePreview () {

    document.getElementById("messagePreviewContainer_d").setAttribute("style", "right:0;");
    document.getElementById("closeMessagePreview_d").addEventListener("click", closeMessagePreview);


}

function closeMessagePreview ()  {
    document.getElementById("messagePreviewContainer_d").setAttribute("style", "right:-33%;");
    document.getElementById("closeMessagePreview_d").removeEventListener("click", closeMessagePreview);
}
































