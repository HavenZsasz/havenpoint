
window.addEventListener("load", setupDashboard);

var likesDashboard = 0;
var bookmarksDashboard = 0;
var postsDashboard = 0;

function setupDashboard() {


    loadDashboardLikes();
    
    loadDashboardBookmarks();
    loadDashboardPosts();

    loadDashboardSavedPostList();


    
    setTimeout(function() {
        loadProgressBar();
      }, 100);



}





function loadDashboardLikes() {


    var dashboard = new XMLHttpRequest();

    dashboard.addEventListener("load", dashboardLoaderLikes);
    dashboard.open("POST", "dashboard.php");

    var bla = new FormData();
    dashboard.send(bla);


}

function dashboardLoaderLikes(event) {

    document.getElementById("amountLikes").innerHTML = event.target.responseText;
    
    likesDashboard = event.target.responseText;
    console.log(likesDashboard);
}

function loadDashboardBookmarks() {


    var dashboard = new XMLHttpRequest();

    dashboard.addEventListener("load", dashboardLoaderBookmarks);
    dashboard.open("POST", "dashboardSaves.php");

    var bla = new FormData();
    dashboard.send(bla);


}

function dashboardLoaderBookmarks(event) {

    document.getElementById("amountSaved").innerHTML = event.target.responseText;
    bookmarksDashboard = event.target.responseText;
}

function loadDashboardPosts() {


    var dashboard = new XMLHttpRequest();

    dashboard.addEventListener("load", dashboardLoaderPosts);
    dashboard.open("POST", "dashboardPosts.php");

    var bla = new FormData();
    dashboard.send(bla);


}

function dashboardLoaderPosts(event) {

    document.getElementById("amountPosts").innerHTML = event.target.responseText;
    postsDashboard = event.target.responseText;
}









function loadDashboardSavedPostList() {


    var dashboard = new XMLHttpRequest();

    dashboard.addEventListener("load", dashboardLoaderSavedPostList);
    dashboard.open("POST", "dashboardSavedPostList.php");

    var bla = new FormData();
    dashboard.send(bla);


}

function dashboardLoaderSavedPostList(event) {
    document.getElementById("savedContainer").innerHTML = event.target.responseText;
}



function loadProgressBar() {

    var progress = 25;

    console.log(likesDashboard);

    if (likesDashboard != 0) {
        progress = progress + 25;
        document.getElementById("toDoLike").style.color = "green";
    }
    if (bookmarksDashboard != 0) {
        progress = progress + 25;
        document.getElementById("toDoSave").style.color = "green";
    }
    if (postsDashboard != 0) {
        progress = progress + 25;
        document.getElementById("toDoPost").style.color = "green";
    }

    if (progress == 100) {
        document.getElementById("buildYourPlane").style.display = "flex";
    }

    console.log(progress);

    progress = progress + "%";

    document.getElementById("progressBar").style.width = progress;
    document.getElementById("progressBar").innerHTML = "Progress: " + progress + "!";








}

