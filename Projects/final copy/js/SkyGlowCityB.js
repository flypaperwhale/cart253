class SkyGlowCityB extends Map {
  constructor(simulationImagesList) {
    // enter item array and simNPCList
    // of which the according elements will be extracted by the map
    super();
    this.name = `B`; // map name
    // image files
    this.streetlampImg = simulationImagesList[10];
    this.streetlampFootImg = simulationImagesList[11];
    this.stairsImg = simulationImagesList[12];
    this.treeImg = simulationImagesList[13];
    this.galaxyImg = simulationImagesList[20];
    // Lamp coordinates
    this.lampX = 225; // lamp image x value
    this.lampY = 510; // lamp image y value
    this.galaxyDisplayed = false;
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
    this.displayStars(); // includes Arrow constellation and more
    this.displaySkyGlow(npcList[5]); // have the skyGlow display in relation to
    // whether the lamp on the map is on or off
    // ground //
    super.displayGreenGrass(); // display Green Grass
    this.displayCircleAndPath(); // display gray circle and path
    this.displayDollysBuilding(); // display a big building, right side of where Dolly lives (and begins game)
    this.displayBackgroundBuilding(); // display small building behind Dolly's building
    this.displayShop(); // display shop
    this.displayWindows(); // display windows on buildings, lights on or off
    this.displayStairs(); // display stairs image
    // display map B npcs and check for collision //
    for (let i = 0; i < npcList.length; i++) { // go through npc list
      if (npcList[i].map === this.name) { // if npc's map (string) is the same
          // as this map's name
        if (npcList[i] === npcList[5]) { // if the npc is the lampost, it is displayed directly
          // as an asset on the map, so this lampost npc serves to detect collision and trade
          //0,5,9 the lampostsABC
        } else { // character npcs on this map
          npcList[i].display(); // are displayed
        }
        npcList[i].playerCollisionCheck(player.x, player.y, player.size); // player collision is checked with npc
      }
    }
    this.displayLampFoot(); // displayed before the player for correct layer effect
    player.display(); // displays player and also constrains them to move only on the ground
    this.displayLampGlow(npcList[5]); // call method with map B lamp and light buzz sound
    this.displayLamppost(); // displays lamppost in front of player
    this.displayTrees(); // display trees in front of player
  }

  displayGalaxy() { // displays galaxy asset when game is won
    push();
    imageMode(CENTER);
    image(this.galaxyImg, (245)/2, (255)/2, (800)/2, (500)/2); // hard numbers
    pop();
  }

  //display stars //
  displayStars() {
    // ARROW CONSTELLATION
    super.addStar((230)/2, (300)/2, (2)/2, 1);
    super.addStar((180)/2, (326)/2, (1.5)/2, 0);
    super.addStar((255)/2, (342)/2, (1.5)/2, 0);
    super.addStar((210)/2, (350)/2, (2)/2, 0);
    super.addStar((190)/2, (395)/2, (1.25)/2, 1);
    super.addStar((155)/2, (420)/2, (1.5)/2, 0);
    super.addStar((185)/2, (440)/2, (1.5)/2, 0);
    super.addStar((188)/2, (458)/2, (2)/2, 0);
    //more random stars// 16 of 'em
    super.addStar((10)/2, (298)/2, (2)/2, 1);
    super.addStar((59)/2, (224)/2, (1.5)/2, 0);
    super.addStar((335)/2, (138)/2, (1.5)/2, 0);
    super.addStar((90)/2, (78)/2, (2)/2, 0);
    super.addStar((412)/2, (393)/2, (1.25)/2, 1);
    super.addStar((35)/2, (418)/2, (1.5)/2, 0);
    super.addStar((165)/2, (438)/2, (1.5)/2, 0);
    super.addStar((63)/2, (423)/2, (2)/2, 0);
    super.addStar((10)/2, (298)/2, (2)/2, 1);
    super.addStar((59)/2, (124)/2, (1.5)/2, 0);
    super.addStar((435)/2, (458)/2, (1.5)/2, 0);
    super.addStar((450)/2, (358)/2, (1.5)/2, 3);
    super.addStar((380)/2, (190)/2, (1.25)/2, 1);
    super.addStar((25)/2, (218)/2, (1.5)/2, 0);
    super.addStar((65)/2, (238)/2, (1.5)/2, 0);
    super.addStar((63)/2, (453)/2, (2)/2, 0);
  }

  // methods //
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

  //Dolly's building
  displayDollysBuilding() {
    // displays sky blue rectangle
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect((50)/2, (675)/2, (100)/2, (235)/2);
    pop();
  }

  //Background building
  displayBackgroundBuilding() {
    // displays building at top left
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect((50)/2, (472)/2, (100)/2, (90)/2);
    pop();
  }

  //Shop
  displayShop() {
    // displays shop, bottom right
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect((425)/2, (715)/2, (150)/2, (100)/2);
    pop();
  }

  displayWindows() {
    //this.addWindow(x,y,onOff)
    if (this.allLightsOut === false) {
      //background building
      super.addWindow((30)/2, (45)/20, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (45)/20, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (49)/20, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (49)/20, (22)/2, (25)/2, 0);
      //Dolly building
      super.addWindow((30)/2, (58)/22, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (62)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (58)/22, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (62)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (66)/22, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (70)/22, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (66)/22, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (70)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (74)/22, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (74)/22, (22)/2, (25)/2, 1);
      //shop
      super.addWindow((39)/22, (71)/20, (60)/2, (50)/2, 0);
      super.addWindow((46)/22, (71)/20, (60)/2, (50)/2, 0);
    } else if (this.allLightsOut === true) {
      //background building
      super.addWindow((30)/2, (45)/20, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (45)/20, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (49)/20, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (49)/20, (22)/2, (25)/2, 0);
      //Dolly building
      super.addWindow((30)/2, (58)/22, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (62)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (58)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (62)/22, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (66)/22, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (662)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (742)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (742)/2, (22)/2, (25)/2, 1);
      //shop
      super.addWindow((392)/2, (710)/2, (60, (50, 0);
      super.addWindow((462)/2, (710)/2, (60, (50, 0);
    }
  }

  displayStairs() {
    push();
    imageMode(CENTER);
    image(this.stairsImg, (120.5)/2, (681, )/2(45, ()/2228);)/2 // hard numbers
    pop();
  }

  displayCircleAndPath() {
    // draws a gray path leading to the circle
    // in the middle of which stands the lamppost
    push();
    noStroke();
    fill(45, 45, 45); // dark grey
    ellipseMode(CENTER);
    ellipse((width / 2 - 25)/2, (height / 2 + 70)/2, (135)/2, (70)/2); // a circle at mid center
    rectMode(CENTER);
    rect((width / 2 - 25)/2, (height / 2 + 200)/2, (40)/2, (300)/2); // a narrow path down the center
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
    // lampost is displayed
    push();
    imageMode(CENTER);
    image(this.treeImg, (400)/2, (540)/2, (100)/2, (110)/2);
    pop();
  }
}
