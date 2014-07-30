var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "hic.json",true);
xmlhttp.onreadystatechange=function () {
  if (xmlhttp.readyState==4) {
    var json = JSON.parse(xmlhttp.responseText);
      
    var num = json[1].length;
  
    console.log("Number of hic: " + num);
    
    for (var i in json[1]) {
      var item = json[1][i];
      var latlong = new google.maps.LatLng(item.latitude,item.longitude);
      
      var populationOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: latlong,
        radius: 100
      };
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle(populationOptions);
    }
  }
}
xmlhttp.send(null);
