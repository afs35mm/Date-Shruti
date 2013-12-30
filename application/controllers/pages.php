<?php

class Pages extends CI_Controller {

	public function view($page = 'home')
	{

		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}
		$data = array(
		 
		   'title' => 'Title goes here',
		    
		);

		if( $page == 'submit' || $page == 'quiz' ) {
			$this->load->helper(array('form', 'url'));
			$this->load->library('form_validation');

			

			// if ($this->form_validation->run() == FALSE)
			// {
			// 	$this->load->library('template');
			// 	$this->template->load('default', 'pages/submit', $data);
			// }
			// else
			// {
			// 	$this->load->library('template');
			// 	$this->template->load('default', 'pages/formsuccess', $data);
			// }

		}
	
		$this->load->helper('url');
		$this->load->library('template');
		$this->template->load('default', 'pages/'.$page, $data);	
		
		
	}
}
