class EagleConstellation extends Item {
  constructor(image){
    super();
    this.name = `Eagle Constellation`;
    this.x = 400;
    this.y = 200;
    this.width = 30;
    this.height = 20;
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
