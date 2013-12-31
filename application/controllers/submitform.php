<?php

class Submitform extends CI_Controller {

	function upload_thing()
	{
		$config['upload_path'] = './uploads/';
		$config['allowed_types'] = 'gif|jpg|png';
		$config['max_size']	= '100';
		$config['max_width']  = '1024';
		$config['max_height']  = '768';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload())
		{
			$error = array('error' => $this->upload->display_errors());

			$this->load->view('upload_form', $error);

			print_r('error!');
		}
	}

	function index()
	{
		
		$config = Array(
			'protocol' => 'smtp',
			'smtp_host' => 'ssl://smtp.googlemail.com',
			'smtp_port' => 465,
			'smtp_user' => 'afs35mm@gmail.com', // change it to yours
			'smtp_pass' => '100W33st', // change it to yours
			'mailtype' => 'text',
			'charset' => 'iso-8859-1'
		);

		$Name = Trim(stripslashes($_POST['Name'])); 
		$Email = Trim(stripslashes($_POST['Email'])); 
		$Message = Trim(stripslashes($_POST['Message'])); 
		$Title = Trim(stripslashes($_POST['Title'])); 
		$Score = Trim(stripslashes($_POST['Score'])); 
		$Pic = Trim(stripslashes($_POST['pic'])); 

		$message = "";
		$message .= "Name: ";
		$message .= $Name;
		$message .= "\r\n";
		$message .= "Email: ";
		$message .= $Email;
		$message .= "\r\n";
		$message .= "Message: ";
		$message .= $Message;
		$message .= "\r\n";
		$message .= "Title: "; 
		$message .= $Title;
		$message .= "\r\n"; 

		$message .= "Score: ";
		$message .= $Score;
		$message .= "\r\n";

		$this->load->library('email', $config);
		$this->email->set_newline("\r\n");
		$this->email->from('afs35mm@gmail.com'); // change it to yours
		$this->email->to('afs35mm@gmail.com');// change it to yours
		$this->email->subject('Submission from DateShruti.com');
		$this->email->message($message);
		
		$upload_data = " "; 
		$file_name = " ";
		
		if($Pic == 'yes' && $_FILES['userfile']['size'] > 0){
			$this->upload_thing();
			$upload_data = $this->upload->data(); 
  			$file_name =   $upload_data['file_name'];
  			$this->email->attach('./uploads/' . $file_name);
		}

		if($this->email->send())
		{

			$this->load->library('template');
			$this->template->load('default', 'pages/thanks');	
		}
		
		else
		{
			show_error($this->email->print_debugger());
		}
	}

}
?>