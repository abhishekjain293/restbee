<?php
require_once('connection.php');
/*if(isset($_POST['email']))
{*/

$email_address = $_POST['email_subscribe'];
$result = mysql_query("SELECT count(*) FROM subscribe_us WHERE email='" . $_POST["email_subscribe"] . "'");
  $row = mysql_fetch_row($result);
  $user_count = $row[0];
  if($user_count>0) {
	  echo "false";
  }
  else
  {
	$SQL = "INSERT INTO subscribe_us VALUES (NULL,'$email_address')";
	$r = mysql_query($SQL);
  }
//header("Location: index.php");
//}

?>