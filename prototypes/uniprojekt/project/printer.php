<?php
session_start();
$plane = $_REQUEST["plane"];
$location = $_REQUEST["location"];


$output = "The plane: " .$plane. " was found in the following location: " .$location;

echo "$output";


?>


