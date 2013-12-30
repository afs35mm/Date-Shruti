
var DS = DS || {};

DS.App = (function(){

	var config = {
		currentQuestion: 	0,
		source: 			$("#questions-template").html(),
		contactTemplate: 	$("#contact-template").html(),
		score: 				0,
		canSubmit: 			true,
		worstDate: {
			'title' : 'worst kinda date you can get!'
		},
		badDate: {
			'title' : 'thils is the title for a bad date'
		},
		mediumDate: {
			'title' : 'SCHMEDIUM'
		},
		bestDate: {
			'title' : 'youre the tits'
		}
	};

	var template = Handlebars.compile(config.source);

	var injectTemplate = function(callback){

		$.getJSON( "/assets/js/data.json", function( data ) {
			var compiledCurrentQuestion = data.questions[config.currentQuestion];
			
			Handlebars.registerHelper('alphaNum', function(index) {
				switch(index){
					case 0:
						return 'A'
						break;
					case 1:
						return 'B'
						break;
					case 2:
						return 'C'
						break;
					case 3:
						return 'D'
						break;
					case 4:
						return 'E'
						break;
					case 5:
						return 'F'
						break;
					case 6:
						return 'H'
						break;
					default:
						return 'X';
				}

			});

			if(compiledCurrentQuestion != undefined){
				$('#questions').html(template(compiledCurrentQuestion));	
			}else{
				appendContactForm();
				//window.location = '/submit';
			}
		}).done(function(){
			callback();
		});
	};

	var addHeight = function(score){
		config.score += score;
	}

	var bindDomEvents = function(){
		$('.btn').on('click', function(e){
			$this = $(this);
			config.currentQuestion++;
			addHeight($this.data('value'));
			injectTemplate(bindDomEvents);
			e.preventDefault();
			console.log(config.score);
		});
	};

	var bindContactFormEvents = function(){
		$('#myfile').change(function(){
			$('#path').val($(this).val());
			var filePath = $('#path').val().replace("C:\\fakepath\\", "");
			$('#path').val(filePath);
		});

		$('input:radio[name="pic"]').change(
	    function(){
	        if ($(this).is(':checked') && $(this).val() != 'yes' ) {
	            $('.uploadField').prop('disabled', true);
	            $('.add-photo-btn').toggleClass('disable');
	        }else{
	        	$('.uploadField').prop('disabled', false);
	        	$('.add-photo-btn').toggleClass('disable');
	        }
	    });
	};

	var validateForm = function(){
		
		var n = $( '.validate' ).length;
		console.log(n);
		var i = 0;

		$('.validate').each(function(index){
			i++;
			$this = $(this);
			
			if( $this.val() == '' ){
				$this.addClass('invalid');
				config.canSubmit = false;
			}else{
				$this.removeClass('invalid');
			}
			//if last loop, execute callback
			if( i == n){
				if( config.canSubmit ){
					alert('all true');
				}else{
					alert('not validating');
				}
				config.canSubmit = true;
			}
		});

	};

	var appendContactForm = function(){
		
		var	dateType = null;
		
		$.get('application/views/templates/contact.html.tmpl',function(data){
			var contactTemplate = Handlebars.compile(data);
			if(config.score >= 60){
				dateType = 'bestDate';
			}else if( config.score < 60 && config.score >= 46 ){
				dateType = 'goodDate';
			}else if( config.score < 46 && config.score >= 35 ){
				dateType = 'badDate';
			}else if( config.score < 35 && config.score >= 17 ){
				dateType = 'worstDate';
			}else{
				dateType = 'unknown';
			}
			//console.log(config[dateType]);
			$('#main').html(contactTemplate(config[dateType]));
		}).done(function(){
			$('.send').on('click', function(e){
				validateForm();
				//alert('submitted!');
				e.preventDefault();
			});
			bindContactFormEvents();
		});
	};

	var init = function(){
		injectTemplate(bindDomEvents);
		//appendContactForm();
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	DS.App.init();
});


