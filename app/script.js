console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "http://r4d.dfid.gov.uk/Gateway/?verb=ListRecords&metadataPrefix=oai_dc",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(xmlhttp.readyState,"text/xml");
    
    console.log(xmlDoc);
  }
}
xmlhttp.send(null);
