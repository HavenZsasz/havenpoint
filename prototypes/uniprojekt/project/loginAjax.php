<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$counter = 0;


$nameLog = $_REQUEST["nameLog"];
$passwordLog = $_REQUEST["passwordLog"];
$test = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username, password FROM credentials";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {

    if($row["username"] == $nameLog && $row["password"] == $passwordLog) {

        $counter = $counter + 1;
        
    }
  }
  echo '<script type="text/javascript">console.log("'.$nameLog.'" "'.$passwordLog.'" );</script>';
  if($counter == 1) {
    echo "Login Successful";
    $_SESSION["logged_in"] = true;
    $_SESSION["username"] = $nameLog;
  }else {
    echo "Login Not Successful";
  }

} 
$conn->close();
?>