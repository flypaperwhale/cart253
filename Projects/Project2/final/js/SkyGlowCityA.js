class SkyGlowCityA extends Map{
  constructor(simulationImagesList){ // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
this.name = `A`;
// image files
this.streetlampImg = simulationImagesList[10];
this.streetlampFootImg = simulationImagesList[11];
this.stairsImg = simulationImagesList[12];
this.fountainImg = simulationImagesList[17];
this.fountainTopImg = simulationImagesList[18];
//lamp coordinates
this.lampX = 258; // lamp x value
this.lampY = 500; // lamp y value
//NPCs
this.buzzVolume =0.025;

}

/**
Description of draw()
*/
display(player, npcList, soundList) {
  //background(0);

  //sky
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  this.displayStars();

  this.displaySkyGlow(npcList[0]); // call method with map B lamp and light buzz sound

  //ground
  super.displayGreenGrass(); // display Green Grass


  this.displayCircleAndPath(); // display gray circle and path

  this.displayDollysBuilding();
  this.displayLargeBuilding();
  this.displayCityHall();

this.displayWindows();

  this.displayStairs();
  this.displayFountain();

  for (let i= 0; i < npcList.length; i++){
    if (npcList[i].map === this.name){
      if(npcList[i] === npcList[0]) //0,5,9 the lampostsABC
      {}
      else{
          npcList[i].display();
      }

      npcList[i].playerCollisionCheck(player.x,player.y,player.size);

    }
  }


// if (npcList)
//   npcList[1].display(); // display mayor
//   npcList[2].display(); // display street person
//   //movePlayer(); // handle user input and move player avatar

  this.displayLampFoot(); // displayed before the player for correct layer effect
  player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
  this.displayLightsOn(npcList[0], soundList[3],player); // call method with map B lamp and light buzz sound

  this.displayLamppost(); // displays lamppost in front of player
  this.displayFountainTop();

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

displayLightsOn(lampost,sound,player) {
  if (lampost.lightIsOn === true) { // if the lamp is turned on
    //console.log(`is it bro is it?`)
    lampost.displayLampGlow(); // small yellow ellipse around lamp head
    //this.lightBuzzing(lampost,sound,player); // light buzzing sound FX grows weaker the further away player is from lamp
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

// lightBuzzing(lampost,sound,player) { // light buzzing sound FX
//   if (lampost.lightIsOn === true) { // if lightIsOn is true
//     push();
//     sound.playMode(`untilDone`); // buzz sound mode loop until done
//     //lampost.buzzVolume = map(this.playerDistLamp, 0, height - lampost.x, 0.1, 0);
//     // buzz volume increases when player is closer to lamp and decreases when further
//     sound.setVolume(this.buzzVolume); //index ##
//     //this.panning = map(this.player.x, 0, width, 0.6, -0.6); // (pan code from p5 reference)
//   //  sound.pan(this.panning);
//     sound.rate(1.2); // sound a little bit higher pitched
//     sound.play(); // play the sound
//     pop();
//   }
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

displayWindows(){
  //Dolly building
  super.addWindow(430,582,22,25,1)
    super.addWindow(430,622,22,25,1)
    super.addWindow(470,582,22,25,1)
      super.addWindow(470,622,22,25,0)
      super.addWindow(470,662,22,25,1)
        super.addWindow(470,702,22,25,0)
        super.addWindow(430,662,22,25,1)
          super.addWindow(430,702,22,25,0)
          super.addWindow(470,742,22,25,1)
            super.addWindow(430,742,22,25,0)

            //blockBackBuildingMapA
              super.addWindow(30,619,22,25,1)
                super.addWindow(70,619,22,25,1)
                super.addWindow(70,659,22,25,1)
                  super.addWindow(70,699,22,25,0)
                  super.addWindow(30,659,22,25,1)
                    super.addWindow(30,699,22,25,1)
                    //super.addWindow(70,739,22,25,1)
                      super.addWindow(30,739,22,25,0)
                      //super.addWindow(30,779,22,25,1)
                      //super.addWindow(70,779,22,25,1)
                      super.addWindow(30,420,22,25,0)

// City Hall
super.addWindow(260,613,90,40,0)
super.addWindow(203,613,15,40,1)
super.addWindow(317,613,15,40,0)
super.addWindow(260,683,90,40,1)
super.addWindow(206,683,5,40,1)
super.addWindow(314,683,5,40,1)

super.addWindow(195,688,5,40,1)
super.addWindow(325,688,5,40,1)
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
