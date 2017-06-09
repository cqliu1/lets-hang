var map;	 	// refers to map
var bounds;		// stores boundaries of the map
var markers = []; // store locations 
var infoContentWindow = []; // store information to be displayed in info window
var apiKey = "AIzaSyCE38Ju_63kC2mFECPNzaYLynJ4AuPhlUk";

var contents = 'snazzy';

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 33.4484, lng: -112.0740},
	  zoom: 12
	});

	bounds = new google.maps.LatLngBounds();
}

function addMarker(event) {
	var location = new google.maps.LatLng(event.group.lat,event.group.lon);
	bounds.extend(location);
	// place new marker on map
	var marker = new google.maps.Marker( {
			position: location,
			map: map		
	});

	var infoWindow = new SnazzyInfoWindow({
		marker: marker,
		content: `
			<p CLASS="this">
				${contents}
			</p>
		`
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