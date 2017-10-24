var textbox;
var pitch;

window.onload = function() {
  // Change color so we can see everything
  document.body.style.color = '#FFF';
  document.body.style.background = '#000';

  // Why not get what the user sead in a textbox?
  textbox = document.getElementById('textbox');
  pitch = document.getElementById('pitch');

  // Function we'll define later
  say();

  // Indicator saying that we're not speaking any more
  endedSpeaking(function() {
    document.body.style.background = '#000';
  });
}

// When we click say something
window.onclick = say;

// Function to say something
function say() {
  // Speech Synthesis Variables are variables
  // related to Speech
  setSpeechSynthVar('pitch', pitch.value);

  // availableVoices is an array of all of the voices
  // getVoiceNames() returns an array of all of the voice names
  var voice = Math.floor(Math.random() * getVoiceNames().length);
  voice = getVoiceNames()[voice];

  speak(textbox.value);

  // Indicator saying that we're speaking
  document.body.style.background = '#F00';
}
