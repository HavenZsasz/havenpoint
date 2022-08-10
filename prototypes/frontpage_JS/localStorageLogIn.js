function LoginCheck() {

    if(!localStorage.getItem("loginHavn")) {

        window.open("https://htmlpreview.github.io/?https://raw.githubusercontent.com/HavenZsasz/havenpoint/main/prototypes/login.html","_self");

    }

}

window.addEventListener("load", LoginCheck);