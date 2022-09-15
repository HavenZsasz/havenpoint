


function loginCheck2_d() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic_d").setAttribute("style","display:none");
        document.getElementById("logout_d").setAttribute("style","display:none");
        
    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic_d").setAttribute("style","display:block");
        document.getElementById("logout_d").setAttribute("style", "display:flex");
    }
}

window.addEventListener("load", loginCheck2_d);

