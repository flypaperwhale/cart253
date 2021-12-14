class Map {
  constructor() {}

  /**
Description of draw()
*/
  display() {
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
    fill(35, 45, 125);
    rectMode(CENTER);
    rect(width / 2, 0, 500, 200);
    pop();
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

  displayItem(item) { // displays items on map (only ham in this case)
    if (item === undefined) { // if ths item is undefined it is not displayed
    } else {
      push();
      imageMode(CENTER);
      image(item.image, item.x, item.y, item.width, item.height);
      pop();
    }
  }

  addWindow(x, y, w, h, onOff) {
    // method is called in maps to create windows
    push();
    if (onOff === 1) {
      // Light is on
      fill(225, 180, 100);
    } else if (onOff === 0) {
      // Light is off
      fill(50, 50, 70);
    }
    rectMode(CENTER);
    rect(x, y, w, h);
    pop();
  }

  addStar(x, y, s, starType) {
    // method is called in maps to create stars
    push();
    noStroke();
    if (starType === 1) {
      //flashing BLUISH Star
      this.r = random(50, 225);
      this.g = 225;
      this.b = 225;
      fill(this.r, this.g, this.b);
    } else if (starType === 0) {
      // Yellow star
      this.r = 225;
      this.g = 225;
      this.b = 50;
      fill(this.r, this.g, this.b);
    } else if (starType === 3) {
      //REDDISH Star
      this.r = 225;
      this.g = random(50, 200); //flashing red/white
      this.b = 50;
      fill(this.r, this.g, this.b);
    }
    ellipseMode(CENTER);
    ellipse(x, y, s);
    pop();
  }
}
