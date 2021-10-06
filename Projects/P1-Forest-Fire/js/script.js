/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let bg = {
  color:{
    r:0,
    g:140,
    b:0,
  }
}

let pinetree = {
  image:undefined,
};
let fir = {
  image:undefined,
};
let birch = {
  image:undefined,
};


/**
Description of preload
*/
function preload() {
  pinetree.image = loadImage('assets/images/Pinetree.png');
  fir.image = loadImage('assets/images/Fir.png');
  birch.image = loadImage('assets/images/Birch.png');
}

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

}


/**
Description of draw()
*/
function draw() {
  // draw the background
  background(bg.color.r,bg.color.g,bg.color.b);
  image(fir.image,250,250,250,250);



}
