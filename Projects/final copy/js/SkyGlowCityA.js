class SkyGlowCityA extends Map {
  constructor(simulationImagesList) {
    // enter item array and simNPCList
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
    // lamp coordinates
    this.lampX = 258; // lamp image x value
    this.lampY = 500; // lamp image y value
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
    this.displayStars(); // includes Eagle constellation and more
    this.displaySkyGlow(npcList[0]); // have the skyGlow display in relation to
    // whether the lamp on the map is on or off
    // ground //
    super.displayGreenGrass(); // display Green Grass
    this.displayCircleAndPath(); // display gray circle and path
    this.displayDollysBuilding(); // display a big building, left side of where Dolly lives
    this.displayLargeBuilding(); // display large building bordering left side of window
    this.displayCityHall(); // display city hall in the middle of the map
    this.displayWindows(); // display windows on buildings, lights on or off
    this.displayStairs(); // display stairs image
    this.displayFountain(); // display fountain image (front and back)
    // display map A npcs and check for collision //
    for (let i = 0; i < npcList.length; i++) { // go through npc list
      if (npcList[i].map === this.name) { // if npc's map (string) is the same
        // as this map's name
        if (npcList[i] === npcList[0]) { // if the npc is the lampost, it is displayed directly
          // as an asset on the map, so this lampost npc serves to detect collision and trade
          //0,5,9 the lampostsABC
        } else { // character npcs on this map
          npcList[i].display(); // are displayed
        }
        npcList[i].playerCollisionCheck(player.x, player.y, player.size); // player collision is checked with npc
      }
    }
    this.displayLampFoot(); // displayed before the player for correct layer effect
    super.displayItem(); // displays ham, but also inventory items (only on this map)
    player.display(); //displayPlayer(); // displays player and also constrains them to move only on the ground
    this.displayLampGlow(npcList[0]); // call method with map B lamp and light buzz sound
    this.displayLamppost(); // displays lamppost in front of player
    this.displayFountainTop(); // front layer of fountain, player moves behind
  }

  displayGalaxy() { // displays galaxy asset when game is won
    push();
    imageMode(CENTER);
    image(this.galaxyImg, (245)/2, (255)/2, (800)/2, (500)/2); // hard numbers
    pop();
  }

  // display stars
  displayStars() {
    // Arrow CONSTELLATION
    super.addStar((380), (260), (2), 1);
    super.addStar((360), (270), (1.5), 0);
    super.addStar((285), (220), (1.5), 0);
    super.addStar((235), (230), (2), 0);
    super.addStar((200), (255), (1.25), 1);
    super.addStar((265), (340), (1.5), 0);
    super.addStar((290), (440), (1.5), 0);
    super.addStar((188), (330), (2), 0);
    super.addStar((150), (330), (1.5), 3);
    //more random stars// 6 of 'em
    super.addStar((50)/2, (200)/2, (1)/2, 1);
    super.addStar((20)/2, (400)/2, (1.5)/2, 0);
    super.addStar((411)/2, (420)/2, (1.5)/2, 0);
    super.addStar((421)/2, (413)/2, (1.25)/2, 0);
    super.addStar((10)/2, (298)/2, (1)/2, 0);
    super.addStar((30)/2, (358)/2, (1.5)/2, 0);
  }

  // methods //
  displaySkyGlow(lampost) {
    if (lampost.lightIsOn === true) {
      // if the lamp on the map is turned on
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

// Paint by hard numbers //
  //Dolly's building
  displayDollysBuilding() {
    // displays sky blue rectangle
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect((450)/2, (675)/2, (100)/2, (235)/2);
    pop();
  }
  //Large building acting as the left border
  displayLargeBuilding() {
    //
    push();
    noStroke();
    fill(159, 91, 114); // pinkish
    rectMode(CENTER);
    rect((35)/2, (450)/2, (70)/2, (125)/2);
    rect((15)/2, (550)/2, (30)/2, (100)/2);
    rect((50)/2, (700)/2, (110)/2, (215)/2);
    pop();
  }
  //Mayorhouse
  displayCityHall() {
    // large square rectangle representing the Mayor House.
    // there is a party here tonight for important adults only
    push();
    noStroke();
    fill(159, 91, 114); // pink ish
    rectMode(CENTER);
    rect((260)/2, (627)/2, (180)/2, (180)/2);
    pop();
  }

  displayWindows() {
    //this.addWindow(x,y,onOff)
    if (this.allLightsOut === false) {
      //Dolly building
      super.addWindow((430)/2, (582)/2, (22)/2, (25)/2, 1);
      super.addWindow((430)/2, (622)/2, (22)/2, (25)/2, 1);
      super.addWindow((470)/2, (582)/2, (22)/2, (25)/2, 1);
      super.addWindow((470)/2, (622)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (662)/2, (22)/2, (25)/2, 1);
      super.addWindow((470)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((430)/2, (662)/2, (22)/2, (25)/2, 1);
      super.addWindow((430)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (742)/2, (22)/2, (25)/2, 1);
      super.addWindow((430)/2, (742)/2, (22)/2, (25)/2, 0);
      //BackBuildingMapA
      super.addWindow((30)/2, (619)/2, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (619)/2, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (659)/2, (22)/2, (25)/2, 1);
      super.addWindow((70)/2, (699)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (659)/2, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (699)/2, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (739)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (420)/2, (22)/2, (25)/2, 0);
      // City Hall
      super.addWindow((260)/2, (613)/2, (90)/2, (40)/2, 0);
      super.addWindow((203)/2, (613)/2, (15)/2, (40)/2, 1);
      super.addWindow((317)/2, (613)/2, (15)/2, (40)/2, 0);
      super.addWindow((260)/2, (683)/2, (90)/2, (40)/2, 1);
      super.addWindow((206)/2, (683)/2, (5)/2, (40)/2, 1);
      super.addWindow((314)/2, (683)/2, (5)/2, (40)/2, 1);
      super.addWindow((195)/2, (688)/2, (5)/2, (40)/2, 1);
      super.addWindow((325)/2, (688)/2, (5)/2, (40)/2, 1);
    } else if (this.allLightsOut === true) {
      //Dolly building
      super.addWindow((430)/2, (582)/2, (22)/2, (25)/2, 0);
      super.addWindow((430)/2, (622)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (582)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (622)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (662)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((430)/2, (662)/2, (22)/2, (25)/2, 1);
      super.addWindow((430)/2, (702)/2, (22)/2, (25)/2, 0);
      super.addWindow((470)/2, (742)/2, (22)/2, (25)/2, 0);
      super.addWindow((430)/2, (742)/2, (22)/2, (25)/2, 0);
      //blockBackBuildingMapA
      super.addWindow((30)/2, (619)/2, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (619)/2, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (659)/2, (22)/2, (25)/2, 0);
      super.addWindow((70)/2, (699)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (659)/2, (22)/2, (25)/2, 1);
      super.addWindow((30)/2, (699)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (739)/2, (22)/2, (25)/2, 0);
      super.addWindow((30)/2, (420)/2, (22)/2, (25)/2, 0);
      // City Hall
      super.addWindow((260)/2, (613)/2, (90)/2, (40)/2, 0);
      super.addWindow((203)/2, (613)/2, (15)/2, (40)/2, 0);
      super.addWindow((317)/2, (613)/2, (15)/2, (40)/2, 0);
      super.addWindow((260)/2, (683)/2, (90)/2, (40)/2, 0);
      super.addWindow((206)/2, (683)/2, (5)/2, (40)/2, 0);
      super.addWindow((314)/2, (683)/2, (5)/2, (40)/2, 0);
      super.addWindow((195)/2, (688)/2, (5)/2, (40)/2, 0);
      super.addWindow((325)/2, (688)/2, (5)/2, (40)/2, 0);
    }
  }

  displayStairs() {
    push();
    imageMode(CENTER);
    image(this.stairsImg, (371)/2, (height / 2 + 130)/2, (45)/2, (165)/2); // hard numbers
    pop();
  }

  displayFountain() {
    push();
    imageMode(CENTER);
    image(this.fountainImg, (265)/2, (730)/2, (100)/2, (55)/2); // hard numbers
    pop();
  }

  displayFountainTop() {
    push();
    imageMode(CENTER);
    image(this.fountainTopImg, (265)/2, (719)/2, (100)/2, (30)/2); // hard numbers
    pop();
  }

  displayCircleAndPath() {
    // draws a gray path leading to the circle
    // in the middle of which stands the lamppost
    push();
    noStroke();
    fill(145, 145, 100); // dark grey
    ellipseMode(CENTER);
    ellipse((width / 2 + 9)/2, (height / 2 + 250)/2, (250)/2, (80)/2); // a circle at mid center
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
}
