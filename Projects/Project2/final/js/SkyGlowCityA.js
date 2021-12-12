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
this.galaxyImg = simulationImagesList[20];
//lamp coordinates
this.lampX = 258; // lamp x value
this.lampY = 500; // lamp y value
//NPCs
//this.buzzVolume =0.025;
this.galaxyDisplayed = false;
this.allLightsOut = false;

}

/**
Description of draw()
*/
display(player, npcList, soundList) {

  //sky
  if (this.galaxyDisplayed === true){
    this.displayGalaxy();
  }
  super.displaySky(); // the blue sky rectangle covers the starry bg image

  this.displayStars();
  this.displaySkyGlow(npcList[0]);
  //ground
  super.displayGreenGrass(); // display Green Grass
  this.displayCircleAndPath(); // display gray circle and path
  this.displayDollysBuilding();
  this.displayLargeBuilding();
  this.displayCityHall();
this.displayWindows();
  this.displayStairs();
  this.displayFountain();
  // display map A npcs and check for collision //
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
  this.displayLampFoot(); // displayed before the player for correct layer effect
super.displayItem();
  player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
  this.displayLampGlow(npcList[0]); // call method with map B lamp and light buzz sound
  this.displayLamppost(); // displays lamppost in front of player
  this.displayFountainTop();
}

displayGalaxy(){
  push();
  imageMode(CENTER);
  image(this.galaxyImg, 245, 255, 800, 500); // hard numbers
  pop();
}

// display stars
displayStars(){
  // Arrow CONSTELLATION
  super.addStar(380,260,2,1)
  super.addStar(360,270,1.5,0)
    super.addStar(285,220,1.5,0)
      super.addStar(235,230,2,0)
        super.addStar(200,255,1.25,1)
          super.addStar(265,340,1.5,0)
            super.addStar(290,440,1.5,0)
              super.addStar(188,330,2,0)
                super.addStar(150,330,1.5,3)
              // //
              //more random stars// 6 of 'em
              super.addStar(50,200,1,1)
              super.addStar(20,400,1.5,0)
                super.addStar(411,420,1.5,0)
                    super.addStar(421,413,1.25,0)
                          super.addStar(10,298,1,0)
                              super.addStar(30,358,1.5,0)

}

// methods //

displaySkyGlow(lampost) {
  //console.log(`sky glow no ${lampost.lightIsOn}`)
  if (lampost.lightIsOn === true) { // if the lamp is turned on
    push();
    noStroke();
    fill(225, 225, 100, 200); // light yellow and slightly transparent
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 605, 605);
    pop();
  }
  // else if (lampost.lightIsOn === false){
  //   lampost.turnOutLampGlow();
  // }
}

displayLampGlow(lampost){
  if (lampost.lightIsOn === true) { // if the lamp is turned on
    lampost.displayLampGlow(); // small yellow ellipse around lamp head
  }
  // else if (lampost.lightIsOn === false){
  //   lampost.turnOutLampGlow();
  // }
}

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
  if (this.allLightsOut === false){
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
  }
  else if (this.allLightsOut === true){
    //Dolly building
    super.addWindow(430,582,22,25,0)
      super.addWindow(430,622,22,25,0)
      super.addWindow(470,582,22,25,0)
        super.addWindow(470,622,22,25,0)
        super.addWindow(470,662,22,25,0)
          super.addWindow(470,702,22,25,0)
          super.addWindow(430,662,22,25,1)
            super.addWindow(430,702,22,25,0)
            super.addWindow(470,742,22,25,0)
              super.addWindow(430,742,22,25,0)

              //blockBackBuildingMapA
                super.addWindow(30,619,22,25,0)
                  super.addWindow(70,619,22,25,0)
                  super.addWindow(70,659,22,25,0)
                    super.addWindow(70,699,22,25,0)
                    super.addWindow(30,659,22,25,1)
                      super.addWindow(30,699,22,25,0)
                      //super.addWindow(70,739,22,25,1)
                        super.addWindow(30,739,22,25,0)
                        //super.addWindow(30,779,22,25,1)
                        //super.addWindow(70,779,22,25,1)
                        super.addWindow(30,420,22,25,0)
  }
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
