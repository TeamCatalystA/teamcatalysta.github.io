console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "hic.json",true);
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4) {
    var json = JSON.parse(xmlhttp.responseText);
    
    var arr = json[1];
    for (var item in array) {
      console.log(item.name + ": " + item.incomeLevel.value)
    }
  }
}
xmlhttp.send(null);
