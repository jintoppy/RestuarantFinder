window.App = window.App || {};
window.App.Authentcation = (function($, H){
	var login_template;
	var templatePromise = $.get('templates/page-login.tpl.html', function (data) {
	    login_template = H.compile(data);
	    $("#modal-placeholder").html(login_template({}));
	}, 'html');

	function login(username){

	}

	function signup(){

	}

	function attachDomEvents(){
		$("#modal-placeholder").modal({
			backdrop: 'static'
		});
		$("#btn-show-signup").on('click', showSignup);
		$("#btn-show-login").on('click', showLogin);

	}

	function showSignup(){
		$("#signup-form").show();
		$("#login-form").hide();
		$("#btn-show-signup, #btn-show-login").hide();
	}

	function showLogin(){
		$("#signup-form").hide();
		$("#login-form").show();
		$("#btn-show-signup, #btn-show-login").hide();
	}

	function init(){
		templatePromise.then(function(){
			attachDomEvents();
			$('#modal-placeholder').modal('show');
		});
		
	}

	function isAuthenticated(){
		return false;
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
		isAuthenticated: isAuthenticated,
		init: init
	};

})(jQuery, Handlebars);