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
    this.itemHeld = 4; //Frog
    this.desiredItem = `Frog Constellation`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Jade:
      Although we're best friends, I sometimes feel I
      have to look over Billee because I'm older`,
      `Jade:
      That constellation doesn't look like a frog to me,
      I see a mouse!`,
      `Jade:
      Sign me up!`,
    ];
  }

  display() {
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  givePlayerInjunction(playerInventory){}
}
