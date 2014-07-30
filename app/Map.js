function Map() {
  
  var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(0, 0)
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  
}

