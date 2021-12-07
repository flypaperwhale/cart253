class Marv extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 170;
    this.r = 150; // beige
    this.g = 110;
    this.b = 90;
    this.size = 25;
    this.name = `Elder Marv`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = `Wrench`; // also holds the first Injunction
    this.desiredItem = `Frog`;
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
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  givePlayerInjunction(playerInventory) {}
}
