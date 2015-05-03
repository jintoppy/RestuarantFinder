(function($){
	var authentication = App.Authentcation;

	
	function init(){
		if(authentication.isAuthenticated()){
			App.init();
		}
		else{
				
		}
			
	}

	$("document").ready(init);

})(jQuery);