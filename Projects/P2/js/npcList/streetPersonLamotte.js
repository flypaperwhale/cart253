class Lamotte extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 290;
    this.r = 135; // purple
    this.g = 40;
    this.b = 180;
    this.size = 25;
    this.name = `Street Person Lamotte`;
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
