class Jade extends NPC {
  constructor() {
    super();
    this.x = 150;
    this.y = 622;
    this.r = 200; // yellow
    this.g = 200;
    this.b = 100;
    this.size = 20;
    this.name = `Ms. Jade`;
    this.itemHeld = 4; // Frog Index in ItemList
    this.desiredItem = `Frog Constellation`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [
      `Jade:
      Although we're best friends, I sometimes feel I
      have to look over Billee because I'm older`,
      `Jade:
      That constellation is supposed to look like a frog?
      to me, I see a mouse! Here's a Frog!!!`,
      `Jade:
      The more I look, I kind of see it.
      In any case, it's soo beautiful!`,
    ];
    this.map = `C`;
  }

  display() {
    // displays NPC specific image at the correct coordinates and colors
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }

  givePlayerInjunction(playerInventory) {}
}
