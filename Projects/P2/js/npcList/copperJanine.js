class Janine extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 90;
    this.r = 85; // baby blue
    this.g = 100;
    this.b = 225;
    this.size = 25;
    this.name = `Copper Janine`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Mother takes me to the parc all the time!`,
      `Look up, doesn't that constellation look like a frog?`,
      `Sign me up!`,
    ];
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
