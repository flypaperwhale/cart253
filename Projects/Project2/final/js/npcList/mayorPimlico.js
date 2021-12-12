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
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 8;
    this.desiredItem = `City Injunction`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `VOID`,
      `Mayor Pimlico:
      Hello, hello! Our banquet at City Hall tonight is
      NOT FOR KIDS. Have a ham scram kiddo`,
      `Mayor Pimlico:
      I'm not giving you any more food, we need to keep
      some for the investors...`,
      `Mayor Pimlico:
      I'm not looking at any papers tonight. Scram`,
    ];
    this.map = `A`;
  }

  display() {
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
