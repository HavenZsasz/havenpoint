



window.addEventListener("load", calculateSum_d);


function calculateSum_d () {



    var artikel1 = parseInt(localStorage.getItem("artikel1"));
    var artikel1Preis = document.getElementById("artikelPreis_d").innerHTML;

    var splitArray = artikel1Preis.split(/,|\.| /);

    console.log(splitArray);


    var sum;

    var erg;

    var thousands = splitArray[0];
    var hundreds = splitArray[1]; 
    var decimals = splitArray[2];

    if(localStorage.getItem("artikel1") || localStorage.getItem("artikel1") > 0) {

        decimals = decimals * artikel1;
        hundreds = hundreds * artikel1;
        thousands = thousands * artikel1;

        while (decimals > 100) {
            console.log(decimals);
            decimals = decimals - 100;
            hundreds = hundreds + 1;
        }

        while (hundreds > 1000) {
            console.log(hundreds);
            hundreds = hundreds - 1000;
            thousands = thousands + 1;
        }

    }

    erg = thousands + "." + hundreds + "," + decimals + " EUR";



    document.getElementById("summeRechnung_d").innerHTML = erg;
    document.getElementById("gesamtRechnung_d").innerHTML = erg;


}