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
let hamImg;
let bigBoneImg;
let slingshotImg;
let frogConstellationImg;
let frogImg;
let wrenchImg;
let arrowConstellationImg;
let injunctionImg;
let keyImg;
let eagleConstellationImg;

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
  slingshotImg = loadImage("assets/images/items/slingshot1.png")
frogConstellationImg = loadImage("assets/images/items/frogConstellation.png") /// ###
  frogImg = loadImage("assets/images/items/frog2.png");
  wrenchImg = loadImage("assets/images/items/wrench.png");
arrowConstellationImg = loadImage("assets/images/items/arrowConstellation.png") /// ###
  injunctionImg = loadImage("assets/images/items/letters.png");
  keyImg = loadImage("assets/images/items/key.png"); //####
  eagleConstellationImg = loadImage("assets/images/items/eagleConstellation.png") /// ###


// NPC image files
  lampfootImg = loadImage("assets/images/npcs/lampFoot.png");
  garbageImg = loadImage("assets/images/npcs/garbage.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);

  itemImagesList.push(hamImg,bigBoneImg,slingshotImg,frogConstellationImg,frogImg,wrenchImg,
    arrowConstellationImg,injunctionImg,keyImg,eagleConstellationImg);
  state = new SimulationState(itemImagesList);
}


/**
Description of draw()
*/
function draw() {

  state.update();

}

function keyPressed() {
  state.keyPressed();
}

function mouseClicked() {
  state.mouseClicked();
}
