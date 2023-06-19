

window.addEventListener("load", setupLogOut);


function setupLogOut () {
    document.getElementById("logOut").addEventListener("click", logOut);

}



function logOut () {

    var ajaxRequestLogout = new XMLHttpRequest();

    ajaxRequestLogout.open("GET","logoutAjax.php",true);
    ajaxRequestLogout.send();

    /*
    localStorage.user = "";

    loadPage();
    */


    loadPageLoggedOut();

    setTimeout(function() {
        window.location.reload();
      }, 100);
    
    



}