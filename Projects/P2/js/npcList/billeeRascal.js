class Billee extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 50;
    this.r = 215 // orange yellow
    this.g = 90;
    this.b = 60;
    this.size = 20;
    this.name = `Billee Rascal`;
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
