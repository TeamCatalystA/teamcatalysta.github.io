console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "http://api.worldbank.org/incomeLevels/HIC/countries?format=json&perpage=500",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    var json = JSO.parse(xmlhttp.responseText);
    
    console.log(json);
  }
}
xmlhttp.send(null);
