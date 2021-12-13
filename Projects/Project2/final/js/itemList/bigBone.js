class BigBone extends Item {
  constructor(image) {
    super();
    this.name = `Big Bone`;
    this.x = undefined;
    this.y = undefined;
    this.width = 25;
    this.height = 12;
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
