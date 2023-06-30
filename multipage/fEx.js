function filter(array,filterFunction) {
    var ergebnis= [];
    for(var i=0; i<array.length; i++) {
        if(filterFunction(array[i])) {
            ergebnis.push(array[i]);
        }
    }
    return ergebnis;
}

function filterNurGerade(zahl) {
    return zahl%2==0;
}

function filterVokale(wort) {
    
    var ersterBuchstabe=wort.charAt(0).toLowerCase();
    

    return ersterBuchstabe=="a" || ersterBuchstabe=="e" ||ersterBuchstabe=="i" ||ersterBuchstabe=="o" ||ersterBuchstabe=="u"; 
}



