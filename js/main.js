
var DS = DS || {};

DS.App = (function(){

	var config = {
		currentQuestion: 0
	};


	var bindDomEvents = function(){
		
	};

	var injectTemplate = function(){
		
		var source   = $("#questions-template").html();
		var template = Handlebars.compile(source);

		$.getJSON( "js/data.json", function( data ) {
			var compiledCurrentQuestion = data.questions[config.currentQuestion];
			$('#questions').html(template(compiledCurrentQuestion));
		});
	};

	var init = function(){
		injectTemplate();
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	DS.App.init();
});


