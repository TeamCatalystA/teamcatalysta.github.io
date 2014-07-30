console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "hic.json",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    var json = JSON.parse(xmlhttp.responseText);
    
    console.log(json);
  }
}
xmlhttp.send(null);
