<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userInfo";

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
/*
$sql = "SELECT *, COUNT(l.postID) AS count
FROM posts p
LEFT JOIN (SELECT *, COUNT(*) AS liker FROM likes GROUP BY postID ORDER BY liker DESC LIMIT 1) as l
ON p.id = l.postID
GROUP BY p.id
ORDER BY count DESC, p.id DESC";
*/
/*UNION
SELECT * 
FROM posts p
RIGHT JOIN likes l
ON p.id = l.postID";*/
/*
$sql = "SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p LEFT JOIN tags t ON p.id = t.postID WHERE t.tagDesc LIKE '%black%'
UNION
SELECT p.id, p.username, p.plane, p.location, p.description FROM posts p WHERE p.plane LIKE '%black%' ";
*/
$sql = "SELECT *, COUNT(b.postID) as liker
FROM posts p
RIGHT JOIN (SELECT * FROM bookmarks WHERE userName = 'glass') as l
ON p.id = l.postID
LEFT JOIN (SELECT * FROM likes WHERE userName = 'glass') as b
ON p.id = b.postID
GROUP BY p.id
ORDER BY  liker DESC, p.id DESC";

$result = $conn->query($sql);



if ($result->num_rows > 0) {
    // output data of each row
    while (($row = $result->fetch_assoc())) {
      echo " ";
      echo $row['id'];
      echo " ";
      echo $row['username'];
      echo " ";
      echo $row['plane'];
      echo " ";
      echo $row['location'];
      echo " ";
      echo $row['description'];
      echo " ";
      echo $row['tagID'];
      echo " ";
      echo $row['postID'];
      echo " ";
      echo $row['tagDesc'];
      echo " ";
      echo $row['count'];


      echo "<br>";
      
    }



  }

















?>