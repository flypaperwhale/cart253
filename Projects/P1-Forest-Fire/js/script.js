/**
Forest Fire
Frankie Latreille

I am trying to grow a forest, and sometimes lightning burns it down.
But it grows back.
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
  code:{
    letter:`P`,
    number:0,
  },
};
let fir = {
  image:undefined,
  x:75,
  y:150,
  width:60,
  height:90,
  code:{
    letter:`F`,
    number:0,
  },
};
let birch = {
  image:undefined,
  x:undefined,
  y:undefined,
  width:60,
  height:90,
  code:{
    letter:`B`,
    number:0,
  },
};

let checkCode = undefined;


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
  // constantly check for new seeds, new sprouts
  isThereNewFir(); // will verify if there is a new fir, if there is, the program
  // will manage the new objects through an alphanumerical coded system
  // once the new object code is created, along with the information such as
  // where its x and y axis will be,
  // the object can be created
  createFir(fir.code.letter+fir.code.number);
  checkCode = fir.code.letter+fir.code.number;
  console.log(`The checkCode is: ${checkCode}`);
  fir.code = fir.code.letter + fir.code.number++;
  if (checkCode !== fir.code){
    thereIsNewFir();
  }
  console.log(`${thereIsNewFir} whether there is new fir and...`+`The fir code is: ${fir.code}`);
}

// when this function learns that a new fir is sprouting, it will assign it a
// code, and then it will create the tree
// I think I will keep the creating of the tree in the code assigning function
// because I am assured the tag is with is... and only need to create when thereIsNewFir

function isThereNewFir(){
  if (thereIsNewFir()){
    establishFirCode();
  }
}

// this function confirms if a new fir needs to be sprouting or not
function thereIsNewFir(){
  return true;
}
// this function verifies object codes and assigns new ones when certain events happen
// events like: sprouting, growing, dying, burning
function establishFirCode(treeCode){
  // check what is this seed object's code
  // check what was former code of the tree that came from the seed before it
  // change the code to the tree code and by incrementing the number by 1
  // establish a new x, y, (either randomly at the beginning or procedurally throughout the simulation)
}


// Functions for creating trees //
function createFir(firCode){
  push();
  imageMode(CENTER);
  image(fir.image,fir.x,fir.y,fir.width,fir.height);
  pop();
}
function createBirch(birchCode){
  push();
  imageMode(CENTER);
  image(birch.image,birch.x,birch.y,birch.width,birch.height);
  pop();
}
function createPinetree(pinetreeCode){
  push();
  imageMode(CENTER);
  image(pinetree.image,pinetree.x,pinetree.y,pinetree.width,pinetree.height);
  pop();
}
