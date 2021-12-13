class ArrowConstellation extends Item {
  constructor(image) {
    super();
    this.name = `Arrow Constellation`;
    this.x = undefined;
    this.y = undefined;
    this.width = 30;
    this.height = 20;
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
