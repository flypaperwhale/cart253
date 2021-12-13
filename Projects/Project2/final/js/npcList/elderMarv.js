class Marv extends NPC {
  constructor() {
    super();
    this.x = 259;
    this.y = 567;
    this.r = 150; // beige
    this.g = 110;
    this.b = 90;
    this.size = 25;
    this.name = `Elder Marv`;
    this.itemHeld = 5; // Wrench index item list
    this.desiredItem = `Frog`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [
      `Elder Marv:
      Hey sprout, what are you up to? - The stars?
      reminds me of a constellation, I could tell you...`,
      `Elder Marv:
      You want to what? Turn out all the lights? Dolly,
      I'm inclined to help you. I'm just not sure... `,
      `Elder Marv:
      Yes, the frog, THAT IS my favorite constellation!
      Here, use this on the lantern, I'll cover you`,
      `Elder Marv:
      Take this notice to mayor. If you can collect 3 of these
      from other citizens, the city will comply to our demand!`,
      `Elder Marv:
      Good show sprout`,
    ];
    this.map = `B`;
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
