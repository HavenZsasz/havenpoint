$(document).ready(function(){ //sicherstellen, dass alle nötigen Ressourcen bereits geladen wurden

    //alert(jQuery("a").attr("title")); //== $("a").attr(title);
    //$("a").attr({title: "JQuery-Test", href: "https://www.google.com/"});
    //$("h1").html("mit JQUERY Inhalte änder");
    //var inhalt1 = $("#jquery-test1").text();
    //var inhalt2 = $("jquery-test").text();
    //$("#jquery-test1").text(inhalt2);
    /*$("#jquery-test1").css("color", "red");
    $("#jquery-test").addClass("geklickt");
    $("#jquery-test").removeClass("geklickt");
    $("#jquery-test").click(function(){
        var test= $("h1").html();
        test.appendChild(document.createElement("button"));
    })*/

    $("#show-n-hide").css("overflow", "hidden");


    $("#show-n-hide").on("tap",function() {
        $("#show-n-hide").toggle("slow");
    }
    );

    $("h1").click(function() {

        for(var i=0; i<10;i++) {

            $("h1").css("color", "red").slideUp(2000).slideDown(10000);


        }

        

    })

    

    

});