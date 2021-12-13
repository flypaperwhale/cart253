class NPC {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.r = undefined;
    this.g = undefined;
    this.b = undefined;
    this.size = undefined;
    this.name = undefined;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [];
    this.map = undefined;
  }

  display() {
    // displays NPC specific ellipse (colors, size) at the correct coordinates
    push();
    fill(this.r,this.g,this.b);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < (this.size + playerSize ) / 2) {
      //console.log(`player collision with ${this.name}`)
      this.playerColliding = true;
    } else {
      this.playerColliding = false;
    }
  }

}
