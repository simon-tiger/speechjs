/*
 * speechrec.js version 0.0.1
 * made by Simon Tiger Houben
 * for Speech Recognition
 * Browser Support: Chrome, Maybe Firefox
 */

// Global vars
var speechRec;          // Speech Recognition Object
var speechRecVars = {}; // Speech Recognition Variables

// Creating Speech Recognition Object
if (window.SpeechRecognition) {
	speechRec = new window.SpeechRecognition();
// For Browser Support
} else {
	speechRec = new window.webkitSpeechRecognition();
}

// Set Language
speechRec.lang = navigator.language || 'en-US';

// Set Speech Recognition Vars (vars related to speech
// recognition)
function setSpeechRecVar(name, value) {
	if (name == 'interim') {
		speechRec.interimResults = value;
	} else if (name == 'language') {
		speechRec.lang = value;
	}
	speechRecVars[name] = value;
}

// Anytime somebody speaks
speechRec.onresult = function(e) {
	var result = e.results[e.resultIndex];

	// speechRecognized is the function
	// being called every time somebody
	// speaks
	if (speechRecognized) {
		// Things being passed to the function
		var options = {};
		options.toString = result[0].transcript || null; // What you sead
		options.toBool = Boolean(options.toString); // Is it any confident

		if (speechRecVars['get-confidence']) {
			options.confidence = result[0].confidence; // Confidence level
		}

		options.isInterim = !result.isFinal; // Is the result an interim result
		options.toRaw = result; // The result coming from native javascript

		speechRecognized(options);

		// For handling non-stop mode
		if (speechRecVars['non-stop']) {
			startRec();
		}
	}
}

// Start recording
function startRec() {
	speechRec.start();
}
