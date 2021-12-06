class Wrench extends Item {
  constructor(){
    super();
    this.name = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.weight = undefined;
    this.image = undefined;
    this.isOnMap = false; // always false
    this.playerColliding = undefined;
  }
}
