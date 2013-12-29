<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Example extends MY_Controller {
  public function index() {
    $content = $this->load->view('example/index',null,true);
    $this->render($content);
  }
}