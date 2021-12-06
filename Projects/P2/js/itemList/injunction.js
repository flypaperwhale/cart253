class Injunction extends Item {
  constructor(){
    super();
    this.name = undefined;
    this.x = undefined;
    this.y = undefined;
    this.width = undefined;
    this.height = undefined;
    this.image = undefined;
    this.isOnMap = false; // always false
    this.playerColliding = undefined;
  }
}
