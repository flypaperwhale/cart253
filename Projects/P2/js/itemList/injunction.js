class Injunction extends Item {
  constructor(image){
    super();
    this.name = `Injunction(s)`;
    this.x = 400;
    this.y = 250;
    this.width = 45;
    this.height = 45;
    this.image = image;
    this.isOnMap = true; // always false
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
