// Turn non-stop mode on
setSpeechRecVar('non-stop', true);

// Anytime somebody speaks
function speechRecognized(result) {
	if (result.toBool) {
		document.getElementById('result').innerHTML = result.toString;
	}
}

// Start listening
startRec();
