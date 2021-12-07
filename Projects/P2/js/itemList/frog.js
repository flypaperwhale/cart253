class Frog extends Item {
  constructor(image){
    super();
    this.name = `Frog`;
    this.x = 400;
    this.y = 150;
    this.width = 30;
    this.height = 19;
    this.image = image;
    this.isOnMap = true; // can be true or false
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
