class Item { //should receive image too
  constructor(x,y,name){
    this.x = x;
    this.y = y;
    this.size = 10;
    this.name = name;
    this.image = undefined;
    this.isOnMap = true;
    this.playerCollided = false;
  }

  display(){
    push();
    fill(170,170,190);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size);
    pop();
  }

  playerCollide(playerX,playerY){
    if (this.isOnMap === true){
      let d = dist(this.x, this.y, playerX, playerY);
      if (d< this.size/2){
        this.playerCollided = true;
        console.log(`it's true, you've collided!`);
      }
      else {
        this.playerCollided = false;
      }
    }
  }
}

  /*isPickedUp(){
      //check if Player is colliding. if they are, item is picked up
    }*/

// Items are to be set up in the main script
// When game is started, some every Item is created and stored somewhere
// Some are on the map and can be picked up by being walked on
// Other will be on NPCs and will be tradeable.
