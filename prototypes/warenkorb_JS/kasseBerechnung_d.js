



window.addEventListener("load", calculateSum_d);


function calculateSum_d() {



    var artikel1 = parseInt(localStorage.getItem("artikel1"));
    var artikel1Preis = document.getElementById("artikelPreis_d").innerHTML;



    var splitArray = artikel1Preis.split(/,|\.| /);

    var sum;

    var erg;

    var thousands = 0;
    var hundreds = 0;
    var decimals = 0;


    if (splitArray.length == 4) {
        thousands = splitArray[0];
        hundreds = splitArray[1];
        decimals = splitArray[2];
    } else if (splitArray.length == 3) {
        hundreds = splitArray[0];
        decimals = splitArray[1];
    } else if (splitArray.length == 2) {
        decimals = splitArray[0];
    }

    if (localStorage.getItem("artikel1") || localStorage.getItem("artikel1") > 0) {

        decimals = decimals * artikel1;
        hundreds = hundreds * artikel1;
        thousands = thousands * artikel1;

        //Versand Kalkulation
        if (document.getElementById("kostenVersand_d").innerHTML != "Gratis") {

            var versandKosten = document.getElementById("kostenVersand_d").innerHTML;
            var versandSplit = versandKosten.split(/,|\.| /);



            var versandThousands = 0;
            var versandHundreds = 0;
            var versandDecimals = 0;


            if (versandSplit.length == 4) {
                versandThousands = versandSplit[0];
                versandHundreds = versandSplit[1];
                versandDecimals = versandSplit[2];
            } else if (versandSplit.length == 3) {
                versandHundreds = versandSplit[0];
                versandDecimals = versandSplit[1];

            } else if (versandSplit.length == 2) {
                versandDecimals = versandSplit[0];
            }

            versandThousands = versandThousands * 1;
            versandHundreds = versandHundreds * 1;
            versandDecimals = versandDecimals * 1;


            while (versandDecimals > 100) {

                versandDecimals = versandDecimals - 100;
                versandHundreds = versandHundreds + 1;

            }

            while (versandHundreds > 1000) {

                versandHundreds = versandHundreds - 1000;
                versandThousands = versandThousands + 1;

            }





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




    if (thousands != 0) {
        erg = thousands + "." + hundreds + "," + decimals + " EUR";
    } else {
        if (hundreds != 0) {
            erg = hundreds + "," + decimals + " EUR";
        } else {
            if (decimals != 0) {
                erg = "00" + "," + decimals + " EUR";
            } else {
                erg = "00,00 EUR";
            }
        }
    }





    document.getElementById("summeRechnung_d").innerHTML = erg;


    if (document.getElementById("kostenVersand_d").innerHTML != "Gratis") {

        var sumErg;

        thousands = thousands + versandThousands;
        hundreds = hundreds + versandHundreds;
        decimals = decimals + versandDecimals;

        while (decimals > 100) {

            decimals = decimals - 100;
            hundreds = hundreds + 1;

        }

        while (hundreds > 1000) {

            hundreds = hundreds - 1000;
            thousands = thousands + 1;

        }

        if (thousands != 0) {
            sumErg = thousands + "." + hundreds + "," + decimals + " EUR";
        } else {
            if (hundreds != 0) {
                sumErg = hundreds + "," + decimals + " EUR";
            } else {
                if (decimals != 0) {
                    sumErg = "00" + "," + decimals + " EUR";
                } else {
                    sumErg = "00,00 EUR";
                }
            }
        }




        document.getElementById("gesamtRechnung_d").innerHTML = sumErg;
    }else {
        document.getElementById("gesamtRechnung_d").innerHTML = erg;
    }


}