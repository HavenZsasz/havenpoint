


function loginCheck2_d() {
    if(!localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic_d").setAttribute("style","display:none");
        //document.getElementById("logout_d").setAttribute("style","display:none");
        document.getElementById("profileclick_d").removeEventListener("click", openLoggedInDropDown_d);
        document.getElementById("profileclick_d").addEventListener("click",openLogin_d);


    } else if(localStorage.getItem("loginHavn")) {
        document.getElementById("profilepic_d").setAttribute("style","display:block");
        //document.getElementById("logout_d").setAttribute("style", "display:flex");
        document.getElementById("profileclick_d").removeEventListener("click",openLogin_d);
        document.getElementById("profileclick_d").addEventListener("click", openLoggedInDropDown_d);

    }
}

window.addEventListener("load", loginCheck2_d);

