
window.addEventListener("load", setupSearch);

function setupSearch() {
  document.getElementById("searchButton").addEventListener("click", naturalLanguageInput);
}


function searching(searchStringOR, searchStringAND, tagOR, tagAND) {

  //var searchClass = document.getElementById("searchClass").value;
  //var searchString = document.getElementById("searchText").value;


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("blog").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("POST", "search.php");
  var post = new FormData();
  //post.append("searchClass", searchClass);
  post.append("searchStringOR", searchStringOR);
  post.append("searchStringAND", searchStringAND);
  post.append("tagOR", tagOR);
  post.append("tagAND", tagAND);
  xmlhttp.send(post);

  setTimeout(function () {
    showTags();
  }, 900);

}


function naturalLanguageInput() {


  var textinput;
  var textlower;
  var textclean;
  textinput = document.getElementById("searchText").value;
  textlower = textinput.toLowerCase();

  textclean = textlower.replace(/\n/g, " ");


  textclean = textclean.replaceAll(/\./g, " ");
  textclean = textclean.replaceAll(/\,/g, " ");
  textclean = textclean.replaceAll(/\"/g, " ");
  textclean = textclean.replaceAll(/\'/g, " ");
  textclean = textclean.replaceAll(/\+/g, " ");
  textclean = textclean.replaceAll(/\(/g, " ");
  textclean = textclean.replaceAll(/\)/g, " ");
  textclean = textclean.replaceAll(/\//g, " ");
  textclean = textclean.replaceAll(/\-/g, " ");
  textclean = textclean.replaceAll(/\:/g, " ");


  textclean = textclean.replaceAll(/ and /g, " ");
  textclean = textclean.replaceAll(/ or /g, " ");
  textclean = textclean.replaceAll(/ a /g, " ");
  textclean = textclean.replaceAll(/ an /g, " ");
  textclean = textclean.replaceAll(/ the /g, " ");
  textclean = textclean.replaceAll(/ your /g, " ");
  textclean = textclean.replaceAll(/ to /g, " ");
  textclean = textclean.replaceAll(/ which /g, " ");
  textclean = textclean.replaceAll(/ of /g, " ");
  textclean = textclean.replaceAll(/ is /g, " ");
  textclean = textclean.replaceAll(/ in /g, " ");
  textclean = textclean.replaceAll(/ on /g, " ");
  textclean = textclean.replaceAll(/ he /g, " ");
  textclean = textclean.replaceAll(/ she /g, " ");
  textclean = textclean.replaceAll(/ it /g, " ");
  textclean = textclean.replaceAll(/ his /g, " ");
  textclean = textclean.replaceAll(/ her /g, " ");
  textclean = textclean.replaceAll(/ we /g, " ");
  textclean = textclean.replaceAll(/ our /g, " ");
  textclean = textclean.replaceAll(/ your /g, " ");
  textclean = textclean.replaceAll(/ show /g, " ");
  textclean = textclean.replaceAll(/ me /g, " ");
  textclean = textclean.replaceAll(/ him /g, " ");
  textclean = textclean.replaceAll(/ her /g, " ");
  textclean = textclean.replaceAll(/ all /g, " ");
  textclean = textclean.replaceAll(/ can /g, " ");
  textclean = textclean.replaceAll(/ you /g, " ");
  textclean = textclean.replaceAll(/ please /g, " ");
  textclean = textclean.replaceAll(/ tell /g, " ");
  textclean = textclean.replaceAll(/ find /g, " ");
  textclean = textclean.replaceAll(/ relevant /g, " ");
  textclean = textclean.replaceAll(/ research /g, " ");
  textclean = textclean.replaceAll(/ show /g, " ");
  textclean = textclean.replaceAll(/ i /g, " ");
  textclean = textclean.replaceAll(/ know /g, " ");
  textclean = textclean.replaceAll(/ need /g, " ");
  textclean = textclean.replaceAll(/ alright /g, " ");


  var wordlist;
  wordlist = textclean.split(" ");
  wordlist.sort();

  console.log(wordlist);

  
  var helper = [];
  var counter;

  for(var i = 0; i < wordlist.length; i++) {

    counter = 0;

    for (var j = 0; j < wordlist.length; j++) {

      if(i!=j) {

        if(wordlist[i] == wordlist[j]) {
          counter = counter + 1;
        }


      }

    }

    helper[i] = counter;


  }

  console.log(helper);

  var min;
  min = helper[0];
  for(var n = 0; n < helper.length; n++) {

    if(helper[n] < min) {
      min = helper[n];
    }


  }

  console.log(min);

  var searchTerms = [];
  var index = 0;
  for(m = 0; m < helper.length; m++) {
    if(helper[m] == min) {
      searchTerms[index] = wordlist[m];
      index = index + 1;
    }
  }

  console.log(searchTerms);

  
  var resultOR = "";
  var resultAND = "";
  var tagOR = "";
  var tagAND = "";

  if(searchTerms.length == 1) {
    resultOR = "(username LIKE '%"+searchTerms[0]+"%' OR plane LIKE '%"+searchTerms[0]+"%' OR location LIKE '%"+searchTerms[0]+"%')";
    resultAND = "(username LIKE '%"+searchTerms[0]+"%' OR plane LIKE '%"+searchTerms[0]+"%' OR location LIKE '%"+searchTerms[0]+"%')";
    tagOR = "(tagDesc LIKE '%"+searchTerms[0]+"%')";
    tagAND = "(tagDesc LIKE '%"+searchTerms[0]+"%')";
  }else if (searchTerms.length > 1) {

    for(var z = 0; z < searchTerms.length; z++) {

      if(z<searchTerms.length-1) {
        resultOR = resultOR + "(username LIKE '%"+searchTerms[z]+"%' OR plane LIKE '%"+searchTerms[z]+"%' OR location LIKE '%"+searchTerms[z]+"%')";
        resultOR = resultOR + " OR ";

        resultAND = resultAND + "(username LIKE '%"+searchTerms[z]+"%' OR plane LIKE '%"+searchTerms[z]+"%' OR location LIKE '%"+searchTerms[z]+"%')";
        resultAND = resultAND + " AND ";

        tagOR = "(tagDesc LIKE '%"+searchTerms[z]+"%')";
        tagOR = tagOR + " OR ";

        tagAND = "(tagDesc LIKE '%"+searchTerms[z]+"%')";
        tagAND = tagAND + " AND ";


      }else if (z == searchTerms.length-1) {

        resultOR = resultOR + "(username LIKE '%"+searchTerms[z]+"%' OR plane LIKE '%"+searchTerms[z]+"%' OR location LIKE '%"+searchTerms[z]+"%')";
        resultAND = resultAND + "(username LIKE '%"+searchTerms[z]+"%' OR plane LIKE '%"+searchTerms[z]+"%' OR location LIKE '%"+searchTerms[z]+"%')";
        tagOR = "(tagDesc LIKE '%"+searchTerms[z]+"%')";
        tagAND = "(tagDesc LIKE '%"+searchTerms[z]+"%')";
      }
      

    }


  }

  console.log(resultOR);
  console.log(resultAND);

  searching(resultOR, resultAND, tagOR, tagAND);



}