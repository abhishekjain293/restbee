  <?php
require_once('connection.php');
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
$result = mysql_query("SELECT count(*) FROM job_application WHERE job_id=" . $_POST["job_id"] . " AND ( email='".$_POST["email"]."' OR phone='".$_POST["phone"]."')");
  $row = mysql_fetch_row($result);
  $user_count = $row[0];
  if($user_count>0) 
  {
	  echo "false1";
  }
  else
  {
	
	$info = pathinfo($_FILES["cv_id"]["name"]);
	$ext = $info['extension'];
	$newname = $_POST['phone'].".".$ext; 
	//$target_file = $target_dir . basename($_FILES["cv_id"]["name"]);
	$target_file = "uploads/".$newname;
	$uploadOk = 1;
	$filetype = pathinfo($target_file,PATHINFO_EXTENSION);
	if (file_exists($target_file)) 
	{
		//echo "1";
		$uploadOk = 0;
	}
	if ($_FILES["cv_id"]["size"] > 2000000) 
	{
		//echo "2";
		$uploadOk = 0;
	}
	if($filetype != "pdf" && $filetype != "doc" && $filetype != "docx" ) 
	{
		//echo "3";
		$uploadOk = 0;
	}
	if ($uploadOk == 0) 
	{
		//echo "4";
	}
	else 
	{
	$r = move_uploaded_file($_FILES["cv_id"]["tmp_name"], $target_file);
	}
	$job_id = $_POST['job_id'];
	$name = htmlspecialchars($_POST['name']);;
	$email_address = htmlspecialchars($_POST['email']);;
	$mobile_number = htmlspecialchars($_POST['phone']);
	$social_link = trim($_POST['social1']);
	$msg1 = htmlspecialchars($_POST['msg1']);
	$msg2 = htmlspecialchars($_POST['msg2']);
	$SQL = "INSERT INTO job_application VALUES (NULL,$job_id,'$name','$email_address','$mobile_number','$social_link','$msg1','$msg2','$target_file')";
	$r = mysql_query($SQL);
	if ($r) 
	{
		echo "true";
	}
	else
	{
		echo "false";
	}
  }
}
?>