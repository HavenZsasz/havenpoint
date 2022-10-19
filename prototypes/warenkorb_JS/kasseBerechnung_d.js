



window.addEventListener("load", calculateSum_d);


function calculateSum_d () {



    var artikel1 = parseInt(localStorage.getItem("artikel1"));
    var artikel1Preis = document.getElementById("artikelPreis_d").innerHTML;

    var splitArray = artikel1Preis.split(/,| /);

    console.log(splitArray);


    var sum;

    var erg;

    if(localStorage.getItem("artikel1") || localStorage.getItem("artikel1") > 0) {
        sum = artikel1*artikel1Preis;
    }




    document.getElementById("gesamtRechnung_d").innerHTML = erg;


}