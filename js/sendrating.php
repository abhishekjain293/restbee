<?php
require_once("connection.php");


if(!empty($_POST["points"])) {
	$SQL = "INSERT INTO rate_us VALUES (NULL,$points)";
	$r = mysql_query($SQL);
	if ($r) {
		echo "<img src='img/p02.png' class='img-responsive' style='margin-left:auto;margin-right:auto'>";
	}
	else{
		echo $r;
	}
}
?>