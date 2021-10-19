/**
I Dream of Fish
Frankie L.

Behold! It looks as though I am creating life out of code!
*/

"use strict";

let timer = 0;
let state = `title`; //can be title, game, playSound, ending1, ending2
let playTitleSong = 1;
let titleSong;
let dudSong;
let wonkySong;
let secretSong;
let clickFish;
let round = 0;
let magicNum = 2;

let school = [];
let schoolSize = 0;

let itIs;

let cursor = {
  image:undefined,
  x:0,
  y:0,
  width:200,
  height:250,
}

/**
Description of preload
*/
function preload() {
  cursor.image = loadImage('assets/images/hermes-staff.png');

  titleSong = loadSound('assets/sounds/title.wav');
  dudSong = loadSound('assets/sounds/dud-spirit.wav');
  wonkySong = loadSound('assets/sounds/wonky-spirit.wav');
  secretSong = loadSound('assets/sounds/magic-spirit.wav');


}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  noCursor();
  schoolSize = random(3,9);
//create fish
for (let i = 0; i < schoolSize; i++){
  school[i] = createFish(random(0,width), random(0,height), random(0,255),);
  colorizeFish(school[i]);
}
}

function createFish(x,y){
  let fish = {
    x: x,
    y: y,
    size:75,
    vx:0,
    vy:0,
    speed:2,
    color:{
      r:0,
      g:0,
      b:0,
    },
    song:undefined,
  };
  return fish;
}

/**
Description of draw()
*/
function draw() {
  background(100,180,225);

if (state === `title`){
    if (playTitleSong === 1){
    titleSong.play();
    playTitleSong =0;}
    push();
    imageMode(CENTER);
    image(cursor.image,width/2,height/2-120,cursor.width,cursor.height);
    pop();
    push();
    textAlign(CENTER,CENTER);
    text(`You've entered a magical plane`, width/2, height/2);
    pop();
    timer++;
    if (timer === 300){
      state = `spirits state`;
    }
}

if (state === `spirits state`){
  for (let i = 0; i < school.length; i++){


    moveFish(school[i]);
    displayFish(school[i]);

    drawUser();

    if (clickFish===3){
      state = `secret eludes`;
    }
  }
}

if (state === `secret eludes`){

}

if (state === `caughtSecret`){

}

if (state === `ending`){
  
}
}

function colorizeFish(fish){
  round = round + 1 ;
  if (round === 1){
    fish.secret=1;
    fish.color.r =0;
    fish.color.b =200;
    fish.color.g =150;
    fish.song = secretSong;
}
  if (round === 2){
    fish.color.r =100;
    fish.color.b =255;
    fish.color.g =0;
    fish.song = dudSong;
  }
  if (round === 3){
    fish.color.r =100;
    fish.color.b =0;
    fish.color.g =255;
    fish.song = wonkySong;
    round = 1;
  }
}
//move fish()
// choose whether provided fish changes direction and moves it
function moveFish(fish){
//choose whether to change direction
  let change = random(0,1);
  if (change < 0.05){
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
//move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;
//constrain fish to canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

//display Fish
//displays the provided fish on the canvas
function displayFish(fish){
  push();
  fill(fish.color.r,fish.color.g,fish.color.b);
  noStroke();
  ellipse(fish.x,fish.y,fish.size);
  pop();
}

function drawUser(){
  push();
  imageMode(CENTER);
  image(cursor.image,mouseX,mouseY,cursor.width,cursor.height);
  pop();
}

function mouseClicked(){
  clickFish = clickFish++;
  if (state === `title`){
    console.log(`do nothing`);
  }
  else if (state === `spirits state`){
    for(let i = 0; i<school.length;i++){
      let fish = school[i];
      let d = dist(mouseX, mouseY-70, fish.x, fish.y);
      if (d < cursor.width/5 + fish.size/2){
        console.log(`mouse is over`);
        fish.color.r=fish.color.r+30;
        fish.color.b=fish.color.b+70;
        fish.song.play();
        if (fish.secret===1){
          state = `caughtSecret`;
        }
      }
    }
  }
}
