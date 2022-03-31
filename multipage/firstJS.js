/*document.write(2*(5*8+7) + " Schuhe");
var first;
first=3*3;
var second=5;
document.write(" "+first*second);
const TAGE_IM_JAHR = 365;
document.write(" "+TAGE_IM_JAHR);
var ftest = 7/11;
document.write(" "+ ftest.toFixed(2));*/

/*function zaehleSchuhe() {
    const TAGE_IM_JAHR = 365;
    var regalboeden = 8;
    var paareJeBoden = 5;
    var paareNebenDemRegal = 7;
    var paare = paareNebenDemRegal + paareJeBoden * regalboeden;
    var schuhe = paare * 2;
    document.write(schuhe);
}*/

"ok".charAt(0); //= o
"ok".charAt(1); //= 1

console.log("beispiel".indexOf("e")); //=1; zählt von vorn nach hinten
console.log("beispiel".lastIndexOf("e")); //=6; zählt von hinten nach vorn, zeigt aber die Stelle von vorne gesehen an, sprich das hinterste e von vorn gesehen
console.log("beispiel".indexOf("e", 2)); //=6 zählt zum 2. e
console.log("beispiel".lastIndexOf("e", 5)); //=1; zählt zum 2. e von hinten gesehen, aber zeigt Stelle von vorn gesehen an
console.log("beispiel".indexOf("katze")); //=-1; wenn der Suchstring gar nicht vorkommt, ist das Ergebnis -1