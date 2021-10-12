"use strict";

// let forest = [
//   [`F`, ` `, ` `, ` `, `F`],
//   [` `, ` `, ` `, ` `, ` `],
//   [` `, ` `, ` `, ` `, ` `],
//   [`F`, `.`, ` `, ` `, ` `],
//   [` `, ` `, ` `, `F`, ` `],
// ];

let forest = [];
let rows = 5;
let cols = 5;

let unit;

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < rows; r++) {
    forest.push([]);
    for (let c = 0; c < cols; c++) {
      if (random() < 0.15) {
        forest[r][c] = `F`;
      } else {
        forest[r][c] = ` `;
      }
    }
  }

  unit = height / forest.length;
}

function draw() {
  background(200);

  displayForest();
}


function displayForest() {
  for (let y = 0; y < forest.length; y++) {
    let row = forest[y];
    for (let x = 0; x < forest[y].length; x++) {
      push();
      noFill();
      stroke(0);
      rect(x * unit, y * unit, unit, unit);
      pop();
      let cell = forest[y][x];
      if (cell === `F`) {
        drawFirTree(x, y);
      }
    }
  }
}

function drawFirTree(x, y) {
  push();
  noStroke();
  fill(100, 200, 100);
  ellipseMode(CORNER);
  ellipse(x * unit, y * unit, unit);
  pop();
}



//
