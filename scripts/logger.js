window.App = window.App || {};
window.App.Search_Log = (function($, _, H){
	var search_log_item_template, search_log_placeholder;

	$.get('templates/search-log-item.tpl.html', function (data) {
	    search_log_item_template = H.compile(data);
	}, 'html');


	function setupDom(){
		search_log_placeholder = $("#search-log-placeholder");
	}


	function getLogsFromStorage(){
		return JSON.parse(localStorage.getItem('search_logs'));
	}

	function setLogToStorage(logs){
		localStorage.setItem('search_logs', JSON.stringify(logs));
	}

	function loadResults(){
		var existingLogs = getLogsFromStorage();
		var username = App.Authentcation.getUserDetails().username;
		var data = {
			items: _.result(existingLogs, username, [])	
		};
		// var data = {
		// 	items: [
		// 	{
		// 		city: 'Bangalore',
		// 		location: 'Whitefield',
		// 		date: '12/01/2015',
		// 		count: 10
		// 	},
		// 	{
		// 		city: 'Mumbai',
		// 		location: 'Andheri',
		// 		date: '12/12/2014',
		// 		count: 2
		// 	}
		// 	]
		// };
		search_log_placeholder.html(search_log_item_template(data));
	}


	function addToLog(log){
		var username = App.Authentcation.getUserDetails().username;
		var existingLogs = getLogsFromStorage() || {};
		var username = App.Authentcation.getUserDetails().username;
		var userLogs = _.result(existingLogs, username, [])
		userLogs.push(log);
		existingLogs[username] = userLogs;
		setLogToStorage(existingLogs);
	}

	function init(){
		setupDom();
		loadResults();
	}

	function destroy(){
	}

	return{
		init: init,
		destroy: destroy,
		addToLog: addToLog
	};

})(jQuery ,_, Handlebars);