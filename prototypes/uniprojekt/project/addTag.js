
window.addEventListener("load", tagSetup);

function tagSetup() {
    var tagButtons = document.querySelectorAll(".tagButtons");

    /*
    for (var i = 0; i < tagButtons.length; i++) {
        tagButtons[i].addEventListener("click", saveTag);
    }
*/

    

}


function saveTag(postID) {

    var tagDesc = document.getElementById("tagInput"+postID).value;

    

    console.log(postID);
    console.log(tagDesc);

    var tagPost = new XMLHttpRequest();

    tagPost.addEventListener("load", tagLoader);
    tagPost.open("post", "addTag.php");
    
    var post = new FormData();
    post.append("postID", postID);
    post.append("tagDesc", tagDesc);
    tagPost.send(post);


    document.getElementById("tagInput"+postID).value = "";


    window.location.reload();
    
}

function tagLoader(event) {

    console.log(event.target.responseText);

}

