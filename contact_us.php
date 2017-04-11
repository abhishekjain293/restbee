<?php
require_once('connection.php');
/*if(isset($_POST['email']))
{*/
$name = $_POST['name'];
$email_address = $_POST['email'];
$mobile_number = $_POST['contact_number'];
$type = $_POST['type_of_contact'];
$msg = $_POST['msg'];
$SQL = "INSERT INTO contact_us VALUES (NULL,'$name','$email_address','$mobile_number','$type','$msg')";
$r = mysql_query($SQL);
//header("Location: index.php");
//}

?>