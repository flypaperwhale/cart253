class Item {
  constructor(){
    this.name = undefined;
    this.x = undefined;
    this.y = undefined;
    this.width = undefined;
    this.height = undefined;
    this.image = undefined;
    this.isOnMap = undefined; // can be true or false
    this.playerColliding = undefined;
  }


display(){
  push();
  imageMode(CENTER);
  image(this.image, this.x, this.y, this.width, this.height); // hard numbers
  pop();
}

playerCollisionCheck(playerX, playerY) {
  let d = dist(this.x, this.y, playerX, playerY);
  if (d < this.size / 2) {
    this.playerColliding = true;
  } else {
    this.playerColliding = false;
  }
}
}
