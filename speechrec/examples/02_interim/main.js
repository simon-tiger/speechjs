// Turn non-stop mode on
setSpeechRecVar('non-stop', true);

// Turn interim mode on
setSpeechRecVar('interim', true);

// Anytime somebody speaks
function speechRecognized(result) {
	if (result.toBool) {
		document.getElementById('result').innerHTML = result.toString;
	}

	if (result.isInterim) {
		document.getElementById('result').innerHTML += ' (interim)';
	} else {
		document.getElementById('result').innerHTML += ' (final)';
	}
}

// Start listening
startRec();
