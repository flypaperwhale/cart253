class Sheperd extends NPC {
  constructor() {
    super();
    this.x = 425;
    this.y = 762;
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
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Sheperd:
      Walking the dog to take a moment
      away from the worries of the day`,
      `Sheperd:
      Timsy dragged me to here, it looks like
      she's found herself a bone`,
      `Sheperd:
      Sign me up!`,
    ];
    this.map = `C`;
    this.doggyX = 400;
    this.doggyY = 772;
    this.doggyW = 17;
    this.doggyH = 12;
  }

  display() {
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  showDoggy() {
    // displays NPC specific ellipse (colors, size) at the correct coordinates
    push();
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.doggyX,this.doggyY,this.doggyW, this.doggyH);
    pop();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  givePlayerInjunction(playerInventory){

  }
}
