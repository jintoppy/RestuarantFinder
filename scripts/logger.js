window.App = window.App || {};
window.App.Search_Log = (function($, _, H){
	var search_log_item_template, search_log_placeholder;

	$.get('templates/search-log-item.tpl.html', function (data) {
	    search_log_item_template = H.compile(data);
	}, 'html');


	function setupDom(){
		search_log_placeholder = $("#search-log-placeholder");
	}

	function loadResults(){
		var data = {
			items: [
			{
				city: 'Bangalore',
				location: 'Whitefield',
				date: '12/01/2015',
				count: 10
			},
			{
				city: 'Mumbai',
				location: 'Andheri',
				date: '12/12/2014',
				count: 2
			}
			]
		};
		search_log_placeholder.html(search_log_item_template(data));
	}

	function init(){
		setupDom();
		loadResults();
	}

	function destroy(){
	}

	return{
		init: init,
		destroy: destroy
	};

})(jQuery ,_, Handlebars);