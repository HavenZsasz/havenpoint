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
    <title>Plane Hunter - Your Profile</title>
    <link href="format.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript">
    var myvar='<?php echo $session_value;?>';
    </script>
    <script type="text/javascript">
    var myvar2='<?php echo $session_value2;?>';
    </script>
</head>

<body>

    <div id="profile">
        <a href="form.php">Home</a>
    </div>


    <h1>This is your personal Profile</h1>


    <div id="dashboard">
        <h2>Dashboard</h2>
        <div id="dashLikes">
            <div>So far you have liked this many posts: </div>
            <div id="amountLikes"></div>
        </div>
        <div id="dashSaved">
            <div>So far you have saved this many posts: </div>
            <div id="amountSaved"></div>
        </div>
        <div id="dashPosts">
            <div>So far you have posted this many posts: </div>
            <div id="amountPosts"></div>
        </div>
    </div>


    <div id="badges">
        <h2>Profile Achievements</h2>
        <p>Try to gather as many achievements as possible to help build your own cool airplane!</p>
        <div id="progressBarDiv">
            <div id="progressBar">Progress: 25%!</div>
        </div>
        <div id="buildYourPlane">
            
            <img id="personalizedPlane" src="b2.jpg"> <!--Source: https://pixabay.com/de/photos/deltaflügel-flugzeug-stealth-bomber-62833/-->
        </div>
        <div id="toDos">
            <div id="toDoSignUp" class="toDoDivs">Sign Up!</div>
            <div id="toDoLike" class="toDoDivs">Like one Post!</div>
            <div id="toDoSave" class="toDoDivs">Bookmark one Post!</div>
            <div id="toDoPost" class="toDoDivs">Create a Post!</div>
        </div>
    </div>


    <div id="savedPosts">
        <h2>These are all the Posts you saved for later</h2>
        <div id="savedContainer">

        </div>
    </div>





    <script src="dashboard.js"></script>
    <script src = "likeAndBookmark.js"></script>


</body>

</html>