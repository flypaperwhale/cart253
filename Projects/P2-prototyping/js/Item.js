class Item { //should receive image too
  constructor(x,y,name){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.name = name;
    this.image = undefined;
  }

  display(){
    push();
    fill(170,170,190);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size);
    pop();
  }

}
  /*isPickedUp(){
      //check if Player is colliding. if they are, item is picked up
    }*/

// Items are to be set up in the main script
// When game is started, some every Item is created and stored somewhere
// Some are on the map and can be picked up by being walked on
// Other will be on NPCs and will be tradeable.
