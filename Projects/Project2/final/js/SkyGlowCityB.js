class SkyGlowCityB extends Map{
  constructor(simulationImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();

this.name = `B`; // map name

//image files
this.streetlampImg = simulationImagesList[6];
this.streetlampFootImg = simulationImagesList[7];
this.stairsImg = simulationImagesList[8];
this.treeImg = simulationImagesList[9];

//Lamp coordinates
this.lampX = 225; // lamp x value
this.lampY = 510; // lamp y value

}

/**
Description of draw()
*/
display(player, npcList){
  background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  //ground
  super.displayGreenGrass(); // display Green Grass
  this.displayCircleAndPath(); // display gray circle and path

  this.displayDollysBuilding();
  this.displayBackgroundBuilding();
  this.displayShop();

  this.displayWindows();

  this.displayStairs();

// npcList[4].display(); // marv
// npcList[3].display(); // janine
// npcList[5].display(); // streetlamp

this.displayNPCs(npcList);

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); // displays player and also constrains them to move only on the ground
  this.displayLamppost(); // displays lamppost in front of player
  this.displayTrees();

  //this.barriers();

  //player.barriers(this.name)

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
  rect(50, 675, 100, 235);
  pop();
}

//Background building
displayBackgroundBuilding() {
  // displays building at top left
  push();
  noStroke();
  fill(159, 91, 114);
  rectMode(CENTER);
  rect(50, 472, 100, 90);
  pop();
}

//Shop
displayShop() {
  // displays shop, bottom right
  push();
  noStroke();
  fill(159, 91, 114);
  rectMode(CENTER);
  rect(425, 715, 150, 100);
  pop();
}

displayWindows(){
  //background building
  //this.addWindow(x,y,onOff)

  super.addWindow(30,450,22,25,1)
    super.addWindow(70,450,22,25,1)
      super.addWindow(30,490,22,25,1)
        super.addWindow(70,490,22,25,0)
  //
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 450, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(70, 450, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 490, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(70, 490, 22, 25);
  // pop();

  //Dolly building
  super.addWindow(30,582,22,25,1)
    super.addWindow(30,622,22,25,0)
    super.addWindow(70,582,22,25,1)
      super.addWindow(70,622,22,25,0)
      super.addWindow(70,662,22,25,1)
        super.addWindow(70,702,22,25,0)
        super.addWindow(30,662,22,25,1)
          super.addWindow(30,702,22,25,0)
          super.addWindow(70,742,22,25,1)
            super.addWindow(30,742,22,25,0)


  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 582, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(70, 582, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(30, 622, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(70, 622, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 662, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(70, 662, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 702, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(70, 702, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(225, 180, 100);
  // rectMode(CENTER);
  // rect(30, 742, 22, 25);
  // pop();
  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(70, 742, 22, 25);
  // pop();

  //shop

  super.addWindow(392,710,60,50,0);
    super.addWindow(462,710,60,50,0);

  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(392, 710, 60, 50);
  // pop();
  // push();
  // noStroke();
  // fill(50, 50, 70);
  // rectMode(CENTER);
  // rect(462, 710, 60, 50);
  // pop();super


}

displayStairs(){
  push();
  imageMode(CENTER);
  console.log(`${height/2 +181}`);
  image(this.stairsImg, 120.5, 681, 45, 228); // hard numbers
  pop();
}

// displaySky() {
//   // displays sky rectangle
//   push();
//   noStroke();
//   fill(35,45,125);
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
  fill(45, 45, 45); // dark grey
  ellipseMode(CENTER);
  ellipse(width / 2 - 25, height / 2 + 70, 135, 70); // a circle at mid center
  rectMode(CENTER);
  rect(width / 2 - 25, height / 2 + 200, 40, 300); // a narrow path down the center
  pop();
}

displayNPCs(npcList){
  for (let i= 0; i < npcList.length; i++){
    if (npcList[i].map === this.name){
      npcList[i].display();
    //npcList[i].playerCollisionCheck(player.x,player.y,player.size);
    }
  }
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

displayTrees() { // lampost is displayed
  push();
  imageMode(CENTER);
  image(this.treeImg, 400, 540, 100, 110);
  pop();
}



}
