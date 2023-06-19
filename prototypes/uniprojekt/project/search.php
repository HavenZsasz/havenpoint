<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";


//$searchClass = $_REQUEST["searchClass"];
//$searchString = $_REQUEST["searchString"];

$searchStringOR = $_REQUEST["searchStringOR"];
$searchStringAND = $_REQUEST["searchStringAND"];
$tagOR = $_REQUEST["tagOR"];
$tagAND = $_REQUEST["tagAND"];



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p WHERE $searchStringAND
UNION
SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p LEFT JOIN tags t ON p.id = t.postID WHERE $tagAND";

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
    echo "<button id = \"bookmarkButton" . $row['id'] . "\" class = \"bookmarkButtons\" onclick=\"bookmarkPost(" . $row['id'] . ")\">";
    echo "Bookmark";
    echo "</button>";
    echo "</div>";
  }



} else {

  //$sql = "SELECT id, username, plane, location, description FROM posts WHERE " . $searchStringOR . "";

$sql = "SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p WHERE $searchStringOR
UNION
SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p LEFT JOIN tags t ON p.id = t.postID WHERE $tagOR";

  $result = $conn->query($sql);
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
    echo "</div>";
  }





}


/*
if($searchClass == 1) {
$sql = "SELECT id, username, plane, location, description FROM posts WHERE username LIKE '%".$searchString."%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
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
echo "</div>";
}
} 
}
if($searchClass == 2) {
$sql = "SELECT id, username, plane, location, description FROM posts WHERE plane LIKE '%".$searchString."%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
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
echo "</div>";
}
} 
}
if($searchClass == 3) {
$sql = "SELECT id, username, plane, location, description FROM posts WHERE location LIKE '%".$searchString."%'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
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
echo "</div>";
}
} 
}
*/








$conn->close();
?>