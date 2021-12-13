class Ham extends Item {
  constructor(image){
    super();
    this.name = `Ham`;
    this.x = 288;
    this.y = 740;
    this.width = 30;
    this.height = 20;
    this.image = image;
    this.isOnMap = true; 
    this.map = `A`;
    this.playerColliding = undefined;
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
}

}
