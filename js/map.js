function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.835117, -87.627130);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControl: true,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
    title: 'IIT Perlstein Hall',
		icon: './images/mapicon.jpg'
	});

	var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

  var streetViewService = new google.maps.StreetViewService();
  var streetViewPanorama = myMap.getStreetView();
  streetViewPanorama.setPosition(myLocation);
  streetViewPanorama.setPov([
  heading: 256,
  pitch; 0
  });
 
   var searchBox = new google.maps.places.SearchBox(document.getElementById('search-box'));
    myMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('search-box'));

	google.maps.event.addListener(searchbox, 'places_changed', function() {
   var places = searchBox.getPlaces();
   if (places.length == 0) {
       return;

  	});
    drawingManager.setMap(myMap);

}

google.maps.event.addDomListener(window, 'load', init);
