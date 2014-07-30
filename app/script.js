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
      
      var marker = new google.maps.Marker({
          position: latlong,
          map: map,
          title:item.name
      });
    }
  }
}
xmlhttp.send(null);
