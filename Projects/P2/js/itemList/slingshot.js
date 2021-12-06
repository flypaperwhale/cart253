class Slingshot extends Item {
  constructor(image){
    super();
    this.name = undefined;
    this.x = 450;
    this.y = 50;
    this.height = 30;
    this.weight = 30;
    this.image = image;
    this.isOnMap = true; // can be true or false
    this.playerColliding = undefined;
  }


display(){ // x,y for whether item is displayed on map or in inventory
  push();
  imageMode(CENTER);
  this.image(image, this.x, this.y, this.height, this.width); // hard numbers
  pop();
}

}
