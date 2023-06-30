function follow_setup__m() {
    document.getElementById("follow-profile_m").addEventListener("click", follow_m);
    if(!localStorage.getItem("followMmHavn")) {
        document.getElementById("follow-profile_m").innerHTML = "Folgen";
    } else {
        document.getElementById("follow-profile_m").innerHTML = "Gefolgt &#10003;";

    }
}

function follow_m() {

    if(!localStorage.getItem("followMmHavn")) {
        document.getElementById("follow-profile_m").innerHTML = "Gefolgt &#10003;";
        var followMmhavn = true;
        localStorage.setItem('followMmHavn',true);
    } else {
        document.getElementById("follow-profile_m").innerHTML = "Folgen";
        followMmhavn = false;
        localStorage.removeItem('followMmHavn',false);

    }


}

window.addEventListener("load", follow_setup__m);