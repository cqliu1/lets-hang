//google API key
var apiKeyGoogle = "AIzaSyCE38Ju_63kC2mFECPNzaYLynJ4AuPhlUk";
//meetup API key
var apiKeyMeetUp = "7180b838194c635e3776241c137644";

//Clear button for search fields
$("#clear").on("click", function() {
  $("input[type=text], textarea").val("");
});

//variables for search button
var keyWords = $("input").val().trim();
var zipCode = $("zip").val().trim();
var radius = $("radius").val().trim();

//global Lat and Long
var lat;
var long;

// convert zip code to lat/long coordinates
function convertZipToCoor(zip, callback) {
	var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" + apiKey + "&address=" + zip;

	var latitude;
	var longitude;

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		var results = response.results;
		latitude = results[0].geometry.location.lat;
		longitude = results[0].geometry.location.lng;
		console.log("lat:",latitude);
		console.log("long:",longitude);

		var coordinates = {
			lat: latitude, 
			lng: longitude
		};
		callback(coordinates);
	});
}



// Here we construct our URL
function meetUpAjax (){
	var zip;

	convertZipToCoor(zip,function(coordinates) {
		// do stuff with the coordinates
		// attributes are coordinates.lat and coordinates.lng
		lat = coordinates.lat;
		long = coordinates.long;
	});

//AJAX
var queryURL = "https://api.meetup.com/fine/events?&text=" + keyWords +"&lat="+ lat+"&lon="+ long+"&radius= "+radius;
    $.ajax({
    url: queryURL,
    method: "GET"
        }).done(function(response) {
          console.log(queryURL);
          console.log(response);
		});
}