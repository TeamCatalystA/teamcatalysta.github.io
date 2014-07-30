console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "Data.xml",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(xmlhttp.readyState,"text/xml");
    
    console.log(xmlDoc);
  }
}
xmlhttp.send(null);
