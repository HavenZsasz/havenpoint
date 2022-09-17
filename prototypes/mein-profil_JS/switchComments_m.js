var commentExample =     document.getElementById("comment-example_m");

function switchCommentsProfile_m() {
    setTimeout(autoSwitch1_m, 5000);

}

function autoSwitch1_m() {
    commentExample.innerHTML = '"Schnelle Lieferung und Artikel wie beschrieben :)" - 15.7.2022';
    setTimeout(autoSwitch2_m, 5000);
}

function autoSwitch2_m() {
    commentExample.innerHTML = '"Freundlicher Support und super kulant!" - 30.7.2022';
    setTimeout(autoSwitch3_m, 5000);

}

function autoSwitch3_m() {
    commentExample.innerHTML = '"Super schneller Versand!" - 21.6.2022';
    setTimeout(switchCommentsProfile_m, 5000);
}

window.addEventListener("load", switchCommentsProfile_m);