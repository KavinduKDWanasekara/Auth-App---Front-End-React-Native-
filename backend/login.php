<?php 

    $CN = mysqli_connect("localhost","root","");
    $DB = mysqli_select_db($CN, "cst");
	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$email = $obj['email'];
	
	$password = $obj['password'];
	
	if($obj['email']!=""){	
	
	$result= $mysqli->query("SELECT * FROM studentmaster where email='$email' and password='$password'");
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('try again');
	}

?>