/*document.write(2*(5*8+7) + " Schuhe");
var first;
first=3*3;
var second=5;
document.write(" "+first*second);
const TAGE_IM_JAHR = 365;
document.write(" "+TAGE_IM_JAHR);
var ftest = 7/11;
document.write(" "+ ftest.toFixed(2));*/

function zaehleSchuhe() {
    const TAGE_IM_JAHR = 365;
    var regalboeden = 8;
    var paareJeBoden = 5;
    var paareNebenDemRegal = 7;
    var paare = paareNebenDemRegal + paareJeBoden * regalboeden;
    var schuhe = paare * 2;
    document.write(schuhe);
}