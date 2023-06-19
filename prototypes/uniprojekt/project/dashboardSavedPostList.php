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


//$sql = "SELECT * FROM bookmarks JOIN posts ON userName = username  WHERE userName LIKE '%".$userName."%' ";
//$sql = "SELECT * FROM bookmarks b JOIN posts p ON b.postID  = p.id WHERE b.userName LIKE '%".$userName."%' ";

/*
$sql = "SELECT *, COUNT(l.postID) AS count
FROM posts p
RIGHT JOIN (SELECT * FROM bookmarks WHERE userName = '$userName') as l
ON p.id = l.postID
GROUP BY p.id
ORDER BY count DESC, p.id DESC";
*/

$sql = "SELECT *, COUNT(b.postID) as liker
FROM posts p
RIGHT JOIN (SELECT * FROM bookmarks WHERE userName = '$userName') as l
ON p.id = l.postID
LEFT JOIN (SELECT * FROM likes WHERE userName = '$userName') as b
ON p.id = b.postID
GROUP BY p.id
ORDER BY  liker DESC, p.id DESC";

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

      if($row['username'] != $_SESSION["username"]) {
        echo "<div>";
        echo "<input id = \"tagInput" . $row['id'] . "\" placeholder = \"Your Tag\" >";
        echo "<button id = \"dope" . $row['id'] . "\" class = \"tagButtons\" onclick=\"saveTag(" . $row['id'] . ")\">";
        echo "Post your tag";
        echo "</button>";
        echo "</div>";
        }

      echo "<button id = \"likeButton" . $row['id'] . "\" class = \"likeButtons\" onclick=\"likePost(" . $row['id'] . ")\">";
      echo "Like";
      echo "</button>";
      echo "</div>";
    
    }



  }


$conn->close();
?>

