class StreetLightC extends NPC {
  constructor() {
    super();
    this.x = 378;
    this.y = 551;
    this.size = 10;
    this.name = `LampostC`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`The dog walker will get the copper if you shoot the light now`,`Dolly uses slingshot on the lampost`];
    this.map = `C`;

  }

  display() {
    // displays NPC specific image at the correct coordinates
    // push();
    // fill(this.r,this.g,this.b);
    // noStroke();
    // ellipseMode(CENTER);
    // ellipse(this.x, this.y, this.size);
    // pop();
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
