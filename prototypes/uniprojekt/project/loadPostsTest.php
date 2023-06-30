<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$postString = "";
$namePost = "";
$planePost = "";
$locationPost = "";




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


//$sql = "SELECT id, username, plane, location, description FROM posts";

$sql = "SELECT *, COUNT(l.postID) AS count, liker
FROM posts p
LEFT JOIN (SELECT *, COUNT(likeID) AS liker FROM likes GROUP BY postID ORDER BY liker DESC) as l
ON p.id = l.postID
GROUP BY p.id
ORDER BY CASE WHEN liker > 1 THEN liker END DESC, p.id DESC";




$result = $conn->query($sql);


/*
$sql = "SELECT p.id, p.username, p.plane, p.location, p.description, t.postID, t.tagDesc
  FROM posts p
  RIGHT JOIN tags t
  ON p.id = t.postID
  ";
$result = $conn->query($sql);
*/


if ($_SESSION["logged_in"] == true) {


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
      echo "<button id = \"bookmarkButton" . $row['id'] . "\" class = \"bookmarkButtons\" onclick=\"bookmarkPost(" . $row['id'] . ")\">";
      echo "Bookmark";
      echo "</button>";
      echo "<p>Likes: ".$row['liker']."</p>";
      echo "</div>";
      
    }



  }

} else {

  $counter = 0;

  if ($result->num_rows > 0) {
    // output data of each row
    while (($row = $result->fetch_assoc()) && ($counter < 5)) {
      echo "<div id = \"" . $row['id'] . "\" class = \"postings\">";
      echo "<div>";
      echo "User: " . $row['username'] . " has found ";
      echo "the plane: " . $row['plane'] . " ";
      echo " in " . $row['location'] . " ";
      echo " : " . $row['description'] . " ";
      echo "</div>";
      echo "<div id = \"tagDiv" . $row['id'] . "\" >";
      
      echo "</div>";
      echo "<p>Likes: ".$row['liker']."</p>";
      echo "</div>";
      $counter = $counter + 1;
    }



  }



}






$conn->close();
?>