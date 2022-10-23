



window.addEventListener("load", calculateSum_d);


function calculateSum_d () {



    var artikel1 = parseInt(localStorage.getItem("artikel1"));
    var artikel1Preis = document.getElementById("artikelPreis_d").innerHTML;

    var splitArray = artikel1Preis.split(/,|\.| /);

    var sum;

    var erg;

    var thousands = splitArray[0];
    var hundreds = splitArray[1]; 
    var decimals = splitArray[2];

    if(localStorage.getItem("artikel1") || localStorage.getItem("artikel1") > 0) {

        decimals = decimals * artikel1;
        hundreds = hundreds * artikel1;
        thousands = thousands * artikel1;

        //Muss noch angepasst werden, falls Versand bspw 4,99 EUR ist. Dann muss auch gleiche Art von Berechnung passieren wie bei dem Summen Preis
        if (document.getElementById("kostenVersand_d").innerHTML != "Gratis") { 
            hundreds = hundreds + parseInt(document.getElementById("kostenVersand_d").innerHTML);
        }

        while (decimals > 100) {
            
            decimals = decimals - 100;
            hundreds = hundreds + 1;
        }

        while (hundreds > 1000) {
            
            hundreds = hundreds - 1000;
            thousands = thousands + 1;
        }


    }

    erg = thousands + "." + hundreds + "," + decimals + " EUR";



    document.getElementById("summeRechnung_d").innerHTML = erg;
    document.getElementById("gesamtRechnung_d").innerHTML = erg;


}