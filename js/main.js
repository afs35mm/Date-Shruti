
var DS = DS || {};

DS.App = (function(){

	var config = {
		currentQuestion: 	0,
		source: 			$("#questions-template").html()
	};


	var injectTemplate = function(callback){
		
		var template = Handlebars.compile(config.source);

		$.getJSON( "js/data.json", function( data ) {
			var compiledCurrentQuestion = data.questions[config.currentQuestion];
			
			if(compiledCurrentQuestion != undefined){
				$('#questions').html(template(compiledCurrentQuestion));	
			}else{
				alert('no more questions :(');
			}
		}).done(function(){
			callback();
		});
	};

	var bindDomEvents = function(){
		$('.btn').on('click', function(e){
			config.currentQuestion++;
			injectTemplate(bindDomEvents);
			e.preventDefault();
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


