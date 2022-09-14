function loginCheck() {
    if(!localStorage.getItem("loginHavn")) {

    } else if(localStorage.getItem("loginHavn")) {

    }
}

window.addEventListener("load", loginCheck);

