class Garbage extends NPC { // This class is currently a place holder...
  constructor() {
    super();
    this.x = 200;
    this.y = 330;
    this.r = 255;
    this.g = 255;
    this.b = 0;
    this.size = 10;
    this.name = `Garbage`;
    this.itemHeld = 0;
    this.desiredItem = `Big Bone`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.texts = [`The garbage bin is almost full`, `You throw out the Big Bone`, `...`];
  }

  display() {
    // displays NPC specific image at the correct coordinates, with correct colors
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
