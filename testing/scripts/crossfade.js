//set variable reference to the slider
var slider = $( "#slider");

var mp3CrossfadeSongA;
var wavCrossfadeSongB;

//make the div into a slider, set its default values, add event listeners which 
//update an input field based on the value of the slider
$(function() {
    $("#slider").slider({
    	min: 0,
    	max: 100,
    	step: 1,
    	value: 0,
      //currently the initial value displayed in the input box is controlled by HTML NOT Javascript
      //so it is possible that they will not match up if any values are changed
    	start: function( event, ui ) {
					     $("#crossfade-current-numA").val(100 - ui.value);
					     $("#crossfade-current-numB").val(ui.value);
					     mp3CrossfadeSongA.setVolume($("#crossfade-current-numA").val());
               wavCrossfadeSongB.setVolume($("#crossfade-current-numB").val());
              },
      stop: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
                  mp3CrossfadeSongA.setVolume($("#crossfade-current-numA").val());
                  wavCrossfadeSongB.setVolume($("#crossfade-current-numB").val());
              },
      change: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
                  mp3CrossfadeSongA.setVolume($("#crossfade-current-numA").val());
                  wavCrossfadeSongB.setVolume($("#crossfade-current-numB").val());
              },
      slide: function( event, ui ) {
                  $("#crossfade-current-numA").val(100 - ui.value);
                  $("#crossfade-current-numB").val(ui.value);
                  mp3CrossfadeSongA.setVolume($("#crossfade-current-numA").val());
                  wavCrossfadeSongB.setVolume($("#crossfade-current-numB").val());
              }
    });
});
var currentVal = $("#slider").slider("value");
//$("#crossfade-current-numA").val(currentVal);
//$("#crossfade-current-numB").val(CurrentVal);



/* Set up soundManager */
soundManager.setup({
  url: '/path/to/swf-files/',

  onready: function() {
     mp3CrossfadeSongA = soundManager.createSound({
          id: 'crossfadeA',
          url: 'resources/Kalimba.mp3'
     });

     wavCrossfadeSongB = soundManager.createSound({
          id: 'crossfadeB',
          url: 'resources/traditional.wav'
     });
  },
  ontimeout:
    function() {
    }
});

//queue and play both songs at once, starting them at the current volumes designated by the crossfade bar
function crossfadePlay() {
  mp3CrossfadeSongA.pause();
  gotoTime(mp3CrossfadeSongA, 0);
  mp3CrossfadeSongA.setVolume($("#crossfade-current-numA").val());

  wavCrossfadeSongB.pause();
  gotoTime(wavCrossfadeSongB, 0);
  wavCrossfadeSongB.setVolume($("#crossfade-current-numB").val());

  mp3CrossfadeSongA.play();
  wavCrossfadeSongB.play();
}


function crossfadeStop() {
  mp3CrossfadeSongA.pause();
  wavCrossfadeSongB.pause();
}

//});