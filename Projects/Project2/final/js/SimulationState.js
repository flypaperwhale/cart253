class SimulationState extends State {
  constructor(simulationImagesList, simulationMapsArray, simulationSoundsArray) {
    super();

    this.simulationImagesList = simulationImagesList;
    this.simulationMapsArray = simulationMapsArray;
    this.simulationSoundsArray = simulationSoundsArray;

// Save simulation sounds into variables for this class
    this.sunsetStarsIntro = this.simulationSoundsArray[0];
    this.constellationWink = this.simulationSoundsArray[1];
    this.lightFlickSound = this.simulationSoundsArray[2];
    this.buzzingSound = this.simulationSoundsArray[3];
    this.bulbBurstSound = this.simulationSoundsArray[4];
    this.bgMusic = this.simulationSoundsArray[5];
// Array to hold all the simulation items
    this.simulationItemList = [];
    this.createItems(); // create Items and store them in the itemList array
// Array to hold all the simulation NPCs
    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array

    this.maps = [this.simulationMapsArray[0], this.simulationMapsArray[1],this.simulationMapsArray[2]]; // load game maps into the state
    // to be called upon and displayed
    this.map = undefined; // temporary map variable
    this.currentMap = this.simulationMapsArray[1]; // current map updated according to where the player goes
    // mapsArray[1] = map B, where the player begins

    this.textBubbleIsLoaded = false; // checks if a new text has been fed to a new textBubble
this.showInventory = 0;
// animation bits and bobbles
    this.animationState = undefined; // states used inside the Simulation to manage animations
    this.songSwitch = 0; // switch used for the animations
    this.setAnimationState(`lightsUp`); //## SurpriseEnd

// Trade sequence bits and bobbles
this.eventCounter1 = 0;
  this.eventSwitch1 = 0; // event for ham aquisition
  this.eventSwitch2 = 0; // event for slingshot aquisition
  this.eventSwitch3 = 0; //
  }

  createItems() { // create individual copies of each item class
    // to be stored in the simulationItemList
  this.ham = new Ham(this.simulationImagesList[0]);
  this.simulationItemList.push(this.ham); //
  //
  this.bigBone = new BigBone(this.simulationImagesList[1]);
  this.simulationItemList.push(this.bigBone); //
  //
  this.slingshot = new Slingshot(this.simulationImagesList[2]);
  this.simulationItemList.push(this.slingshot); //
  //
  this.frogConstellation = new FrogConstellation(this.simulationImagesList[3]);
  this.simulationItemList.push(this.frogConstellation); //
  //
  this.frog = new Frog(this.simulationImagesList[4]);
  this.simulationItemList.push(this.frog); //
  //
  this.wrench = new Wrench(this.simulationImagesList[5]);
  this.simulationItemList.push(this.wrench); //
  //
  this.arrowConstellation = new ArrowConstellation(this.simulationImagesList[6]);
  this.simulationItemList.push(this.arrowConstellation); //
  //
  this.injunction = new Injunction(this.simulationImagesList[7]);
  this.simulationItemList.push(this.injunction); //
  //
  this.key = new Key(this.simulationImagesList[8]);
  this.simulationItemList.push(this.key); //
  //
  this.eagleConstellation = new EagleConstellation(this.simulationImagesList[9]);
  this.simulationItemList.push(this.eagleConstellation); //
  //
  this.placeHolder = new PlaceHolder(this.simulationImagesList[19]);
  this.simulationItemList.push(this.placeHolder); //
  }

  createNPCs() { // create individual copies of each NPC class
    // to be stored in simulationNPCList
    // map A NPCs
    this.streetLightA = new StreetLightA();
    this.simulationNPCList.push(this.streetLightA); // mapA
    this.pimlico = new Pimlico(); // mapA
    this.simulationNPCList.push(this.pimlico);
    this.lamotte = new Lamotte(); // mapA
    this.simulationNPCList.push(this.lamotte);
    // map B NPCs
    this.janine = new Janine(); // mapB
    this.simulationNPCList.push(this.janine);
    this.marv = new Marv(); // mapB
    this.simulationNPCList.push(this.marv);
    this.streetLightB = new StreetLightB(); // mapB
    this.simulationNPCList.push(this.streetLightB);
    // map C NPCs
    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee);
    this.sheperd = new Sheperd(); // mapC
    this.simulationNPCList.push(this.sheperd);
    this.garbage = new Garbage(); // mapC
    this.simulationNPCList.push(this.garbage);
    this.streetLightC = new StreetLightC(); // mapC
    this.simulationNPCList.push(this.streetLightC);
    this.jade = new Jade(); // mapC
    this.simulationNPCList.push(this.jade);

    this.player = new Player(109,597,this.placeHolder);
  }



  update() {
    // updates every frame, it serves a drawing function
    background(35,45,125);//

    // Check if player is paused (when textBubble appears)
    if (this.player.isPaused === true) {
      // if player is paused
      this.player.vx = 0; // turn player velocity to 0
      this.player.vy = 0;
    } else if (this.player.isPaused === false) {
      // if player is not paused
      this.player.handleInput(); // handle player input: up, down, left, right, w,s,a,d,
      this.player.move(); // change the player avatar's position
    }

    // assign the current map so the SimulationState can manage npcs, decor, sounds accordingly
    // with relation to the player's actions
    this.map = this.currentMap;
    this.map.display(
      this.player,
      this.simulationNPCList,
      this.simulationSoundsArray
    );
    this.player.barriers(this.map); // barriers are stated in the Player file
    // because they control where the player can and cannot go
    // the actual map is fed as each map has varying walls

    // current lampost is assigned to have sound/visual effects related
    // to which map it is on
    if (this.map.name === `A`) {
      this.currentLampost = this.simulationNPCList[0]; // lampostA
    } else if (this.map.name === `B`) {
      this.currentLampost = this.simulationNPCList[5]; // lampostB
    } else if (this.map.name === `C`) {
      this.currentLampost = this.simulationNPCList[9]; // lampostC
    }

console.log(this.currentLampost.name)

    // go through the NPC array to display each NPC (according to the map player is on)
      // also, check if player is colliding and update the NPC's data if need be (from click & trade)
      for (let i = 0; i < this.simulationNPCList.length; i++) {

        if (this.simulationNPCList[i].isTriggered === true) {
        // if player presses spacebar when colliding with npc
        this.player.paused(); // player avatar movement becomes paused


                                // % //

          // set up clicked npc values temporarily stored in simulation
          this.NPCdesiredItem = this.simulationNPCList[i].desiredItem;
          // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
          this.NPCholdingItem = this.simulationNPCList[i].itemHeld;
          // same holdingItem is temp the clicked npc's holding item

          this.player.checkTrade(this.simulationNPCList[i], this.NPCdesiredItem, this.NPCholdingItem);
          // using temporarily stored values inputed in player file
          // compare the npc's desiredItem and an item found in player's inventory array
          // if there is a match, the npc's holdingItem simulationItemList index number
          // is stored in player itemToAddToInventory
          // in simulation the item corresponding to the acquired item index is created
          // and stored in the player.inventory


  // npcs display text[0] first... when player has the item they desire and trade happens
  //console.log(`current npc ${this.simulationNPCList[i].name}, textno is ${this.simulationNPCList[i].textNo}
    //and player trade is ${this.player.tradeHappens}`);
          if (this.simulationNPCList[i].textNo === 0 && this.player.tradeHappens === true) {
            this.eventSwitch3=0;
            this.eventSwitch3 = constrain(this.eventSwitch3, 0, 1); // switch can be 0 or 1
            if (this.eventSwitch3 === 0) {
            console.log(`trade happens, you comin in here?`);
            this.player.inventory.shift(0,1);
            this.player.inventory.unshift(this.simulationItemList[this.player.itemToAddToInventory]); //the item being traded is added to player inventory
            this.simulationNPCList[i].textNo = 1; // npc text is updated to the next in the sequence
            this.player.tradeHappens = false; // trade is over
          }
          this.eventSwitch3++;
        }

          // * // this is a text assigning machine to display appropriate text // * //
          if (this.simulationNPCList[i].textNo === 0) { // when triggered npc text is index 0
            this.textBubble = new TextBubble(
              `${this.simulationNPCList[i].texts[0]}`
            );
          }
          else if (this.simulationNPCList[i].textNo === 1) { // when tirggered npc text index 1
            this.textBubble = new TextBubble(
              `${this.simulationNPCList[i].texts[1]}`
            );
        }

        else if (this.simulationNPCList[i].textNo === 2) { // when trigerred npc text index 2
            this.textBubble = new TextBubble(
              `${this.simulationNPCList[i].texts[2]}`
            );
        }
          // and so on...

          // Display assigned text
          this.textBubble.display();
      }
    }

      // * // Here begins the managing of items! // * //

      for (let i = 0; i < this.simulationItemList.length; i++) {
        // look through simulationItemList to manage Items

        // also, when player interacts with npc and player has the item
        // npc wants, splice the old object ,
        // and replace it with new object (by going through list with traded item label)

        // Manage items displayed on the map //
        if (this.simulationItemList[i].isOnMap === true) {

if (this.currentMap.name === this.simulationItemList[i].map){
  this.currentMap.displayItem(this.simulationItemList[i]); // display game items
  this.simulationItemList[i].playerCollisionCheck(
    // check for player collision with each item
    this.player.x,
    this.player.y,
    this.player.size
  );
}

          // Items shown on map vanish when player collides with them
          if (
            this.simulationItemList[i].playerColliding === true
          ) {
          //  console.log(`why you keep coming here?`);
            this.player.paused(); // the player movements are paused
            this.player.isPaused = true;
            this.player.isCollided = true;
            this.simulationItemList[i].isPicked = true; // If player collides with item, its isPicked value becomes true
            this.simulationItemList[i].isOnMap = false; // item is declared off of the map
            if (this.simulationItemList[i].isOnMap === false) {
              // when item is declared off of the map
              this.simulationItemList[i].x = undefined; // item x coordinate becomes undefined,
              // vanishing item
            }

          // items on map collided with get added to player INVENTORY...
            // Ham First Item Picked //
            if (
              this.player.itemPickingLevel === 0 &&
              this.simulationItemList[i].name === `Ham`
            ) {
              // if the item being picked is slingshot
              this.eventSwitch2 = 0; // initialize event switch
              this.eventSwitch2 = constrain(this.eventSwitch2, 0, 1); // switch can be 0 or 1
              if (this.eventSwitch2 === 0) {
                if (this.player.inventory[0].name === `Place Holder`) { // remove place holder if you don'T already have the slingshot
                  this.player.inventory.splice(0, 1);
                }
                this.player.inventory.push(this.simulationItemList[i]); // item is pushed in inventory
                this.textBubble = new TextBubble( // text is assigned to textbubble
                  `You just picked up ${this.simulationItemList[i].name}`
                );
                this.textBubbleIsLoaded = true;
                this.simulationItemList[i].playerColliding = false;
                  //this.simulationItemList[i].isPicked = false; // that way I don't make a million
                this.player.itemPickingLevel = 1; // picking lvl 1 makes sure code goes to the end
                // then it will be turned to lvl 2 and new item exchanges and pickups will be possible
              }
            }
          }
        }
        // end of items on map section //

      this.eventSwitch2++;
      if (this.textBubbleIsLoaded === true){
        console.log(`so tbb is loaded...`);
        this.textBubble.display();
      }
  }

// Here begin the managing of Animation States! //
    // Sunset // // introduction animation, blue sky becomes dark and starry...
    // this visual is also disfunctional, as the map() function does not seem to work
    // when used in class states, or have to be applied differently...
    // unfortunately no darkening sky for now...
    // if (this.animationState === `SunsetState`) {
    //   // if the animationState equals "sunset"
    //   this.player.paused(); // player is paused
    //   this.songSwitch++; // the songSwitch is increased
    //   //this.songSwitch = constrain(this.songSwitch, 0, 2); // the songSwitch is constrained between 0-2
    //   //this.playSunsetSong(); // the sunset theme is played
    //   // sunset animation with skyAlpha and dayTimer
    //   //this.skyAlpha = map(this.dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
    //   this.dayTimer--; // dayTimer goes down
    //   this.dayTimer = constrain(this.dayTimer, 0, 310); // constrain dayTimer
    //   if (this.dayTimer === 0) {
    //     // once the dayTimer reaches 0...
    //     //this.constellationWink.play(); // a chime sound to signify the twinkling stars
    //     this.dayTimer = 1; // dayTimer is reset to 1
    //     //this.resetSongSwitch(); // songSwitch is reset to 0
    //     this.setAnimationState(`lightsUp`); // ... and then, no time to admire the stars, the lights go on!
    //   }
    // }

    // LightsUp // animation when the light turns on, then simulation begins
    // and player can play
    if (this.animationState === `lightsUp`) {
      if (this.currentLampost.tradeSucceeded === true){
        this.currentLampost.lightIsOn = false;
      }
      else {
        this.currentLampost.lightIsOn = true;
      }

        }

        if (this.animationState === `SurpriseEnd`){
          this.simulationMapsArray[0].allLightsOut = true;
          this.simulationMapsArray[0].galaxyDisplayed = true;
          this.simulationMapsArray[1].allLightsOut = true;
          this.simulationMapsArray[1].galaxyDisplayed = true;
          this.simulationMapsArray[2].allLightsOut = true;
          this.simulationMapsArray[2].galaxyDisplayed = true;
        }

    // * // manageNPCs(){ // * //
    // go through the NPC array to display each NPC (according to the map player is on)
    // also, check if player is colliding and update the NPC's data if need be (from click & trade)

    for (let i = 0; i < this.simulationNPCList.length; i++) {
      // Look through NPC List

      if (this.simulationNPCList[i].isTriggered === true) {
        // if player presses spacebar when colliding with npc
        this.player.paused(); // player avatar movement becomes paused

        // // % // First interaction with Mayor Pimlico // % //
        // if (
        //   // if the triggered npc is the Mayor and player has either
        //   // the placeholder or the slingshot in their inventory
        //   this.simulationNPCList[i].name === `Mayor Pimlico` &&
        //   this.player.inventory[0] === `PlaceHolder`
        //   // || this.simulationNPCList[i].name === `Mayor Pimlico` &&
        //   // this.player.inventory[0].name === `Slingshot`
        // ) {
        //   console.log(`this should only happen once`);
        //   this.eventSwitch1 = 0; // initialize event switch
        //   this.eventSwitch1 = constrain(this.eventSwitch1, 0, 1); // switch can be 0 or 1
        //   if (this.eventSwitch1 === 0) {
        //     this.player.inventory.unshift(this.simulationItemList[1]); // Pimlico gives you Ham!
        //     if (this.player.inventory[1] === `PlaceHolder`) {
        //       // remove place holder if you don'T already have the slingshot
        //       this.player.inventory.splice(1, 1);
        //       this.textBubble = new TextBubble(
        //         `${this.simulationNPCList[i].texts[0]}`
        //       );
        //       this.simulationNPCList[i].textNo = 1;
        //     }
        //     //this.simulationNPCList[i].textNo = 1; // Pimlico's text is changed
        //     // next time Pimlico is triggered this new text will be displayed
        //   }
        //   this.eventSwitch1++;
        // }
        // // % //

        // set up clicked npc values temporarily stored in simulation
        this.NPCdesiredItem = this.simulationNPCList[i].desiredItem;
        // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
        this.NPCholdingItem = this.simulationNPCList[i].itemHeld;
        // same holdingItem is temp the clicked npc's holding item

        this.player.checkTrade(this.NPCdesiredItem, this.NPCholdingItem);
        // using temporarily stored values inputed in player file
        // compare the npc's desiredItem and an item found in player's inventory array
        // if there is a match, the npc's holdingItem simulationItemList index number
        // is stored in player itemToAddToInventory
        // in simulation the item corresponding to the acquired item index is created
        // and stored in the player.inventory

        //if (this.player.tradeHappens === true) {
        // when trade happens

        // !!! THIS HERE RELATES to item.isPicked !!!

        this.eventSwitch3 = 0;
        this.eventSwitch3 = constrain(this.eventSwitch3, 0, 1); // switch can be 0 or 1
        // npcs display text[0] first... when player has the item they desire and trade happens
        if (
          this.simulationNPCList[i].textNo === 0 &&
          this.player.tradeHappens === true
        ) {
          if (this.eventSwitch3 === 0) {
            console.log(`trade happens, you comin in here?`);
            this.player.inventory.shift(0, 1);
            this.player.inventory.unshift(
              this.simulationItemList[this.player.itemToAddToInventory]
            ); //the item being traded is added to player inventory
            this.simulationNPCList[i].textNo = 1; // npc text is updated to the next in the sequence
            this.player.tradeHappens = false; // trade is over
          }
          this.eventSwitch3++;
        }

        // if (this.simulationNPCList[i].tradeSucceeded === true) {
        //   // after trade text is shown,
        //   // update NPC to having succeeded trade
        //   console.log(`you're not sup to b here!`);
        //   this.simulationNPCList[i].textNo = 2;
        // }

        // * // this is a text assigning machine to display appropriate text // * //

        if (this.simulationNPCList[i].textNo === 0) {
          // when triggered npc text is index 0
          // if (this.eventSwitch3 === 0) {
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[0]}`
          );

          // }
          // this.eventSwitch3++;
        } else if (this.simulationNPCList[i].textNo === 1) {
          // when tirggered npc text index 1
          // if (this.eventSwitch3 === 0) {
          //console.log(`you need to come here`);
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[1]}`
          );
          // this.player.inventory.shift();
          // console.log(`does pimpim come here?`);
          // let item = new Item(0, 0, `Big bone`); // this is problematic
          // this.player.inventory.push(item);
          // }
          //   this.eventSwitch3++;
        } else if (this.simulationNPCList[i].textNo === 2) {
          // when trigerred npc text index 2
          // if (this.eventSwitch3 === 0) {
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[2]}`
          );
          // }
          // this.eventSwitch3++;
        }
        // and so on...

        // Display assigned text
        //console.log(`before display what is pims textno ${this.simulationNPCList[i].textNo}`)

        this.textBubble.display();
        this.textBubble.textIsUp = true;

        //   if (this.simulationNPCList[i] === this.simulationNPCList[1]){
        //     if (this.pimlicoSwitch = 1){
        //   // } && this.simulationNPCList[i].textNo === 0 &&
        //     //console.log(`please come here`); he does
        //     this.simulationNPCList[i].textNo = 1;
        //   }
        //   console.log(`endd what is pims textno ${this.simulationNPCList[i].textNo}`)
        //
        // }
      }
    }

    // Threshold checking to update correct map!
    if (this.player.thresholdCollision === true) {
      if (this.map.name === `A`) {
        this.player.x = 5;
        if (this.player.y > 500 && this.player.y < 510) {
          this.player.y = 520;
        }
        this.currentMap = this.simulationMapsArray[1];
        this.player.thresholdCollision = false;
      } else if (this.map.name === `B`) {
        if (this.player.x > width / 2) {
          // if player cross threshold to the right
          this.player.x = 5;
          this.currentMap = this.simulationMapsArray[2]; // go to map C
          this.player.thresholdCollision = false;
        } else if (this.player.x < width / 2) {
          // if player crosses to the left
          this.player.x = 495;
          this.currentMap = this.simulationMapsArray[0]; // go to map A
          this.player.thresholdCollision = false;
        }
      } else if (this.map.name === `C`) {
        this.player.x = 455;
        if (this.player.y > 670 && this.player.y < 685) {
          this.player.y = 650;
        }
        this.currentMap = this.simulationMapsArray[1];

        this.player.thresholdCollision = false;
      }
    }
    if (this.showInventory ===1){
      this.player.displayInventory();
      if (this.player.inventory[0].name === `Eagle Constellation`){
      this.player.paused();
        this.animationState = `SurpriseEnd`;
      }
    }
    //this.player.display(); // display the player avatar
  }

  // METHODS //

  playSunsetSong() {
    // plays sunset theme
    if (this.songSwitch === 1) {
      // if songSwitch is 1
      //this.sunsetStarsIntro.play(0, 1, 0.2); //## eh?
    }
  }

  resetSongSwitch() {
    // resets songSwitch to 0
    this.songSwitch = 0;
  }

  setAnimationState(animationState) {
    this.animationState = animationState;
  }

  turnLightOn(currentLampost) {
    // turns lightIsOn switch on
    console.log(`when do you come in here?`); //never parently
    this.currentLampost.lightIsOn = true;
  }

  // playBGMusic() {
  //   // plays bg music
  //   push();
  //   this.bgMusic.playMode(`untilDone`); // bg music mode loops forever
  //   this.bgMusic.setVolume(0.88); // not too loud
  //   this.bgMusic.rate(0.77); // not too quick
  //   this.bgMusic.play(); // play bg music
  //   pop();
  // }

  bulbBursting() {
    // handles bulb bursting audio FX
    push();
    this.bulbBurstSound.setVolume(1.7); // bulb bursting soun is loud
    this.bulbBurstSound.play(); // play bulb bursting sound
    pop();
  }

  mouseClicked() {
  }

    keyPressed() {
      if (keyCode === 49) { // Press 1 to change maps : debug button! Will be deactivated
        console.log(`pressed enter current map is ${this.map.name}`);
        this.currentMap = random(this.maps);
        this.player.barriers(this.currentMap);
        console.log(`pressed enter current map is ${this.map.name}`);
      }

      if (keyCode === RETURN) {
        if (this.player.isPaused ===true){
          //
        }
        else {
          if (this.showInventory === 1){
            this.showInventory = 0;
            //this.player.isPaused = false;
          }
          else if (this.showInventory === 0){
            this.showInventory = 1;
            //this.player.paused();
            // LITERALLY DISPLAY ITEM IN INVENTORY!
          }
        }
      }

      if (keyCode === 32) { // When the player presses SPACEBAR
  if (this.ham.isPicked === true && this.player.isPaused === true){
    // when the player was paused because they just picked up the ham
    this.textBubble.break(); // the textBubble dissapears
    this.textBubbleIsLoaded = false; // a new textBubble is not loaded
    this.player.isPaused = false; // player is not labelled as paused anymore
    this.ham.isPicked = false; // to avoid looping in here again, ham becomes unpicked
  }

  // surprise ending

if (this.player.isPaused === true && this.animationState === `SurpriseEnd`){
  this.showInventory = 0;
  this.player.isPaused = false;
  this.animationState = undefined;
}

        for (let i = 0; i < this.simulationNPCList.length; i++) {
          // when player presses spacebar at any time,
          // the simulation looks through the npc list

          // Space Action when the Player is NOT Paused //
          if (this.simulationNPCList[i].playerColliding === true) { // if the observed npc is
            // in collision with the player...
            this.simulationNPCList[i].isTriggered = true; // the observed npc's becomes triggered
          }

  // Space Action for when player IS paused by npc interaction//
  if (this.simulationNPCList[i].isTriggered === true
    && this.player.isPaused === true
  ){
      this.textBubble.break(); // the text Bubble vanishes
      if (this.simulationNPCList[i].textNo === 1) // if the current npc being interacted with's
      //text is 1, it will be changed to 2 as 1 should only happen once, during the trade
      {this.simulationNPCList[i].textNo = 2;} // npc text is set to 2
      this.simulationNPCList[i].isTriggered = false; // npc is not triggered anymore
    this.player.isPaused = false; // player is not labelled paused anymore
   }

          }

            }



          }


        }
