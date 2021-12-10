class Lamotte extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 290;
    this.r = 135; // purple
    this.g = 40;
    this.b = 180;
    this.size = 25;
    this.name = `Street Person Lamotte`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 2; // the Big Bone INDEX in itemList
    this.desiredItem = `Ham`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Street Person Lamotte:
      Hey, what's about it? Could you find me
      something to eat, eh, on the off chance?`,
      `Street Person Lamotte:
      This ham for me?! *munch grmmbl munch ...burp*
      Hey now, hun, mind throwing this in the bin?`,
      `Street Person Lamotte:
      You're a wise little one, I can tell
      you've come here to set things right`,
    ];
  }

  display() {
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  //givePlayerInjunction(playerInventory) {}
}
