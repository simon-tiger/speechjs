# speechjs
A Library for speech recognition and synthesis.

## Example (Recognition)
```javascript
// Turn non-stop mode on
setSpeechRecVar('non-stop', true);

// Turn continuous (interim) mode on
setSpeechRecVar('interim', true);

// Anytime somebody speaks
function speechRecognized(result) {
	if (result.toBool) {
  	document.getElementById('result').innerHTML = result.toString;

  	// Is it an interim result (this will never be
  	// true if you don't turn interim mode on)
  	if (result.isInterim) {
  		document.getElementById('result').innerHTML += ' (interim)';
  	} else {
  		document.getElementById('result').innerHTML += ' (final)';
  	}
  }
}

// Start listening
startRec();
```
Browser Support:
* Chrome
* Firefox (not by default)

## Example (Synthesis)
```javascript
// Set default voice to "Alex"
setSpeechSynthVar('voice', 'Alex');

// Say something
say();

// Change background when I end
document.body.style.background = '#000';

endedSpeaking(function() {
	document.body.style.background = '#000';
});

window.onclick = function() {
	// Get a random available voice
	var voice = Math.floor(Math.random() * getVoiceNames().length);
	voice = getVoiceNames()[voice];

	// Set voice to that voice
	setSpeechSynthVar('voice', voice);

	// Say it again
	say();
}

// Function to say something
function say() {
	speak('Hello!');

	// Change background when I start
	document.body.style.background = '#F00';
}
```
Browser Support:
* Chrome
* Safari

Need more? Check out [the reference](https://github.com/simon-tiger/speechjs/wiki/Reference).
