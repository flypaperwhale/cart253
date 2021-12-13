class StreetLightA extends NPC {
  constructor() {
    super();
    this.x = 258;
    this.y = 550;
    this.size = 10;
    this.name = `LampostA`;
    this.itemHeld = 9; // Eagle Constellation item list index
    this.desiredItem = `Key`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [`Dolly used the wrench on the lampost`];
    this.map = `A`;
    this.lightIsOn = false; // switch true/false that draws light a.-v. FX when true
  }

    displayLampGlow() { // displays circle of light around lamphead
      if (this.lightIsOn === false){
        //
      } else if (this.lightIsOn === true){
        push();
        noStroke();
        fill(210, 190, 0, 200); // light yellow and slightly transparent
        ellipseMode(CENTER);
        ellipse(this.x, this.y - 100, 100, 100);
        pop();
      }
    }

      turnOutLampGlow(){
this.lightIsOn = false;
      }

    display() {
      super.display();
    }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  flickBulb() { // happens when cued during the lightFlickSound in intro animation
if (this.flickerBulb === true) { // if flickerBulb is true show lamp glow
this.displayLampGlow(); // small yellow ellipse around lamp head
}
}
}
