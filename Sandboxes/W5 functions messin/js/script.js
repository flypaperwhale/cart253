/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(140,175,240);

  //displayWhiteEllipse ();

  parallels(100,250,255,0,0,10, 2,50,10);
  let xp2 = 50;
  let yp2 = 250;
  parallels(xp2,yp2,0, 0, 0, 15, 2, 70,20);
  let xp3 = random(0, width);
  let yp3 = random(0,height);
  parallels(xp3,yp3,0,255,127,20, 2, 300,.5);

  textAlign(CENTER,CENTER)
  textSize(20);
  textStyle(BOLD);
  textStyle(ITALIC);
  stroke(50,50,50);
  strokeWeight(5);
  text(`hello world!`, width/2,height/2);
}

function displayWhiteEllipse(){
  ellipseMode(CENTER);
  ellipse(width/2, height/2, width);
}

function parallels(x,y,r,g,b,numLines, lineW,lineH, lineS){
  for (let i=0;i<numLines;i++){
    noStroke();
    fill(r,g,b);
    rectMode(CENTER);
    rect(x,y,lineW,lineH);
    x = x + lineS;
}}
