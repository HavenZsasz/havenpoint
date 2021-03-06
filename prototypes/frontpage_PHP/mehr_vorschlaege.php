<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
    <link rel="shortcut icon" href="favicon.ico">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/dayiPadPortrait.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/daySmartphonesPortrait.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/dayMiniDevices.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/dayTypicalDesktop.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/daySmallTablets.css">




    <title>Havenpoint - Startseite</title>
</head>

<body>



    <div id="all">
        <!--#all = Container für alles, das nicht zum Dropdown der Mobile Version gehört, um die Seite aufzuteilen-->
        <div id="sitehead">

            <div id="logo-mehr-mobile">
                <!--Ausrichtung des Hamburger Buttons am Logo; für die Desktop-Version: #mehr {display:none;} im CSS setzen-->

                <a id="click-logo" href="frontpage.html"><img id="logo" src="logoDayKomprimiert1.png"></a>

                <a id="mehr" href="#">&#9776</a>
            </div>

            <form id="search-container">
                <input id="suche" placeholder="Alle Kategorien durchsuchen...">


            </form>

            <div id="round-container">
                <img id="profilbild" src="segelKomprimiert2.png">
            </div>


            <div id="navigation">
                <div id="plus-container">+
                </div>

                <a id="entdecken" href="entdecken.html">Entdecken</a>
                <a id="neuware" href="#">Neuware</a>
                <a id="inserate" href="#">Inserate</a>
                <a id="dienstleistungen" href="#">Dienstleistungen</a>
                <a id="automobil" href="#">Automobil</a>
                <a id="immobilien" href="#">Immobilien</a>


            </div>                          
        </div>


        <div id="seiteninhalt">
            <!--Hier drunter kommt der Seiteninhalt (alles unter der NavBar; für alle Versionen)-->


            <h1>Interessant für Dich</h1>
            <br>

            <div id="alle-vorschlaege-container">
                <div class="vorschlag-container">
                    <div class="artikel-bild-container">
                        <img id="vorschlag-bild" src="logoDayKomprimiert1.png">
                    </div><br>
                    <em>Testartikel</em><br>
                    <span class="preis-bezeichner">69,69€</span><br><br>
                    <span class="bezeichner"><span class="zustand-bezeichner">Neu</span><br>Von<a
                            class="shop-bezeichner"> Havenpoint</a></span>

                </div>
                <div class="vorschlag-container">
                    <div class="artikel-bild-container">
                        <img id="vorschlag-bild-2" src="bg2.png">
                    </div><br>
                    <em>Mittelalterliche Insel</em><br>
                    <span class="preis-bezeichner">100.000,00€</span><br><br>
                    <span class="bezeichner"><span class="zustand-bezeichner">Immobilie (Kauf)</span><br>Von<a
                            class="shop-bezeichner"> ImmoScout24</a></span>
                </div>

            </div>
            <div id="flex-for-mehr-anzeigen">
                <div id="mehr-anzeigen">Mehr anzeigen</div>

            </div>

            <?php 
            $test = 70;
            echo $test;
            ?>

            <h2>Aktuelle Trends</h2>
            <br>
            <div id="alle-vorschlaege-container">
                <div class="vorschlag-container">
                    <div class="artikel-bild-container">
                        <img id="vorschlag-bild" src="artikeltest.jpg">
                    </div><br>
                    <em>UI Finanzberatung</em><br>
                    <span class="preis-bezeichner">Preise per Absprache</span><br><br>
                    <span class="bezeichner"><span class="zustand-bezeichner">Dienstleistung</span><br>Von<a
                            class="shop-bezeichner"> Union Investment</a></span>

                </div>
                <div class="vorschlag-container">
                    <div class="artikel-bild-container">
                        <img id="vorschlag-bild-2" src="ente5.jpg">
                    </div><br>
                    <em>Niklas</em><br>
                    <span class="preis-bezeichner">5,00€ und ein Ayran</span><br><br>
                    <span class="bezeichner"><span class="zustand-bezeichner">Gebraucht</span><br>Von<a
                            class="shop-bezeichner"> Deppenzuchtverein Roßwälden</a></span>
                </div>

            </div>






            <!--Ende des Seiteninhalts-->
            <br>
            <br>
        </div>

    </div>
    <!--Dropdown Menü der Mobile Version-->
    <div id="dropdown-mehr">
        <a id="close-mobile-dropdown" href="#">&#9776</a>
        <div id="div-for-round-container-mobile">
            <div id="round-container-mobile">

                <img id="profilbild-mobile" src="segelKomprimiert2.png">

            </div>
        </div>
        <br>
        <br>
        <ul id="dropdown-mobile-liste">
            <li id="toggle-switch-li">
                <div id="toggle-switch">
                    <div id="lightmode">L</div>
                    <div id="darkmode">D</div>
                    <div id="auto-dark-light">auto</div>
                </div>
            </li>
            <li id="startseite-mobile-li"><a id="startseite-mobile" style="color:rgb(0,220,253);font-weight:bold;"
                    href="#">Startseite</a></li>
            <li id="neuware-mobile-li"><a id="neuware-mobile" href="#">Neuware</a></li>
            <li id="inserate-mobile-li"><a id="inserate-mobile" href="#">Inserate</a></li>
            <li id="dienstleistungen-mobile-li"><a id="dienstleistungen-mobile" href="#">Dienstleistungen</a></li>
            <li id="automobil-mobile-li"><a id="automobil-mobile" href="#">Automobil</a></li>
            <li id="immobilien-mobile-li"><a id="immobilien-mobile" href="#">Immobilien</a></li>

        </ul>

    </div>
    <!--Ende des Dropdown Contents-->



    <script src="frontpage_JS/darkmode.js"></script>
    <script src="frontpage_JS/dropdown.js"></script>
    <noscript>Dein Browser unterstützt leider kein JavaScript (oder JavaScript ist nicht aktiviert), dementsprechend
        können Inhalte und Funktionen fehlen. ;(</noscript>


</body>

</html>