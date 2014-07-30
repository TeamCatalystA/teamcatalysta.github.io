console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "hic.json",true);
xmlhttp.onreadystatechange=function output() {
  if (xmlhttp.readyState==4) {
    var json = JSON.parse(xmlhttp.responseText);
    
    var num = json[1].length;
    
    console.log("Number of hic: " + num);
}
xmlhttp.send(null);
