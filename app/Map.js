function initialize() {
  
  var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(0, 0)
            };

            var map = new google.maps.Map(index.getElementById('map-canvas'),
    mapOptions);

  
}

        google.maps.event.addDomListener(window, 'load', initialize);
