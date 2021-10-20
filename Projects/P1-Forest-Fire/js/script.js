"use strict";

//---Declaring JS objects---//

//state
let state = `title` //can be title, simulation, end

// background object
let bg = {
  color:{
    r:40,
    g:130,
    b:3,
  },
}
// fire, which appears at each burning tree's x,y
let fire = {
  image: undefined,
  x:0,
  y:0,
  w:45,
  h:50,
  side:1, //or side 2
  counter:50,// downwards counter for the duration of the fire animation
}
// lightning is a flashing white rectangle over canvas, when cloud clicked
let lightning = {
  x:0,
  y:0,
  color:255,
  alpha:0,
}
// cloud is animated to float over the forest
let cloud = {
  image:undefined,
  x:50,
  y:60,
  speed:2,
  vx:0,
  vy:0,
  width:65,
  height:50,
  clicked:undefined,
}
// cursor aesthetic engages the user
let cursor = {
  image:undefined,
  x:0,
  y:0,
  width:45,
  height:45,
}

//--- Declaring variables ---//
let forestSize=0; // for initializing the forest, will be random
let min=15; // minimum number of trees in the forest
let max=30; // maximum number of trees in the forest
let forest = []; // forest array stores all the trees and their values

let adultFir; // name for the image of a fir tree
let torchedFir; // name for the image of a torched fir tree

//let type; // tree type could come in useful

let fireIMG1; // fire image side 1
let fireIMG2; // fire image side 2, for the flickering effect

let thunderSFX; // sound effect of thunder

let onFire=0; // switch to turn the fire functions on

//---Preload functions---//
// preloading images, fir tree at different stages, cloud and cursor
// and sounds of thunder
function preload() {
  adultFir = loadImage('assets/images/Fir2.png');
  torchedFir = loadImage('assets/images/Fir3.png');
  fireIMG1 = loadImage('assets/images/fire1.png');
  fireIMG2 = loadImage('assets/images/fire2.png');
  cloud.image = loadImage('assets/images/cloud.png');
  cursor.image = loadImage('assets/images/Godly-user.png');
  thunderSFX = loadSound(`assets/sounds/THUND.WAV`);
}

//---Setup functions---//
// creating canvas, initializing the forest and the cloud
function setup(){
  createCanvas(400,400);
  frameRate(10);// this is used to control animations, for lack of a better way yet
  initializeForest();// time to create the trees to initialize the forest
  initializeCloud();// sets cloud initial position and velocity
  noCursor();// remove default cursor for better immersion
}

// this function creates tree objects to be stored in the forest array
function treeFactory(x,y){ // x,y can be anywhere on the canvas
  let tree = {
    x:x,
    y:y,
    w:50,
    h:60,
    //age:350,// tree.age will be an upwards timer
    //type:`Fir`,// tree.type could be Fir, Pine, or Birch
    image: adultFir,// is changed according to age, type combinations, or if Torched
    onFire:0,// tree.onFire
    lifeCounter:30,// tree.lifeCounter is a downwards timer, when at 0 image turns to `Torched`
    fireCounter:31,// tree.fireCounter is a downwards timer, when it reaches 0 fire is out
  }
  return tree;// returns a tree object to be stored in the forest array
}

//---The draw function---//
function draw(){
    background(bg.color.r,bg.color.g,bg.color.b);// Green grassy background
    lightFilter();// lightFilter function creates the white rectangle, always present
    // gets flickering opacity then turned to max when there is lightNThunder

    // Go through the forrest array, check all the created trees
    for (let i = 0; i < forest.length; i++){
      displayTrees(forest[i]);// and display them
      displayFire(forest[i]);// if a tree is on fire, display any fire
      fireOut(forest[i]);// if a fireCounter and lifeCounter run out
      // the fire disappears and the tree image becomes torched
      toEndState(forest[i]);
      }

    cloudMovement();// animates the cloud
    displayCloud();// displays the cloud
    createCursor();// displays the cursor

    lightningStrikes();// when mouse is clicked a random tree is selected to burn
    lightning.alpha=0;// resets lightning rectangle to transparent
  }

//---Program functions---//
// Initialize forest function to create a random sized forest
function initializeForest(){
  // select forest size with min and max values in variable declarations
  forestSize = random(min,max);
  //trees with different x,y will be created
  //as many as the random forestSize between min and max number of trees
  for (let i = 0; i<forestSize; i++){
    forest[i]=treeFactory(random(0,width), random(0,height));
    }
  }

// Initialize cloud function
function initializeCloud(){
  // intialize cloud position and velocity
  cloud.y = random(0,height);
  cloud.vx = cloud.vx + cloud.speed;
}

