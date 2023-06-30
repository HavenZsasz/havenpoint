<?php
// Start the session
session_start();

$session_value=(isset($_SESSION['logged_in']))?$_SESSION['logged_in']:'';
$session_value2=(isset($_SESSION['username']))?$_SESSION['username']:'';
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plane Hunter</title>
    <link href="format.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
    var myvar='<?php echo $session_value;?>';
    </script>
    <script type="text/javascript">
    var myvar2='<?php echo $session_value2;?>';
    </script>

</head>

<body>


    <div id="logSign">

        <div id = "logCheck">Not Logged In</div>
        <button id = "logOut">Log Out</button>
        <div id = "profile">
            <a href = "profile.php">Open Profile</a>
        </div>
        

        <!--
        <h2>Login Old</h2>
        <form action="login.php" method="post">
            <div class="planeInput">
                <input class="planeForm" type="text" name="nameLog" placeholder = "Username" />
            </div>
            <div class="locationInput">
                <input class="locationForm" type="text" name="passwordLog" placeholder = "password">
            </div>
            
            <input type="submit" />
        </form>
        -->

        <div id = "logInDiv">
        <h2>Login</h2>
            <div class="planeInput">
                <input id = "nameLogForm" class="planeForm" type="text" name="nameLog" placeholder = "Username" />
            </div>
            <div class="locationInput">
                <input id = "passwordLogForm" class="locationForm" type="text" name="passwordLog" placeholder = "password">
            </div>
            <button id = "logInButton">Log In</button>
        </div>

        <!--
        <h2>Sign Up Old</h2>
        <form action="signup.php" method="post">
            <div class="planeInput">
                <input class="planeForm" type="text" name="nameSign" placeholder = "Username"/>
            </div>
            <div class="locationInput">
                <input class="locationForm" type="text" name="passwordSign" placeholder = "password">
            </div>
            <div class="locationInput">
                <input class="locationForm" type="text" name="emailSign" placeholder = "eMail">
            </div>
            <input type="submit" />
        </form>
        -->


        <div id = "signUpDiv">
        <h2>Sign Up</h2>
            <div class="planeInput">
                <input class="planeForm" id = "nameSignForm" type="text" name="nameSign" placeholder = "Username"/>
            </div>
            <div class="locationInput">
                <input class="locationForm" id = "passwordSignForm" type="text" name="passwordSign" placeholder = "password">
            </div>
            <div class="locationInput">
                <input class="locationForm" id = "emailSignForm" type="text" name="emailSign" placeholder = "eMail">
            </div>
            <button id = "signUpButton">Sign Up</button>
        </div>



    </div>

    <!--
    <h1>This is plane hunter. Below, provide the type of plane and where you found it!</h1>
    <form action="databaseCreator.php" method="post">
        <div id="planeInput">
            <input id="planeForm" type="text" name="plane" />
            <div>Input the plane here</div>
        </div>
        <div id="locationInput">
            <input id="locationForm" type="text" name="location">
            <div>Input the location here</div>
        </div>
        <input type="submit" />
    </form>
    -->

    <h1>This is plane hunter. Below, provide the type of plane and where you found it!</h1>
    <div id = "blogForm">
        <div id="planeInput" class = "planeInput">
            <input id="planeForm" class = "planeForm" type="text" name="plane" />
            <div>Input the plane here</div>
        </div>
        <div id="locationInput" class = "locationInput">
            <input id="locationForm" class = "locationForm" type="text" name="location">
            <div>Input the location here</div>
        </div>
        <div id="descInput" class = "locationInput">
            <input id="descForm" class = "locationForm" type="text" name="description">
            <div>Input the description here</div>
        </div>
        <button id = "blogButton">Post it!</button>
    </div>

    <div id = "search">
        <!--
        <select id = "searchClass" name = "searches">
            <option value ="">Select Search Criteria</option>
            <option value ="1">username</option>
            <option value ="2">plane</option>
            <option value ="3">location</option>
        </select>
        -->
        <input id = "searchText" class = "locationForm" type = "text" placeholder = "Search?!">
        <button id = "searchButton">Search</button>
    </div>


    <div id = "blog">
        
    </div>

    <div id = "tag">

    </div>

    <h2 id = "recoHead">Check out the following Post, you will like it!</h2>

    <div id = "recommendation">

    </div>
    




   
    <script src = "loadPosts.js"></script>
    <script src = "logout.js"></script>
    <script src = "loginAjax.js"></script>
    <script src = "signUpAjax.js"></script>
    <script src = "blogPostAjax.js"></script>
    <script src = "search.js"></script>
    <script src = "addTag.js"></script>
    <script src = "likeAndBookmark.js"></script>
    <script src = "recommendations.js"></script>
    
    
    
</body>

</html>