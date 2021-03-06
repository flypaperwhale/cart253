class StreetLightA extends NPC {
  constructor() {
    super();
    this.x = 258;
    this.y = 560;
    this.size = 10;
    this.name = `LampostA`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`Dolly used the wrench on the lampost`];
    this.map = `A`;
    this.flickerBulb = false; // switch true/false to activate lamp bulb flicker animation
    this.lightIsOn = true; // switch true/false that draws light a.-v. FX when true
    this.buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values
    // this.distPlayer = undefined;
    this.canBurst = false; // when true, player can burst the lamp's bulb

  }


    displayLampGlow() { // displays circle of light around lamphead
        push();
        noStroke();
        fill(200, 200, 0, 200); // light yellow and slightly transparent
        ellipseMode(CENTER);
        ellipse(this.x, this.y - 100, 100, 100);
        pop();
      }

    display() {
      super.display();
    }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  flickBulb() { // happens when cued during the lightFlickSound in intro animation
console.log(`flickbulb never happens yet t/f? ${this.flickerBulb}`)
if (this.flickerBulb === true) { // if flickerBulb is true show lamp glow
console.log(`but not flashing`)
this.displayLampGlow(); // small yellow ellipse around lamp head
  //   }

}
}
}
