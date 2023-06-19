

window.addEventListener("load", setupRecommendation);


function setupRecommendation() {

   


    setTimeout(function() {
        loadReco()
      }, 1000);




}

function loadReco() {


    var reco = new XMLHttpRequest();

    reco.addEventListener("load", recoLoader);
    reco.open("POST", "offlineProcessing.php");

    var bla = new FormData();
    reco.send(bla);



}

function recoLoader(event) {
    
    document.getElementById("recommendation").innerHTML = event.target.responseText;
    

   


}
