class StreetLightB extends NPC {
  constructor() {
    super();
    this.x = 230;
    this.y = 410;
    this.r = 255;
    this.g = 0;
    this.b = 255;
    this.size = 10;
    this.name = `StreetLightB`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = `Arrow Constellation`;
    this.desiredItem = `Wrench`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`...`,`Don't you see that copper down there?
    I wouldn't use my slingshot here if I were you`,`Dolly used the wrench on the streetLight`];
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
