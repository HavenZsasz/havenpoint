<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$userActive = $_REQUEST["userActive"];
$plane = $_REQUEST["plane"];
$location = $_REQUEST["location"];
$description = $_REQUEST["description"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO posts (username, plane, location, description)
VALUES ('$userActive', '$plane', '$location', '$description')";

$plane = "\"".$plane."\"";
$location = "\"".$location."\"";
$description = "\"".$description."\"";

if ($conn->query($sql) === TRUE) {
  //echo '{"nameSign":  '. $nameSign . ', "passwordSign":  '. $passwordSign .' , "emailSign":  '. $emailSign. ' }';
  echo '{"plane": ' . $plane . ', "location": ' . $location . ', "description": ' .$description. '}';
} 

$conn->close();
?>