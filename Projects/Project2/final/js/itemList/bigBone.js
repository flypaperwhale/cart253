class BigBone extends Item {
  constructor(image){
    super();
    this.name = `Big Bone`;
    this.x = 400;
    this.y = 100;
    this.width = 25;
    this.height = 12;
    this.image = image;
    this.isOnMap = false; // can be true when garbage is triggered!
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
