class NPC { // 3-4 characters, the electricity box, the 3 lamp posts
  constructor(){
      this.x = -15; // loads undefined items out of screen
      this.y = -15; // ditto
      this.size = 20;
      this.name = `Bob`;
      this.image = undefined;
      this.holdingItem = `Big bone`;
      this.desiredItem = `Ham`;
      this.playerCollided = false;
      this.isClicked = false;
      this.textNo = 1; // i will create an array with the texts that will sort this out.
      this.tradeSucceeded = false;
  }

  display(){
   // displays NPC specific image at the correct coordinates
  }

  // MOVE function?
}
