class SimulationState extends State {
  // This is the main part of the program //
  constructor(
    simulationImagesList,
    simulationMapsArray,
    simulationSoundsArray
  ) {
    super();

    this.name = `SimulationState`;
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

    this.maps = [
      this.simulationMapsArray[0],
      this.simulationMapsArray[1],
      this.simulationMapsArray[2],
    ]; // load game maps into the state
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
    this.eventSwitch1 = 0; // event for ham aquisition
    this.eventSwitch2 = 0; // event for slingshot aquisition
    this.eventSwitch3 = 0; //
  }

  createItems() {
    // create individual copies of each item class
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
    this.frogConstellation = new FrogConstellation(
      this.simulationImagesList[3]
    );
    this.simulationItemList.push(this.frogConstellation); //
    //
    this.frog = new Frog(this.simulationImagesList[4]);
    this.simulationItemList.push(this.frog); //
    //
    this.wrench = new Wrench(this.simulationImagesList[5]);
    this.simulationItemList.push(this.wrench); //
    //
    this.arrowConstellation = new ArrowConstellation(
      this.simulationImagesList[6]
    );
    this.simulationItemList.push(this.arrowConstellation); //
    //
    this.injunction = new Injunction(this.simulationImagesList[7]);
    this.simulationItemList.push(this.injunction); //
    //
    this.key = new Key(this.simulationImagesList[8]);
    this.simulationItemList.push(this.key); //
    //
    this.eagleConstellation = new EagleConstellation(
      this.simulationImagesList[9]
    );
    this.simulationItemList.push(this.eagleConstellation); //
    //
    this.placeHolder = new PlaceHolder(this.simulationImagesList[19]);
    this.simulationItemList.push(this.placeHolder); //
  }

  createNPCs() {
    // create individual copies of each NPC class
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

    this.player = new Player(109, 597, this.placeHolder);
  }

