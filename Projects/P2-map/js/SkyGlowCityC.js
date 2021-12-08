class SkyGlowCityC extends Map{
  constructor(itemImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
//this.player; // player avatar, class Player
this.name = `C`;
this.streetlampImg = itemImagesList[0];
this.streetlampFootImg = itemImagesList[1];
this.treeImg = itemImagesList[3];
this.garbageImg = itemImagesList[4];
this.gazeboImg = itemImagesList[5];


this.lampX = 378; // lamp x value
this.lampY = 501; // lamp y value
}

/**
Description of draw()
*/
display(player) {
  background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  //ground
  super.displayGreenGrass(); // display Green Grass
  this.displayCircleAndPath(); // display gray circle and path

  this.displayBackgroundBuilding();
  this.displayGarbage();
  this.displayGazebo();

  //movePlayer(); // handle user input and move player avatar

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
  this.displayLamppost(); // displays lamppost in front of player

  this.displayTrees();
}

// // Create player
// function createPlayer(x, y) {
//   // create new player class
//   player = new Player(x, y);
// }
//
// function displayPlayer() { // player is displayed
//   player.constrain(height,width); // movement is constrained to the ground
//   player.display(); // display player
// }
//
// function movePlayer() {
//   player.handleInput(); // handle player input
//   player.move(); // and move player avatar
// }


//Background building
displayBackgroundBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(0 + 50, height/2 + 225, 100, 80);
  pop();
}

displayGarbage(){
  push();
  imageMode(CENTER);
  image(this.garbageImg, 107, height/2 + 244, 35, 50); // hard numbers
  pop();
}

displayGazebo(){
  push();
  imageMode(CENTER);
  image(this.gazeboImg, 100, height/2+50, 130, 105); // hard numbers
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
  fill(145, 145, 145); // dark grey
  ellipseMode(CENTER);
  ellipse(width / 2 - 100, height / 2 + 290, 200, 20); // a circle at mid center
  //rectMode(CENTER);
  //ßrect(width / 2 - 25, height / 2 + 200, 40, 300); // a narrow path down the center
  pop();
}

displayLampFoot() { // player moves in front of lamp foot
  push();
  imageMode(CENTER);
  image(this.streetlampFootImg, this.lampX, this.lampY + 50, 15, 15); // hard numbers
  pop();
}

displayLamppost() { // lampost is displayed
  push();
  imageMode(CENTER);
  image(this.streetlampImg, this.lampX, this.lampY, 15, 90);
  pop();
}

displayTrees() { // trees are displayed
  push();
  imageMode(CENTER);
  image(this.treeImg, 270, 500, 100, 110);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 490, 490, 90, 110);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 510, 550, 80, 90);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 500, 620, 80, 110);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 500, 700, 100, 120);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 245, 655, 85, 105);
  pop();
  push();
  imageMode(CENTER);
  image(this.treeImg, 288, 682, 100, 120);
  pop();
}
}
