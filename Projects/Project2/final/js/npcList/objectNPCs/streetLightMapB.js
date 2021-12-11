class StreetLightB extends NPC {
  constructor() {
    super();
    this.x = 225;
    this.y = 560;
    this.r = 255;
    this.g = 0;
    this.b = 255;
    this.size = 10;
    this.name = `StreetLightB`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = undefined;
    this.desiredItem = undefined;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`...`,`Don't you see that copper down there?
    I wouldn't use my slingshot here if I were you`,`Dolly used the wrench on the streetLight`];
    this.map = `B`;
    this.flickerBulb = false;
    this.lightIsOn = false;
    this.buzzVolume;
    this.distPlayer ;
    this.canBurst;

  }

  display() {
    // displays NPC specific image at the correct coordinates
    push();
    fill(this.r,this.g,this.b);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  // cueLightFlicks(lightFlickSound) {
  //   lightFlickSound.addCue(0.1, this.flickBulbOn);
  //   lightFlickSound.addCue(0.2, this.flickBulbOff);
  //   lightFlickSound.addCue(0.3, this.flickBulbOn);
  //   lightFlickSound.addCue(0.4, this.flickBulbOff);
  //   lightFlickSound.addCue(0.75, this.flickBulbOn);
  //   lightFlickSound.addCue(0.8, this.flickBulbOff);
  // }

  flickBulbOn() {
    // on cue flicks bulb on
    this.flickerBulb = true;
  }

  flickBulbOff() {
    // on cue flicks bulb off
    this.flickerBulb = false;
  }

  flickBulb() { // happens when cued during the lightFlickSound in intro animation
    if (this.flickerBulb) { // if flickerBulb is true show lamp glow
      this.displayLampGlow(); // small yellow ellipse around lamp head
    }
  }

  displayLampGlow() { // displays circle of light around lamphead
    push();
    noStroke();
    fill(200, 200, 0, 200); // light yellow and slightly transparent
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2 - 70, 100, 100);
    pop();
  }

  playerCollide(playerX, playerY) {
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < this.size / 2) {
      this.playerColliding = true;
    } else {
      this.playerColliding = false;
    }
  }

}
