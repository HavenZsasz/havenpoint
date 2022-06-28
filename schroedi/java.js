


var test = 1

document.write("Hallo Hallo " + test); //Einzeile Kommentare sind so umzusetzen

var TAGE_IM_JAHR = 365; //Variablen nur in Großbuchstaben sollten nicht verändert werden (reine Konvention)
const DAYS_PER_YEAR = 365 //Legt im neuesten JS eine Variable fest, die nicht verändert werden kann, Konstante


function schuheZaehler() {

    var TAGE = 365;
    var regale = document.getElementById("regale").value;
    var paare = document.getElementById("paare").value;
    var paaredaneben = document.getElementById("paaredaneben").value;
    var paaregesamt = paaredaneben + paare * regale;
    var schuhe = paaregesamt * 2;
    var meineID = "schuhe"
    document.getElementById(meineID).innerHTML = schuhe; //innerHTML ist eine Variable von <span>. Diese bestimmt den geschriebenen Inhalt

}

function alarm() {
    alert("ALLLAAAARRMMM");
}

var tester = "HALLO";
























