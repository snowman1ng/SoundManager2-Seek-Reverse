/*****************************
**	File: 			keyboard-piano.js
**	Description: 	Automatically Creates sound objects using SoundManager and set up event listeners for each key
**	Contributors: 	Keith Rasweiler, Yaotian He, Dau Lam
**	Date: 			Nov 22, 2015
**
*****************************/

/* SETUP */
// An array to hold the sound objects to be created in setup
var key = [];
// Include the SoundManager JS library first
if (!soundManager) {
	alert("SoundManager is not loaded");
}
else {
	// Set up soundManager
	soundManager.setup({
		// Give path to flash directory
	  	url: '/path/to/swf-files/',

		onready: function() {
			// Create all your keys as div under keyboard-container
			var keyboard = document.getElementById( 'keyboard-container' );
			var keyboardChildren = keyboard.children;
			var i;
			for (i = 0; i < keyboardChildren.length; i++) {
				// The div's id attribute will be used as the sound identifer
				// The div's data-res attribute will be used to locate each file *recommends relative pathname*
				var name = keyboardChildren[i].getAttribute("id");
				var resUrl = keyboardChildren[i].getAttribute("data-res");
				
			    key[name] = soundManager.createSound({
			    		          id: name, 
			    		         url: resUrl });    
			}
		},

		ontimeout:
			function() {
				alert("Sound files are not loaded yet.")
			}
	});
}

/* EVENT LISTENERS */
$( document ).ready(function() {
	// Adds an event listener to keys with class 'white-key' 
	$( "#keyboard-container > div[class^='white-key']" ).click(function() {
		var thisKey = $( this );
		var name = thisKey.attr('id');
		$( this ).css( "background-color", "pink");
		setTimeout(function(){ 
			thisKey.css( "background-color", "white");
			}, 500
		);
		// Plays the sound associated with the key
		key[name].play();
	});
	// Adds an event listener to keys with class 'black-key' 
	$( "#keyboard-container > div[class^='black-key']" ).click(function() {
		var thisKey = $( this );
		var name = thisKey.attr('id');
		$( this ).css( "background-color", "pink");
		setTimeout(function(){ 
			thisKey.css( "background-color", "black");
			}, 500
		);
		// Plays the sound associated with the key
		key[name].play();
	});
});