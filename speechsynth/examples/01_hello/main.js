var textbox;

window.addEventListener('load',  function() {
  // Change color so we can see everything
  document.body.style.color = '#FFF';
  document.body.style.background = '#000';

  // Why not get what the user sead in a textbox?
  textbox = document.getElementById('textbox');

  // Function we'll define later
  say();

  // Indicator saying that we're not speaking any more
  endedSpeaking(function() {
    document.body.style.background = '#000';
  });
});

// When we click say something
window.onclick = say;

// Function to say something
function say() {
  speak(textbox.value);

  // Indicator saying that we're speaking
  document.body.style.background = '#F00';
}
