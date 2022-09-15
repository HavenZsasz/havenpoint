


function loginCheck2() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic").setAttribute("style","display:none");
        document.getElementById("logout").setAttribute("style","display:none");
        
    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic").setAttribute("style","display:block");
        document.getElementById("logout").setAttribute("style", "display:flex");
    }
}

window.addEventListener("load", loginCheck2);

