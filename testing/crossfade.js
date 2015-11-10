$(function() {
    $( "#slider" ).slider();
    min: 0
    max: 100
  });

$( "#selector" ).on( "slidechange", function( event, ui ) {
	var value = $( "#selector" ).slider( "option", "value" );
	var fake = $("#crossfade-current-num");
	fake.text(value);
} );

$(function() {
var value = $( "#selector" ).slider( "option", "value" );
var fake = $("#crossfade-current-num");
fake.text(value);
});