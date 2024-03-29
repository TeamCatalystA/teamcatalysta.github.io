function Data(url, country){
  var r = new XMLHttpRequest();
  r.open("GET", url,false);
  r.send(null);
    var data = JSON.parse(r.responseText);
    var num = data.length;
    for (var i = 0; i < num; i++) {


      var item = data[i]
      
      if (item.name == country){
        
      var x = form(item)
      return x
      console.log("Done")
      }
}
}

function form(item){
  
 if (document.options.options.value == "Homicides") {
   
   var data = item._2004_2011_homicide_rate
   rad = data*5000
   return rad
 }
  if (document.options.options.value == "Suicide rate - Male") {
   
   var data = item.suicide_rate_male
   rad = data*5000
   return rad
 }
 if (document.options.options.value == "Suicide rate - Female") {
   
   var data = item._2001_2010_suicide_rate_female
   rad = data*7000
   return rad
 }
  if (document.options.options.value == "Life Satisfaction") {
   
   var data = item._2007_2011_overall_life_satisfaction
   rad = data*20000
   return rad
 }
 if (document.options.options.value == "Trust in Government") {
   
   var data = item._2007_2011_trust_in_national_government
   rad = data*3000
   return rad
 }
  if (document.options.options.value == "Perception of Safety") {
   
   var data = item._2007_2011_perception_of_safety
   rad = data*2000
   return rad
 }
  if (document.options.options.value == "Freedom of Choice") {
   
   var data = item._2007_2011_satisfaction_with_freedom_of_choice
   rad = data*2000
   return rad
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
        var x = Data("Homicides.json", item.name)
        var populationOptions = {
          strokeColor: colourAlt,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: colour,
          fillOpacity: 0.35,
          map: map,
          center: latlong,
          radius: x
        };
        
        var cityCircle = new google.maps.Circle(populationOptions);
        markers.push(cityCircle);
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

function refresh(){

setAllMap(null);
var markers = [];

go("hic.json", "#00ff00", "#007f00");
go("mic.json", "#ffc200", "#7f1000");
go("lic.json", "#ff0000", "#7f0000");
  
}

var markers = [];


function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}
go("hic.json", "#00ff00", "#007f00");
go("mic.json", "#ffc200", "#7f1000");
go("lic.json", "#ff0000", "#7f0000");
