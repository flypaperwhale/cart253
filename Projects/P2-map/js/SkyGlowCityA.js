"use strict";

let player; // player avatar, class Player
let streetlampImage;
let streetlampFoot;
let stairs;

let lampX = 258; // lamp x value
let lampY = 510; // lamp y value

function preload(){
  streetlampImage = loadImage("assets/images/lamp.png");
  streetlampFoot = loadImage("assets/images/lampFoot.png");
  streetlampFoot = loadImage("assets/images/lampFoot.png");
  stairs =  loadImage("assets/images/stairs.png");
}

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
  displayCircleAndPath(); // display gray circle and path

  displayDollysBuilding();
  displayBackgroundBuilding();
  displayShop();
  displayStairs();

  movePlayer(); // handle user input and move player avatar

  displayLampFoot(); // displayed before the player for correct layer effect
  displayPlayer(); // displays player and also constrains them to move only on the ground
  displayLamppost(); // displays lamppost in front of player

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
  rect(width - 50, height / 2 + 175, 100, 235);
  pop();
}
//Background building
function displayBackgroundBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(0 + 35, height / 2 - 50, 70, 125);
  rect(0 + 15, height /2 + 50, 30, 100);
  rect(0 + 50, height/2 + 200, 110, 215);
  pop();
}
//Mayorhouse
function displayShop() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2+10, height / 2+127, 180, 165);
  pop();
}

function displayStairs(){
  push();
  imageMode(CENTER);
  image(stairs, 371, height/2 + 130, 45, 165); // hard numbers
  pop();
}

function displaySky() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(35,45,125); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2, 0, 500, 990);
  pop();
}

function displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(20, 85, 45); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 500, 1010); // displayed at bottom center
  pop();
}

function displayCircleAndPath() { // draws a gray path leading to the circle
  // in the middle of which stands the lamppost
  push();
  noStroke();
  fill(145, 145, 100); // dark grey
  ellipseMode(CENTER);
  ellipse(width / 2 + 9, height / 2 + 250, 250, 80); // a circle at mid center
  //rectMode(CENTER);
  //ßrect(width / 2 - 25, height / 2 + 200, 40, 300); // a narrow path down the center
  pop();
}

function displayLampFoot() { // player moves in front of lamp foot
  push();
  imageMode(CENTER);
  image(streetlampFoot, lampX, lampY + 50, 15, 15); // hard numbers
  pop();
}

function displayLamppost() { // lampost is displayed
  push();
  imageMode(CENTER);
  image(streetlampImage, lampX, lampY, 15, 90);
  pop();
}
