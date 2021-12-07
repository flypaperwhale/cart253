class Sheperd extends NPC {
  constructor() {
    super();
    this.x = 200;
    this.y = 130;
    this.r = 50; // teal
    this.g = 150;
    this.b = 130;
    this.size = 25;
    this.name = `Dogwalker Sheperd`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = `Injunction`;
    this.desiredItem = `Injunction`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Mother takes me to the parc all the time!`,
      `Look up, doesn't that constellation look like a frog?`,
      `Sign me up!`,
    ];
    this.doggyX = 222;
    this.doggyY = 137;
    this.doggySize = 12;
  }

  display() {
    super.display();
    push();
    fill(this.r,this.g,this.b);
    ellipse(this.doggyX,this.doggyY,this.doggySize);
    pop();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  givePlayerInjunction(playerInventory){

  }
}
