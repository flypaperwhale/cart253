class SkyGlowCityA extends Map{
  constructor(itemImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
//this.player; // player avatar, class Player
this.name = `A`;
this.streetlampImg = itemImagesList[0];
this.streetlampFootImg = itemImagesList[1];
this.stairsImg = itemImagesList[2];
this.fountainImg = itemImagesList[7];
this.fountainTopImg = itemImagesList[8];

this.lampX = 258; // lamp x value
this.lampY = 510; // lamp y value
}

/**
Description of draw()
*/
display(player) {
  //background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  //ground
  super.displayGreenGrass(); // display Green Grass
  this.displayCircleAndPath(); // display gray circle and path

  this.displayDollysBuilding();
  this.displayLargeBuilding();
  this.displayCityHall();
  this.displayStairs();
  this.displayFountain();

  //movePlayer(); // handle user input and move player avatar

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
  this.displayLamppost(); // displays lamppost in front of player
  this.displayFountainTop();

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

//Dolly's building
displayDollysBuilding() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(159, 91, 114); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(450, 675, 100, 235);
  pop();
}
//Large building acting as the left border
displayLargeBuilding() {
  //
  push();
  noStroke();
  fill(159, 91, 114);
  rectMode(CENTER);
  rect(35, 450, 70, 125);
  rect(15, 550, 30, 100);
  rect(50, 700, 110, 215);
  pop();
}
//Mayorhouse
displayCityHall() {
  // large square rectangle representing the Mayor House.
  // there is a party here tonight for important adults only
  push();
  noStroke();
  fill(159, 91, 114);
  rectMode(CENTER);
  rect(260, 627, 180, 180);
  pop();
}

displayStairs(){
  // the stairs are blocked by the mayor. get 3 injunctions and the mayor will move
  push();
  imageMode(CENTER);
  image(this.stairsImg, 371, height/2 + 130, 45, 165); // hard numbers
  pop();
}

displayFountain(){
  push();
  imageMode(CENTER);
  image(this.fountainImg, 265, 730, 100, 55); // hard numbers
  pop();
}

displayFountainTop(){
  push();
  imageMode(CENTER);
  image(this.fountainTopImg, 265, 719, 100, 30); // hard numbers
  pop();
}

// displaySky() {
//   // displays sky blue rectangle
//   push();
//   noStroke();
//   fill(35,45,125); // blue with alpha value linked to dayTimer
//   rectMode(CENTER);
//   rect(width / 2, 0, 500, 990);
//   pop();
// }
//
// displayGreenGrass() {
//   // draws a green rectangle as land where player can walk around
//   push();
//   noStroke();
//   fill(20, 85, 45); // middle green
//   rectMode(CENTER);
//   rect(width / 2, height, 500, 1010); // displayed at bottom center
//   pop();
// }

displayCircleAndPath() { // draws a gray path leading to the circle
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
}
