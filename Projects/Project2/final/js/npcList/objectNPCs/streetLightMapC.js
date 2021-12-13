class StreetLightC extends NPC {
  constructor() {
    super();
    this.x = 378;
    this.y = 551;
    this.size = 10;
    this.name = `LampostC`;
    this.itemHeld = 3; // Frog Constellation Item list index
    this.desiredItem = `Slingshot`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [`The dog walker will get the copper if you shoot the light now`,`Dolly uses slingshot on the lampost`];
    this.map = `C`;
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
