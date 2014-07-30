console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "Data.xml",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    var $xml = $($.parseXML(xmlhttp.responseText));
    
    console.log($xml.find("ListRecords"));
  }
}
xmlhttp.send(null);
