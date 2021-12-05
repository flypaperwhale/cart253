class Jade extends NPC {
  constructor() {
    this.x = undefined;
    this.y = undefined;
    this.size = undefined;
    this.name = undefined;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [];
  }
