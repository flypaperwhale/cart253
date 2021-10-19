/**
I Dream of Fish
Frankie L.

Behold! It looks as though I am creating life out of code!
*/

"use strict";


let timer = 0;
let state = `pause`; //can be title, game, playSound, ending1, ending2
let playTitleSong = 0;
let titleSong;
let dudSong;
let wonkySong;
let secretSong;
let secretSong2;
let clickFish = 0;
let round = 0;
let magicNum = 2;
let titleText = undefined;
let gameStarts=0;
let school = [];
let startTimer = 0;
let schoolSize = 0;

let canClickEnd = 0;
let itIs;

let theGuide={
  secret:undefined,
  song:undefined,
}

let secret1 = `The rising of birds in their flight is the sign of an ambuscade.
Startled beasts indicate that a sudden attack is coming.`;

let secret2 = `You were born with wings, why prefer to crawl through life?`;

let secret3 = `If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck...`;

let secret4 = `Don't take me so seriously.`;

let secret5 = `A wise old owl lived in an oak,
The more he saw, the less he spoke
The less he spoke, the more he heard,
Now, wasn't he a wise old bird? `;
let secrets = [secret1,secret2,secret3,secret4,secret5];

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
  secretSong2 = loadSound('assets/sounds/magic-spirit2.wav');
}

/**
Description of setup
*/
function setup() {

  createCanvas(600,600);
  schoolSize = random(3,9);
//create fish
for (let i = 0; i < schoolSize; i++){
  school[i] = createFish(random(0,width), random(0,height), random(0,255));
  colorizeFish(school[i]);
}
}

function createFish(x,y){
  let fish = {
    x: x,
    y: y,
    size:68,
    vx:0,
    vy:0,
    speed:2,
    color:{
      r:0,
      g:0,
      b:0,
    },
    song:undefined,
    secretNumber:0,
    secret:undefined,
  };
  return fish;
}

function colorizeFish(fish){
  round = round + 1 ;
  if (round === 1){
    fish.secretNumber=random([0,1,2,3,4]);
    console.log(`in colorize the guide guide ${fish.secretNumber} is ${secrets[fish.secretNumber]}`);
    theGuide.song = fish.song;
    fish.secret=secrets[fish.secretNumber];
    fish.color.r =0;
    fish.color.b =200;
    fish.color.g =150;
    console.log(`in colorize guide ${fish.secret}`);
    if (fish.secret === secrets[4]){
      fish.song = secretSong2;
    }
    else {
      fish.song = secretSong;}
    theGuide.secret = fish.secret;
    console.log(`in colorize the guide guide ${fish.secretNumber} is ${secrets[fish.secretNumber]} ${theGuide.secret}`);
    theGuide.song = fish.song;

  }
  if (round === 2){
    fish.secret=undefined;
    fish.color.r =100;
    fish.color.b =255;
    fish.color.g =0;
    fish.song = dudSong;
  }
  if (round === 3){
    fish.secret=undefined;
    fish.color.r =100;
    fish.color.b =0;
    fish.color.g =255;
    fish.song = wonkySong;
    round = 1;
  }
}

/**
Description of draw()
*/
function draw() {
  background(100,180,225);

if (state===`pause`){
  push();
  imageMode(CENTER);
  cursor.x=width/2;
  cursor.y=height/2-120;
  image(cursor.image,cursor.x,cursor.y,cursor.width,cursor.height);
  pop();
  timer++
  console.log(`timer in secret eludes 2 ${timer}`);
  if (timer === 75){
    timer = 0;
    state = `title`;
  }

}

if (state === `title`){
  push();
  imageMode(CENTER);
  cursor.x=width/2;
  cursor.y=height/2-120;
  image(cursor.image,cursor.x,cursor.y,cursor.width,cursor.height);
  pop();

  if (startTimer ===0){
    push();
    textAlign(CENTER,CENTER);
    titleText = `You've entered a magical plane`;
    text(titleText,width/2,height/2+10);
    pop();
  }
  if (startTimer===1){
    console.log(`timer is on ${timer}`);
    timer++;}
    console.log(`timer is on ${timer}`);
  if (timer < 100){
    push();
    textAlign(CENTER,CENTER);
    titleText = `You've entered a magical plane`;
    text(titleText,width/2,height/2+10);
    pop();
  }
  else if (timer >= 83 && timer < 320){
      titleText = `A guide is here with a secret
      just for you...`;
      push();
      textAlign(CENTER,CENTER);
      text(titleText, width/2, height/2+15);
      pop();
    }
  else if (timer === 320){
      state = `spirits state`;}}

  //console.log(`dist = mousex ${mouseX}, mouseY ${mouseY}, cursor.x ${cursor.x}, cursor.y ${cursor.y}`);}

if (state === `spirits state`){
  for (let i = 0; i < school.length; i++){

    moveFish(school[i]);
    displayFish(school[i]);
    drawUser();

    if (clickFish >= 3){
      console.log(`timer going into secret eludes 2 ${timer}`);
      timer = 0;
      console.log(`timer goint into secret eludes 2 ${timer}`);
      state = `secret eludes`;
    }
    }
}

if (state === `secret eludes`){
  push();
  textAlign(CENTER,CENTER);
  text(`you're too distracted... try again, Be discerning.`, width/2, height/2);
  pop();
  console.log(`timer in secret eludes 1 ${timer}`);
  timer++;
  console.log(`timer in secret eludes 2 ${timer}`);
  if (timer === 170){
    timer=0;
    state=`ending`;
  }
}

if (state === `caughtSecret`){
  console.log(`timer in caught secret ${timer}`);
  console.log(`caught secret ${theGuide.secret}`);
    push();
    textAlign(CENTER,CENTER);
    text(theGuide.secret, width/2, height/2);
    pop();
    timer++;
    if (timer === 300){
      canClickEnd=1;
    }
}

if (state === `ending`){
  push();
  textAlign(CENTER,CENTER);
  text(`Go for now...`, width/2, height/2);
  pop();
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
  console.log(`mouse click clickfish = ${clickFish}`);
  if (state === `title`){
    let d = dist(mouseX, mouseY, cursor.x, cursor.y);
    if (d < cursor.width/2 + 10){
      console.log(`mouse is over staff`);
      playTitleSong = 1;
      gameStarts++;
      startGame();}
    }

  else if (state === `spirits state`){
    for(let i = 0; i<school.length;i++){
      console.log(`spiritstate clickfish = ${clickFish}`);
      let fish = school[i];
      let d = dist(mouseX, mouseY-70, fish.x, fish.y);
      if (d < cursor.width/5 + fish.size/2){
        clickFish = clickFish + 1;
        console.log(`mouse is over`);
        fish.color.r=fish.color.r+30;
        fish.color.b=fish.color.b+70;
        fish.song.play();
        if (fish.secret!=undefined){
          timer = 0;
          state = `caughtSecret`;
        }
      }
    }
  }
else if (state === `caughtSecret`){
  if (canClickEnd===1){
    state=`ending`;
  }
}

/* else if (state === `ending`){

  timer=0;
  gameStarts=0;
  clickFish = 0;
  round = 0;
  startTimer = 0;
  canClickEnd = 0;
  schoolSize = random(3,9);
//create fish
for (let i = 0; i < schoolSize; i++){
  school[i] = createFish(random(0,width), random(0,height), random(0,255));
  colorizeFish(school[i]);
  state = `pause`;
}
} */
}



function startGame(){
  if (gameStarts === 1){
    noCursor();
    if (playTitleSong === 1){
    titleSong.play();
    playTitleSong =0;}
    gameStarts=2;
    startTimer=1;
  }
}
