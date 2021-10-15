/**
Forest Fire
Frankie Latreille

I am trying to grow a forest, and sometimes lightning burns it down.
But it grows back.
*/

/**
Module 1 in dev. P1
- get tree to grow
- display timer
- have cloud clickable
- have lighting
- have thunder
- have tree burning
*/

"use strict";

let forest = [
  [``,``,``,``,``,``,``,``,``,``],//A
  [``,``,``,``,``,``,``,``,``,``],//B
  [``,``,``,``,``,``,``,``,``,``],//C
  [``,``,``,``,``,``,``,``,``,``],//D
  [``,``,``,``,`P`,``,``,``,``,``],//E
  [``,``,``,``,``,``,``,``,``,``],//F
  [``,``,``,``,``,``,``,``,``,``],//G
  [``,``,``,``,``,``,``,``,``,``],//H
  [``,``,``,``,``,``,``,``,``,``],//I
  [``,``,``,``,``,``,``,``,``,``],//J
]
let bg = {
  color:{
    r:90,
    g:140,
    b:25,
  }
}

let tree = {
  type:undefined,
  image:undefined,
  x:undefined,
  y:undefined,
  width:60,
  height:90,
  frameAge:0,
};

let pinetree = {
  image: undefined,
  x:0,
  y:0,
  width:0,
  height:0,
}

let fir = {
  image: undefined,
  x:0,
  y:0,
  width:60,
  height:90,
}

let pinecone = {
  x: undefined,
  y: undefined,
  width: 15,
  height: 32,
}

let seed = {
  x: undefined,
  y: undefined,
  width: 5,
  height: 5,
}

let cloud = {
  image:undefined,
  x:70,
  y:70,
  width:65,
  height:50,
}

let fire = {
  image: undefined,
  x:0,
  y:0,
  width:0,
  height:0,
}

let checkCode = undefined;
let newCode = undefined;

/**
Description of preload
*/
function preload() {
  pinetree.image = loadImage('assets/images/Pinetree.png');
  let imagep = loadImage('assets/images/Pine-Sap.jpeg');
  let imagePX = loadImage('assets/images/Torched-Pinetree.png');

  //fir.image = loadImage('assets/images/Fir.png');
  //birch.image = loadImage('assets/images/Birch.png');
  cloud.image = loadImage('assets/images/cloud.png');
  fire.image = loadImage('assets/images/fire.png');

  let cursor = loadImage('assets/images/Godly-user.png');



}

/**
Description of setup
*/
function setup() {
  frameRate(10);
  createCanvas(600,600);

  //cloudMovement(); //CREATE!

  //checkForestGrid(); //CREATE!
  //fireMovement(); //CREATE!
  //treeGrowth(); //CREATE!
}


/**
Description of draw()
*/
function draw() {
  // draw the background a greenish brown
  background(bg.color.r,bg.color.g,bg.color.b);


  // display a fir (MAESTRO)
  push();
  imageMode(CENTER);
  image(tree.image,300,300,60,90);
  pop();

  // constantly check for new seeds, new sprouts
  isThereNewFir(); // will verify if there is a new fir, if there is, the program
  // will manage the new objects through an alphanumerical coded system
  // once the new object code is created, along with the information such as
  // where its x and y axis will be,
  // the object can be created
  createFir(fir.code.letter+fir.code.number);
  // create checkCode to create newCode
  checkCode = fir.code.letter+fir.code.number;
  console.log(`The checkCode is: ${checkCode}`+`and the firCodeNumber is ${fir.code.number}`);
  // create newCode
  newCode = fir.code.letter + (fir.code.number++);
  console.log(`^ the check code is ${checkCode} and the new code number is ${newCode}`);
  // if the checkCode and newCode are different, that means a new tree is born!
  if (checkCode !== newCode){
    console.log(`chaching`);//checking things out
    thereIsNewFir();
    // This is just for testing the tree generating randomly
    console.log(`${thereIsNewFir} whether there is new fir and...`+`The fir code is: ${newCode}`);
  }

  // display the cloud
  push();
  imageMode(CENTER);
  image(cloud.image,cloud.x,cloud.y,cloud.width,cloud.height);
  pop();
}

function displayForest() {
  for (let y = 0; y < forest.length; y++) {
    let row = forest[y];
    for (let x = 0; x < forest[y].length; x++) {
      let collumn = [x];
      push();
      noFill();
      stroke(0);
      rect(x * unit, y * unit, unit, unit);
      pop();
      let cell = forest[y][x];
      }
    }
  }

  function checkCell() {
    if (cell === `P`) {
      tree.image = pinetree.image;
      drawPinetree(x,y);
    }
  }

// when this function learns that a new fir is sprouting, it will assign it a
// code, and then it will create the tree
// I think I will keep the creating of the tree in the code assigning function
// because I am assured the tag is with is... and only need to create when thereIsNewFir


function drawPinetree(x,y){
  push();
  imageMode(CENTER);
  image(pinetree.image,pinetree.x,pinetree.y,pinetree.width,pinetree.height);
  pop();
}
function isThereNewFir(){
  if (thereIsNewFir()){
    establishFirCode(checkCode); // checkCode may be dumb here
  }
}

// this function confirms if a new fir needs to be sprouting or not
function thereIsNewFir(){
  if (mousePressed){
    return true;
  }
  else return false;
}
// this function verifies object codes and assigns new ones when certain events happen
// events like: sprouting, growing, dying, burning
function establishFirCode(treeCode){
  // check what is this seed object's code
  // check what was former code of the tree that came from the seed before it
  // change the code to the tree code and by incrementing the number by 1
  // establish a new x, y, (either randomly at the beginning or procedurally throughout the simulation)
  fir.x = fir.x + random(0, width);
  fir.y = fir.y + random(height, 0);
}


// Functions for creating trees //
function createFir(firCodeLet,firCodeNum){
  push();
  imageMode(CENTER);
  constrain (fir.x,0,width);
  constrain (fir.y,height,0);
  image(fir.image,fir.x,fir.y,fir.width,fir.height);
  pop();
  fir.x = 0;
  fir.y = 0;
}
function createBirch(birchCodeLet,birchCodeNum){
  push();
  imageMode(CENTER);
  image(birch.image,birch.x,birch.y,birch.width,birch.height);
  pop();
}
function createPinetree(pinetreeCodeLet,pinetreeCodeNum){
  push();
  imageMode(CENTER);
  image(pinetree.image,pinetree.x,pinetree.y,pinetree.width,pinetree.height);
  pop();
}

// other functions //

function mousePressed(){
  return true;
}
