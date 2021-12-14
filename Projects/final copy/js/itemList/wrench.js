class Wrench extends Item {
  constructor(image) {
    super();
    this.name = `Wrench`;
    this.x = undefined;
    this.y = undefined;
    this.width = 25;
    this.height = 35;
    this.image = image;
    this.isOnMap = false;
    this.map = undefined;
    this.playerColliding = undefined;
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }
}
