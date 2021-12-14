class Slingshot extends Item {
  constructor(image) {
    super();
    this.name = `Slingshot`;
    this.x = undefined;
    this.y = undefined;
    this.width = 30;
    this.height = 30;
    this.image = image;
    this.isOnMap = true;
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
