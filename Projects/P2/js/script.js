/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state;

let itemImagesList = []; // array to manage images in the simulation
// Item image names
let slingshotImg
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
  slingshotImg = loadImage("assets/images/items/slingshot2.png")
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

  itemImagesList.push(slingshotImg,hamImg,bigBoneImg,frogImg,wrenchImg,injunctionImg)
  state = new SimulationState(itemImagesList);
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
