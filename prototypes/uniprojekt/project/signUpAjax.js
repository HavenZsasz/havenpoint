
window.addEventListener("load", setup);

function setup () {


    document.getElementById("signUpButton").addEventListener("click", newUser);


}





function newUser() {
    var nameSign = document.getElementById("nameSignForm").value;
    var passwordSign = document.getElementById("passwordSignForm").value;
    var emailSign = document.getElementById("emailSignForm").value;

    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.addEventListener("load", ajaxLoaded);
    ajaxRequest.addEventListener("error", ajaxError);
    ajaxRequest.open("post", "signUpAjax.php");
    
    var user = new FormData();
    user.append("nameSign", nameSign);
    user.append("passwordSign", passwordSign);
    user.append("emailSign", emailSign);
    ajaxRequest.send(user);
}





function ajaxLoaded() {

    document.getElementById("signUpDiv").style.display = "none";


}

function ajaxError () {
    alert("Error");
}