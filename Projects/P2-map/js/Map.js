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

displayGreenGrass() {
  // draws a green rectangle as land where player can walk around
  push();
  noStroke();
  fill(20, 85, 45); // middle green
  rectMode(CENTER);
  rect(width / 2, height, 500, 1010); // displayed at bottom center
  pop();
}
}
