
window.addEventListener("load", setupLogin);

function setupLogin () {


    document.getElementById("logInButton").addEventListener("click", logIn);


}





function logIn() {
    var nameLog = document.getElementById("nameLogForm").value;
    var passwordLog = document.getElementById("passwordLogForm").value;

    

    var ajaxRequestLog = new XMLHttpRequest();

    ajaxRequestLog.addEventListener("load", ajaxLoadedLog);
    ajaxRequestLog.addEventListener("error", ajaxErrorLog);
    ajaxRequestLog.open("post", "loginAjax.php");
    
    var userLog = new FormData();
    userLog.append("nameLog", nameLog);
    userLog.append("passwordLog", passwordLog);
    ajaxRequestLog.send(userLog);

    window.location.reload();
}





function ajaxLoadedLog(event) {

    var nameLog = document.getElementById("nameLogForm").value;
    console.log(event.target.responseText);
    var answer = event.target.responseText;
    

    document.getElementById("logCheck").innerHTML = answer;

    if(answer = "Login Successful") {
        document.getElementById("logInDiv").style.display = "none";
        document.getElementById("signUpDiv").style.display = "none";
        document.getElementById("logOut").style.display = "block";
        document.getElementById("blogForm").style.display = "block";
       
    }


}

function ajaxErrorLog () {
    alert("Error");
}