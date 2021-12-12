class StreetLightB extends NPC {
  constructor(flickerBulb) {
    super();
    this.flickerBulb = flickerBulb; // switch true/false to activate lamp bulb flicker animation
    // this variable is controlled by SCRIPT
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


    this.lightIsOn = false; // switch true/false that draws light a.-v. FX when true
    this.buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values
    // this.distPlayer = undefined;
    this.canBurst = false; // when true, player can burst the lamp's bulb

  }

displayAnimation(){
  if (this.flickerBulb === false){
  //
  this.lightIsOn = false;
  }
  else if (flickerBulb === true){
    this.lightIsOn = true;
    this.displayLampGlow();
  }
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
    }}


          turnOutLampGlow(){
    this.lightIsOn = false;
          }

    display() {
      super.display();
    }

  playerCollisionCheck(playerX,playerY,playerSize) {
    super.playerCollisionCheck(playerX,playerY,playerSize);
  }

  flickBulb() { // happens when cued during the lightFlickSound in intro animation // currently disfunctional
if (this.flickerBulb === true) { // if flickerBulb is true show lamp glow
this.displayLampGlow(); // small yellow ellipse around lamp head
  //   }

}
}
}
