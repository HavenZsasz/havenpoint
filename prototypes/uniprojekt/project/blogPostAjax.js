
window.addEventListener("load", setupBlog);

function setupBlog () {


    document.getElementById("blogButton").addEventListener("click", newBlog);


}





function newBlog() {

    var plane = document.getElementById("planeForm").value;
    var location = document.getElementById("locationForm").value;
    var description = document.getElementById("descForm").value;

    var ajaxRequestBlog = new XMLHttpRequest();

    ajaxRequestBlog.addEventListener("load", ajaxLoadedBlog);
    ajaxRequestBlog.addEventListener("error", ajaxErrorBlog);
    ajaxRequestBlog.open("post", "blogPostAjax.php");
    
    var post = new FormData();
    post.append("userActive", myvar2);
    post.append("plane", plane);
    post.append("location", location);
    post.append("description", description);
    ajaxRequestBlog.send(post);


    document.getElementById("planeForm").value = "";
    document.getElementById("locationForm").value = "";
    document.getElementById("descForm").value = "";
}





function ajaxLoadedBlog(event) {

    console.log(event.target.responseText);
    var answer = JSON.parse(event.target.responseText);
    var text = "User: ";
    text += localStorage.user;
    text += " found plane: ";
    text += answer.plane;
    text += " in: ";
    text += answer.location;
    text += " and describes it in the following way:  ";
    text += answer.description;


    //var p = document.createElement("p");
    //p.appendChild(document.createTextNode(text));
    //document.getElementById("blog").appendChild(p);

    showPost();

}

function ajaxErrorBlog () {
    alert("Error");
}