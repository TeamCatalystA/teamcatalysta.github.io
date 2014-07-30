console.log("Init");

$.ajax({
  url: "Data.xml"
})
  .done(function( data ) {
    if ( console && console.log ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
    }
  });
