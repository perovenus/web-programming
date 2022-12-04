<?php 
$username = "root";
$password = "";
$hostname = "localhost";
$dbname = "web_programming";
//connection to the database
$conn = mysqli_connect($hostname, $username, $password, $dbname) or die("Unable to connect to MySQL");
//query the database
$query = "SELECT * FROM `ordered`";
$result = mysqli_query($conn, $query);
//fetch tha data from the database
$row = mysqli_fetch_array($result);
$ss = $row['id_products'];
$ss = $ss .",10";
//convert the string to an array
$s = explode(',', $ss);
//loop through the array
echo $s[3];


?>