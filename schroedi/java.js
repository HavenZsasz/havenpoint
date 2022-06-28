


var test = 1

document.write("Hallo Hallo " + test); //Einzeile Kommentare sind so umzusetzen

var TAGE_IM_JAHR = 365; //Variablen nur in Großbuchstaben sollten nicht verändert werden (reine Konvention)
const DAYS_PER_YEAR = 365 //Legt im neuesten JS eine Variable fest, die nicht verändert werden kann, Konstante


function schuheZaehler() {

    var TAGE = 365;
    var regale = document.getElementById("rega").value;
    regale = parseInt(regale); //Sorgt dafür, dass der String in Int umgerechnet wird
    var paare = document.getElementById("paa").value;
    paare = parseInt(paare);
    var paaredaneben = document.getElementById("paaredaneb").value;
    paaredaneben = parseInt(paaredaneben);
    var paaregesamt = paaredaneben + paare * regale;
    var schuhe = paaregesamt * 2;
    var meineID = "schuhe"
    document.getElementById(meineID).innerHTML = schuhe; //innerHTML ist eine Variable von <span>. Diese bestimmt den geschriebenen Inhalt

}

function alarm() {
    alert("ALLLAAAARRMMM");
}

var tester = "HALLO";

function kaufen() {

    var textfeld = document.getElementById("kaufa");
    var liste = document.getElementById("ketten");
    var artikel = textfeld.value;
    liste.innerHTML = liste.innerHTML + " " + artikel;
    textfeld.value = "";


}



























