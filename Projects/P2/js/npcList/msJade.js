class Jade extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 250;
    this.r = 200; // yellow
    this.g = 200;
    this.b = 100;
    this.size = 25;
    this.name = `Ms. Jade`;
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
    super.display();
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
