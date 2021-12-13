class Pimlico extends NPC {
  constructor() {
    super();
    this.x = 356;
    this.y = 734;
    this.r = 255; // pink
    this.g = 75;
    this.b = 175;
    this.size = 32;
    this.name = `Mayor Pimlico`;
    this.itemHeld = 8; // Key Index in ItemList
    this.desiredItem = `City Injunction`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [
      `Mayor Pimlico:
      Hello, hello! Our investors' banquet at City Hall
      tonight is ADULTS ONLY. Have a ham scram kiddo`,
      `Mayor Pimlico:
      I don't have time to look at papers tonight -
      an Injunction!? Just...- go on now, get on with it!`,
      `Mayor Pimlico:
      You put up quite a show tonight little Dolly.
      What you did even impressed the investors!`,
    ];
    this.map = `A`;
  }

  display() {
    // displays NPC specific image at the correct coordinates and colors
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }
}
