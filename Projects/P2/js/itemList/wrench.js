class Wrench extends Item {
  constructor(image){
    super();
    this.name = `Wrench`;
    this.x = 400;
    this.y = 300;
    this.width = 25;
    this.height = 35;
    this.image = image;
    this.isOnMap = false; // always false
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
