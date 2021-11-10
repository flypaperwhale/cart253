class Player { // the player, controlled by up, down, left, right, and mouse click
  constructor(x,y){
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

  display(){
    push();
    fill(200,0,15);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size);
    pop();
    // displays Player, and Player walking animation
  }

  handleInput() {
      if (keyIsDown(LEFT_ARROW)) {
        this.vx = -this.speed;
      }
      else if (keyIsDown(RIGHT_ARROW)) {
        this.vx = this.speed;
      }
      else {
        this.vx = 0;
      }

      if (keyIsDown(UP_ARROW)) {
        this.vy = -this.speed;
      }
      else if (keyIsDown(DOWN_ARROW)) {
        this.vy = this.speed;
      }
      else {
        this.vy = 0;
      }
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

  displayInventory(){
    for (let i=0; i<this.inventory.length; i++){
      console.log(`Item ${[i]} in inv. : ${this.inventory[i]}`);
    }
  }

  paused(){
    this.isPaused = true;
  }

  addToPlayerInventory(item){
    // pushes new items into the inventory array
  }

  checkPlayerInventory(){
    // looks through player inventory array. Is called when interacting with NPCs
    for (let i=0; i< this.inventory.length; i++){
      let checkedItem = this.inventory[i];
      console.log(`i is currently ${i} and item is ${checkedItem}`);
    }
  }

  checkTrade(npcDesiredItem, npcHoldingItem){
console.log(`making it to trade? what is DI ${npcDesiredItem} and HI ${npcHoldingItem}`);
    for (let i = 0; i< this.inventory.length; i++){
      let checkedItemName = this.inventory[i];
console.log(`${checkedItemName} + ${npcDesiredItem}`);
      if (checkedItemName === npcDesiredItem){
console.log(`why don't you come in here? ${this.tradeHappens}`);
        //splice
        this.tradeHappens = true;
        this.itemToAddToInventory = npcHoldingItem;
console.log(`so you did come in here? ${this.tradeHappens}`);
      }
    }
    // verifies what item npc desires
    // Go through Player inventory array
    // if item is in Player inv. array, item is removed from array and
    // Holding Item is pushed into the inventory array

  }

  removeFromPlayerInventory(item){
    // removes an item from inventory, if item is traded or used.
  }

}
