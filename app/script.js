console.log("Init");

$.get("Data.xml", function (data) {
  /*debug*/ console.log("XML data: " + data);
  
  var $xml = $($.parseXML(data));
  
  //Use $xml to use jQuery to use the document
})
  .done(function (data) {
    console.log("Maybe this?");
  });
