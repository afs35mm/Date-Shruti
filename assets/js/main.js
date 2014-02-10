
var DS = DS || {};

DS.App = (function(){

	var config = {
		currentQuestion: 	0,
		source: 			$("#questions-template").html(),
		contactTemplate: 	$("#contact-template").html(),
		score: 				0,
		canSubmit: 			true,
		windowTop: 			0,
		worstDate: {
			'title' : 'worst kinda date you can get!'
		},
		badDate: {
			'title' : 'thils is the title for a bad date'
		},
		goodDate: {
			'title' : 'SCHMEDIUM'
		},
		bestDate: {
			'title' : 'youre the tits'
		},

		worst: [

		],
		bad: [
			'Not bad. Not great, but not bad. You win Drink at Crown’s Inn. ',
			'You scored an Irish “grand,” which really means “just okay.” Good enough to win a drink at Tooker Alley.',
			'You’re a medium good test taker. You win a walk in Prospect Park, weather permitting. ',
			'You scored somewhere between “meh” and “aiight.” You win a walk across the Brooklyn Bridge. '
		],
		good: [
			'Your score was solid. Better than most. You win a date to the Met. ',
			'Fine job, sir! Fine job, I say!  You win a date to go gallery hopping in Chelsea. ',
			'Way to go! You win a date! How about dinner at Bar Corvo? ',
			'Celebrate good scores! Come on! With drinks at Weatherup (the Brooklyn one) '
		],
		best: [
			'You’re quite the test taker, fine sir. You and Shruti will be seeing a show at Bowery Ballroom.',
			'That’s one of the best scores we’ve seen! You win a date to ride the Staten Island ferry until you both finish a bottle of red. ',
			'Whoa, you just tore that test apart. Rawr, tiger. You win a date to the Bronx Zoo. ',
			'Huzzah! You’re pretty much the best at this test. You win a date to Storm King. '
		],

	};

	var template = Handlebars.compile(config.source);

	var injectTemplate = function(callback){

		$.getJSON( "/assets/js/data.json", function( data ) {
			var compiledCurrentQuestion = data.questions[config.currentQuestion];
			//console.log(compiledCurrentQuestion);
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
				$('#questions').html(template(compiledCurrentQuestion)).hide().fadeIn();	
				$(document).scrollTop(config.windowTop);
			}else{
				appendContactForm();
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
			config.windowTop = $(document).scrollTop();

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
		//console.log(n);
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
				if( !config.canSubmit ){
					return
				}
			}
		});

	};

	var appendContactForm = function(){
		
		var	dateType = null;
		
		var randomNum = Math.floor((Math.random()*4)+1);

		console.log('final score = ' + config.score + ' , and random number is ' +  randomNum );

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
			console.log(config[dateType]);
			$('#main').html(contactTemplate(config[dateType]));
			$('#title').val( $('h1.heading').html() );
			$('#score').val(config.score);
		}).done(function(){
			$('.send').on('click', function(e){
				validateForm();
				if(!config.canSubmit){
					e.preventDefault();
				}
				config.canSubmit = true;
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


