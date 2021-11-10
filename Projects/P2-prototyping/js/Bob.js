class Bob extends NPC { // 3-4 characters, the electricity box, the 3 lamp posts
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.size = 20;
    this.name = `Bob`;
    this.image = undefined;
    this.npcHoldingItem = `Big bone`;
    this.npcdesiredItem = `Ham`;
    this.playerCollided = false;
    this.isClicked = false;
  }

  display(){
   // displays NPC specific image at the correct coordinates
   push();
   fill(0,200,15);
   noStroke();
   ellipseMode(CENTER);
   ellipse(this.x,this.y,this.size);
   pop();
  }

  // MOVE function?

  playerCollide(playerX,playerY){
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < this.size/2){
        this.playerCollided = true;
        console.log(`it's true, you've collided NPC!`);
      }
      else {
        this.playerCollided = false;
      }
    }

  mouseClicked(){
    // conditional, if Player is colliding with NPC
    playerInteractWithNPC();
  }

  playerInteractWithNPC(){
    displayText(`Hi, my name is ${this.name}`);
    // has NPC text displayed
    // if Player has the item the NPC wants, a trade will take place
    checkTrade();
  }

  displayText(text){
    text(text,150,150);
  }

  checkTrade(){
    // verifies what item npc desires
    // Go through Player inventory array
    // if item is in Player inv. array, item is removed from array and
    // Holding Item is pushed into the inventory array

  }
}
