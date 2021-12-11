class StreetLightC extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 450;
    this.r = 255;
    this.g = 100;
    this.b = 100;
    this.size = 10;
    this.name = `LampostC`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 3;//frog constellation
    this.desiredItem = `Slingshot`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`The dog walker will get the copper if you shoot the light now`,`Dolly uses slingshot on the lampost`];
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
