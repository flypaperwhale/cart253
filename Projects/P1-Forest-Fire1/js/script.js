/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let forest = [];
let rows = 5;
let cols = 5;

let unit;

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
  noCursor();

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


/**
Description of draw()
*/
function draw() {
  createCanvas(500,500);
  background(0);

  image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);

}
