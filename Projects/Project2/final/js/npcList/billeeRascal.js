class Billee extends NPC {
  constructor() {
    super();
    this.x = 80;
    this.y = 627;
    this.r = 215; // orange yellow
    this.g = 90;
    this.b = 60;
    this.size = 17;
    this.name = `Billee Rascal`;
    this.itemHeld = 2; // Slingshot index in item list
    this.desiredItem = `Big Bone`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
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
    // displays NPC specific image at the correct coordinates and colors
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }

  move() {
    // from https://pippinbarr.github.io/cc/1/topics/conditionals/conditionals.html
    this.x = this.x + this.speed;
    // If the npc is off the right side
    if (this.x > 110 || this.x < 40) {
      // Send it back to the left by making its speed negative
      this.speed = -this.speed;
    }
  }
}
