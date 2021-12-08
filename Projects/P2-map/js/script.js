/**
Interrupting Sky Glow
Frankie Latreille

Dolly explores the town of Sky Glow, fulfilling the needs of townsfolk
while finding ways to turn out the lights in town
so that she might see the constellations in the sky
*/

"use strict";

let state = undefined;

/**
Description of preload
*/
function preload() {
  streetlampImage = loadImage("assets/images/lamp.png");
  streetlampFootImg = loadImage("assets/images/lampFoot.png");
  stairsImg =  loadImage("assets/images/stairs.png");
  treeImg = loadImage("assets/images/tree.png");
}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 1000);
  createPlayer(230, 495); // (x,y) starting positions declared and new Player is created
  state = new TitleState();
  map =
}

function setup() {
  createCanvas(); // hard numbers?//


}
/**
Description of draw()
*/
function draw() {
  state.update();
}

function keyPressed() {
  state.keyPressed();
}

function mouseClicked() {
  state.mouseClicked();
}
