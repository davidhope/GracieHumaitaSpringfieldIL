<?php

	if(isset($_POST['fn'])){
		switch ($_POST['fn']){
			case 'SendForm':
				$message = $_POST['message'];
				$subject = $_POST['subject'];
                $gid = $_POST['gid'];
                
				$gc = new GroupController();
                
				ReturnJsonSuccess($gc->SendMessageByGroup($message,$subject,$gid));
                
				break;
			default:
				ReturnJsonError('No function defined.');
				break;
		}
	}

?>