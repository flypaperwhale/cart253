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
this.flickerBulb = false;
}

/**
Description of draw()
*/
display(player, npcList, soundList){
  background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

this.displayStars();

npcList[5].flickBulb();
this.displayLightsOn();
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
    npcList[i].display();
    npcList[i].playerCollisionCheck(player.x,player.y,player.size);

  }
}

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); // displays player and also constrains them to move only on the ground
  this.displayLamppost(); // displays lamppost in front of player
  this.displayTrees();

  //this.barriers();
  //player.barriers(this.name)

  this.setAnimationState(animationStateName); //##!!

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

displayLightsOn(lamp) {
  if (this.lightIsOn === true) { // if the lamp is turned on
    this.displaySkyGlow(); // large yellow ellipse behind lamp covering starry bg
    lamp.displayLampGlow(); // small yellow ellipse around lamp head
    super.lightBuzzing(); // light buzzing sound FX grows weaker the further away player is from lamp
  }
}

displaySkyGlow() { // displays circle of light over the nightsky
  push();
  noStroke();
  fill(225, 225, 100, 200); // light yellow and slightly transparent
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2 - 70, 605, 605);
  pop();
}



sunsetState() { // introduction animation, blue sky becomes dark and starry...
  if (state === `sunset`) { // if the state equals "sunset"
    songSwitch++; // the songSwitch is increased
    songSwitch = constrain(songSwitch, 0, 2); // the songSwitch is constrained between 0-2
    playSunsetSong(); // the sunset theme is played
    // sunset animation with skyAlpha and dayTimer
    skyAlpha = map(dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
    dayTimer--; // dayTimer goes down
    dayTimer = constrain(dayTimer, 0, 310); // constrain dayTimer
    if (dayTimer === 0) { // once the dayTimer reaches 0...
      constellationWinkSound.play(); // a chime sound to signify the twinkling stars
      dayTimer = 1; // dayTimer is reset to 1
      resetSongSwitch(); // songSwitch is reset to 0
      setState(`lightsUp`); // ... and then, no time to admire the stars, the lights go on!
    }
  }
}



setAnimationState(animationState) {
  this.animationState = animationState;
}

playSunsetSong() { // plays sunset theme
  if (songSwitch === 1) { // if songSwitch is 1
    this.sunsetStarsIntro.play(0, 1, 0.2); //## eh?
  }
}

resetSongSwitch() { // resets songSwitch to 0
  this.songSwitch = 0;
}

function lightsUpState() { // animation when the light turns on, then simulation begins
  // and player can play
  if (this.animationState === `lightsUp`) { // if state is "lightsUp"
    checkPlayerNPCCollision(); // checks if player is touching npc or not
    calculatePlayerLampDist(); // calculate the distance between player and lamp every frame
    songSwitch++; // add 1 to songSwitch
    songSwitch = constrain(songSwitch, 0, 410); // constrain songSwitch to 0-410
    if (songSwitch === 200) { // when songSwitch reaches 200
      lightFlickSound.play(); // play the lightFlickSound (which has visual FX cues)
    }
    if (songSwitch === 270) { // when songSwitch reaches 270
      turnLightOn(); // the light is turned on
    }
    if (songSwitch === 410) { // when songSwitch reaches 410
      playBGMusic(); // the backgroung music starts playing
      player.isPaused = false; // and the player can start moving the avatar
    }
  }
}

turnLightOn() { // turns lightIsOn switch on
  lightIsOn = true;
}

lightsOutState() { // simulation when light bulb explodes. player can play. no ending
  if (animationState === `lightsOut`) { // if state is "lightsOut"
    playBGMusic(); // background music keeps playing (from "untilDone" mode)
    lightBuzzNoise.stop(); // the buzzing noise is stopped
    songSwitch++; // +1 to the songSwitch
    songSwitch = constrain(songSwitch, 0, 410); // the songSwitch is constrained from 0 to 410
    if (songSwitch === 2) { // when the song switch reaches 2
      // (songSwitch is turned to zero when npc is interacted with)
      bulbBursting(); // bulb bursting sound
    }
    lightIsOn = false; // lightIsOn switch is turned off
  }
}

bulbBursting() { // handles bulb bursting audio FX
  push();
  bulbBurstSound.setVolume(1.7); // bulb bursting soun is loud
  bulbBurstSound.play(); // play bulb bursting sound
  pop();
}

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
