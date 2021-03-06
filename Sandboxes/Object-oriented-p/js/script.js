/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let garden = {
  flowers: [],
  numFlowers:20,

  bees: [],
  numBees: 7,

  grassColor:{
    r:120,
    g:180,
    b:120,
  }
};


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

  for (let i=0; i < garden.numFlowers; i++){
    let x= random(0,width);
    let y= random(0,height);
    let size = random(50,80);
    let stemLength = random(50,100);
    let petalColor = {
      r: random(100,255),
      g: random(100,255),
      b: random(100,255),
    };
    let flower = new Flower(x, y, size, stemLength, petalColor);
    garden.flowers.push(flower);
  }

  for (let i=0; i<garden.numBees; i++){
    let bee = new Bee(random(0,width), random(0,height));
    garden.bees.push(bee);
  }
}

/**
Description of draw()
*/
function draw() {
  background(garden.grassColor.r,garden.grassColor.g,garden.grassColor.b);

  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    if(flower.alive){
      flower.display();
      flower.shrink();
    }
  }
  for (let i = 0; i < garden.bees.length; i++){
    let bee = garden.bees[i];
    if(bee.alive){
      bee.display();
      bee.move();
      bee.shrink();
      for (let f = 0; f < garden.flowers.length; f++){
        let flower = garden.flowers[f];
        if (flower.alive){
          bee.tryToPolinate(flower);
        }
      }
    }
  }
}

function mousePressed() {
  for (let i = 0; i < garden.flowers.length; i++){
    let flower = garden.flowers[i];
    flower.mousePressed();
  }
}
