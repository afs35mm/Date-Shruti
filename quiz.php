<?php  
    include_once('header.php'); 
    $page = 'quiz';
?>


<div id="wrapper">
        <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Add your site or application content here -->
    <header id="head">
        <div class="center">
            <img src="img/header.jpg" alt="">
        </div>
    </header>
    
    <div class="center">
       <div id="main" class="cf">
           <div id="questions">
                <script id="questions-template" type="text/x-handlebars-template">
                  <div id="left">
                        <img src="img/{{numberImg}}.png" alt="">            
                    </div>
                    <div id="right" class="copy">
                        <h3 class="lrg">
                            {{{title}}}    
                        </h3>
                        <div>
                             <ul class="questionTable">
                                {{#each choices}}
                                    <a class="btn" data-value="{{this.pts}}" href="#">
                                        {{alphaNum @index}}
                                    </a>
                                    <li>
                                       {{{this.txt}}}
                                    </li>
                                {{/each}}
                            </ul>
                        </div>
                    </div>
                </script>
            </div>
        </div>
    </div>
</div>  
       
<?php  include_once('footer.php'); ?>