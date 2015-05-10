(function($){
	var authentication = App.Authentcation;

	
	function init(){
		if(authentication.isAuthenticated()){
			App.init();
		}
		else{
			authentication.init();	
		}
			
	}

	$("document").ready(init);

})(jQuery);