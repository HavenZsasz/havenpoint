<?php
session_start();

$username = $_SESSION['username'];



$dir = __DIR__;


$python_file = $dir . '/offlineProcess.py';

//$command = "/Applications/XAMPP/xamppfiles/htdocs/project/offlineProcess.py";
$command = "/Users/blacklp_24/opt/anaconda3/bin/python /Applications/XAMPP/xamppfiles/htdocs/project/offlineProcess.py ".$username;
$output = shell_exec($command);


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


//$sql = "SELECT * FROM bookmarks JOIN posts ON userName = username  WHERE userName LIKE '%".$userName."%' ";
//$sql = "SELECT * FROM bookmarks b JOIN posts p ON b.postID  = p.id WHERE b.userName LIKE '%".$userName."%' ";
$sql = "SELECT * FROM posts WHERE id = '$output'";

echo $recoID;


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
    
      echo "<div id = \"div" . $row['id'] . "\" class = \"postings\">";
      echo "<div>";
      echo "User: " . $row['username'] . " has found ";
      echo "the plane: " . $row['plane'] . " ";
      echo " in " . $row['location'] . " ";
      echo " : " . $row['description'] . " ";
      echo "</div>";
      echo "<div id = \"tagDiv" . $row['id'] . "\" class = \"tagDivs\" >"; 
      echo "</div>";
      echo "<div>";
      echo "<input id = \"tagInput" . $row['id'] . "\" placeholder = \"Your Tag\" >";
      echo "<button id = \"dope" . $row['id'] . "\" class = \"tagButtons\" onclick=\"saveTag(" . $row['id'] . ")\">";
      echo "Post your tag";
      echo "</button>";
      echo "</div>";
      echo "<button id = \"likeButton" . $row['id'] . "\" class = \"likeButtons\" onclick=\"likePost(" . $row['id'] . ")\">";
      echo "Like";
      echo "</button>";
      echo "<button id = \"bookmarkButton" . $row['id'] . "\" class = \"bookmarkButtons\" onclick=\"bookmarkPost(" . $row['id'] . ")\">";
      echo "Bookmark";
      echo "</button>";
      echo "</div>";
    
    }



  }


$conn->close();







?>
