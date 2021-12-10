class SimulationState extends State {
  constructor(itemImagesList) {
    super();

    this.player = new Player(300, 300); // TEMPORARILY UNDER ITEMS/NPCS TO USE INVENTORY FOR DEBUGGING

    this.simulationItemList = []; // array to manage items
    this.createItems(); // creating Items, to be found and exchanged

    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array

    this.eventCounter1 = 0;
    this.eventSwitch1 = 0;
    this.eventSwitch2 = 0;
    this.textBubble = undefined;

    this.textBubbleIsLoaded = false;
  }

  createItems() {
    this.slingshot = new Slingshot(itemImagesList[0]);
    this.simulationItemList.push(this.slingshot); //
    //
    this.ham = new Ham(itemImagesList[1]);
    this.simulationItemList.push(this.ham); //
    //
    this.bigBone = new BigBone(itemImagesList[2]);
    this.simulationItemList.push(this.bigBone); //
    //
    this.frog = new Frog(itemImagesList[3]);
    this.simulationItemList.push(this.frog); //
    //
    this.wrench = new Wrench(itemImagesList[4]);
    this.simulationItemList.push(this.wrench); //
    //
    this.injunction = new Injunction(itemImagesList[5]);
    this.simulationItemList.push(this.injunction); //
    //
  }

  createNPCs() {
    // map A NPCs
    this.streetLightA = new StreetLightA(); // mapA
    this.simulationNPCList.push(this.streetLightA); // √
    this.pimlico = new Pimlico(); // mapA
    this.simulationNPCList.push(this.pimlico); // √
    this.lamotte = new Lamotte(); // mapA
    this.simulationNPCList.push(this.lamotte); // !!!
    // map B NPCs
    this.janine = new Janine(); // mapB
    this.simulationNPCList.push(this.janine); // √
    this.marv = new Marv(); // mapB
    this.simulationNPCList.push(this.marv); // √
    this.streetLightB = new StreetLightB(); // mapB
    this.simulationNPCList.push(this.streetLightB); // √
    // map C NPCs
    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee); // !!!
    this.sheperd = new Sheperd(); // mapC
    this.simulationNPCList.push(this.sheperd); // !!!
    this.garbage = new Garbage(); // mapC
    this.simulationNPCList.push(this.garbage); // √
    this.streetLightC = new StreetLightC(); // mapC
    this.simulationNPCList.push(this.streetLightC); // √
    this.jade = new Jade(); // mapC
    this.simulationNPCList.push(this.jade); // !!!
  }

  update() {
    this.display(); // simulation state display method

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

    // go through the NPC array to display each NPC (according to the map player is on)
    // also, check if player is colliding and update the NPC's data if need be (from click & trade)
    for (let i = 0; i < this.simulationNPCList.length; i++) {
      // Look through NPC List
      this.simulationNPCList[i].display(); // display every NPC
      this.simulationNPCList[i].playerCollisionCheck(
        //NPC/Player Collision check
        this.player.x,
        this.player.y,
        this.player.size
      );

      if (this.simulationNPCList[i].isTriggered === true) {
        // if player presses spacebar when colliding with npc
        this.player.paused(); // player avatar movement becomes paused


        // else if (this.simulationItemList[i].name === `Ham`){
        //   this.player.inventory.splice(0, 1);   // gets rid of inventory place holder!
        //   this.player.inventory.unshift(this.simulationItemList[i]);
        //   this.textBubble = new TextBubble(`you just picked up ham`);
        //   this.player.itemPickingLevel = 1;
        // }

        // % // First interaction with Mayor Pimlico // % //
        if ( // if the triggered npc is the Mayor and player has either
          // the placeholder or the slingshot in their inventory
          this.simulationNPCList[i].name === `Mayor Pimlico` &&
          this.player.inventory[0] === `PlaceHolder`
          || this.simulationNPCList[i].name === `Mayor Pimlico` &&
          this.player.inventory[0].name === `Slingshot`
        ) {
          this.eventSwitch1 = 0; // initialize event switch
          this.eventSwitch1 = constrain(this.eventSwitch1, 0, 1); // switch can be 0 or 1
          if (this.eventSwitch1 === 0) {
            this.player.inventory.unshift(this.simulationItemList[1]); // Pimlico gives you Ham!
            if (this.player.inventory[1] === `PlaceHolder`) { // remove place holder if you don'T already have the slingshot
              this.player.inventory.splice(1, 1);
            }
            //this.simulationNPCList[i].textNo = 1; // Pimlico's text is changed
            // next time Pimlico is triggered this new text will be displayed
          }
          this.eventSwitch1++;
        }

        // clicked npc values temporarily stored in simulation
        this.NPCdesiredItem = this.simulationNPCList[i].desiredItem;
        // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
        this.NPCholdingItem = this.simulationNPCList[i].itemHeld;
        // same holdingItem is temp the clicked npc's holding item

        console.log(
          //`NPC desire and held : ${this.simulationNPCList[i]}${this.NPCdesiredItem}${this.NPCitemHeld}`
        );

        this.player.checkTrade(this.NPCdesiredItem, this.NPCholdingItem);
        // using temporarily stored values inputed in player file
        // the a match between the npc's desiredItem and an item found in player's inventory array
        // if there is a match, the npc's holdingItem label is stored in ...
        // in simulation the item corresponding to the acquired item label is created
        // and stored in the player.inventory

        // #####  if (this.player.tradeHappens === true) {
        // when trade happens

        // !!! THIS HERE RELATES to item.isPicked !!!

        if (this.player.tradeHappens === true) {
          console.log(`trade happens, you comin in here?`);
          this.player.inventory.unshift(this.player.itemToAddToInventory);
          this.simulationNPCList[i].textNo = 1;
          this.player.tradeHappens = false;
        }

        if (this.simulationNPCList[i].tradeSucceeded === true) {
          console.log(`you're not sup to b here!`);
          this.simulationNPCList[i].textNo = 2;
        }

        // * // this is a text assigning machine // * //

        if (this.simulationNPCList[i].textNo === 0) { // when triggered npc text is index 0
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[0]}`
          );
        } else if (this.simulationNPCList[i].textNo === 1) { // when tirggered npc text index 1
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[1]}`
          );
          // this.player.inventory.shift();
          // console.log(`does pimpim come here?`);
          // let item = new Item(0, 0, `Big bone`); // this is problematic
          // this.player.inventory.push(item);
        } else if (this.simulationNPCList[i].textNo === 2) { // when trigerred npc text index 2
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[2]}`
          );
        }
        // and so on...

        // Display assigned text
        this.textBubble.display();
        this.textBubble.textIsUp = true;
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
        this.simulationItemList[i].display();
        // display game items ( ### can be used in inventory display, x y determined right before display)

        this.simulationItemList[i].playerCollisionCheck(
          // check for player collision with each item
          this.player.x,
          this.player.y,
          this.player.size
        );

        // Items shown on map vanish when player collides with them
        if (
          this.simulationItemList[i].playerColliding === true
        ) {
          console.log(`why you keep coming here?`);
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

        // items on map collided with get added to player INVENTORY... ###

          // Slingshot First Item Picked //
          if (
            this.player.itemPickingLevel === 0 &&
            this.simulationItemList[i].name === `Slingshot`
          ) {
            // if the item being picked is slingshot
            this.eventSwitch2 = 0; // initialize event switch
            this.eventSwitch2 = constrain(this.eventSwitch2, 0, 1); // switch can be 0 or 1
            if (this.eventSwitch2 === 0) {
              if (this.player.inventory[0] === `PlaceHolder`) { // remove place holder if you don'T already have the slingshot
                this.player.inventory.splice(0, 1);
              }
              this.player.inventory.push(this.simulationItemList[i]); // item is pushed in inventory
              this.textBubble = new TextBubble( // text is assigned to textbubble
                `You just picked up ${this.simulationItemList[i].name}`
              );
              this.textBubbleIsLoaded = true;
              this.simulationItemList[i].playerColliding = false;
                this.simulationItemList[i].isPicked = false; // that way I don't make a million
              this.player.itemPickingLevel = 1; // picking lvl 1 makes sure code goes to the end
              // then it will be turned to lvl 2 and new item exchanges and pickups will be possible
            }
          }
        }
      }
      // end of items on map section //

        // IS TRADED COMING UP
        // if item is picked or traded
        // to be added to player.INVENTORY

        // manage all items //
        if (
         this.simulationItemList[i].isPicked === true ||
          this.simulationItemList[i].isTraded === true
        ) {
        if (this.player.itemPickingLevel === 2) {
          // at picking lvl 2
          console.log(`been here pick lvl2 tool`);
          // if (this.simulationItemList[i].name === `Slingshot` || // if item added to inventory is
          // slingshot, wrench, or injunction, push them from the right side into array
          // Tools stay inside the inventory (Slingshot, Wrench, Injunctions)//
          if (
            this.simulationItemList[i].name === `Wrench` ||
            this.simulationItemList[i].name === `Injunction(s)`
          ) {
            this.player.inventory.push(this.simulationItemList[i]); // item is pushed in inventory
            this.textBubble = new TextBubble( // text is assigned to textbubble
              `You just picked up ${this.simulationItemList[i].name}`
            );
            this.simulationItemList[i].isPicked === false; // that way I don't make a million
          }
          else {
            // every other item is tradeable //
            //console.log(`been here pick lvl 2 tradeable`);
            this.player.inventory.unshift(this.simulationItemList[i]); // item is unshifted from the left in inventory
            // console.log(
            //   `you just unshifted an item ${this.simulationItemList[i].name} in inventory. inv lgt now ${this.player.inventory.length}`
            // );
            this.textBubble = new TextBubble( // text is assigned to textbubble
              `You just picked up ${this.simulationItemList[i].name}`
            );
            this.simulationItemList[i].isPicked === false; // that way I don't make a million
          }
        }
        if (this.player.itemPickingLevel === 1 && this.player.isPaused === false) {
          console.log(`how you get in here?`);
          this.player.itemPickingLevel = 2;
        }
    }
    this.eventSwitch2++;
    if (this.textBubbleIsLoaded === true) {
      this.textBubble.display();
      this.textBubble.textIsUp = true;
    } // CULPRIT!!! #####
}

    //this.eventSwitch = 0;

    this.player.display(); // display the player avatar
  }

  display() {
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`You have made it to debug state.`, width / 2, height / 2);
    pop();
  }

  keyPressed() {
    if (keyCode === RETURN) {
      this.player.displayInventory();
      console.log(`
        is player paused? ${this.player.isPaused}

        trade happens?? ${this.player.tradeHappens}`);
    }

  // this txtbubl stop? ${this.textBubble.stopTextBubble}

    if (keyCode === 32) {
      // When the player presses SPACEBAR
      console.log(`SPACE`);
      // for (let i = 0; i < this.simulationItemList.length; i++) {
      //   // check through the sim item list
      //   if (
      //     // if one of the items is labelled isPicked && the player is currently isPaused
      //     // which would mean there is a text bubble showing and an item the player has stepped on
      //     // has vanished from the map. Then item is placed in inventory and player is paused with text
      //     this.simulationItemList[i].isPicked === true &&
      //     this.player.isPaused === true
      //   ) {
          if (
            this.player.isPaused === true &&
            this.player.isCollided === true
          ) {
            this.textBubble.break(); // the text Bubble vanishes
            this.player.isPaused = false;
            this.player.isCollided = false;
          }

          // if (this.simulationNPCList[i].textNo === 2) {
          //   this.simulationNPCList[i].tradeSucceeded = true;
          // } // Might be pertinent for trades?? ##

      for (let i = 0; i < this.simulationNPCList.length; i++) {
        if (this.simulationNPCList[i].playerColliding === true) {
          this.simulationNPCList[i].isTriggered = true;
        }

        if (
          this.simulationNPCList[i].isTriggered === true &&
          this.player.isPaused === true
        ) {
          if (this.textBubble.textIsUp === true) {
            this.textBubble.break();
          }
          this.simulationNPCList[i].isTriggered = false;
          this.player.isPaused = false;
          this.simulationNPCList[i].playerColliding = false;
          if (this.simulationNPCList[i].textNo === 2) {
            this.simulationNPCList[i].tradeSucceeded = true;
          }
        }
      }
    }
  }
}
