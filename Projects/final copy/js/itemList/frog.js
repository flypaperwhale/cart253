class Frog extends Item {
  constructor(image) {
    super();
    this.name = `Frog`;
    this.x = undefined;
    this.y = undefined;
    this.width = 30;
    this.height = 19;
    this.image = image;
    this.isOnMap = false;
    this.map = `A`;
    this.playerColliding = undefined;
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }
}
