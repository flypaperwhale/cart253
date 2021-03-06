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
    image(this.galaxyImg, 245, 255, 800, 500); // hard numbers
    pop();
  }

  //display stars //
  displayStars() {
    // ARROW CONSTELLATION
    super.addStar(230, 300, 2, 1);
    super.addStar(180, 326, 1.5, 0);
    super.addStar(255, 342, 1.5, 0);
    super.addStar(210, 350, 2, 0);
    super.addStar(190, 395, 1.25, 1);
    super.addStar(155, 420, 1.5, 0);
    super.addStar(185, 440, 1.5, 0);
    super.addStar(188, 458, 2, 0);
    //more random stars// 16 of 'em
    super.addStar(10, 298, 2, 1);
    super.addStar(59, 224, 1.5, 0);
    super.addStar(335, 138, 1.5, 0);
    super.addStar(90, 78, 2, 0);
    super.addStar(412, 393, 1.25, 1);
    super.addStar(35, 418, 1.5, 0);
    super.addStar(165, 438, 1.5, 0);
    super.addStar(63, 423, 2, 0);
    super.addStar(10, 298, 2, 1);
    super.addStar(59, 124, 1.5, 0);
    super.addStar(435, 458, 1.5, 0);
    super.addStar(450, 358, 1.5, 3);
    super.addStar(380, 190, 1.25, 1);
    super.addStar(25, 218, 1.5, 0);
    super.addStar(65, 238, 1.5, 0);
    super.addStar(63, 453, 2, 0);
  }

  // methods //
  displaySkyGlow(lampost) {
    if (lampost.lightIsOn === true) {
      // if the lamp is turned on
      push();
      noStroke();
      fill(225, 225, 100, 200); // light yellow and slightly transparent
      ellipseMode(CENTER);
      ellipse(width / 2, height / 2 - 70, 605, 605);
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
    rect(50, 675, 100, 235);
    pop();
  }

  //Background building
  displayBackgroundBuilding() {
    // displays building at top left
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect(50, 472, 100, 90);
    pop();
  }

  //Shop
  displayShop() {
    // displays shop, bottom right
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect(425, 715, 150, 100);
    pop();
  }

  displayWindows() {
    //this.addWindow(x,y,onOff)
    if (this.allLightsOut === false) {
      //background building
      super.addWindow(30, 450, 22, 25, 1);
      super.addWindow(70, 450, 22, 25, 1);
      super.addWindow(30, 490, 22, 25, 1);
      super.addWindow(70, 490, 22, 25, 0);
      //Dolly building
      super.addWindow(30, 582, 22, 25, 1);
      super.addWindow(30, 622, 22, 25, 0);
      super.addWindow(70, 582, 22, 25, 1);
      super.addWindow(70, 622, 22, 25, 0);
      super.addWindow(70, 662, 22, 25, 1);
      super.addWindow(70, 702, 22, 25, 1);
      super.addWindow(30, 662, 22, 25, 1);
      super.addWindow(30, 702, 22, 25, 0);
      super.addWindow(70, 742, 22, 25, 1);
      super.addWindow(30, 742, 22, 25, 1);
      //shop
      super.addWindow(392, 710, 60, 50, 0);
      super.addWindow(462, 710, 60, 50, 0);
    } else if (this.allLightsOut === true) {
      //background building
      super.addWindow(30, 450, 22, 25, 0);
      super.addWindow(70, 450, 22, 25, 0);
      super.addWindow(30, 490, 22, 25, 0);
      super.addWindow(70, 490, 22, 25, 0);
      //Dolly building
      super.addWindow(30, 582, 22, 25, 0);
      super.addWindow(30, 622, 22, 25, 0);
      super.addWindow(70, 582, 22, 25, 0);
      super.addWindow(70, 622, 22, 25, 0);
      super.addWindow(70, 662, 22, 25, 1);
      super.addWindow(70, 702, 22, 25, 0);
      super.addWindow(30, 662, 22, 25, 0);
      super.addWindow(30, 702, 22, 25, 0);
      super.addWindow(70, 742, 22, 25, 0);
      super.addWindow(30, 742, 22, 25, 1);
      //shop
      super.addWindow(392, 710, 60, 50, 0);
      super.addWindow(462, 710, 60, 50, 0);
    }
  }

  displayStairs() {
    push();
    imageMode(CENTER);
    image(this.stairsImg, 120.5, 681, 45, 228); // hard numbers
    pop();
  }

  displayCircleAndPath() {
    // draws a gray path leading to the circle
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

  displayLampFoot() {
    // player moves in front of lamp foot
    push();
    imageMode(CENTER);
    image(this.streetlampFootImg, this.lampX, this.lampY + 50, 15, 15); // hard numbers
    pop();
  }

  displayLamppost() {
    // lampost is displayed
    push();
    imageMode(CENTER);
    image(this.streetlampImg, this.lampX, this.lampY, 15, 90);
    pop();
  }

  displayTrees() {
    // lampost is displayed
    push();
    imageMode(CENTER);
    image(this.treeImg, 400, 540, 100, 110);
    pop();
  }
}
