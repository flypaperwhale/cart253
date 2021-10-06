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
  x:undefined,
  y:undefined,
  width:60,
  height:90,
  code:`P1`
};
let fir = {
  image:undefined,
  x:undefined,
  y:undefined,
  width:60,
  height:90,
  code:`F1`
};
let birch = {
  image:undefined,
  x:undefined,
  y:undefined,
  width:60,
  height:90,
  code:`B1`
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

  // display a fir (MAESTRO)
  push();
  imageMode(CENTER);
  image(fir.image,300,300,60,90);
  pop();

  if (isThereNewFir()){
    establishFirCode();
    createFir(fir.code);
  }


}


function isThereNewFir(){}
function establishFirCode(){}



// Functions for creating trees //
function createFir(fir.code){
  push();
  imageMode(CENTER);
  image(fir.image,fir.x,fir.y,fir.width,fir.height);
  pop();
}
function createBirch(birch.code){
  push();
  imageMode(CENTER);
  image(birch.image,birch.x,birch.y,birch.width,birch.height);
  pop();
}
function createPinetree(pinetree.code){
  push();
  imageMode(CENTER);
  image(pinetree.image,pinetree.x,pinetree.y,pinetree.width,pinetree.height);
  pop();
}
