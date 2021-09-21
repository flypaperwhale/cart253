/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 400;
let circleSpeed = 2;
let circleAcceleration = .01;

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
}


/**
Description of draw()
*/
function draw() {
    let randomNumber = random(-5,5);
    background(backgroundShade);
    ellipseMode(CENTER);
    fill(mouseX*7, mouseY, mouseX/.5);
    circleX=circleX+circleSpeed;
    circleSpeed = circleSpeed + randomNumber;
    ellipse(circleX,circleY,circleSize);
    circleSize=circleSize+2.5;
    fill(mouseX*7, mouseY, mouseX/.5);
    ellipse(circleX, circleY, mouseY);
    circleSize=circleSize/1.01;
    fill(mouseX*7, mouseY, mouseX/.5);
    ellipse(circleX-4000,circleY,circleSize)


    //console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSpeed: ${circleSpeed}`);

    console.log(`randomNumber: ${randomNumber}`);
  }
