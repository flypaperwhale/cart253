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
      if (d< this.size){
        this.playerCollided = true;
      }
      else {
        this.playerCollided = false;
      }
    }
  }
}
