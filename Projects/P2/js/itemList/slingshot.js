class Slingshot extends Item {
  constructor(image) {
    super();
    this.name = undefined;
    this.x = 400;
    this.y = 50;
    this.width = 30;
    this.height = 30;
    this.image = image;
    this.isOnMap = true; // can be true or false
    this.playerColliding = undefined;
  }

  display() {
    // x,y for whether item is displayed on map or in inventory
    super.display();
  }

  playerCollisionCheck() {
    super.playerCollisionCheck();
}

}
