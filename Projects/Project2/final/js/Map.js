class Map {
  constructor(){
}

/**
Description of draw()
*/
display(){
  background(0);
  //sky
  displaySky(); // the blue sky rectangle covers the starry bg image
  //ground
  displayGreenGrass(); // display Green Grass

}

displaySky() {
  // displays sky blue rectangle
  push();
  noStroke();
  fill(35,45,125); // blue with alpha value linked to dayTimer
  rectMode(CENTER);
  rect(width / 2, 0, 500, 990);
  pop();
}

lightBuzzing(lamp,player) { // light buzzing sound FX
  if (lamp.lightIsOn === true) { // if lightIsOn is true
    push();
    lamp.lightBuzzNoise.playMode(`untilDone`); // buzz sound mode loop until done
    lamp.buzzVolume = map(player.DistLamp, 0, height - lampX, 0.1, 0);
    // buzz volume increases when player is closer to lamp and decreases when further
    lightBuzzNoise.setVolume(buzzVolume); //index ##
    this.panning = map(player.x, 0, width, 0.6, -0.6); // (pan code from p5 reference)
    lightBuzzNoise.pan(this.panning);
    lightBuzzNoise.rate(1.2); // sound a little bit higher pitched
    lightBuzzNoise.play(); // play the sound
    pop();
  }
}

displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(20, 85, 45); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 500, 1010); // displayed at bottom center
  pop();
}

addWindow(x,y,w,h,onOff){
  push();
  noStroke();
if (onOff === 1){ // Light is on
  fill(225,180,100);
}
else if (onOff === 0){ // Light is off
  fill(50,50,70);
  }
  rectMode(CENTER);
  rect(x, y, w, h);
  pop();
}

addStar(x,y,s,onOff){
  push();
  noStroke();
if (onOff === 1){ //
  this.r = random (50,225);
  this.g = 225;
  this.b = 225;
  fill(this.r,this.g,this.b); //flashing BLUISH Star
}
else if (onOff === 0){ //
    this.r = 225;
    this.g = 225;
    this.b = 50;
    fill(this.r,this.g,this.b); // Yellow star
  }
  else if (onOff === 3){ //REDDISH Star
      this.r = 225;
      this.g = random (50,200);
      this.b = 50;
      fill(this.r,this.g,this.b); //flashing red/white
    }
  ellipseMode(CENTER);
  ellipse(x, y, s);
  pop();
}

}
