
var DS = DS || {};

DS.App = (function(){

	var config = {

	};


	var bindDomEvents = function(){
		
	};

	var init = function(){
		$("#slideContainer").simpleSlider({
		    say: "a custom value"
		});
		//console.log('inited!');		
	};

	return {
		init: init
	};
	
	

})();

$('document').ready(function(){
	DS.App.init();
});


