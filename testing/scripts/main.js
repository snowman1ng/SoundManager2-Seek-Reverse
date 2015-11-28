/*****************************
**  File:           main.js
**  Description:    Main Javascript file. Contains soundmanager setup for sound objects and implementations of
**                  both supporting and new functions to extend the SoundManager2 JS Lib. 
**                  Also contains scripts to control modal interaction.
**  Contributors:   Keith Rasweiler, Yaotian He, Dau Lam
**  Date:           Nov 27, 2015
**
*****************************/

/* Global variables to hold our sound objects */
var mp3Sound;
var wavSound;
var aacSound;
var oggSound;

/* Set up soundManager */
soundManager.setup({
  url: '../swf/',         // SWF Flash-fallback pathname
  useHTML5Audio: true,
  onready: function() {
    mp3Sound = soundManager.createSound({
          id: 'mp3',      // unique id
         url: 'http://hpr.dogphilosophy.net/test/mp3.mp3'
     });

     wavSound = soundManager.createSound({
          id: 'wav',      // unique id
         url: 'http://hpr.dogphilosophy.net/test/wav.wav'
     });

     aacSound = soundManager.createSound({
          id: 'acc',      // unique id
         url: 'http://freshly-ground.com/data/audio/sm2/birds-in-kauai-128kbps-aac-lc.mp4'
     });

     oggSound = soundManager.createSound({
          id: 'ogg',      // unique id
         url: 'http://hpr.dogphilosophy.net/test/ogg.ogg'
     });
  },
  ontimeout:
    function() {
      alert("Time-out while loading SoundManager and/or files.");
    }
});


/* When document is ready, load these */
$(function() {
  openModal();
  closeModal();
  modalStopProp();

  /* Bar UI Player - seek time */
  $("#seek-btn").on("click", function(e) {
    inputTime = $("#seek-time").val();
    window.sm2BarPlayers[0].actions.seekTo( inputTime * 1000 ); // convert inputTime to milliseconds
  });

   $( "#disclaimer" ).toggle();
  $( "footer" ).click(function() {
    $( "#disclaimer" ).toggle( "slow");
  });
});

/*  @function gotoTime
*   @Descr:   seek/goto inputted time 
*   @Params:  obj: the sound object
*             time: the desired time to go to (in milliseconds) 
*   @Return:  none */
function gotoTime(obj, time) {
  var soundId = obj.id;
  if (obj.readyState == 0) {                  // 0 = uninitialised
    soundManager.load(soundId);               // if uninitialized, initialize and load the sound
    console.log("*Log: Loading " + soundId);  // log

    setTimeout(function() {                   // sound just loaded, so wait a bit before trying to set position
      console.log ("*Log: Seeking to " + time);
      obj.setPosition(time);
    }, 100);
  }
  else { 
    if (obj.playState == 1) {                 // 1 = playing or buffered
      obj.pause();                            // if playing, pause it
    }
    obj.setPosition(time);
  }   
}

/*  @function mp3PlayLate
*   @Descr:   a function to use gotoTime as an example (hard-coded to goto 60 seconds) 
*   @Params:  none
*   @Return:  none */
function mp3PlayLate(){
  // mp3Sound.pause();
  gotoTime(mp3Sound, 60000);  // in milliseconds
  mp3Sound.play();
}

/*  @function seekPositionForMP3
*   @Descr:   to be in conjunction with the pop-up modal to allow seek functionality for mp3 object. 
*             Gets input from the modal input fields. 
*   @Params:  none
*   @Return:  none */
function seekPositionForMp3(){
  if (mp3Sound.readyState == 0) {           // 0 = uninitialised
    soundManager.load('mp3');               // if uninitialized, initialize and load the sound
    console.log("*Log: Loading mp3Sound");  // log
  }
  
	var res = getTimeFromUserInput();         // get user input for time position from the textfield
	if (res == null) {                        // wrong or empty input
    alert("Wrong time format!");
    document.getElementById("positionText").value = "";
	}
	else {
    var position = (parseInt(res[0]*60)+parseInt(res[1])) * 1000; // parse input into correct data format
    var duration = waitForDurationLoadSync(mp3Sound);             // wait for sound object to fully load and then get the playtime duration

    if (position > duration) {
      alert("Max duration is:   "+mins+":"+second);               // alert user than input exceeds allowable playtime duration
    }
		else {
      console.log("*Log: position changed to: " + position);      // log
      // mp3Sound.pause();
      gotoTime(mp3Sound, position);                               // seek to position (time)
      mp3Sound.play();
    }
	}
}

/*  @function updateMaxDuration
*   @Descr:   auxiliary function to be used in conjunction with pop-up modal and seekPositionForMP3.
*             Updates the max playtime duration field in the modal  
*   @Params:  duration: the max playtime duration in MM:SS format
*   @Return:  none */
function updateMaxDuration(duration) {
  var mins = parseInt(duration/60/1000);
   var second = parseInt(duration/1000-mins*60);
   document.getElementById("maxDuration").value = "Max: " + mins + ":" + second;
}

