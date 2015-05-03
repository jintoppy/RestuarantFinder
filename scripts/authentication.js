window.App = window.App || {};
window.App.Authentcation = (function($){

	function login(username){

	}

	function signup(){

	}

	function isAuthenticated(){
		return true;
	}

	function getUserDetails(){

		return {
			username: "jintoppy",
			name: "Jinto"
		};
	}

	return{
		login: login,
		signup: signup,
		getUserDetails: getUserDetails,
		isAuthenticated: isAuthenticated 
	};

})(jQuery);