// white rectangle to create lightning effect when cloud clicked
function lightFilter(){
  push();
  noStroke();
  fill(lightning.color,lightning.alpha);
  rectMode(CENTER);
  rect(lightning.x,lightning.y,canvas.width,canvas.height);
  pop();
}

// Display trees function
function displayTrees(tree){
  push();
  imageMode(CENTER);
  image(tree.image,tree.x,tree.y,tree.w,tree.h);
  pop();
}

// Display fires function
function displayFire(tree){
  if (tree.onFire===1){// when a tree in the array is switched ON display fire
    fireFlicker(tree);// when fire is displayed, it flickers
    push();
    imageMode(CENTER);
    image(fire.image,tree.x,tree.y,fire.w,fire.h);// display the fire at tree x,y
    pop();
    }
  if (tree.onFire===1 && tree.fireCounter===0)// when the fireCounter runs out
  return;// fire is gone
  }

// Fire flickering function
function fireFlicker(tree){ // for each tree where a fire burns, every frame the
  // fire image is changed to its reverse horizontal twin
  if (fire.side === 1){// Fire image 1
    fire.image = fireIMG1;// this fire image is the reverse horizontal twin of...
    fire.side = 2;// change image side for next frame
    tree.lifeCounter--;// every frame the burning tree's lifeCounter goes down
    tree.fireCounter--// every frame the fireCounter goes down until it goes out
  }
  else if (fire.side === 2){// Fire image 2
    fire.image = fireIMG2;// ...this fire image
    fire.side =1;// change image side for next frame
    tree.lifeCounter--;// every frame the burning tree's lifeCounter goes down
    tree.fireCounter--;// every frame the fireCounter goes down until it goes out
  }
}

// Fire out function when the fire goes out
function fireOut(tree){// for each tree in the forest array
  if (tree.onFire===1 && tree.lifeCounter===0){// when burning tree's lifeCounter reaches 0
    tree.w=40;
    tree.image=torchedFir;// change tree image to the torched version
    tree.onFire=3;// code tree onFire to 3 so it will not be randomly selected anymore
    // when lightning strikes
  }
}

function toEndState(tree){
  return;
}

// Cloud movement function
function cloudMovement(){ // adding x velocity to the x position
  cloud.x = cloud.x + cloud.vx;
  cloud.y = cloud.y + cloud.vy;
  // cloud reapears at the left side when arriving at the right side
  if (cloud.x > width){
    cloud.x = 0;
    cloud.y = random(0,height);
  }
}

// display cloud function
function displayCloud(){
  push();
  imageMode(CENTER);
  image(cloud.image,cloud.x,cloud.y,cloud.width,cloud.height);
  pop();
}

// display the cursor function
function createCursor(){
  cursor.x = mouseX;
  cursor.y = mouseY;
  image(cursor.image,cursor.x,cursor.y,cursor.width,cursor.height);
}

// function to check whether the mouse is over the cloud or not
function mouseOverCloud(){
  let d = dist(cursor.x, cursor.y, cloud.x, cloud.y);// d is the distance between the cursor and the cloud
  if (d < cursor.width/2 + cloud.width/2){// check if the cursor is over the cloud
    return true; // mouse is over the cloud
    }
  else {
    return false // mouse is not over the cloud
    }
  }

// mouseClicked function that causes thunder and lightning
function mouseClicked(){
  if (mouseOverCloud()){// mouse must be over the cloud for this function to work
    cloud.clicked=true;// if user clicks on the cloud cloud gets tagged as such
    lightning.alpha=255;// the lightFilter is turned on preemptively for effect
    }
  }

// the lightning strikes function which is activated in draw() if the cloud is clicked
function lightningStrikes(){
  if (cloud.clicked === true){// cloud must be tagged as clicked
    let tree = random(forest);// a random tree in forest array is selected
    if (tree.onFire === 3){// already burned trees are tagged onFire=3
      return;// if they are randomly selected by the lightning, a new random tree is selected
    }
    lightNThunder();// visual and sound effects to go with clicking the cloud
    tree.fireCounter=30;// the selected tree's fireCounter is turned up to 30
    tree.onFire = 1; // tree on fire switch is ON
    cloud.clicked=false; // return false because lightning is a click and a flash,
    // for only 1 tree each click.
  }
  }

// lightning and thunder function are visual and audio effects
function lightNThunder(){
    thunderSFX.play(); // thunder sound effects are played
    lightning.alpha = random(1,255); // the white rectangle's is rendered opaque
  }
