console.log("Init");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "hic.json",true);
xmlhttp.onreadystatechange=function output() {
  if (xmlhttp.readyState==4) {
    var json = JSON.parse(xmlhttp.responseText);
    
    var array = json[1];
    for (var i in array) {
      var item = array[i];
      
      console.log(item.name + ": " + item.incomeLevel.value)
    }
  }
}
xmlhttp.send(null);

xmlhttp = new XMLHttpRequest();
