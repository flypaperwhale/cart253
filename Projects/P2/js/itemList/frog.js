class Frog extends Item {
  constructor(){
    super();
    this.name = undefined;
    this.x = undefined;
    this.y = undefined;
    this.width = undefined;
    this.height = undefined;
    this.image = undefined;
    this.isOnMap = undefined; // can be true or false
    this.playerColliding = undefined;
  }
}
