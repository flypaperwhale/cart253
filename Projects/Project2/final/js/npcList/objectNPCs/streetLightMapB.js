class StreetLightB extends NPC {
  constructor() {
    super();
    this.x = 225;
    this.y = 560;
    this.size = 10;
    this.name = `StreetLightB`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 6;
    this.desiredItem = `Wrench`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`...`,`Don't you see that copper down there?
    I wouldn't use my slingshot here if I were you`,`Dolly used the wrench on the streetLight`];
    this.map = `B`;
    this.flickerBulb = false; // switch true/false to activate lamp bulb flicker animation
    this.lightIsOn = false; // switch true/false that draws light a.-v. FX when true
    this.buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values
    // this.distPlayer = undefined;
    this.canBurst = false; // when true, player can burst the lamp's bulb

  }

  flickBulbOn() {
    // on cue flicks bulb on
    this.flickerBulb = true;
    console.log(`flickbulb never happens yet t/f? ${this.flickerBulb}`)
    // currentLampost.displayLampGlow(); // small yellow ellipse around lamp head
  }

  flickBulbOff() {
    // on cue flicks bulb off
    console.log(`yes bulb off?`);
    this.flickerBulb = false;
    console.log(`flickbulb never happens yet t/f? ${this.flickerBulb}`)

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
