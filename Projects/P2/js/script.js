/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state;

// Item image names
let hamImg;
let bigBoneImg;
let frogImg;
let wrenchImg;
let injunctionImg;

// NPC images
let streetlampImg;
let lampfootImg;
let garbageImg;


/**
Description of preload
*/
function preload() {
// Decor Items
  streetlampImg = loadImage("assets/images/decor/lamp.png");

// Items image files
  hamImg = loadImage("assets/images/items/ham.png");
  bigBoneImg = loadImage("assets/images/items/bigBone.png");
  frogImg = loadImage("assets/images/items/frog1.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
  injunctionImg = loadImage("assets/images/items/letters.png");

// NPC image files
  lampfootImg = loadImage("assets/images/npcs/lampFoot.png");
  garbageImg = loadImage("assets/images/npcs/garbage.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);

  state = new TitleState();
}


/**
Description of draw()
*/
function draw() {

  state.update();

}

function mouseClicked() {
  state.mouseClicked();
}
