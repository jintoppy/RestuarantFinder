window.App = (function($, H, _){
		var content_placeholder = $('#content-placeholder');
		var TEMPLATES = {
			Search: "",
			Search_Log: "",
			Login: "",
			Signup: ""
		};

		$(".nav.navbar-nav.side-nav").on("click", "a", function(){
			var ul = $(this).parents("ul");
			ul.find("li").removeClass("active");
			changeRoute($(this).data('route-id'));
			$(this).parent().addClass("active");
		});


		function changeRoute(routeId){
			if(!TEMPLATES[routeId]){
				routeId = "Search";
			}
			//calling the destroy method which will destroy the event listeners
			_.forEach(TEMPLATES, function(template, key){
				App[key] && App[key].destroy();
			});
			var template = TEMPLATES[routeId];
			content_placeholder.html(template({}));
			App[routeId] && App[routeId].init();
		}


		function init(){
			loadTemplates().then(function(){
				console.log('app init');
				content_placeholder.html(TEMPLATES.Search({}));
				App.Search.init();
			});
		}

		function loadTemplates(){
			var defer = $.Deferred();
			var HomePromise = createTemplatePromise('templates/page-search.tpl.html', 'Search');
			var SearchLogPromise = createTemplatePromise('templates/page-search-log.tpl.html', 'Search_Log');
			$.when( HomePromise, SearchLogPromise ).done(defer.resolve);
			return defer.promise();
		}

		function createTemplatePromise(url, property){
			return $.get(url, function (data) {
			    TEMPLATES[property] = H.compile(data);
			}, 'html');
		}

		return {
			init: init,
			changeRoute: changeRoute
		};


})(jQuery, Handlebars, _);