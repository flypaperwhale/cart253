class SkyGlowCityB extends Map{
  constructor(simulationImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();

this.name = `B`; // map name

//image files
this.streetlampImg = simulationImagesList[10];
this.streetlampFootImg = simulationImagesList[11];
this.stairsImg = simulationImagesList[12];
this.treeImg = simulationImagesList[13];

//Lamp coordinates
this.lampX = 225; // lamp x value
this.lampY = 510; // lamp y value
//this.flickerBulb = false;

this.buzzVolume =0.025;
}

/**
Description of draw()
*/
display(player, npcList, soundList){
  background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

this.displayStars();

//npcList[5].flickBulb(this);

this.displaySkyGlow(npcList[5]);

//this.flickBulb(npcList[5]);

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

for (let i= 0; i < npcList.length; i++){
  if (npcList[i].map === this.name){
    if(npcList[i] === npcList[5]) //0,5,9 the lampostsABC
    {}
    else{
        npcList[i].display();
    }

    npcList[i].playerCollisionCheck(player.x,player.y,player.size);

  }
}

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); // displays player and also constrains them to move only on the ground
  this.displayLightsOn(npcList[5], soundList[3],player); // call method with map B lamp and light buzz sound

  this.displayLamppost(); // displays lamppost in front of player
  this.displayTrees();

this.calculatePlayerLampDist(player, npcList[5]);

  //this.barriers();
  //player.barriers(this.name)

   //##!!

}



// display stars
displayStars(){
  // ARROW CONSTELLATION
  super.addStar(230,300,2,1)
  super.addStar(180,326,1.5,0)
    super.addStar(255,342,1.5,0)
      super.addStar(210,350,2,0)
        super.addStar(190,395,1.25,1)
          super.addStar(155,420,1.5,0)
            super.addStar(185,440,1.5,0)
              super.addStar(188,458,2,0)
              // //

              //more random stars// 16 of 'em
              super.addStar(10,298,2,1)
              super.addStar(59,224,1.5,0)
                super.addStar(335,138,1.5,0)
                  super.addStar(90,78,2,0)
                    super.addStar(412,393,1.25,1)
                      super.addStar(35,418,1.5,0)
                        super.addStar(165,438,1.5,0)
                          super.addStar(63,423,2,0)
                          super.addStar(10,298,2,1)
                          super.addStar(59,124,1.5,0)
                            super.addStar(435,458,1.5,0)
                              super.addStar(450,358,1.5,3)
                                super.addStar(380,190,1.25,1)
                                  super.addStar(25,218,1.5,0)
                                    super.addStar(65,238,1.5,0)
                                      super.addStar(63,453,2,0)
}

// Setup program functions //

displayLightsOn(lampost,sound,player) {
  if (lampost.lightIsOn === true) { // if the lamp is turned on
    //console.log(`is it bro is it?`)
    lampost.displayLampGlow(); // small yellow ellipse around lamp head
    this.lightBuzzing(lampost,sound,player); // light buzzing sound FX grows weaker the further away player is from lamp
  }
}

displaySkyGlow(lampost){ // large yellow ellipse behind lamp covering starry bg
  if (lampost.lightIsOn === true) {
    //console.log(`whathow?`)
    push();
    noStroke();
    fill(225, 225, 100, 200); // light yellow and slightly transparent
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 605, 605);
    pop();
}
}

// this.flickBulb(this.currentLampost);

    calculatePlayerLampDist(player,lampost) { // store the distance between the player avatar and the lamp
      this.playerDistLamp = dist(player.x, player.y, lampost.x, lampost.y);
    }

lightBuzzing(lampost,sound,player) { // light buzzing sound FX
  if (lampost.lightIsOn === true) { // if lightIsOn is true
    push();
    sound.playMode(`untilDone`); // buzz sound mode loop until done
    //lampost.buzzVolume = map(this.playerDistLamp, 0, height - lampost.x, 0.1, 0);
    // buzz volume increases when player is closer to lamp and decreases when further
    sound.setVolume(this.buzzVolume); //index ##
    //this.panning = map(this.player.x, 0, width, 0.6, -0.6); // (pan code from p5 reference)
  //  sound.pan(this.panning);
    sound.rate(1.2); // sound a little bit higher pitched
    sound.play(); // play the sound
    pop();
  }
}

// displaySkyGlow() { // displays circle of light over the nightsky
//   push();
//   noStroke();
//   fill(225, 225, 100, 200); // light yellow and slightly transparent
//   ellipseMode(CENTER);
//   ellipse(width / 2, height / 2 - 70, 605, 605);
//   pop();
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

displayWindows(){ //this.addWindow(x,y,onOff)
  //background building
  super.addWindow(30,450,22,25,1)
    super.addWindow(70,450,22,25,1)
      super.addWindow(30,490,22,25,1)
        super.addWindow(70,490,22,25,0)
  //Dolly building
  super.addWindow(30,582,22,25,1)
    super.addWindow(30,622,22,25,0)
    super.addWindow(70,582,22,25,1)
      super.addWindow(70,622,22,25,0)
      super.addWindow(70,662,22,25,1)
        super.addWindow(70,702,22,25,1)
        super.addWindow(30,662,22,25,1)
          super.addWindow(30,702,22,25,0)
          super.addWindow(70,742,22,25,1)
            super.addWindow(30,742,22,25,1)
  //shop
  super.addWindow(392,710,60,50,0);
    super.addWindow(462,710,60,50,0);
}

displayStairs(){
  push();
  imageMode(CENTER);
  //console.log(`${height/2 +181}`);
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
