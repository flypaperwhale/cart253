class Player {
  // the player, controlled by up, down, left, right, space and return
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 20;
    this.speed = 3;
    this.alive = true;
    this.inventory = [];
    this.isCollided = false;
    this.isPaused = false;
    this.tradeHappens = false;
    this.itemToAddToInventory = undefined;
  }

  display() {
    push();
    fill(200, 0, 15);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    if (keyIsDown(UP_ARROW)) {
      this.vy = -this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  paused() {
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
      let checkedItem = this.inventory[i];
      // is checked item desired item?
    }
  }

  checkTrade(npcDesiredItem, npcHoldingItem) {
    // verifies what item npc desires
    // Go through Player inventory array
    // if item is in Player inv. array, item is removed from array and
    // Holding Item is pushed into the inventory array
    for (let i = 0; i < this.inventory.length; i++) {
      let checkedItem = this.inventory[i];
      if (checkedItem === npcDesiredItem) {
        //splice removeFromPlayerInventory(this.inventory[i])
        this.tradeHappens = true;
        this.itemToAddToInventory = npcHoldingItem;
      }
    }
  }

  addToPlayerInventory(item) {
    // pushes new items into the inventory array
  }

  removeFromPlayerInventory(item) {
    // removes an item from inventory, if item is traded or used.
  }
}
