
var DS = DS || {};

DS.App = (function(){

	var config = {

	};


	var bindDomEvents = function(){
		
	};

	var init = function(){
		$("#element").defaultPluginName({
		    say: "a custom value"
		});

		$("#element2").defaultPluginName({
		    say: "afs"
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


