class Janine extends NPC {
  constructor() {
    super();
    this.x = 329;
    this.y = 774;
    this.r = 85; // baby blue
    this.g = 100;
    this.b = 225;
    this.size = 25;
    this.name = `Copper Janine`;
    this.itemHeld = 7; // Injunction index in item list
    this.desiredItem = `Arrow Constellation`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [`Copper Janine:
      Enjoy the night, I'll be watching over you`];
      this.map = `B`;
  }

  display() {
    // displays NPC specific image at the correct coordinates and colors
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
