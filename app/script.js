console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "Data.xml",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
   console.log(xmlhttp.responseText);
  }
}
xmlhttp.send(null);
