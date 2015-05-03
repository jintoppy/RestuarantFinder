window.App = window.App || {};
window.App.Search = (function($, _, H){
	var city_search_box, locality_search_box, btn_search, search_results;
	var restuarants, seach_result_template; 
	$.getJSON("data/restaurants.json").success(function(data){
		restuarants = data;
	});

	$.get('templates/search-results.tpl.html', function (data) {
	    seach_result_template = H.compile(data);
	}, 'html');

	function getGeoCodes(geolocation){
		var coords = geolocation.coords;
		var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+coords.latitude+","+coords.longitude+"&result_type=street_address&key=AIzaSyCw5Ol9V60JL7lnP_DRhmskl5yil-ni0l0";
		$.get(url)
			.success(function(data){
				console.log(data);
			})
			.error(function(err){
				console.log("error");
			});
	}

	function getUserLocation(){

	}

	function getGeoLocation(){

		navigator.geolocation.getCurrentPosition(getGeoCodes);
	}


	function setupDom(){
		city_search_box = $('#city-search-box');
		locality_search_box = $('#locality-search-box');
		btn_search = $("#btn-search");
		search_results = $("#search-results");

		city_search_box.select2({
			placeholder: "Select a city"
		});

		locality_search_box.select2({
			placeholder: "Select a Locality"
		});
		btn_search.on("click", search);

	}

	function search(){
		var data = {
			items: restuarants.bangalore[0].indiranagar
		};
		var date = new Date(); 
		var dateVal = date.toDateString() + " " + date.toTimeString();

		App.Search_Log.addToLog({
			city: 'Bangalore',
			location: 'Whitefield',
			date: dateVal,
			results_count:10 
		});
		search_results.html(seach_result_template(data));
	}

	function init(){
		getGeoLocation();
		setupDom();
	}

	function destroy(){
		btn_search.off("click");
	}

	return{
		init: init,
		destroy: destroy
	};

})(jQuery ,_, Handlebars);