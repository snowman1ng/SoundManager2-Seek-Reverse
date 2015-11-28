# CIS Project
<p>	Description:
	We worked on the open source project SoundManager2 Library by scottschiller. 
	It is a Javascript API that provides that provides an easy and reliable way to add audio content to web pages. 
	SoundManager2 utilizes the tools provided by HTML5 and provides fallback code to revert to Flash in older browsers. 
	It has many different GUI options to help web designers incorporate audio into web pages. 
	We will be implementing new features to it and its library of music players</p>
<p>Contributors:  Keith Rasweiler, Yaotian He, Dau Lam </p>
<p>Date: 11/28/2015</p>

## Language/Tools used:
<ul>
	<li><a target="_blank" href="https://github.com/scottschiller/SoundManager2">SoundManager2 JS Lib v2.97</a>, </li>
	<li><a target="_blank" href="http://www.schillmania.com/projects/soundmanager2/demo/bar-ui/">Bar-UI Music Player</a>, </li>
	<li>HTML5, </li>
	<li>CSS3, </li>
	<li>Javascript, </li>
	<li>JQuery v1.11.3, </li> 
	<li>JQuery UI </li>
</ul>

## Contributions Made:
Our implementations and demos are found in the directory testing/ and custom_documentation/
(Note: We decided to not modify script/soundmanager2.js at this moment to explicitly showcase our contributions.)
<ol>
	<li><h3>Seek Functionality</h3>
		<p>We added a function (found in testing/scripts/main.js) that will allow "seek to specified time" for a particular sound object created by the library.</p>
		<code>function gotoTime(obj, time) {...}</code>
	</li>
	<li><h3>Popup Time Controller</h3>
		<p>We added an interface to utilize our seek function. It provides handling protocols to load the sound and checking mechanisms for correct time input.</p>
		<p>This includes several functions in testing/main.js, data checking, regular expressions, and button controls. We also made this into a pop-up modal but could be used in any html tags.</p>
	</li>
	<li><h3>Bar UI Player</h3>
		<p>We modified Bar UI's player to include a "seek to" button, input, and javascript control. We think this will allow more precise control over the click-and-drag bar.</p>
		<p>Modified bar-ui.js and added an option <i>seekTo</i> starting at line 947; this makes use of our previously mentioned <i>gotoTime(obj, time)</i> function.</p>
	</li>
	<li><h3>Crossfader (using SoundManager2)</h3>
		<p>We added a crossfader much like a DJ uses to cue and/or transition between songs</p>
	</li>
	<li><h3>Piano Keyboard (using SoundManager2)</h3>
		<p>We added an interactive piano keyboard player to demo the handling of multiple sounds.</p>
	</li>
</ol>

## Usage:
Our implementations and demos are found in the directory testing/ and custom_documentation/
<p><a target="_blank" href="http://babyhuey.cis.temple.edu/~tuf72877/SoundManager2-Seek-Reverse/testing/">Live Demo available</a></p>
<p><a target="_blank" href="http://daul.me/project/sm2/testing/">And backup</a></p>

<ul><p>For complete explantation, please review the comments in the html files in test/ for usage.</p>
	<p>(Note: Modifiy the pathnames as needed. Currently they are all relative to test/)</p>
	<p>(Note: We relied heavily on JQuery because it seamlessly handles crossbrowser issues.</p>
	<li>
		<p>First, include SoundManager2 into your page like such:</p>
		<code><script type="text/javascript" src="../script/soundmanager2.js"></script></code>
	</li>
	<li>
		<p>Next, depending on what particular thing you want include its JS, dependencies, and/or CSS file</p>
		<ol>
			<li><p>Seek-to functionality</p>
				<ul>
					<li>
						<code>&lt;link rel="stylesheet" href="css/style.css"&gt;</code>
					</li>
					<li>
						<code>&lt;script src="http://code.jquery.com/jquery-1.11.3.min.js"&gt;&lt;/script&gt;</code>
					</li>
					<li>
						<code>&lt;script type="text/javascript" src="scripts/main.js"&gt;&lt;/script&gt;</code>
					</li>
				</ul>
			</li>
			<li><p>Bar-UI Player</p>
				<ul>
					<li>
						<code>&lt;link rel="stylesheet" href="css/bar-ui.css"&gt;</code>		
					</li>
					<li>
						<code>&lt;link rel="stylesheet" href="css/style.css"&gt;</code>
					</li>
					<li>
						<code>&lt;script src="http://code.jquery.com/jquery-1.11.3.min.js"&gt;&lt;/script&gt;</code>
					</li>
					<li>
						<code>&lt;script type="text/javascript" src="scripts/bar-ui_mod-11-28-2015.js"&gt;&lt;/script&gt;</code>
					</li>
					<li>
						<code>&lt;script type="text/javascript" src="scripts/main.js"&gt;&lt;/script&gt;</code>
					</li>
				</ul>
			</li>
			<li><p>Piano Keyboard</p>
				<ul>
					<li>
						<code>&lt;link rel="stylesheet" href="css/keyboard-styles.css"&gt;</code>
					</li>
					<li>
						<code>&lt;script src="http://code.jquery.com/jquery-1.11.3.min.js"&gt;&lt;/script&gt;</code>
					</li>
					<li>
						<code>&lt;script src="scripts/keyboard-piano.js"&gt;&lt;/script&gt;</code>
					</li>
				</ul>
			</li>
		</ol>
	</li>
</ul>