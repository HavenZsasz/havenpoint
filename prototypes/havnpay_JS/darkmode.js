function setupdarkhavnPay() {
    if(localStorage.getItem("counterDarkmodeHavn") == 0 || localStorage.getItem("counterDarkmodeHavn") == 3) {
        document.body.classList.remove("darkmode");
        document.getElementById("bg").setAttribute("src", "assets/payLogo2.svg");
    } else if(localStorage.getItem("counterDarkmodeHavn") == 1) {

        document.body.classList.add("darkmode");
        document.getElementById("bg").setAttribute("src", "assets/payLogoNight.svg");

    }

}

window.addEventListener("load", setupdarkhavnPay);