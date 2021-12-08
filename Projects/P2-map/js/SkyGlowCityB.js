class SkyGlowCityB {
  constructor(){
//this.player; // player avatar, class Player
// this.streetlampImage;
// this.streetlampFoot;
// this.stairs;
// this.tree;

// this.lampX = 225; // lamp x value
// this.lampY = 510; // lamp y value

function preload(){


}

/**
Description of setup
*/


/**
Description of draw()
*/
display(){
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
  displayTrees();

}

// // Create player
// createPlayer(x, y) {
//   // create new player class
//   this.player = new Player(x, y);
// }

// displayPlayer() { // player is displayed
//   this.player.constrain(height,width); // movement is constrained to the ground
//   this.player.display(); // display player
// }

// movePlayer() {
//   this.player.handleInput(); // handle player input
//   this.player.move(); // and move player avatar
// }

//Dolly's building
displayDollysBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(0 + 50, height / 2 + 175, 100, 235);
  pop();
}

//Background building
displayBackgroundBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(0 + 50, height / 2 - 28, 100, 90);
  pop();
}
//Shop
displayShop() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2 + 175, height / 2+215, 150, 100);
  pop();
}

displayStairs(){
  push();
  imageMode(CENTER);
  image(stairs, 120.5, height/2 + 181, 45, 228); // hard numbers
  pop();
}

displaySky() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(35,45,125); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2, 0, 500, 990);
  pop();
}

displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(20, 85, 45); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 500, 1010); // displayed at bottom center
  pop();
}

displayCircleAndPath() { // draws a gray path leading to the circle
  // in the middle of which stands the lamppost
  push();
  noStroke();
  fill(45, 45, 45); // dark grey
  ellipseMode(CENTER);
  ellipse(width / 2 - 25, height / 2 + 70, 135, 70); // a circle at mid center
  rectMode(CENTER);
  rect(width / 2 - 25, height / 2 + 200, 40, 300); // a narrow path down the center
  pop();
}

displayLampFoot() { // player moves in front of lamp foot
  push();
  imageMode(CENTER);
  image(streetlampFoot, this.lampX, this.lampY + 50, 15, 15); // hard numbers
  pop();
}

displayLamppost() { // lampost is displayed
  push();
  imageMode(CENTER);
  image(streetlampImage, this.lampX, this.lampY, 15, 90);
  pop();
}

displayTrees() { // lampost is displayed
  push();
  imageMode(CENTER);
  image(tree, 440, 540, 100, 110);
  pop();
}
