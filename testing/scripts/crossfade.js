/*****************************
**  File:           crossfade.js
**  Description:    Javascript to control the crossfade.
**  Contributors:   Keith Rasweiler, Yaotian He, Dau Lam
**  Date:           Nov 27, 2015
**
*****************************/

/* Global variables  */
var slider = $( "#slider");                     // set variable reference to the slider
var mp3CrossfadeSongA;                          // variable to hold first sound object
var wavCrossfadeSongB;                          // variable to hold second sound object

var currentVal = $("#slider").slider("value");
//$("#crossfade-current-numA").val(currentVal);
//$("#crossfade-current-numB").val(CurrentVal);

/* Set up soundManager */
soundManager.setup({
  url: '../swf/',           // SWF Flash-fallback pathname
  onready: function() {
     mp3CrossfadeSongA = soundManager.createSound({
          id: 'crossfadeA', // id to reference first sound object
          url: 'resources/Kalimba.mp3'
     });
     wavCrossfadeSongB = soundManager.createSound({
          id: 'crossfadeB', // id to reference second sound object
          url: 'resources/traditional.wav'
     });
  },
  ontimeout:
    function() {
      alert("Time-out while loading SoundManager and/or files.");
    }
});

/* When document is ready, load these */
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

/*  @function crossfadePlay
*   @Descr:   queue and play both songs at once, starting them at the current volumes designated by the crossfade bar
*   @Params:  none 
*   @Return:  none */
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

/*  @function crossfadePlay
*   @Descr:   pause both songs 
*   @Params:  none 
*   @Return:  none */
function crossfadeStop() {
  mp3CrossfadeSongA.pause();
  wavCrossfadeSongB.pause();
}