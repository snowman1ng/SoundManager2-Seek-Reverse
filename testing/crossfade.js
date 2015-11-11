//set variable reference to the slider
var slider = $( "#slider");

//make the div into a slider, set its default values, add event listeners which 
//update an input field based on the value of the slider
$(function() {
    $("#slider").slider({
    	min: 0,
    	max: 100,
    	step: 1,
    	value: 0,
    	start: function( event, ui ) {
					$("#crossfade-current-numA").val(100 - ui.value);
					$("#crossfade-current-numB").val(ui.value);
               },
        stop: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
               },
        change: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
               },
        slide: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
               }
    });
});