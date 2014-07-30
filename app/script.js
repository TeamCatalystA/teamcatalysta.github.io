console.log("Init");

$.get("Data.xml", undefined, function (data) {
  /*debug*/ console.log("XML data: " + data);
  
  var $xml = $($.parseXML(data));
  
  //Use $xml to use jQuery to use the document
});
