<?php

class Pages extends CI_Controller {

	public function view($page = 'home')
	{

		if ( ! file_exists('application/views/pages/'.$page.'.php'))
		{
			// Whoops, we don't have a page for that!
			show_404();
		}
		if( $page == 'home' ){
			$title_tag = 'Home';
		}elseif( $page == 'about' ){
			$title_tag = 'About';
		}elseif( $page == 'quiz'){
			$title_tag = 'Quiz';
		}else{
			$title_tag = '';
		}

		$data = array(
		   'title' => $title_tag,
		);
		//$this->load->helper('url');
		$this->load->library('template');
		$this->template->load('default', 'pages/'.$page, $data);	

	}
}
