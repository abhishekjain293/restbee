<?php
$hostname = 'mysql13.000webhost.com';
$username = 'a5793959_root';
$password = 'lets#$CRACK#';
$db_name = 'a5793959_restbee';


$link = mysql_connect($hostname,$username,$password);
$r = mysql_select_db($db_name,$link);
/*
if($r)
	echo "Connected";
else
	echo mysql_errno($link);*/
?>