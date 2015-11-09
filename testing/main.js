var mp3Sound;
var wavSound;

/* Set up soundManager */
soundManager.setup({
  url: '/path/to/swf-files/',

  onready: function() {
    mp3Sound = soundManager.createSound({
          id: 'aSound', // optional: provide your own unique id
         url: 'Kalimba.mp3'
     });

     wavSound = soundManager.createSound({
          id: 'bSound', // optional: provide your own unique id
         url: 'traditional.wav'
     });
  },
  ontimeout:
    function() {
    }
});

/* function to Seek/goto */
function gotoTime(obj, time) {
  obj.setPosition(time);
}

/* function to Play a mp3 file (skips 150secs in)*/
function mp3PlayLate(){
  mp3Sound.pause();
  gotoTime(mp3Sound, 150000); // works
  mp3Sound.play();
}
function seekPosition(){
	  mp3Sound.pause();
 var position  =  document.getElementById("positionText").value * 1000;
  gotoTime(mp3Sound, position); // works
  mp3Sound.play();
}
/* function to Play a mp3 file */
function mp3Play(){
  mp3Sound.pause();
  gotoTime(mp3Sound, 0);
  mp3Sound.play();
}

/* function to Pause a mp3 file */
function mp3Pause(){
 mp3Sound.pause();
};

/* function to Play a wav file */
function wavPlay(){
 wavSound.pause();
 wavSound.play();
}

/* function to Pause a wav file */
function wavPause(){
 wavSound.pause();
};

/* function to open modals when clicked */
function openModal() {
	$(".modal").on("change", function() {
			    if ($(this).find("input.modal-state[id^=modal-]").is(":checked")) {
			      $("body").addClass("modal-open");
			    } else {
			      $("body").removeClass("modal-open");
			    }
	});
}
/* function to close modals when clicked on CROSS or any besides the modal */
function closeModal() {
	$(".modal-fade-screen, .modal-close").on("click", function() {
		$(".modal-state:checked").prop("checked", false).change();
	});
}

/* function to prevent any events from bubbling up the DOM tree */
function modalStopProp() {
	$(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	});
}

/* when document is ready, load these */
$(function() {
      // console.log(window.sm2BarPlayers[0]);
      // window.sm2BarPlayers[0].makeSound('Kalimba.mp3');
      // window.sm2BarPlayers.on = {
      //   play:  mp3Sound
      // };

		  openModal();
		  closeModal();
		  modalStopProp();

      $("#seek-btn").on("click", function(e) {
        // Not using for now
        //$(".modal").find("input.modal-state[id^=modal-]").prop("checked", true);

        // todo : try to reuse object
        /*kalimbaMp3 = {
          'target': {
            'href': wavSound.url
          },
          'href': 'http://freshly-ground.com/data/audio/sm2/Adrian%20Glynn%20-%20Seven%20Or%20Eight%20Days.mp3'
        };
        window.sm2BarPlayers[0].actions.play( kalimbaMp3 ); */
        inputTime = $("#seek-time").val();
        window.sm2BarPlayers[0].actions.timeSeek( inputTime * 1000 );
      });
});
