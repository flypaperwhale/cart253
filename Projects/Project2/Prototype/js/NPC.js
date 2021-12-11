class NPC { // 3-4 characters, the electricity box, the 3 lamp posts
  constructor(){
      this.x = -15; // loads undefined items out of screen
      this.y = -15; // ditto
      this.size = undefined;
      this.name = undefined;
      this.image = undefined;
      this.holdingItem = undefined;
      this.desiredItem = undefined;
      this.playerCollided = false;
      this.isClicked = false;
      this.textNo = 0; // i will create an array with the texts that will sort this out.
      this.tradeSucceeded = false;
  }

  display(){
   // displays NPC specific image at the correct coordinates
   push();
   fill(0, 200, 15);
   noStroke();
   ellipseMode(CENTER);
   ellipse(this.x, this.y, this.size);
   pop();
  }

  // MOVE function?
}
