/**

Balloon Popper

Displays a set of balloons (red and blue) on the canvas and lets you
pop them with the mouse. The balloons are numbered and you need to
pop them in the correct order. Resets when all the balloons are popped.

*/

"use strict";

// An array to contain balloons (that we will pop!)
let balloons = [];
// How many red balloons?
let numRedBalloons = 5;
// How many blue balloons?
let numBlueBalloons = 2;
// What is the index (position in the balloons array) of the
// balloon the user is currently meant to pop?
let nextBalloon = 0;

function setup() {
  createCanvas(500, 500);
  // Reset the simulation to create all the balloons
  reset();
}

function draw() {
  background(0);
  // Display the ballons! (We'll handle popping them in mousePressed())
  displayBalloons();
}

function displayBalloons() {
  // Go through the full array of balloons
  // We'll go through the array "backwards" when we display them
  // so that the lower numbered balloons will be displayed on
  // top of the higher ones (since we know we need to click lower
  // numbers first)
  for (let i = balloons.length - 1; i >= 0; i--) {
    // Get the current balloon
    let balloon = balloons[i];
    // Check for highlighting (mouseover)
    handleHighlighting(balloon);
    // Display the balloon and provide its number
    displayBalloon(balloon, i);
  }
}

function handleHighlighting(balloon) {
  // Check for mouseover with our special function that returns
  // true if there's a mouseover and false if not
  if (mouseIsInsideBalloon(balloon)) {
    // If there's a mouseover, use the highlight color
    balloon.fill = balloon.highlightFill;
  } else {
    // Otherwise use the normal color
    balloon.fill = balloon.normalFill;
  }
}

function displayBalloon(balloon, number) {
  // Only display a balloon if it hasn't been popped
  if (!balloon.popped) {
    // Display the balloon as a circle
    push();
    noStroke();
    fill(balloon.fill);
    ellipse(balloon.x, balloon.y, balloon.size);
    pop();

    // Display a line sticking out of the bottom so it looks balloony
    push();
    stroke(255);
    strokeWeight(2);
    line(balloon.x, balloon.y + balloon.size/2, balloon.x, balloon.y + balloon.size*1.5);

    // Display the number on the balloon
    push();
    stroke(255);
    strokeWeight(0.5);
    noFill();
    textAlign(CENTER, CENTER);
    textSize(32);
    text(number + 1, balloon.x, balloon.y);
  }
}

function mouseIsInsideBalloon(balloon) {
  // Calculate the distance between the mouse and the balloon
  let d = dist(mouseX, mouseY, balloon.x, balloon.y);
  // If it's inside the ballon return true, otherwise false
  if (d < balloon.size / 2) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  // The user pressed the mouse so go through all the balloons
  // so we can check each one for popping!
  for (let i = 0; i < balloons.length; i++) {
    // Get the current balloon
    let balloon = balloons[i];
    // To pop a balloon we need the mouse to be inside that
    // balloon AND we need the index of the ballon (i) to match
    // the nextBalloon requirement we're checking
    if (mouseIsInsideBalloon(balloon) && i === nextBalloon) {
      // If it's the right one to pop then record that it's
      // popped
      balloon.popped = true;
      // Change the next balloon by one so that the user has to click
      // the next one in the array
      nextBalloon += 1;
      // Check if they've popped all the balloons by comparing nextBallon
      // to the length of the array
      if (nextBalloon >= balloons.length) {
        // All the balloons has been collected!
        // Let's start all over!
        reset();
      }
      // We don't need to keep going through the loop because
      // we found the balloon they're popping
      break;
    }
  }
}

function reset() {
  // Empty the balloons array (so we can create new ones)
  balloons = [];
  // Reset the next balloon to pop to 0 (the first one)
  nextBalloon = 0;

  // Go through the number of red balloons and make them all
  for (let i = 0; i < numRedBalloons; i++) {
    // Create the balloon
    let balloon = createBalloon(255, 0, 0, 100);
    // Add the balloon to the array
    balloons.push(balloon);
  }

  // Go through the number of blue balloons and make them all
  for (let i = 0; i < numBlueBalloons; i++) {
    // Create the balloon
    let balloon = createBalloon(0, 0, 255, 50);
    // Add the balloon to the array
    balloons.push(balloon);
  }
}

/**
Create a balloon with the specific RGB values and a size
*/
function createBalloon(r, g, b, size) {
  // Create the balloon in a variable
  let balloon = {
    // Make sure it's positioned randomly on the canvas
    // without going off the edge
    x: random(0 + size/2, width - size/2),
    y: random(0 + size/2, height - size/2),
    size: size,
    // Set its current fill to a default (slightly darker)
    fill: color(r - 100, g - 100, b - 100),
    // Set the highlight fill based on the provided RGB values
    highlightFill: color(r, g, b),
    // Remember the "normal" fill color (darker than specified)
    normalFill: color(r - 100, g - 100, b - 100),
    // Has the balloon been popped? Not at the start!
    popped: false
  };
  // Send the new balloon back to whoever asked for it
  // (In this case the balloon creation loop in reset())
  return balloon;
}
