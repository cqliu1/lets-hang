// Here we construct our URL
function meetUpAjax (){
	clearMap();

	//google API key
	var apiKeyGoogle = "AIzaSyCE38Ju_63kC2mFECPNzaYLynJ4AuPhlUk";
	//meetup API key
	var apiKeyMeetUp = "7180b838194c635e3776241c137644";

	//variables for search button
	var keyWords = $("#key-words-input").val().trim();
	var zip = $("#zip-code-input").val().trim();
	var radius = $("#radius-input").val().trim();

	var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + apiKey + "&address=" + zip;
	console.log("Google Maps API:",queryURL);

	var latitude;
	var longitude;

	// Google Maps AJAX
	// convert zip code to lat/long coordinates
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		var results = response.results;
		latitude = results[0].geometry.location.lat;
		longitude = results[0].geometry.location.lng;
		console.log("lat:", latitude);
		console.log("long:", longitude);

		// var coordinates = {
		// 	lat: latitude, 
		// 	lng: longitude
		// };

		//Meetup AJAX
		queryURL = "https://api.meetup.com/find/events?key=" + apiKeyMeetUp + "&text=" + keyWords +"&lat="+ latitude+"&lon="+ longitude+"&radius="+radius;
	    console.log("Meetup API:", queryURL);
	    $.ajax({
	    	url: queryURL,
	   		method: "GET",
	   		dataType: "jsonp"
	    }).done(function(response) {
	        console.log(queryURL);
	        console.log(response);
	        var data = response.data;
	        for(var i = 0;i<10;i++){
	        	console.log(data[i]);
	        	addMarker(data[i].group.lat,data[i].group.lon);
	        }
		});
	});
}