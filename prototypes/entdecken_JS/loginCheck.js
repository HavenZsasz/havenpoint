


function loginCheck() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic").setAttribute("style","display:none");
        
    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic").setAttribute("style","display:block");
    }
}

window.addEventListener("load", loginCheck);

