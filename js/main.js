
var DS = DS || {};

DS.App = (function(){

	var config = {
		currentQuestion: 	0,
		source: 			$("#questions-template").html(),
		score: 				0,
	};

	var template = Handlebars.compile(config.source);

	var injectTemplate = function(callback){

		$.getJSON( "js/data.json", function( data ) {
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
				alert('no more questions :(');
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

	var init = function(){
		injectTemplate(bindDomEvents);
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	DS.App.init();
});


