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

/* Set up soundManager */
soundManager.setup({
  url: '/path/to/swf-files/',

  onready: function() {
     mp3CrossfadeSongA = soundManager.createSound({
          id: 'crossfadeA',
          url: 'Kalimba.mp3'
     });

     wavCrossfadeSongB = soundManager.createSound({
          id: 'crossfadeB',
          url: 'traditional.wav'
     });
  },
  ontimeout:
    function() {
    }
});

function crossfadePlay() {
  mp3CrossfadeSongA.pause();
  gotoTime(mp3CrossfadeSongA, 0);

  wavCrossfadeSongB.pause();
  gotoTime(wavCrossfadeSongB, 0);

  mp3CrossfadeSongA.play();
  wavCrossfadeSongB.play();
}

function crossfadeStop() {
  mp3CrossfadeSongA.pause();
  wavCrossfadeSongB.pause();
}