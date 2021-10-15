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

/**
Description of preload
*/
function preload() {
  pinetree.image = loadImage('assets/images/Pinetree.png');
  let imagep = loadImage('assets/images/Pine-Sap.jpeg');
  let imagePX = loadImage('assets/images/Torched-Pinetree.png');

  //fir.image = loadImage('assets/images/Fir.png');
  //birch.image = loadImage('assets/images/Birch.png');
  cloud.image = loadImage('assets/images/cloud.png');
  fire.image = loadImage('assets/images/fire.png');

  let cursor = loadImage('assets/images/Godly-user.png');

}



/**
Description of setup
*/
function setup() {

}


/**
Description of draw()
*/
function draw() {
createCanvas(500,500);
background(0);


}
