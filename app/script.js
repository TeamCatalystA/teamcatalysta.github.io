console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "test.txt",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
   alert(xmlhttp.responseText);
  }
}
xmlhttp.send(null);
