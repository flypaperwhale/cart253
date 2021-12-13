class StreetLightC extends NPC {
  constructor(soundSwitch) {
    super();
    this.soundSwitch = soundSwitch;

    this.isALamp = true;

    this.x = 378;
    this.y = 551;
    this.size = 10;
    this.name = `LampostC`;
    //this.image = undefined; No they will be ellipses
    this.itemHeld = 3;
    this.desiredItem = `Slingshot`;
    this.playerColliding = false;
    this.isTriggered = false;
    //this.textNo = 0;
    this.tradeSucceeded = false;
    this.texts = [`The dog walker will get the copper if you shoot the light now`,`Dolly uses slingshot on the lampost`];
    this.map = `C`;
    this.flickerBulb = false; // switch true/false to activate lamp bulb flicker animation
    this.lightIsOn = false; // switch true/false that draws light a.-v. FX when true
    this.buzzVolume; // lamp buzz sound volume, to be mapped on playerDistLamp values
    // this.distPlayer = undefined;
    this.canBurst = false; // when true, player can burst the lamp's bulb

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
console.log(`flickbulb never happens yet t/f? ${this.flickerBulb}`)
if (this.flickerBulb === true) { // if flickerBulb is true show lamp glow
console.log(`but not flashing`)
this.displayLampGlow(); // small yellow ellipse around lamp head
  //   }

}
}

}
