function Map() {
  
  var mapOptions = {
                zoom: 3,
                center: new google.maps.LatLng(0, 0)
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  
  
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });

}
google.maps.event.addDomListener(window, 'load', Map);
