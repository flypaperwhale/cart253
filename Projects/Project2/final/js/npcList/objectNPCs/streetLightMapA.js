class StreetLightA extends NPC {
  constructor() {
    super();
    this.x = 258;
    this.y = 560;
    this.size = 10;
    this.name = `LampostA`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Dolly used the wrench on the lampost`];
    this.map = `A`;

  }


    display() {
      super.display();
    }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
