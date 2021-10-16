/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let bg = {
  r:40,
  g:130,
  b:3,
}

let forest = [
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//A
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//B
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//C
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//D
  [` `,` `,` `,` `,`P`,` `,` `,` `,` `,` `],//E
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//F
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//G
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//H
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//I
  [` `,` `,` `,` `,` `,` `,` `,` `,` `,` `],//J
]

//let forest = [];

//let rows = 10;
//let cols = 10;

let cellUnit;

let pinetree = {
  image:undefined,
}

let cursor = {
  image:undefined,
  width:45,
  height:45,
}

/**
Description of preload
*/
function preload() {
  pinetree.image = loadImage('assets/images/Pinetree.png');
  //loadImage('assets/images/Pine-Sap.jpeg');
  //loadImage('assets/images/Torched-Pinetree.png');
  //fir.image = loadImage('assets/images/Fir.png');
  //birch.image = loadImage('assets/images/Birch.png');
  //cloud.image = loadImage('assets/images/cloud.png');
  //fire.image = loadImage('assets/images/fire.png');

  cursor.image = loadImage('assets/images/Godly-user.png');

}

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  noCursor();

  cellUnit = height / forest.length;

// Initialize the forest

/*
// USE THIS CODE TO INITIALIZE FOREST + CHECK CELLS
  for (let r = 0; r < rows; r++) {
    forest.push([]);
    for (let c = 0; c < cols; c++) {
      if (random() < 0.15) {
        forest[r][c] = `?`;
      } else {
        forest[r][c] = ` `;
      }
    }
  }

  cellUnit = height / forest.length;*/
}


/**
Description of draw()
*/
function draw() {

  background(bg.r,bg.g,bg.b);

  displayForest();

  image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);

};

function displayForest() {
    for (let y = 0; y < forest.length; y++) {
    let row = forest[y];
    for (let x = 0; x < forest[y].length; x++) {
      push();
      noFill();
      stroke(0);
      rect(x * cellUnit, y * cellUnit, cellUnit, cellUnit);
      pop();
      let cell = forest[y][x];
      if (cell === `P`) {
        drawGreenCircles(x, y);
      }
    }
  }
};

function drawGreenCircles(x, y) {
  push();
  noStroke();
  fill(100, 200, 100);
  ellipseMode(CORNER);
  ellipse(x * cellUnit, y * cellUnit, cellUnit);
  pop();
};
