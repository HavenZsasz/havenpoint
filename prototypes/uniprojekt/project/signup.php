<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$nameSign = $_REQUEST["nameSign"];
$passwordSign = $_REQUEST["passwordSign"];
$emailSign= $_REQUEST["emailSign"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO credentials (username, password, email)
VALUES ('$nameSign', '$passwordSign', '$emailSign')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

