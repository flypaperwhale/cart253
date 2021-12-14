class SkyGlowCityC extends Map {
  constructor(simulationImagesList) {
    // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
    this.name = `C`; // map name
    // image files //
    this.streetlampImg = simulationImagesList[10];
    this.streetlampFootImg = simulationImagesList[11];
    this.treeImg = simulationImagesList[13];
    this.garbageImg = simulationImagesList[14];
    this.gazeboImg = simulationImagesList[15];
    this.gazeboBaseImg = simulationImagesList[16];
    this.galaxyImg = simulationImagesList[20];
    // lamp coordinates
    this.lampX = (378)/2; // lamp image x value
    this.lampY = (501)/2; // lamp image y value
    super.galaxyDisplayed = false;
    this.allLightsOut = false;
  }

  /**
Description of draw()
*/
  display(player, npcList) { // input player
      // input npc list array
    // sky //
    if (this.galaxyDisplayed === true) { // during SurpriseEnd animation state
      this.displayGalaxy();
    }
    super.displaySky(); // the blue sky rectangle covers the starry bg image

    this.displayStars(); // includes Frog constellation and more
    this.displaySkyGlow(npcList[9]); // have the skyGlow display in relation to
    // whether the lamp on the map is on or off
    // ground //
    super.displayGreenGrass(); // display Green Grass
    this.displayCircleAndPath(); // display gray circle and path
    this.displayShopBack(); // display small shop back
    this.displayWindows(); // display windows on buildings, lights on or off
    this.displayGarbage(); // display garbage
    this.displayGazeboBase(); // display gazebo, back
    npcList[7].showDoggy(); // display Sheperd npc's dog
    // display map C npcs and check for collision //
    for (let i = 0; i < npcList.length; i++) { // go through npc list
      if (npcList[i].map === this.name) { // if npc's map (string) is the same
          // as this map's name
        if (npcList[i] === npcList[9]) { // if the npc is the lampost, it is displayed directly
          // as an asset on the map, so this lampost npc serves to detect collision and trade
          //0,5,9 the lampostsABC
        } else { // character npcs on this map
          npcList[i].display(); // are displayed
        }
        npcList[i].playerCollisionCheck(player.x, player.y, player.size);
      }
    }
    this.displayLampFoot(); // displayed before the player for correct layer effect
    //super.displayItem();
    player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
    this.displayLampGlow(npcList[9]); // call method with map B lamp and light buzz sound
    this.displayLamppost(); // displays lamppost in front of player
    this.displayGazebo(); // display gazebo front
    this.displayTrees(); // display trees in front of player
    npcList[6].move(); // Billee moves
  }

  displayGalaxy() { // displays galaxy asset when game is won
    push();
    imageMode(CENTER);
    image(this.galaxyImg, (245)/2, (255)/2, (800)/2, (500)/2; // hard numbers
    pop();
  }

  displayStars() {
    // Frog CONSTELLATION
    super.addStar((455)/2, (255)/2, (2)/2, 1);
    super.addStar((425)/2, (255)/2, (1.5)/2, 0);
    super.addStar((385)/2, (290)/2, (1.5)/2, 0);
    super.addStar((384)/2, (345)/2, (2)/2, 0);
    super.addStar((317)/2, (249)/2, (1.25)/2, 1);
    super.addStar((313)/2, (300)/2, (1.5)/2, 0);
    super.addStar((255)/2, (200)/2, (1.5)/2, 0);
    super.addStar((185)/2, (240)/2, (2)/2, 0);
    super.addStar((217)/2, (305)/2, (2)/2, 0);
    //more random stars// 10 of 'em
    super.addStar((335)/2, (138)/2, (1.5)/2, 0);
    super.addStar((450)/2, (478)/2, (2)/2, 0);
    super.addStar((112)/2, (393)/2, (1.25)/2, 1);
    super.addStar((165)/2, (378)/2, (1.5)/2, 0);
    super.addStar((20)/2, (403)/2, (1)/2, 0);
    super.addStar((335)/2, (458)/2, (1.5)/2, 0);
    super.addStar((450)/2, (358)/2, (1.5)/2, 3);
    super.addStar((200)/2, (390)/2, (1.25)/2, 1);
    super.addStar((222)/2, (308)/2, (1)/2, 0);
    super.addStar((65)/2, (288)/2, (1)/2, 0);
  }

  displaySkyGlow(lampost) {
    if (lampost.lightIsOn === true) {
      // if the lamp is turned on
      push();
      noStroke();
      fill(225, 225, 100, 200); // light yellow and slightly transparent
      ellipseMode(CENTER);
      ellipse((width / 2)/2, (height / 2 - 70)/2, (605)/2, (605)/2);
      pop();
    }
  }

  displayLampGlow(lampost) {
    if (lampost.lightIsOn === true) {
      // if the lamp is turned on
      lampost.displayLampGlow(); // small yellow ellipse around lamp head
    }
  }

  //Background building
  displayShopBack() {
    // displays shop
    push();
    noStroke();
    fill(159, 91, 114);
    rectMode(CENTER);
    rect((50)/2, (725)/2, (100)/2, (80)/2);
    pop();
  }

  displayWindows() {
    //this.addWindow(x,y,onOff)
    if (this.allLightsOut === false) {
      super.addWindow((50)/2, (720)/2, (60)/2, (30)/2, 1);
    } else if (this.allLightsOut === true) {
      super.addWindow((50)/2, (720)/2, (60)/2, (30)/2, 0);
    }
  }

  displayGarbage() {
    // displays garbage in which player can throw out bone!
    push();
    imageMode(CENTER);
    image(this.garbageImg, (107)/2, (744)/2, (35)/2, (50)/2); // hard numbers
    pop();
  }

  displayGazebo() {
    push();
    imageMode(CENTER);
    image(this.gazeboImg, (100)/2, (540)/2, (130)/2, (105)/2); // hard numbers
    pop();
  }

  displayGazeboBase() {
    push();
    imageMode(CENTER);
    image(this.gazeboBaseImg, (100, (600, (115, (15); // hard numbers
    pop();
  }

  displayCircleAndPath() {
    // draws a gray path leading to the circle
    // in the middle of which stands the lamppost
    push();
    noStroke();
    fill(145, 145, 145); // dark grey
    ellipseMode(CENTER);
    ellipse((width / 2 - 100)/2, (height / 2 + 290)/2, (200)/2, (20)/2); // a circle at mid center
    pop();
  }

  displayLampFoot() {
    // player moves in front of lamp foot
    push();
    imageMode(CENTER);
    image(this.streetlampFootImg, (this.lampX)/2, (this.lampY + 50)/2, (15)/2, (15)/2); // hard numbers
    pop();
  }

  displayLamppost() {
    // lampost is displayed
    push();
    imageMode(CENTER);
    image(this.streetlampImg, (this.lampX)/2, (this.lampY)/2, (15)/2, (90)/2);
    pop();
  }

  displayTrees() {
    // trees are displayed
    push();
    imageMode(CENTER);
    image(this.treeImg, (270)/2, (500)/2, (100)/2, (110)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (490)/2, (490)/2, (90)/2, (110)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (510)/2, (550)/2, (80)/2, (90)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (500)/2, (620)/2, (80)/2, (110)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (500)/2, (700)/2, (100)/2, (120)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (245)/2, (655)/2, (85)/2, (105)/2);
    pop();
    push();
    imageMode(CENTER);
    image(this.treeImg, (288)/2, (682)/2, (100)/2, (120)/2);
    pop();
  }
}
