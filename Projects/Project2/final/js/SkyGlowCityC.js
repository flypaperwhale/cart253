class SkyGlowCityC extends Map{
  constructor(simulationImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
//this.player; // player avatar, class Player
this.name = `C`;
// image files
this.streetlampImg = simulationImagesList[6];
this.streetlampFootImg = simulationImagesList[7];
this.treeImg = simulationImagesList[9];
this.garbageImg = simulationImagesList[10];
this.gazeboImg = simulationImagesList[11];
this.gazeboBaseImg = simulationImagesList[12];

//lamp coordinates
this.lampX = 378; // lamp x value
this.lampY = 501; // lamp y value
}

/**
Description of draw()
*/
display(player, npcList) {
  background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  //ground
  super.displayGreenGrass(); // display Green Grass
  this.displayCircleAndPath(); // display gray circle and path

  this.displayShopBack();
  this.displayWindows();

  this.displayGarbage();

  this.displayGazeboBase();

  // npcList[6].display(); // billee
  // npcList[10].display(); // jade
  // npcList[7].display(); // sheperd
  // npcList[9].display(); // streetlamp

  for (let i= 0; i < npcList.length; i++){
    if (npcList[i].map === this.name){
      npcList[i].display();
  npcList[i].playerCollisionCheck(player.x,player.y,player.size);
    }
  }

  //movePlayer(); // handle user input and move player avatar

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
  this.displayLamppost(); // displays lamppost in front of player
  this.displayGazebo();

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
displayShopBack() {
  // displays shop
  push();
  noStroke();
  fill(159, 91, 114);
  rectMode(CENTER);
  rect(50, 725, 100, 80);
  pop();
}
displayWindows(){
  super.addWindow(50,720,60,30,0);
}

displayGarbage(){
  // displays garbage in which player can throw out bone!
  // ### need to find out how to click garbage and have bone appear behind the garbage
  push();
  imageMode(CENTER);
  image(this.garbageImg, 107, 744, 35, 50); // hard numbers
  pop();
}

displayGazebo(){
  push();
  imageMode(CENTER);
  image(this.gazeboImg, 100, 540, 130, 105); // hard numbers
  pop();
}

displayGazeboBase(){
  push();
  imageMode(CENTER);
  image(this.gazeboBaseImg, 100, 600, 115, 15); // hard numbers
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
  console.log(`lampY is ${this.lampY+50}, and ${`d`}`);

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
