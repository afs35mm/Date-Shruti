<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        
        <link rel="stylesheet" href="css/style.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="head">
            <div class="center">
                <img src="img/header.jpg" alt="">
            </div>
        </div>
        <div id="container">
            <div class="center">
                <br><br><br>
                    <h4>sjfskdjf </h4>
                <div id="questions">
                    <script id="questions-template" type="text/x-handlebars-template">
                      <div id="left">
                            <img src="img/{{numberImg}}.png" alt="">            
                        </div>
                        <div id="right">
                            <div id="questionCopy">
                                {{title}}    
                            </div>
                            <div id="xyz">
                                 <ul>
                                    {{#each choices}}
                                        <li>{{@index}}: {{this}}</li>
                                    {{/each}}
                                </ul>
                            </div>
                        </div>
                    </script>
                </div>
                <a href="#" class="dir_btn prev">prev</a>
                <a href="#" class="dir_btn next">next</a>
            </div>
        </div>
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/handlebars.js"></script>
        <script src="js/main.js"></script>


        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
