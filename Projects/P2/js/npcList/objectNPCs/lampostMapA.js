class LampostA extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 370;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.size = 10;
    this.name = `LampostA`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Mother takes me to the parc all the time!`, `Look up, doesn't that constellation look like a frog?`, `Sign me up!`];
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
