class StreetLightB extends NPC {
  constructor() {
    super();
    this.x = 225;
    this.y = 560;
    this.size = 10;
    this.name = `StreetLightB`;
    this.itemHeld = 6; // Arrow CONSTELLATION Item list index
    this.desiredItem = `Wrench`;
    this.playerColliding = false;
    this.isTriggered = false;
    this.tradeSucceeded = false;
    this.textNo = 0;
    this.texts = [
      `Don't act out now, there's a copper
      watching us down there`,
      `Dolly used the wrench on the street light`,
      `Look above, the Arrow Constellation...
      Must move along, convince others`,
    ];
    this.map = `B`;
    this.lightIsOn = false; // switch true/false that draws light a.-v. FX when true
  }

  flickBulbOn() {
    // on cue flicks bulb on
    this.flickerBulb = true;
    console.log(`Bulb flicks on!`);
  }

  flickBulbOff() {
    // on cue flicks bulb off
    console.log(`Bulb flicks off!`);
    this.flickerBulb = false;
  }

  displayLampGlow() {
    // displays circle of light around lamphead
    if (this.lightIsOn === false) {
      //
    } else if (this.lightIsOn === true) {
      push();
      noStroke();
      fill(210, 190, 0, 200); // light yellow and slightly transparent
      ellipseMode(CENTER);
      ellipse(this.x, this.y - 100, 100, 100);
      pop();
    }
  }

  turnOutLampGlow() {
    this.lightIsOn = false;
  }

  display() {
    super.display();
  }

  playerCollisionCheck(playerX, playerY, playerSize) {
    super.playerCollisionCheck(playerX, playerY, playerSize);
  }

  flickBulb() {
    // happens when cued during the lightFlickSound in intro animation // currently disfunctional
    if (this.flickerBulb === true) {
      // if flickerBulb is true show lamp glow
      this.displayLampGlow(); // small yellow ellipse around lamp head
    }
  }
}
