/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

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
}


/**
Description of draw()
*/
function draw() {
  createCanvas(500,500);
  background(0);

  image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);

}
