<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";


$tagID = $_REQUEST['tagID'];




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT tagID, postID, tagDesc FROM tags WHERE postID = $tagID";
$result = $conn->query($sql);

echo $tagID;
      echo ":";


  if ($result->num_rows > 0) {
    // output data of each row
          
    while ($row = $result->fetch_assoc()) {
      
          echo "#".$row['tagDesc']." ";
    }



  }

$conn->close();
?>