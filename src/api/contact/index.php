<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST)
	{
		http_response_code(200);
		$subject = $_POST['name'];
		$to = "bruinen@interia.pl";
		$from = $_POST['email'];
		$msg = $_POST['number'] . $_POST['content'] . "<br />numer telefonu: " . $_POST['phone'];

		$headers = "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=UTF-8\r\n";
		$headers.= "From: <" . $from . ">";
		mail($to, $subject, $msg, $headers);

		echo json_encode(array(
			"sent" => true
	));
	}
  else
	{
		echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>