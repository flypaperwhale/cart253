"use strict";

let tree = {
  image: undefined,
  x:200,
  y:200,
  w:50,
  h:60,
  onFire:0,
}

let fire = {
  image: undefined,
  x:0,
  y:0,
  w:45,
  h:50,
  side:1, //or side 2
}

let cloud = {
  image: undefined,
  x:30,
  y:30,
  w:60,
  h:40,
}

let fireIMG1;
let fireIMG2;
let thunderSFX;

let onFire=0;

function preload() {
  tree.image = loadImage('assets/images/Fir2.png');

  fireIMG1 = loadImage('assets/images/fire1.png');
  fireIMG2 = loadImage('assets/images/fire2.png'); // <--- FLICKER

  cloud.image = loadImage('assets/images/cloud.png');

  thunderSFX = loadSound(`assets/sounds/THUND.WAV`);
}

function setup(){
  createCanvas(400,400);

}


function draw(){
  background(0);

  tree.x = width/2;
  tree.y = height/2;

  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  image(cloud.image,cloud.x,cloud.y,cloud.w,cloud.h);



  if (fire.side === 1){
    fire.image = fireIMG1;
  }
  else if (fire.side === 2){
    fire.image = fireIMG2;
  }

  if (onFire===1){
    displayFire();
  }

}

function displayFire(){
  image(fire.image,tree.x,tree.y,fire.w,fire.h);
}

function mousePressed(){
  onFire = 1;
}
