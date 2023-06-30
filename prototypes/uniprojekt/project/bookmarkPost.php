<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$postID = $_REQUEST["postID"];
$userName = $_REQUEST["userName"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO bookmarks (postID, userName)
VALUES ('$postID', '$userName')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

