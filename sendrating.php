<?php
$cookie_name = "rating";
$cookie_value = "true";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
require_once("connection.php");

$points = $_POST['points'];
//if(!empty($_POST["points"])) {
	$SQL = "INSERT INTO rate_us VALUES (NULL,$points)";
	$r = mysql_query($SQL);
	if ($r) {
		echo "
<img src='img/rateus.jpg' class='img-responsive' id='loadingimage' style='margin-left:auto;margin-right:auto'><div id='spinner'></div>";
		//echo $_COOKIE['rating'];
	}
	else{
		echo $r;
	}
//}
?>