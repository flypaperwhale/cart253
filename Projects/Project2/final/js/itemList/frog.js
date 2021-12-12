class Frog extends Item {
  constructor(image){
    super();
    this.name = `Frog`;
    this.x = 282;
    this.y = 740;
    this.width = 30;
    this.height = 19;
    this.image = image;
    this.isOnMap = false; // can be true when frog constellation is shown
    this.map = `A`;
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
