class Injunction extends Item {
  constructor(image){
    super();
    this.name = `City Injunction`;
    this.x = undefined;
    this.y = undefined;
    this.width = 45;
    this.height = 45;
    this.image = image;
    this.isOnMap = false;
    this.map = undefined;
    this.playerColliding = undefined;
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
}

}
