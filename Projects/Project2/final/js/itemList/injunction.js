class Injunction extends Item {
  constructor(image){
    super();
    this.name = `City Injunction`;
    this.x = 400;
    this.y = 250;
    this.width = 45;
    this.height = 45;
    this.image = image;
    this.isOnMap = false; // always false
    this.map = undefined;
    this.playerColliding = undefined;
  }

  display() {
    // x,y for whether item is displayed on map or in inventory
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
}

}
