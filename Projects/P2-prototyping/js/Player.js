class Player { // the player, controlled by up, down, left, right, and mouse click
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.size = 20;
    this.speed = 5;
    this.alive = true;
    this.inventory = [];
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
