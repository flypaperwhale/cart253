class StreetLightA extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 370;
    this.r = 0;
    this.g = 0;
    this.b = 255;
    this.size = 10;
    this.name = `LampostA`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 9;//eagle constellation
    this.desiredItem = `Key`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Dolly used the wrench on the lampost`];
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
