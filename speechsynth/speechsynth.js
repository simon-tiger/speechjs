/*
 * speechsynth.js version 0.0.1
 * made by Simon Tiger Houben
 * for Speech Synthesis
 * Browser Support: Chrome, Safari
 */

// Global vars
var speechSynth = window.speechSynthesis; // Speech Synthesis Object
var speechSynthVars = {};                 // Speech Synthesis Variables

// Set Language
setSpeechSynthVar('language', navigator.language || 'en-US');

// Set Speech Synthesis Vars (vars related to speech
// synthesis)
function setSpeechSynthVar(name, value) {
  speechSynthVars[name] = value;
}

// Available Voices
var availableVoices;

window.addEventListener('load', function() {
  availableVoices = speechSynth.getVoices();
});

// Available Voice Names
function getVoiceNames() {
  var voiceNames = [];
  for (var i = 0; i < availableVoices.length; i++) {
    voiceNames.push(availableVoices[i].name);
  }
  return voiceNames;
}

// To say something
function speak(message) {
  var utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = speechSynthVars.language;
  utterance.voice = speechSynthVars.voice;
  utterance.volume = speechSynthVars.volume;
  utterance.rate = speechSynthVars.rate;
  utterance.pitch = speechSynthVars.pitch;

  speechSynth.speak(utterance);

  // Handle started event
  if (speechSynthVars.started) {
    speechSynthVars.started();
  }

  // Handle ended event
  if (speechSynthVars.ended) {
    utterance.onend = speechSynthVars.ended;
  }

  // Return the Utterance (allows some more features)
  return utterance;
}

// To handle started event
function startedSpeaking(callback) {
  setSpeechSynthVar('started', callback);
}

// To handle ended event
function endedSpeaking(callback) {
  setSpeechSynthVar('ended', callback);
}
