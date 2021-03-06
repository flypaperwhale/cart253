class Player {
  // the player, controlled by up, down, left, right, space and return
  constructor(x, y) {
    this.x = x; // player starting x
    this.y = y; // player starting y
    this.vx = 0; // handled by pause or ad/arrow keys
    this.vy = 0; // handled by pause or ws/arrow keys
    this.size = 20;
    this.speed = 2.5;
    this.alive = true; // always alive
    this.inventory = [`PlaceHolder`];
    this.isCollided = false; // switch true when player is in collision with npc or item
    this.isPaused = false; // player pause state switch
    this.tradeHappens = false; // player/NPC item trade switch
    this.itemToAddToInventory = undefined; // item label to create item and push in inventory ###
    this.itemPickingLevel = 0; // 0 = false,1 = true, 3 =void
  }

  // constrain(height, width) {
  //   // constrain player to the ground
  //   this.x = constrain(this.x, 0, width);
  //   this.y = constrain(this.y, 452, height);
  // }

  display() {
    // display player
    push();
    fill(200, 0, 15);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  handleInput() {
    // handle keys for moving player avatar (code from https://github.com/pippinbarr/cc/tree/main/1/activities/inheritance-activity)

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  move() {
    // move player

    this.x += this.vx;
    this.y += this.vy;
  }

  paused() {
    // pause player turns isPaused switch to true
    this.isPaused = true;
  }

  displayInventory() {
    // for (let i = 0; i < this.inventory.length; i++) {
    //   console.log(`Item ${[i]} in inv. : ${this.inventory[i]}`);
    // }
    console.log(this.inventory);
  }

  checkPlayerInventory(npcDesiredItem) {
    // looks through player inventory array. Is called when interacting with NPCs
    for (let i = 0; i < this.inventory.length; i++) {
      this.checkedItem = this.inventory[i];
      // is checked item desired item?
    }
  }

  checkTrade(npc, npcDesiredItem, npcHoldingItem) {
    // verifies what item npc desires
    // Go through Player inventory array
    // if item is in Player inv. array, item is removed from array and
    // Holding Item is pushed into the inventory array
    for (let i = 0; i < this.inventory.length; i++) {
      //console.log(`current item checked in inventory ${this.inventory[i].name}
        //and npcdesires ${npcDesiredItem}`);
      this.checkedItem = this.inventory[i];
      //console.log(`repeat item checked in inventory ${this.checkedItem.name}`);

//console.log(`thischeckeditemname is and npcdesire ${this.checkedItem.name} ${npcDesiredItem}`);
if (this.checkedItem.name === undefined){
  // do nothing
}
      else if (this.checkedItem.name === npcDesiredItem) { // && undefined !== undefined I put undefineds so Pimlico would not come in here

        //this.methodSwitch=1;
        //if (this.methodSwtich === 1){
          console.log(`we're not coming here anymore`)

        //splice removeFromPlayerInventory(this.inventory[i])
        this.tradeHappens = true;
        this.itemToAddToInventory = npcHoldingItem;
        console.log(`${npcHoldingItem}`);

        //this.methodSwitch =0;
      //}
    }
  }
}

  addToPlayerInventory(item) {
    // pushes new items into the inventory array
  }

  removeFromPlayerInventory(item) {
    // removes an item from inventory, if item is traded or used.
  }

  checkForKey(){
      for (let i = 0; i < this.inventory.length; i++) {
        if (this.inventory[i].name === `Key`){
          //CITY HALL BARRIER DISAPPEARS
        }
  }
}
}
