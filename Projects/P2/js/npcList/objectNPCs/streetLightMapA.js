class StreetLightA extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 370;
    this.r = 0;
    this.g = 0;
    this.b = 255;
    this.size = 10;
    this.name = `LampostA`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = `Eagle Constellation`;
    this.desiredItem = `Key`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Dolly used the wrench on the lampost`];
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
    console.log(`1why you die?`)

    let d = dist(this.x, this.y, playerX, playerY);
    if (d < this.size / 2) {
      console.log(`2why you die?`)
      this.playerColliding = true;
    } else {
      this.playerColliding = false;
    }
  }
}
