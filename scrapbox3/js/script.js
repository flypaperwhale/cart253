"use strict";

let barkSFX;
// Whether to display "BARK!"
let showBarkText = false;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Add cues to our sound at specific times (in seconds)
  // which will call either showBark() or hideBark() in order
  // to only show the text during barking sounds...
  barkSFX.addCue(0.1, showBark);
  barkSFX.addCue(0.3, hideBark);
  barkSFX.addCue(0.4, showBark);
  barkSFX.addCue(0.7, hideBark);
}

function draw() {
  background(0);

  // If showBarkText is true, we should display BARK! on the canvas
  if (showBarkText) {
    push();
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(`BARK!`, width / 2, height / 2);
    pop();
  }
}

// Called when the appropriate cue is triggered!
function showBark() {
  showBarkText = true;
}

// Called when the appropriate cue is triggered!
function hideBark() {
  showBarkText = false;
}

function mousePressed() {
  barkSFX.play();
}
