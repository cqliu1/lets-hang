var map;	 	// refers to map
var bounds;		// stores boundaries of the map
var markers = []; // store locations 
var infoContentWindow = []; // store information to be displayed in info window
var apiKey = "AIzaSyCE38Ju_63kC2mFECPNzaYLynJ4AuPhlUk";

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 33.4484, lng: -112.0740},
	  zoom: 12
	});

	bounds = new google.maps.LatLngBounds();
}

function addMarker(group) {
	var location = new google.maps.LatLng(group.lat,group.lon);
	bounds.extend(location);
	// place new marker on map
	var marker = new google.maps.Marker( {
			position: location,
			map: map		
	});

	var infoWindow = new SnazzyInfoWindow({
		marker: marker,
		content: (group.key_photo === undefined ? "" : ("<div class='text-center'><img class='group-img' src='"+group.key_photo.photo_link) +"'></div><br>")
				+ "<a href='"+group.link+"'><h3>"+group.name+"</h3></a>" 
				+ (group.description === undefined ? "<p>Click the link find out more.</p>" : group.description)
	});


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