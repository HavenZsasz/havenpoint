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
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/biggerTabletsAndDesktop.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/smartphones.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/miniDisplays.css">
    <link id="stylesheet" rel="stylesheet" href="frontpage_CSS/smallTablets.css">
    <link id="stylesheet" rel="stylesheet" href="/prototypes/multiple_css/biggerTabletsAndDesktop_multiple.css">





    <title>Havenpoint - Startseite</title>
</head>

<body>
    <div id="everything" style="display:none;">
        <div id="desktop-version">
            <div id="login-background_d">
            </div>

            <div id="navbar_d">



                <a id="clickLogoLink_d" href="frontpage.html"><img id="clickLogo_d"
                        src="assets/logoDayKomprimiert1.png"></a>

                <div id="navbar_right_d">

                    <div id="search_bar_d">
                        <input type="text" id="searcher_d" placeholder="Was darfs sein?">
                        <svg id="suchlupe_d" width="100%" height="100%" viewBox="0 0 95 93" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xml:space="preserve" xmlns:serif="http://www.serif.com/"
                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <path
                                d="M46.122,47.008c-3.333,3.718 -7.995,6.22 -13.237,6.753l-2.104,0.106c-11.368,0 -20.597,-9.229 -20.597,-20.596c0,-11.368 9.229,-20.597 20.597,-20.597l2.104,0.107c10.381,1.055 18.492,9.833 18.492,20.49c0,4.081 -1.19,7.887 -3.242,11.09c3.39,1.366 8.762,4.515 14.446,8.598c8.788,6.313 15.013,12.486 13.893,13.775c-1.12,1.289 -9.164,-2.789 -17.952,-9.103c-5.567,-3.999 -10.106,-7.942 -12.4,-10.623Zm-13.696,-29.752c8.113,0.825 14.453,7.685 14.453,16.015c-0,8.329 -6.34,15.19 -14.453,16.015l-1.645,0.083c-8.885,-0 -16.098,-7.213 -16.098,-16.098c-0,-8.885 7.213,-16.098 16.098,-16.098l1.645,0.083Z"
                                style="fill:#7C7A7A;" />
                        </svg>
                    </div>

                    <div id="menu_d">

                        <a id="entdecken_tab_d" href="/prototypes/entdecken.html">Entdecken</a>
                        <a id="neuware_tab_d" href="/prototypes/neuware.html">Neuware</a>
                        <a id="inserate_tab_d" href="/prototypes/inserate.html">Inserate</a>
                        <a id="dienstleistungen_tab_d" href="/prototypes/services.html">Dienstleistungen</a>
                        <a id="automobil_tab_d" href="/prototypes/automobil.html">Automobil</a>
                        <a id="immobilien_tab_d" href="/prototypes/immobilien.html">Immobilien</a>

                    </div>
                </div>

                <div id="profileclick_d">
                    <img id="profilepic_d" src="assets/logoDayKomprimiert1.png">
                    <div id="newMessage_d">1</div>
                </div>
                <div id="loggedInDropDownSquare_d">
                    <div id="dreiWege_d">
                        <div id="lighter_d">L</div>
                        <div id="darker_d">D</div>
                        <div id="system_d">S</div>
                    </div>
                    <div id="chatContainer_d"><img id = "inboxIcon_d" src="/prototypes/assets/inbox-icon.svg">
                        <div id="newMessage1_d">1</div>
                    </div>
                    <div id="myProfile_d">Mein Profil</div>
                    <div id="settings_d">Einstellungen</div>
                    <div id="logout_d">LOGOUT</div>
                </div>

            </div>

            <!--#region-----MESSAGE PREVIEW-->

            <div id="messagePreviewContainer_d">


                <div id="topBarMessagePreview_d">
                    <div id="closeMessagePreview_d">&#8594;</div>
                    <a href = "/prototypes/inbox_d.html"><div id="openMessagesInFull_d">Full-Screen Mode</div></a>
                </div>
                <div id="messageUmschalteButton_d">
                    <div id="buttonsZumUmschalten_d">
                        <div id="haendlerKnopf_d">Händler</div>
                        <div id="borderMessage_d"></div>
                        <div id="userKnopf_d">User</div>
                    </div>
                </div>

                <div id="messagesInPreviewHaendler_d">

                    <div class="messageNotRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/WMF-Profilbild.webp">
                                </div>
                                <div id="profilNameMessage_d">
                                    WMF Töpferverband
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                19:07 Uhr
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Wir haben Ihre Bestellung erhalten, vielen Dank!
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/nature-3101465_1280.jpeg">
                                </div>
                                <div id="profilNameMessage_d">
                                    Der Deine-Mutter Shop
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                Gestern
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Was ledschde Preiz?
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/mmKlein.svg">
                                </div>
                                <div id="profilNameMessage_d">
                                    Seriöser iPhone Händler
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                24.04.2022
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Ich: Zu deinem teuren Preis kauf ich gar nix.
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/WMF-Profilbild.webp">
                                </div>
                                <div id="profilNameMessage_d">
                                    WMF Töpferverband
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                26.07.1999
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Ich: Nö machen wir nicht.
                        </div>
                    </div>

                </div>

                <div id="messagesInPreviewUser_d">

                    <div class="messageNotRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/ente5.jpg">
                                </div>
                                <div id="profilNameMessage_d">
                                    Entenverkäufer
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                20:07 Uhr
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Deine Ente kommt pünktlich zum Abendessen.
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/iphone.jpeg">
                                </div>
                                <div id="profilNameMessage_d">
                                    NeilA380
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                Gestern
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Unter 10.000 EUR red ich gar nicht mit dir.
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/logoDayKomprimiert1.png">
                                </div>
                                <div id="profilNameMessage_d">
                                    Havenpoint
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                24.04.2022
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            Ich: Super, danke für den geniale Einkauf!
                        </div>
                    </div>
                    <div class="messageRead_d">
                        <div id="obereSpalteMessage_d">
                            <div id="leftMessage_d">
                                <div id="profilBildMessage_d">
                                    <img src="/prototypes/assets/WMF_Pop.jpeg">
                                </div>
                                <div id="profilNameMessage_d">
                                    I_LOVE_GESCHIRR69
                                </div>
                            </div>
                            <div id = "rightMessage_d">
                                26.07.1999
                            </div>
                        </div>
                        <div id="untereSpalteMessage_d">
                            You know whats hard?
                        </div>
                    </div>
                   

                </div>






            </div>

            <!--#endregion-->

            <!--#region-----TABS--->
            

            <div id="tab_erweiterungen_d">

                <div id="neuware_erweiterung_d" class="erweiterungen_d">
                    <div>
                        <span>Alle anzeigen</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div>
                        <span>NEUWARE</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div id="bild_d">
                        <img src="/schroedi/ducks/ente1.jpg">
                    </div>

                </div>

                <div id="inserate_erweiterung_d" class="erweiterungen_d">
                    <div>
                        <span>Alle anzeigen</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div>
                        <span>INSERATE</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div id="bild_d">
                        <img src="/schroedi/ducks/ente2.jpg">
                    </div>

                </div>

                <div id="dienstleistungen_erweiterung_d" class="erweiterungen_d">
                    <div>
                        <span>Alle anzeigen</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div>
                        <span>DIENSTLEISTUNGEN</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div id="bild_d">
                        <img src="/schroedi/ducks/ente3.jpg">
                    </div>

                </div>

                <div id="automobil_erweiterung_d" class="erweiterungen_d">
                    <div>
                        <span>Alle anzeigen</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div>
                        <span>AUTOMOBIL</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div id="bild_d">

                        <img src="/schroedi/ducks/ente4.jpg">
                    </div>

                </div>

                <div id="immobilien_erweiterung_d" class="erweiterungen_d">
                    <div>
                        <span>Alle anzeigen</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div>
                        <span>IMMOBILIEN</span>
                        <div><img src=""><span>Möbel</span></div>
                        <div><img src=""><span>Kleidung</span></div>
                        <div><img src=""><span>Elektronik</span></div>
                        <div><img src=""><span>Flugzeuge</span></div>
                    </div>
                    <div id="bild_d">
                        <img src="/schroedi/ducks/ente5.jpg">
                    </div>

                </div>

            </div>

            <!--#endregion-->

            <!--#region------LOGIN MASKE--->
            





            <div id="login-box_d" class="login-box_d">
                <div id="close-login-box_d">+</div>

                <h2 id="caption_login_d">Login</h2>
                <div id="logindaten-falsch_d"></div>
                <form>
                    <div class="user-box_d">
                        <input id="login-mail_d" type="text" name="" required="">
                        <label>Username</label>
                    </div>
                    <div class="user-box_d">
                        <input id="login-passwort_d" type="password" name="" required="">
                        <label>Passwort</label>
                    </div>


                    <div id="regi-box_d">
                        <div class="user-box_d">
                            <input type="password" name="" required="">
                            <label>Passwort Wiederholen</label>
                        </div>
                        <div class="moreThanOne">
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>Vorname</label>
                            </div>
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>Nachname</label>
                            </div>
                        </div>
                        <div class="moreThanOne_d">
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>PLZ</label>
                            </div>
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>Wohnort</label>
                            </div>
                        </div>
                        <div class="moreThanOne_d">
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>Straße</label>
                            </div>
                            <div class="user-box_d registration_d">
                                <input type="text" name="" required="">
                                <label>Hausnummer</label>
                            </div>
                        </div>

                        <div class="user-box_d">
                            <input type="text" name="" required="" onfocus="(this.type = 'date')"
                                onblur="(this.type='text')">
                            <label>Geburtsdatum</label>
                        </div>

                    </div>
                    <div id="buttons-login_d">
                        <a id="login_d" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </a>
                        <a id="registrieren_d" class="no-show_d" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Registrieren
                        </a>
                    </div>
                </form>
            </div>

            <!--#endregion-->


            <!--#region------MAIN-->
            


            <div class="main_d">

                <!--#region-->
                <!-------------- SLIDE SHOW --------->

                <div id="slideshow_d" class="main-objects_d">

                    <img class="slider_d animate-left_d" src="/prototypes/assets/Layer_1.png">
                    <img class="slider_d animate-left_d" src="/prototypes/assets/layerDark.png">
                    <img class="slider_d animate-left_d" src="/prototypes/assets/layerdarkm.jpg">
                    <span id="clickLeft_d" class="clicker_d">&#10094;</span>
                    <span id="clickRight_d" class="clicker_d">&#10095;</span>

                    <br>

                    <div style="text-align:center">
                        <span class="dot_d" onclick="currentSlide_d(0)"></span>
                        <span class="dot_d" onclick="currentSlide_d(1)"></span>
                        <span class="dot_d" onclick="currentSlide_d(2)"></span>
                    </div>

                </div>

                <!--#endregion-->

                <!--#region---------------------- MostVisited ---------->

                <span id="mostVisitedHeader_d">DAS IST DIE NEUSTE WARE - DAS UND NUR DAS</span>

                <div id="mostVisited_d" class="main-objects_d">

                    <a href="/prototypes/artikel3.html">
                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/WMF_Topf.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                    </a>

                    <a href="/prototypes/artikel3.html">
                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/WMF_Topf.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                    </a>

                    <a href="/prototypes/artikel3.html">
                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/WMF_Topf.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                    </a>

                    <a href="/prototypes/artikel3.html">
                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/WMF_Topf.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                    </a>

                    <a href="/prototypes/artikel3.html">
                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/WMF_Topf.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                    </a>


                    <span id="clickLeftMostVisited_d"
                        class="clickerMostVisited_d leftClickMostVisited_d">&#10094;</span>
                    <span id="clickRightMostVisited_d"
                        class="clickerMostVisited_d rightClickMostVisited_d">&#10095;</span>


                </div>
                <!--#endregion -->

                <!--#region---------------------- MostVisited ---------->

                <div class="productSlider_d">

                    <span id="mostVisitedHeader_d">DAS GEHT IN DER KATEGORIE AUTOMOBILE</span>

                    <div id="mostVisited_d" class="main-objects_d">

                        <div id="firstMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer mit einer eingebauter Tastatur </span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>

                        <div id="secondMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Geiler Teppich</span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                        <div id="thirdMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer</span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                        <div id="thirdMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer</span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                        <div id="thirdMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer</span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>
                        <div id="thirdMostVisited_d" class="mostVisited_d">
                            <div class="mostVisitedImageDiv_d"><img src="/prototypes/assets/iphone.jpeg"></div>
                            <div class="mostVisitedBeschreibung_d">
                                <span id="beschreibung_d">Fetter Computer</span>
                                <span id="preis_d">1.299€</span>
                            </div>
                        </div>


                        <span id="clickLeftMostVisited_d"
                            class="clickerMostVisited_d leftClickMostVisited_d">&#10094;</span>
                        <span id="clickRightMostVisited_d"
                            class="clickerMostVisited_d rightClickMostVisited_d">&#10095;</span>


                    </div>

                </div>
                <!--#endregion -->





            </div>

            <!--#endregion-->





            <br><br><br><br><br><br><br><br><br><br><br>


            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>


        </div>



        <div id="mobile-version">

            <div id="over-all_m">
                <div id="all_m">
                    <!--#all = Container für alles, das nicht zum Dropdown der Mobile Version gehört, um die Seite aufzuteilen-->
                    <div id="sitehead_m">
                        

                        <div id="logo-mehr-mobile_m">
                            <!--Ausrichtung des Hamburger Buttons am Logo; für die Desktop-Version: #mehr {display:none;} im CSS setzen-->

                            <div id="logo-center-filler_m">
                                <a id="go-to-inbox" href="inbox.html"> <img id="inbox-icon"
                                        src="assets/inbox-icon.svg"></a>
                            </div>



                            <a id="click-logo_m" href="frontpage.html"><img id="logo_m"
                                    src="assets/logoDayKomprimiert1.png"></a>




                            <a id="mehr_m" href="#">&#9776</a>
                        </div>






                        <form id="search-container_m">
                            <svg id="suchlupe_m" width="100%" height="100%" viewBox="0 0 95 93" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xml:space="preserve" xmlns:serif="http://www.serif.com/"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <path
                                    d="M46.122,47.008c-3.333,3.718 -7.995,6.22 -13.237,6.753l-2.104,0.106c-11.368,0 -20.597,-9.229 -20.597,-20.596c0,-11.368 9.229,-20.597 20.597,-20.597l2.104,0.107c10.381,1.055 18.492,9.833 18.492,20.49c0,4.081 -1.19,7.887 -3.242,11.09c3.39,1.366 8.762,4.515 14.446,8.598c8.788,6.313 15.013,12.486 13.893,13.775c-1.12,1.289 -9.164,-2.789 -17.952,-9.103c-5.567,-3.999 -10.106,-7.942 -12.4,-10.623Zm-13.696,-29.752c8.113,0.825 14.453,7.685 14.453,16.015c-0,8.329 -6.34,15.19 -14.453,16.015l-1.645,0.083c-8.885,-0 -16.098,-7.213 -16.098,-16.098c-0,-8.885 7.213,-16.098 16.098,-16.098l1.645,0.083Z"
                                    style="fill:#7C7A7A;" />
                            </svg>
                            <input id="suche_m" placeholder="Alle Kategorien durchsuchen...">


                        </form>

                        <div id="round-container_m">
                            <img id="profilbild_m" src="assets/segelKomprimiert2.png">
                        </div>


                        <div id="block-nav_m">
                            <div id="nav-div_m">
                                <div id="navigation_m">

                                    <a class="aktive-seite_m" id="frontpage_m" href="frontpage.html">Startseite</a>
                                    <div id="plus-container_m">

                                    </div>
                                    <a id="entdecken_m" href="entdecken.html">Entdecken</a>


                                </div>
                            </div>
                            <div id="plus-dd-div_m">
                                <div id="plus-dropdown_m">
                                    <div id="plus-neues-inserat_m">
                                        <a id="plus-neues-inserat-link_m" href="neues-inserat.html">Neues Inserat</a>
                                    </div>
                                    <div id="plus-neue-anfrage_m">
                                        <a id="plus-neue-anfrage-link_m" href="neue-anfrage.html">Neue Anfrage</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <h1 id="secretsource-h_m" style="margin-left: 10px;"></h1>


                    <div id="seiteninhalt_m">
                        <!--Hier drunter kommt der Seiteninhalt (alles unter der NavBar; für alle Versionen)-->

                        <br>


                        <div id="slidecontainer_m" class="slideshow-container_m">

                            <div class="mySlides_m fade_m">
                                <img id="slider-img-1_m" src="assets/Layer_1.png" style="width:100%">
                                <div class="text_m"><em class="em-mainslider_m">Willkommen bei Havenpoint</em></div>
                            </div>

                            <div class="mySlides_m fade_m">
                                <img id="slider-img-2_m" src="assets/layerDark.png" style="width:100%">
                                <div class="text_m"><em class="em-mainslider_m">50% auf sämtliche Haushaltsartikel</em>
                                </div>
                            </div>

                            <div class="mySlides_m fade_m" style="background-color:rgb(213, 212, 212);height:220px;padding:15px;padding-right: 35px;">
                                <a href="havnpay.html"><img id="slider-img-3_m" src="assets/payLogo2.svg" style="width:100%;padding: right 100px;;margin-top: 70px;margin-right: 90px;">
                                <div class="text_m"><em class="em-mainslide_mr" style="padding-right:45px;margin-right: 30px;">Entdecke unseren hauseigenen Zahlungsdienst!</em>
                                </div></a>
                            </div>

                            <div class="mySlides_m fade_m">
                                <a href="profil.html"><img id="slider-img-4_m" src="assets/mediamarkt.png"
                                        style="width:100%"></a>
                                <div class="text_m"><em class="em-mainslide_mr">MediaMarkt ist nun auch auf
                                        HavenPoint</em></div>
                            </div>

                            <a class="prev_m" onclick="plusSlides_m(-1)">❮</a>
                            <a class="next_m" onclick="plusSlides_m(1)">❯</a>

                        </div>
                        <br>

                        <div style="text-align:center">
                            <span class="dot_m" onclick="currentSlide_m(1)"></span>
                            <span class="dot_m" onclick="currentSlide_m(2)"></span>
                            <span class="dot_m" onclick="currentSlide_m(3)"></span>
                            <span class="dot_m" onclick="currentSlide_m(4)"></span>
                        </div>

                        <div id="login-inhalt_m">

                            <h1>Interessant für Dich</h1>
                            <!--*ngFor and Services; Einsetzen aus Datenbank-->
                            <br>

                            <div id="alle-vorschlaege-container_m">
                                <a id="gotoMM_m" href="artikel2.html" style="text-decoration:none; color: inherit;">
                                    <div class="vorschlag-container_m">
                                        <div class="artikel-bild-container_m">
                                            <img id="vorschlag-bild_m" src="assets/logoDayKomprimiert1.png">
                                        </div><br>
                                        <em>Testartikel</em><br>
                                        <span class="preis-bezeichner_m">69,69€</span><br><br>
                                        <span class="bezeichner_m"><span
                                                class="zustand-bezeichner_m">Neu</span><br>Von<a href="profil3.html"
                                                class="shop-bezeichner_m"> Havenpoint</a></span>

                                    </div>
                                </a>

                                <div class="vorschlag-container_m">
                                    <div class="artikel-bild-container_m">
                                        <img id="vorschlag-bild-2_m" src="assets/bg2.png">
                                    </div><br>
                                    <em>Insel</em><br>
                                    <span class="preis-bezeichner_m">100.000,00€</span><br><br>
                                    <span class="bezeichner_m"><span class="zustand-bezeichner_m">Immobilie
                                            (Kauf)</span><br>Von<a class="shop-bezeichner_m"> ImmoScout24</a></span>
                                </div>

                            </div>
                            <br>
                            <div id="alle-vorschlaege-container-interessant-2_m">
                                <div class="vorschlag-container_m">
                                    <div class="artikel-bild-container_m">
                                        <img id="vorschlag-bild-interessant-2_m" src="assets/logoDayKomprimiert1.png">
                                    </div><br>
                                    <em>Testartikel</em><br>
                                    <span class="preis-bezeichner_m">69,69€</span><br><br>
                                    <span class="bezeichner_m"><span class="zustand-bezeichner_m">Neu</span><br>Von<a
                                            class="shop-bezeichner_m"> Havenpoint</a></span>

                                </div>
                                <div class="vorschlag-container_m">
                                    <div class="artikel-bild-container_m">
                                        <img id="vorschlag-bild-interessant-3_m" src="assets/bg2.png">
                                    </div><br>
                                    <em>Insel</em><br>
                                    <span class="preis-bezeichner_m">100.000,00€</span><br><br>
                                    <span class="bezeichner_m"><span class="zustand-bezeichner_m">Immobilie
                                            (Kauf)</span><br>Von<a class="shop-bezeichner_m"> ImmoScout24</a></span>
                                </div>

                            </div>
                            <div id="flex-for-mehr-anzeigen_m">
                                <div id="mehr-anzeigen_m">Mehr anzeigen</div>

                            </div>

                        </div>




                        <h2>Aktuelle Trends</h2>
                        <br>
                        <div id="alle-vorschlaege-container_m">
                            <a id="gotoMM_m" href="artikel.html" style="text-decoration:none; color: inherit;">
                                <div class="vorschlag-container_m">
                                    <div class="artikel-bild-container_m">
                                        <img id="vorschlag-bild_m" src="assets/iphone.jpeg">
                                    </div><br>
                                    <em>iPhone 14 Pro</em><br>
                                    <span class="preis-bezeichner_m">Ab 1099€</span><br><br>
                                    <span class="bezeichner_m"><span class="zustand-bezeichner_m">Neu</span><br>Von<a
                                            style="text-decoration:none;" href="profil.html" class="shop-bezeichner_m">
                                            MediaMarkt</a></span>

                                </div>
                            </a>

                            <div class="vorschlag-container_m">
                                <div class="artikel-bild-container_m">
                                    <img id="vorschlag-bild-2_m" src="assets/ente5.jpg">
                                </div><br>
                                <em>Niklas</em><br>
                                <span class="preis-bezeichner_m">5,00€ und ein Ayran</span><br><br>
                                <span class="bezeichner_m"><span class="zustand-bezeichner_m">Gebraucht</span><br>Von<a
                                        class="shop-bezeichner_m"> Kekzuchtverein Roßwälden</a></span>
                            </div>

                        </div>
                        <br>
                        <div id="alle-vorschlaege-container-trend-2_m">
                            <div class="vorschlag-container_m">
                                <div class="artikel-bild-container_m">
                                    <img id="vorschlag-bild-trend-2_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em>UI Finanzberatung</em><br>
                                <span class="preis-bezeichner_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner_m"><span
                                        class="zustand-bezeichner_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container_m">
                                <div class="artikel-bild-container_m">
                                    <img id="vorschlag-bild-trend-3_m" src="assets/ente5.jpg">
                                </div><br>
                                <em>Niklas</em><br>
                                <span class="preis-bezeichner_m">5,00€ und ein Ayran</span><br><br>
                                <span class="bezeichner_m"><span class="zustand-bezeichner_m">Gebraucht</span><br>Von<a
                                        class="shop-bezeichner_m"> Kekzuchtverein Roßwälden</a></span>
                            </div>

                        </div>

                        <div id="flex-for-mehr-anzeigen-2_m">
                            <div id="mehr-anzeigen-2_m">Mehr anzeigen</div>

                        </div>


                        <h2>Weitere interessante Artikel</h2>

                        <div id="slideable-div_m">
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-2_m" src="assets/ente5.jpg">
                                </div><br>
                                <em id="em-slide_m">Niklas</em><br>
                                <span class="preis-bezeichner-slide_m">5,00€ und ein Ayran</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Gebraucht</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Kekzuchtverein Roßwälden</a></span>
                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-3_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-4_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-5_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-6_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide-7_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>
                            <div class="vorschlag-container-slide_m">
                                <div class="artikel-bild-container-slide_m">
                                    <img id="vorschlag-bild-slide_m" src="assets/artikeltest.jpg">
                                </div><br>
                                <em id="em-slide_m">UI Finanzberatung</em><br>
                                <span class="preis-bezeichner-slide_m">Preise per Absprache</span><br><br>
                                <span class="bezeichner-slide_m"><span
                                        class="zustand-bezeichner-slide_m">Dienstleistung</span><br>Von<a
                                        class="shop-bezeichner-slide_m"> Union Investment</a></span>

                            </div>


                        </div>









                        <br>
                        <br>
                        <!--Ende des Seiteninhalts-->
                    </div>
                    <a href="warenkorb.html">
                        <div id="div-cart_m">
                            <div id="cart_m">
                                <span id="cart-counter_m"></span>
                                <img id="cart-icon_m" src="assets/cart.svg">

                            </div>
                    </a>





                </div>
            </div>
            <!--Dropdown Menü der Mobile Version-->
            <div id="dropdown-mehr_m">
                <a id="close-mobile-dropdown_m" href="#">&#9776</a>
                <div id="connect-round-and-dropdown_m">
                    <div id="div-for-round-container-mobile_m">
                        <a id="anmelden_m">Anmelden</a>
                        <div id="round-container-mobile_m">

                            <img id="profilbild-mobile_m" src="assets/segelKomprimiert2.png">


                        </div>


                    </div>
                    <div id="round-container-dropdown_m">
                        <div id="mein-profil-div_m">
                            <a id="mein-profil_m" href="mein-profil.html">Mein Profil</a>
                        </div>
                        <div id="ueber-uns-div_m">
                            <a id="ueber-uns_m" href="aboutus.html">Über uns</a>
                        </div>
                        <div id="logout-div_m">
                            <a id="logout_m">Logout</a>
                        </div>
                    </div>
                </div>

                <br>
                <br>
                <ul id="dropdown-mobile-liste_m">
                    <li id="toggle-switch-li_m">
                        <div id="toggle-switch_m">
                            <div id="lightmode_m">L</div>
                            <div id="darkmode_m">D</div>
                            <div id="auto-dark-light_m">System</div>
                        </div>
                    </li>
                    <li id="startseite-mobile-li_m"><a id="startseite-mobile_m"
                            style="color:rgb(0,220,253);font-weight:bold;" href="#">Startseite</a></li>
                            <li id="neuware-mobile-li_m"><a id="neuware-mobile_m" href="follows.html">Folge Ich</a></li>
                    <li id="neuware-mobile-li_m"><a id="neuware-mobile_m" href="neuware.html">Neuware</a></li>
                    <li id="inserate-mobile-li_m"><a id="inserate-mobile_m" href="inserate.html">Inserate</a></li>
                    <li id="dienstleistungen-mobile-li_m"><a id="dienstleistungen-mobile_m"
                            href="services.html">Dienstleistungen</a></li>
                    <li id="automobil-mobile-li_m"><a id="automobil-mobile_m" href="automobil.html">Automobil</a>
                    </li>
                    <li id="immobilien-mobile-li_m"><a id="immobilien-mobile_m" href="immobilien.html">Immobilien</a>
                    </li>

                </ul>

            </div>

        </div>
        <!--Ende des Dropdown Contents-->

        <!--#region--->
        <!------------- LOGIN MASKE ------->

        <div id="login-box_m" class="login-box_m">
            <div id="close-login-box_m">+</div>
            <h2 id="caption_login_m">Login</h2>
            <div id="logindaten-falsch_m"></div>
            <form>
                <div class="user-box_m">
                    <input id="login-mail_m" type="text" name="" required="">
                    <label>E-Mail Adresse</label>
                </div>
                <div class="user-box_m">
                    <input id="login-passwort_m" type="password" name="" required="">
                    <label>Passwort</label>
                </div>

                <div id="regi-box_m">
                    <div class="user-box_m">
                        <input type="password_m" name="" required="">
                        <label>Passwort Wiederholen</label>
                    </div>
                    <div class="moreThanOne_m">
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>Vorname</label>
                        </div>
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>Nachname</label>
                        </div>
                    </div>
                    <div class="moreThanOne_m">
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>PLZ</label>
                        </div>
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>Wohnort</label>
                        </div>
                    </div>
                    <div class="moreThanOne_m">
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>Straße</label>
                        </div>
                        <div class="user-box_m registration_m">
                            <input type="text" name="" required="">
                            <label>Hausnummer</label>
                        </div>
                    </div>

                    <div class="user-box_m">
                        <input type="text" name="" required="" onfocus="(this.type = 'date')"
                            onblur="(this.type='text')">
                        <label>Geburtsdatum</label>
                    </div>

                </div>
                <div id="buttons-login_m">
                    <a id="login_m" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </a>
                    <a id="registrieren_m" class="no-show_m" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Anmelden
                    </a>
                </div>
            </form>
        </div>

        <!--#endregion-->


    </div>

    </div>

    <script src="entdecken_JS/darkmodeDesktop.js"></script>
    <script src='/prototypes/entdecken_JS/biggerTabletsAndDesktop.js'></script>
    <script src='/prototypes/entdecken_JS/loginCheck.js'></script>
    <script src='/prototypes/entdecken_JS/logout.js'></script>
    <script src="/prototypes/multiple_JS/openMessagePreview_d.js"></script>

    <script src="artikel_JS/cartCheck_m.js"></script>


    <script src="frontpage_JS/setup_m.js"></script>
    <script src="frontpage_JS/darkmode_m.js"></script>
    <script src="frontpage_JS/dropdown_m.js"></script>
    <script src="frontpage_JS/plus_dropdown_m.js"></script>
    <script src="frontpage_JS/loginCheck_m.js"></script>
    <script src="frontpage_JS/login_m.js"></script>
    <script src="frontpage_JS/logout_m.js"></script>
    <script src="frontpage_JS/profiledropdown_m.js"></script>
    <script src="frontpage_JS/moveSlides_m.js"></script>
    <script src="frontpage_JS/showmore_m.js"></script>
    <script src="frontpage_JS/sticky_m.js"></script>
    <noscript>Dein Browser unterstützt leider kein JavaScript (oder JavaScript ist nicht aktiviert), dementsprechend
        könnten Inhalte und Funktionen fehlen. ;(</noscript>



</body>

</html>