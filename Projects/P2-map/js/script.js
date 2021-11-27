"use strict";

let player; // player avatar, class Player

/**
Description of setup
*/
function setup() {
  createCanvas(500, 1000); // hard numbers?//

  createPlayer(230, 495); // (x,y) starting positions declared and new Player is created
}

/**
Description of draw()
*/
function draw() {
  background(0);

  //sky
  displaySky(); // the blue sky rectangle covers the starry bg image

  //ground
  displayGreenGrass(); // display Green Grass

  displayDollysBuilding();
  displayBackgroundBuilding();
  displayShop();

  movePlayer(); // handle user input and move player avatar
  displayPlayer(); // displays player and also constrains them to move only on the ground
}

// Create player
function createPlayer(x, y) {
  // create new player class
  player = new Player(x, y);
}

function displayPlayer() { // player is displayed
  player.constrain(height,width); // movement is constrained to the ground
  player.display(); // display player
}

function movePlayer() {
  player.handleInput(); // handle player input
  player.move(); // and move player avatar
}

//Dolly's building
function displayDollysBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2, height / 2, 20, 50);
  pop();
}
//Background building
function displayBackgroundBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2 + 100, height / 2, 20, 50);
  pop();
}
//Shop
function displayShop() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2 - 100, height / 2, 20, 50);
  pop();
}

function displaySky() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(100, 100, 255); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2, 0, 500, 900);
  pop();
}

function displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(30, 75, 40); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 500, 1100); // displayed at bottom center
  pop();
}
