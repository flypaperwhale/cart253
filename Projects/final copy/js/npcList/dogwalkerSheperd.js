class Sheperd extends NPC {
  constructor() {
    super();
    this.x = 425;
    this.y = 762;
    this.r = 50; // teal
    this.g = 150;
    this.b = 130;
    this.size = 25;
    this.name = `Dogwalker Sheperd`;
    this.itemHeld = undefined; // no item, Sheperd is a red herring
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [
      `Sheperd:
      Walking the dog to take a moment
      away from the worries of the day`,
    ];
    this.map = `C`;
    this.doggyX = 403;
    this.doggyY = 772.5;
    this.doggyW = 17;
    this.doggyH = 12;
  }

  display() {
    // displays NPC specific image at the correct coordinates and colors
    super.display();
  }

  showDoggy() {
    // displays doggy specific ellipse (colors, size) at the correct coordinates
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.doggyX, this.doggyY, this.doggyW, this.doggyH);
    pop();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }
}
