class Billee extends NPC {
  constructor() {
    super();
    this.x = 100;
    this.y = 500;
    this.r = 215; // orange yellow
    this.g = 90;
    this.b = 60;
    this.size = 17;
    this.name = `Billee Rascal`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = `Injunction`;
    this.desiredItem = `Injunction`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [
      `Bille Rascal:
      Jade! Jade! Why is she always on her cellphone?
      Hey you! Do YOU want to play hide and seek?`,
      `Bille Rascal:
      Look up! That constellation looks like a frog, doesn't it?`,
      `Bille Rascal:
      Sign me up!`,
    ];
    this.map = `C`;
    this.speed = 1; // this is unique to Billie, and few other animated npcs
  }

  display() {
    super.display();
    this.move();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  move() { // from https://pippinbarr.github.io/cc/1/topics/conditionals/conditionals.html
    this.x = this.x + this.speed;
    // If the npc is off the right side
    if (this.x > 250 || this.x < 150) {
      // Send it back to the left by making its speed negative
      this.speed = -this.speed;
    }
  }

//   givePlayerInjunction(playerInventory) {}
}
