

function likePost (postID) {


    var likePost = new XMLHttpRequest();

    likePost.addEventListener("load", likeLoader);
    likePost.open("post", "likePost.php");
    
    var like = new FormData();
    like.append("postID", postID);
    like.append("userName", myvar2);
    likePost.send(like);

    document.getElementById("likeButton"+postID).style.display = "none";

}

function likeLoader (event) {
    console.log(event.target.responseText);
}



function bookmarkPost (postID) {

    var bookmarkPost = new XMLHttpRequest();


    bookmarkPost.addEventListener("load", bookmarkLoader);
    bookmarkPost.open("post", "bookmarkPost.php");
    
    var bookmark = new FormData();
    bookmark.append("postID", postID);
    bookmark.append("userName", myvar2);
    bookmarkPost.send(bookmark);

    document.getElementById("bookmarkButton"+postID).style.display = "none";




}

function bookmarkLoader (event) {
    console.log(event.target.responseText);
}