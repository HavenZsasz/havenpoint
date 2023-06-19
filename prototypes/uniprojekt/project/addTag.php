
<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$postID = $_REQUEST["postID"];
$tagDesc = $_REQUEST["tagDesc"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tags (postID, tagDesc)
VALUES ('$postID', '$tagDesc')";


$postID = "\"".$postID."\"";
$tagDesc = "\"".$tagDesc."\"";


if ($conn->query($sql) === TRUE) {
  //echo '{"nameSign":  '. $nameSign . ', "passwordSign":  '. $passwordSign .' , "emailSign":  '. $emailSign. ' }';
  echo '{"postID": ' . $postID . ', "postDesc": ' . $tagDesc . '}';
} 




$conn->close();
?>