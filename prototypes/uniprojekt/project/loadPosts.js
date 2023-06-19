
window.addEventListener("load", showPost);


function showPost() {

  console.log(myvar);
  console.log(myvar2);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("blog").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "loadPostsTest.php", true);
  xmlhttp.send();


  showPost3();



  setTimeout(function () {
    showTags();
  }, 1000);


}


function showPost3() {

  if (myvar == true) {
    loadPageLoggedIn();
  } else {
    loadPageLoggedOut();
  }





}


function loadPageLoggedIn() {


  document.getElementById("logInDiv").style.display = "none";
  document.getElementById("signUpDiv").style.display = "none";
  document.getElementById("search").style.display = "block";
  document.getElementById("logOut").style.display = "block";
  document.getElementById("blogForm").style.display = "block";
  document.getElementById("logCheck").innerHTML = "Login Successful";
  document.getElementById("profile").style.display = "block";
  document.getElementById("recoHead").style.display = "block";

}

function loadPageLoggedOut() {



  document.getElementById("search").style.display = "none";
  document.getElementById("logInDiv").style.display = "block";
  document.getElementById("signUpDiv").style.display = "block";
  document.getElementById("logOut").style.display = "none";
  document.getElementById("blogForm").style.display = "none";
  document.getElementById("logCheck").innerHTML = "Not Logged In";
  document.getElementById("profile").style.display = "none";
  document.getElementById("recoHead").style.display = "none";



}







function showTags() {

  const result = [];

  var tagDivs = document.querySelectorAll('.tagDivs');



  var counter1 = 0;

  for (var i = 0; i < tagDivs.length; i++) {


    var tagID = tagDivs[i].id;
    tagID = tagID.replace("tagDiv", '');
    tagID = parseInt(tagID);


    var divHttp = new XMLHttpRequest();



    divHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        result[counter1] = this.responseText;
        
        counter1 = counter1 + 1;

      }
    }





    divHttp.open("POST", "loadTags.php");

    var postTag = new FormData();
    postTag.append("tagID", tagID);

    divHttp.send(postTag);



  }

  setTimeout(function () {
    showTags2(result);
  }, 100);


}

function showTags2(result) {


  var tagDivs = document.querySelectorAll('.tagDivs');


  for (var i = 0; i < tagDivs.length; i++) {

    //tagDivs[i].innerHTML = result[i];

    var index = 0;
    var tag = "";
    var splitter = 0;


    splitter = result[i].indexOf(":");

    index = result[i].substr(0, splitter);
    index = parseInt(index);
    tag = result[i].substr(splitter + 1);

    

    for (var j = 0; j < tagDivs.length; j++) {

      var tagID = tagDivs[j].id;
      tagID = tagID.replace("tagDiv", '');
      tagID = parseInt(tagID);

      if (tagID == index) {
        tagDivs[j].innerHTML = tag;
      }


    }



  }

}