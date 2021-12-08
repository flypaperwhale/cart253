class SimulationState extends State {
  constructor(itemImagesList) {
    super();

    this.player = new Player(300, 300); // TEMPORARILY UNDER ITEMS/NPCS TO USE INVENTORY FOR DEBUGGING

    this.simulationItemList = []; // array to manage items
    this.createItems(); // creating Items, to be found and exchanged

    this.simulationNPCList = [];
    this.createNPCs(); // creating NPCs and storing them in NPCList array

    this.eventSwitch = 0;
    this.textBubble = undefined;
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
    for (let i = 0; i < this.simulationNPCList.length; i++) { // Look through NPC List
      this.simulationNPCList[i].display(); // display every NPC
      this.simulationNPCList[i].playerCollisionCheck( //NPC/Player Collision check
        this.player.x,
        this.player.y,
        this.player.size
      );

      if (this.simulationNPCList[i].isTriggered === true) {
        // if when player is colliding with npc player also presses spacebar
        this.player.paused(); // player avatar movement becomes paused
        // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
        // same holdingItem is temp the clicked npc's holding item
        let desiredItem = this.simulationNPCList[i].desiredItem; // clicked npc values temporarily stored in simulation
        let holdingItem = this.simulationNPCList[i].itemHeld;

        this.player.checkTrade(desiredItem, holdingItem);
        // using temporarily stored values inputed in player file
        // the a match between the npc's desiredItem and an item found in player's inventory array
        // if there is a match, the npc's holdingItem label is stored in ...
        // in simulation the item corresponding to the acquired item label is created
        // and stored in the player.inventory

        // this is a text assigning machine //
        if (this.simulationNPCList[i].textNo === 0) {
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[0]}`
          );
        } else if (this.simulationNPCList[i].textNo === 1) {
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[1]}`
          );
          this.player.inventory.shift();
          let item = new Item(0, 0, `Big bone`); // this is problematic
          this.player.inventory.push(item);
        } else if (this.simulationNPCList[i].textNo === 2) {
          this.textBubble = new TextBubble(
            `${this.simulationNPCList[i].texts[2]}`
          );
        }

        if (this.player.tradeHappens === true) {
          this.simulationNPCList[i].textNo = 1;
          this.player.tradeHappens = false;
        }
        if (this.simulationNPCList[i].tradeSucceeded === true) {
          this.simulationNPCList[i].textNo = 2;
        }
// Display assigned text
        this.textBubble.display();
      }
    }

    for (let i = 0; i < this.simulationItemList.length; i++) {
      // look through the inventory
      this.simulationItemList[i].display();
      // display inventory items (can be used in inventory display, x y determined right before display)
      this.simulationItemList[i].playerCollisionCheck(
        this.player.x,
        this.player.y,
        this.player.size
      );
      // check for player collision with each item

// Player collision with items //
      if (this.simulationItemList[i].playerColliding === true) {
        // if the player has collided with an item
        this.simulationItemList[i].isPicked = true;
        this.simulationItemList[i].isOnMap = false; // item is declared off of the map
        if (this.simulationItemList[i].isOnMap === false) {
        // when item is declared off of the map
          this.simulationItemList[i].x = undefined; // item x coordinate becomes undefined,
          // vanishing item
        }

      //  this.eventSwitch = constrain(this.eventSwitch, 0, 1); // switch can be 0 or 1
      //  if (this.eventSwitch === 0) { // when switch is initialized (at 0)
          this.player.inventory.push(this.simulationItemList[i]); // item is pushed in inventory
          console.log(
            `you just pushed an item ${this.simulationItemList[i].name} in inventory. inv lgt now ${this.player.inventory.length}`
          );
          this.textBubble = new TextBubble( // text is assigned to textbubble
            `You just picked up ${this.player.inventory[0].name}`
          );
          this.textBubble.display();
          this.player.paused(); // this collision causes the game to pause
        }
      //  this.eventSwitch++;

      }
    

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
    }

    if (keyCode === 32) {
      console.log(`SPACE`);
      for (let i = 0; i < this.simulationItemList.length; i++){
        if (this.simulationItemList[i].isPicked === true && this.player.isPaused === true){
          this.textBubble.break();
          this.simulationNPCList[i].isTriggered = false;
          this.player.isPaused = false;
          this.simulationNPCList[i].playerColliding = false;
          if (this.simulationNPCList[i].textNo === 2) {
            this.simulationNPCList[i].tradeSucceeded = true;
          }
        }
      }

      for (let i = 0; i < this.simulationNPCList.length; i++) {
        if (this.simulationNPCList[i].playerColliding === true) {
          this.simulationNPCList[i].isTriggered = true;
        }

        if (this.simulationNPCList[i].isTriggered === true && this.player.isPaused === true){
          this.textBubble.break();
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
