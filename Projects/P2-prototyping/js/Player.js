class Player { // the player, controlled by up, down, left, right, and mouse click
  constructor(){
    x = undefined;
    y = undefined;
    vx = undefined;
    vy = undefined;
    speed = undefined;
  }

  display(){
    // displays Player, and Player walking animation
  }

  addToPlayerInventory(item){
    // pushes new items into the inventory array
  }

  checkPlayerInventory(){
    // looks through player inventory array. Is called when interacting with NPCs
  }

  removeFromPlayerInventory(item){
    // removes an item from inventory, if item is traded or used.
  }

}
