
function Data(url, country){
  
  var xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.open("GET", url ,true);
  xmlhttp2.onreadystatechange=function () {
    if (xmlhttp.readyState==4) {
      var t = JSON.parse(xmlhttp.responseText);
        
      var num = t[1].length;
      console.log("5");
      xmlhttp2.send(null);
    }
  }
  
}



function go(url, colour, colourAlt) {  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url,true);
  xmlhttp.onreadystatechange=function () {
    if (xmlhttp.readyState==4) {
      var json = JSON.parse(xmlhttp.responseText);
        
      var num = json[1].length;
    
      console.log("Number of hic: " + num);
      
      for (var i in json[1]) {
        var item = json[1][i];
        var latlong = new google.maps.LatLng(item.latitude,item.longitude);
        
        var populationOptions = {
          strokeColor: colourAlt,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: colour,
          fillOpacity: 0.35,
          map: map,
          center: latlong,
          radius: 100000
        };
        Data("Homicides.xml", item.name)
        var cityCircle = new google.maps.Circle(populationOptions);
      }
    }
  }
  xmlhttp.send(null);
}



function Tag(contentString) {
  
  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
    var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  });
  
}


go("hic.json", "#00ff00", "#007f00");
go("mic.json", "#ffc200", "#7f1000");
go("lic.json", "#ff0000", "#7f0000");
