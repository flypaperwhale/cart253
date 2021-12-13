class Janine extends NPC {
  constructor(soundSwitch) {
    super();

    this.soundSwitch = soundSwitch;

    this.x = 329;
    this.y = 774;
    this.r = 85; // baby blue
    this.g = 100;
    this.b = 225;
    this.size = 25;
    this.name = `Copper Janine`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 7;
    this.desiredItem = `Arrow Constellation`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Copper Janine:
      Enjoy the night, I'll be watching over you`];
      this.map = `B`;
  }

  display() {
    // displays NPC specific image at the correct coordinates
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }
}
