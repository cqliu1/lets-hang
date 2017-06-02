var map;	 	// refers to map
var bounds;		// stores boundaries of the map
var coordinates = [{lat: -34.397, lng: 150.644},{lat: -40, lng: 160},{lat: 0, lng: 20}];
var markers = []; // store locations
var infoContentWindow = []; // store information to be displayed in info window
var apiKey = "AIzaSyCE38Ju_63kC2mFECPNzaYLynJ4AuPhlUk";

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 33.4484, lng: -112.0740},
	  zoom: 8
	});

	bounds = new google.maps.LatLngBounds();

	for(var i = 0; i < coordinates.length; i++) {
		addMarker(coordinates[i].lat,coordinates[i].lng);
	}
}

function addMarker(latitude,longitude) {
	var location = new google.maps.LatLng(latitude,longitude);
	bounds.extend(location);
	// place new marker on map
	var marker = new google.maps.Marker( {
			position: location,
			map: map
	});

	// add code for info window here

	// stores new marker in marker array
	markers.push(marker);

	// centers map and fits all markers
	map.fitBounds(bounds);
}

function clearMap() {

	// remove all markers from map
	for(var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}

	// empty markers array
	markers = [];
}

$("#clear").on("click", clearMap);

