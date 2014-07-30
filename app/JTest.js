console.log("Init");

$.get("Data.xml", function (data) {
  alert("Done")
  console.log("XML data: " + data);
  
  var $xml = $($.parseXML(data));
  
  //Use $xml to use jQuery to use the document
});