  update() {
    // updates every frame, it serves a drawing function
    background(35, 45, 125); // night sky blue

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

    // go through the NPC array to display each NPC (according to the map player is on)
    // also, check if player is colliding and update the NPC's data if need be (from click & trade)
    for (let i = 0; i < this.simulationNPCList.length; i++) {
      if (this.simulationNPCList[i].isTriggered === true) {
        // if player presses spacebar when colliding with npc
        this.player.paused(); // player avatar movement becomes paused

        // set up clicked npc values temporarily stored in simulation
        this.NPCdesiredItem = this.simulationNPCList[i].desiredItem;
        // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
        this.NPCholdingItem = this.simulationNPCList[i].itemHeld;
        // same holdingItem is temp the clicked npc's holding item

        this.player.checkTrade(
          this.simulationNPCList[i],
          this.NPCdesiredItem,
          this.NPCholdingItem
        );
        // using temporarily stored values inputed in player file
        // compare the npc's desiredItem and an item found in player's inventory array
        // if there is a match, the npc's holdingItem simulationItemList index number
        // is stored in player itemToAddToInventory
        // in simulation the item corresponding to the acquired item index is created
        // and stored in the player.inventory

        // npcs display text[0] first... when player has the item they desire and trade happens
        //console.log(`current npc ${this.simulationNPCList[i].name}, textno is ${this.simulationNPCList[i].textNo}
        //and player trade is ${this.player.tradeHappens}`);
        if (
          this.simulationNPCList[i].textNo === 0 && // if npc text is 0 trade has not happened yet
          this.player.tradeHappens === true // when trade happens
        ) {
          this.eventSwitch1 = 0;
          this.eventSwitch1 = constrain(this.eventSwitch1, 0, 1); // switch can be 0 or 1
          if (this.eventSwitch1 === 0) {
            // this only happens once per npc
            this.player.inventory.shift(0, 1); // remove item in the player inventory
            this.player.inventory.unshift(
              // add the item held by npc
              // by using the label given to player from npc during the trade
              this.simulationItemList[this.player.itemToAddToInventory]
            ); //the item being traded is added to player inventory
            this.simulationNPCList[i].textNo = 1; // npc text is updated to the next in the sequence
            this.player.tradeHappens = false; // trade is over
          }
          this.eventSwitch1++;
        }

        // * // this is a text assigning machine to display appropriate text // * //
        if (this.simulationNPCList[i].textNo === 0) {
          // when triggered npc text is index 0
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[0]}`
          );
        } else if (this.simulationNPCList[i].textNo === 1) {
          // when tirggered npc text index 1
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[1]}`
          );
        } else if (this.simulationNPCList[i].textNo === 2) {
          // when trigerred npc text index 2
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[2]}`
          );
        }
        // and so on...

        // Display assigned text
        this.textBubble.display();
      }
    }

    // * // Here begins the mgmt of items! // * //
    for (let i = 0; i < this.simulationItemList.length; i++) {
      // look through simulationItemList to manage Items

      // Manage items displayed on the map //
      if (this.simulationItemList[i].isOnMap === true) {
        // when item is marked as onthemap
        if (this.currentMap.name === this.simulationItemList[i].map) {
          // if the current item's map is the same as the current map
          this.currentMap.displayItem(this.simulationItemList[i]); // display game items
          this.simulationItemList[i].playerCollisionCheck(
            // check for player collision with each item
            this.player.x,
            this.player.y,
            this.player.size
          );
        }

        // Items shown on map vanish when player collides with them
        if (this.simulationItemList[i].playerColliding === true) {
          // when player is colliding with item
          this.player.paused(); // the player movements are paused
          this.player.isPaused = true;
          this.player.isCollided = true; // there is collision
          this.simulationItemList[i].isPicked = true; // the items' its isPicked value becomes true
          this.simulationItemList[i].isOnMap = false; // item is declared off of the map
          if (this.simulationItemList[i].isOnMap === false) {
            // when item is declared off of the map
            this.simulationItemList[i].x = undefined; // item x coordinate becomes undefined,
            // vanishing item
          }

          // Ham First Item Picked //
          if (
            this.player.itemPickingLevel === 0 && // when player's picking level is 0
            // when they haven't picked any items yet
            this.simulationItemList[i].name === `Ham` // and the item being collided with is Ham
          ) {
            this.eventSwitch2 = 0;
            this.eventSwitch2 = constrain(this.eventSwitch2, 0, 1); // switch can be 0 or 1
            if (this.eventSwitch2 === 0) {
              // this only happens once
              if (this.player.inventory[0].name === `Place Holder`) {
                // remove place holder if you don't already have the Ham
                this.player.inventory.splice(0, 1);
              }
              this.player.inventory.push(this.simulationItemList[i]); // item is pushed in inventory
              this.textBubble = new TextBubble( // text is assigned to textbubble
                `You just picked up ${this.simulationItemList[i].name}`
              );
              this.textBubbleIsLoaded = true;
              this.simulationItemList[i].playerColliding = false;
              this.player.itemPickingLevel = 1; // picking lvl 1 makes sure code goes to the end
              // then it will be turned to lvl 2 and new item exchanges and pickups will be possible
            }
          }
        }
      }
      // end of items on map section //

      this.eventSwitch2++;

      if (this.textBubbleIsLoaded === true) {
        // if there is a new text to be displayed
        this.textBubble.display(); // display text in bubble
      }
    }

    // Here begin the managing of Animation States! //
    // LightsUp // animation when the light turns on, then simulation begins
    // and player can play
    if (this.animationState === `lightsUp`) {
      // main animation state during simulation
      if (this.currentLampost.tradeSucceeded === true) {
        // when player succeeds trade with lampost
        this.currentLampost.lightIsOn = false; // the lampost turns off
      } else {
        // otherwise
        this.currentLampost.lightIsOn = true; // it remains on
      }
    }

    if (this.animationState === `SurpriseEnd`) {
      // YOU WON! end animation state
      this.simulationMapsArray[0].allLightsOut = true; // take out the lights in map A
      this.simulationMapsArray[0].galaxyDisplayed = true; // display the galaxy in map A
      this.simulationMapsArray[1].allLightsOut = true; // take out the lights in map B
      this.simulationMapsArray[1].galaxyDisplayed = true; // display the galaxy in map B
      this.simulationMapsArray[2].allLightsOut = true; // take out the lights in map C
      this.simulationMapsArray[2].galaxyDisplayed = true; // display the galaxy in map C
    }

    // * // manageNPCs(){ // * //
    // go through the NPC array to display each NPC (according to the map player is on)
    // also, check if player is colliding and update the NPC's data if need be (from click & trade)
    for (let i = 0; i < this.simulationNPCList.length; i++) {
      // Look through NPC List

      if (this.simulationNPCList[i].isTriggered === true) {
        // if player presses spacebar when colliding with npc, npc is triggered
        this.player.paused(); // player avatar movement becomes paused

        // set up clicked desiredItem and holdingItem item npc values temporarily stored in simulation
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

        this.eventSwitch3 = 0;
        this.eventSwitch3 = constrain(this.eventSwitch3, 0, 1); // switch can be 0 or 1
        // npcs display text[0] first... when player has the item they desire and trade happens
        if (
          this.simulationNPCList[i].textNo === 0 && // when npc has not traded yet, text no is 0
          this.player.tradeHappens === true // when trde does happen
        ) {
          if (this.eventSwitch3 === 0) {
            // this only happens once per npc
            this.player.inventory.shift(0, 1); // the current item in the inventory is shifted
            this.player.inventory.unshift(
              // add the npc's held item to the inventory
              this.simulationItemList[this.player.itemToAddToInventory]
            ); //the item being traded is added to player inventory
            this.simulationNPCList[i].textNo = 1; // npc text is updated to the next in the sequence
            this.player.tradeHappens = false; // trade is over
          }
          this.eventSwitch3++;
        }

        // * // this is a text assigning machine to display appropriate text // * //

        if (this.simulationNPCList[i].textNo === 0) {
          // when triggered npc text is index 0
          this.textBubble = new TextBubble( // create new text bubble with npc's text 0
            `${this.simulationNPCList[i].texts[0]}`
          );
        } else if (this.simulationNPCList[i].textNo === 1) {
          // when tirggered npc text index 1
          this.textBubble = new TextBubble( // create new text bubble with npc's text 1
            `${this.simulationNPCList[i].texts[1]}`
          );
        } else if (this.simulationNPCList[i].textNo === 2) {
          // when trigerred npc text index 2
          this.textBubble = new TextBubble( // create new text bubble with npc's text 2
            `${this.simulationNPCList[i].texts[2]}`
          );
        }
        // and so on...

        // Display assigned text
        this.textBubble.display();
        this.textBubble.textIsUp = true;
      }
    }

    // Threshold checking to update correct map!
    if (this.player.thresholdCollision === true) {
      // if player touches threshold
      if (this.map.name === `A`) {
        // on map A (walking rightwards)
        this.player.x = 5; // player x position is transferred to left side of window
        if (this.player.y > 500 && this.player.y < 510) {
          // if player is going to collide on map B
          this.player.y = 520; // player y is also transferred a little downwards to avoid collision
        }
        this.currentMap = this.simulationMapsArray[1]; // go to map B
        this.player.thresholdCollision = false; // player is not touching threshold anymore
      } else if (this.map.name === `B`) {
        // on map B (walking leftwards or rightwards)
        if (this.player.x > width / 2) {
          // if player cross threshold to the right
          this.player.x = 5; // player x position is transferred to the left side of window
          this.currentMap = this.simulationMapsArray[2]; // go to map C
          this.player.thresholdCollision = false; // player is not touching threshold anymore
        } else if (this.player.x < width / 2) {
          // if player crosses to the left
          this.player.x = 495; // player x is transferred to the right side of window
          this.currentMap = this.simulationMapsArray[0]; // go to map A
          this.player.thresholdCollision = false; // player is not touching threshold anymore
        }
      } else if (this.map.name === `C`) {
        // on map C ( walking leftwards)
        this.player.x = 455; // player x is tranferred to the right side of window
        if (this.player.y > 670 && this.player.y < 685) {
          // if player is going to collide on map B
          this.player.y = 650; // player y is also transferred a little upwards
        }
        this.currentMap = this.simulationMapsArray[1]; // got to map B
        this.player.thresholdCollision = false; // player is not touching threshold anymore
      }
    }

    if (this.showInventory === 1) {
      // if show inventory variable is 1
      this.player.displayInventory(); // the contents of player inventory is displayed
      if (this.player.inventory[0].name === `Eagle Constellation`) {
        // if the item in the INVENTORY
        // is the Eagle Constellation (last item)
        this.player.paused(); // player is paused
        this.animationState = `SurpriseEnd`; // the animation state is changed to the ending animation state
      }
    }
  }

  // METHODS //

  setAnimationState(animationState) {
    // sometimes used to set animation state
    this.animationState = animationState;
  }

  turnLightOn(currentLampost) {
    // turns lightIsOn switch on
    this.currentLampost.lightIsOn = true;
  }

  mouseClicked() {}

  keyPressed() {
    if (keyCode === RETURN) {
      // if player presses return during simulation
      if (this.player.isPaused === true) {
        // if player is already paused
        // nothing happens
      } else {
        if (this.showInventory === 1) {
          // if show inventory is turned to 1
          this.showInventory = 0; // show inventory is turned to 0
          // hiding inventory
        } else if (this.showInventory === 0) {
          // is show inventory is turned off
          this.showInventory = 1; // it is turned on
          // LITERALLY DISPLAY ITEM IN INVENTORY over player avatar!
        }
      }
    }

    if (keyCode === 32) {
      // When the player presses SPACEBAR
      if (this.ham.isPicked === true && this.player.isPaused === true) {
        // when the player was paused because they just picked up the ham
        this.textBubble.break(); // the textBubble dissapears
        this.textBubbleIsLoaded = false; // a new textBubble is not loaded
        this.player.isPaused = false; // player is not labelled as paused anymore
        this.ham.isPicked = false; // to avoid looping in here again, ham becomes unpicked
      }

      // surprise ending //
      if (
        // if spacebar is pressed
        this.player.isPaused === true && // when player is paused at the end of the simulation
        // showing the Eagle Constellation and triggering the galaxy to be displayed on the backdrop
        this.animationState === `SurpriseEnd`
      ) {
        this.showInventory = 0; // stop showing inventory
        this.player.isPaused = false; // player is not paused anymore
        this.animationState = undefined; // there is no more animation state
      }

      for (let i = 0; i < this.simulationNPCList.length; i++) {
        // when player presses spacebar at any time,
        // the simulation looks through the npc list

        // Space Action when the Player is NOT Paused //
        if (this.simulationNPCList[i].playerColliding === true) {
          // if the observed npc is
          // in collision with the player...
          this.simulationNPCList[i].isTriggered = true; // the observed npc's becomes triggered
        }

        // Space Action for when player IS paused by npc interaction//
        if (
          this.simulationNPCList[i].isTriggered === true &&
          this.player.isPaused === true
        ) {
          this.textBubble.break(); // the text Bubble vanishes
          if (this.simulationNPCList[i].textNo === 1) {
            // if the current npc being interacted with's
            //text is 1, it will be changed to 2 as 1 should only happen once, during the trade
            this.simulationNPCList[i].textNo = 2;
          } // npc text is set to 2
          this.simulationNPCList[i].isTriggered = false; // npc is not triggered anymore
          this.player.isPaused = false; // player is not labelled paused anymore
        }
      }
    }
  }
}