/*  @function waitForDurationLoadSync
*   @Descr:   auxiliary function to be used in conjunction with seekPositionForMP3.
*             Provides a wait-and-lock until the inputted sound object becomes in the loaded/success state   
*   @Params:  obj: the sound object
*   @Return:  the sound object's duration */
function waitForDurationLoadSync(obj) {
  while (obj.readyState != 3) {                       // 3 = loaded/success
    console.log("*Log: mp3Sound not loaded yet ..."); // log
    setTimeout(waitForDurationLoadSync, 500, obj);    // wait 500 millisecond and try again
    return;
  }
  updateMaxDuration(obj.durationEstimate);
  return obj.durationEstimate;
}

/*  @function getTimeFromUserInput
*   @Descr:   auxiliary function to be used in conjunction with pop-up modal and seekPositionForMP3.
*             Compares user input with desired format    
*   @Params:  none
*   @Return:  the array of minute and seconds, or null if invalid input */
function getTimeFromUserInput() {
  var re = new RegExp("[0-5]?[0-9]:[0-5]?[0-9]");                 // regular expression
	var message = document.getElementById("positionText").value;    // get user input
	
	if (re.test(message)) {                                         // compare 
		return message.split(":");
  } 
  else {
     return null; 
  }
}

/*  @function increTime
*   @Descr:   auxiliary function to be used in conjunction with pop-up modal and getTimeFromUserInput.
*             Provides ability to increase the number in positionText field by one 
*   @Params:  none
*   @Return:  none */
function increTime() {
	var res = getTimeFromUserInput();                             // gets an array of minutes/seconds
	var min = 0;
	var sec = 0;
	if (res != null ) {
    min = res[0];
    sec = res[1];
  }
  if (sec == 59) {                                              // conversion from seconds to minutes
    if (min!=59) {
      sec=0;
      min++;
    }
  }
  else { sec++; }
  document.getElementById("positionText").value = min+ ":" + sec;// reset field
}

/*  @function decreTime
*   @Descr:   auxiliary function to be used in conjunction with pop-up modal and getTimeFromUserInput.
*             Provides ability to decrease the number in positionText field by one 
*   @Params:  none
*   @Return:  none */
function decreTime(){
	var res = getTimeFromUserInput();                              // gets an array of minutes/seconds
	var min = 0;
	var sec = 0;
	if (res != null){
    min = res[0];
    sec = res[1];
  }
  if (sec == 0) {
    if (min != 0) {
      sec=59;
		  min--;
    }
  }
  else{ sec--; }
  document.getElementById("positionText").value = min + ":" + sec;// reset field
}

/*  @function mp3Play
*   @Descr:   play mp3 sound object
*   @Params:  none
*   @Return:  none */
function mp3Play(){
  mp3Sound.pause();
  mp3Sound.play();
}

/*  @function mp3Pause
*   @Descr:   pause mp3 sound object
*   @Params:  none
*   @Return:  none */
function mp3Pause(){
 mp3Sound.pause();
};

/*  @function wavPlay
*   @Descr:   play wav sound object
*   @Params:  none
*   @Return:  none */
function wavPlay(){
 wavSound.pause();
 wavSound.play();
}

/*  @function wavPause
*   @Descr:   pause wav sound object
*   @Params:  none
*   @Return:  none */
function wavPause(){
 wavSound.pause();
};

/*  @function aacPlay
*   @Descr:   play aac sound object
*   @Params:  none
*   @Return:  none */
function aacPlay(){
 aacSound.pause();
 aacSound.play();
}

/*  @function aacPause
*   @Descr:   pause aac sound object
*   @Params:  none
*   @Return:  none */
function aacPause(){
 aacSound.pause();
};

/*  @function oggPlay
*   @Descr:   play ogg sound object
*   @Params:  none
*   @Return:  none */
function oggPlay(){
 oggSound.pause();
 oggSound.play();
}

/*  @function oggPause
*   @Descr:   pause ogg sound object
*   @Params:  none
*   @Return:  none */
function oggPause(){
 oggSound.pause();
};

/*  @function openModal
*   @Descr:   open modals when clicked
*   @Params:  none
*   @Return:  none */
function openModal() {
	$(".modal").on("change", function() {
    if ($(this).find("input.modal-state[id^=modal-]").is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
	});
}

/*  @function openModal
*   @Descr:   close modals when clicked on CROSS or any besides the modal
*   @Params:  none
*   @Return:  none */
function closeModal() {
	$(".modal-fade-screen, .modal-close").on("click", function() {
		$(".modal-state:checked").prop("checked", false).change();
	});
}

/*  @function modalStopProp
*   @Descr:   prevent any events from bubbling up the DOM tree
*   @Params:  none
*   @Return:  none */
function modalStopProp() {
	$(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	});
}