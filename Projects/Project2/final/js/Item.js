class Item {
  constructor(){
    this.name = undefined;
    this.x = undefined;
    this.y = undefined;
    this.width = undefined;
    this.height = undefined;
    this.image = undefined;
    this.isOnMap = undefined; // can be true or false
    this.playerColliding = undefined; // true/false
    this.isPicked = undefined; // true/false
  }

display(){ // this method is called by maps in simulationState
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height);
  pop();
}

playerCollisionCheck(playerX, playerY, playerSize) { // check if player is colliding
// with an item

  let d = dist(this.x, this.y, playerX, playerY);
  if (d < this.width / 2) {
    this.playerColliding = true;
  } else {
    this.playerColliding = false;
  }
}
}
