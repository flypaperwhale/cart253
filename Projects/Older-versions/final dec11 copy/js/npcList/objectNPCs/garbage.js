class Garbage extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 330;
    this.r = 255;
    this.g = 255;
    this.b = 0;
    this.size = 10;
    this.name = `Garbage`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 0;
    this.desiredItem = `Big Bone`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`The garbage bin is almost full`, `You throw out the Big Bone`, `...`];
  }

  display() {
    // displays NPC specific image at the correct coordinates
    push();
    fill(this.r,this.g,this.b);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  playerCollide(playerX, playerY) {
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < this.size / 2) {
      this.playerColliding = true;
    } else {
      this.playerColliding = false;
    }
  }
}
