class Player { // the player, controlled by up, down, left, right, and mouse click
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.inventory = [];
  }

  display(){
    push();
    fill(200,0,15);
    ellipseMode(CENTER);
    ellipse(this.x,this.y,20);
    pop();
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
