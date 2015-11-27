# CIS Project
<p>Description: <br>
	We will work on the open source project SoundManager2 Library by scottschiller. It is a Javascript API that provides that provides an easy and reliable way to add audio content to web pages. SoundManager2 utilizes the tools provided by HTML5 and provides fallback code to revert to Flash in older browsers. It has many different GUI options to help web designers incorporate audio into web pages. 
	We will be implementing new features to it and its library of music players</p>
<p>Contributors: Keith Rasweiler, Yaotian He, Dau Lam </p>
<p>Date: 11/28/2015</p>

## Language/Tools used:
<p>[SoundManager2 JS Lib v2.97](https://github.com/scottschiller/SoundManager2), [Bar-UI Music Player](http://www.schillmania.com/projects/soundmanager2/demo/bar-ui/), HTML5, CSS3, Javascript, JQuery v1.11.3, JQuery UI</p>

## Usage:
<p>Live Demo available at: [http://babyhuey.cis.temple.edu/~tuf72877/SoundManager2-Seek-Reverse/testing/](http://babyhuey.cis.temple.edu/~tuf72877/SoundManager2-Seek-Reverse/testing/)</p>
<p>And backup at: [http://daul.me/project/sm2/testing/](http://daul.me/project/sm2/testing/)</p>

## Contributions Made:
(Note: We decided to not modify script/soundmanager2.js at this moment to explicitly showcase our contributions.)
1. Seek Functionality
..* We added a function (found in test/scripts/main.js) that will allow "seek to specified time" for a particular sound object created by the library.
..* ```javascript
	function gotoTime(obj, time)
	```
