<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$userName = $_SESSION["username"];


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT count(*) AS total FROM likes WHERE userName LIKE '%".$userName."%'";
$result = $conn->query($sql);

$data = $result->fetch_assoc();
echo $data['total'];


$conn->close();
?>

