/**
age-of-aquariums (I Dream of Spirits)
Frankie L.

Behold! It looks as though I am creating life out of code!
Just a silly little oracle simulation.
*/

"use strict";

let state = `pause`; // can be pause, title, spirit state, secret caught or eluded, and ending
let timer = 0; // timer is set at 0
let startTimer = 0; // switch in startGame, turns 1 On or 0 Off

let titleText = undefined; // text displayed in the beginning
let titleSong; // bell sound
let playTitleSong = 0; // plays bell sound once

let gameStarts = 0; // switched on by the click of the mouse
let spiritsArraySize = 0; // amount of spirits found in the array
let spirits = []; // spirit array
let round = 0; // counter used when creating different spirits with different attributes

let dudSong; // spirit sound
let wonkySong; // other spirit sound
let secretSong; // guide sound
let secretSong2; // 2nd guide sound

// the secrets
let secret1 = `The rising of birds in their flight is the sign of an ambuscade.
Startled beasts indicate that a sudden attack is coming.`;
let secret2 = `You were born with wings, why prefer to crawl through life?`;
let secret3 = `If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck...`;
let secret4 = `Don't take me so seriously.`;
let secret5 = `A wise old owl lived in an oak,
The more they saw, the less they spoke
The less they spoke, the more they heard,
Now, wasn't that a wise old bird? `;
let secrets = [secret1, secret2, secret3, secret4, secret5]; // the secrets array

let clickSpirit = 0; // counter to verify how many times user has clicked the wrong spirits
let canClickEnd = 0; // switch turned on by timer in secret caught state,
// gives user time to read and contemplate the words of guidance

// JS objects //
// the Guide, the spirit with a secret to share
let theGuide = {
  secret: undefined, // colorize round 1's spirit secret is stored here
  song: undefined, // colorize round 1's secret song is stored here
};
// the cursor, the staff of Hermes
let cursor = {
  image: undefined,
  x: 0,
  y: 0,
  width: 200,
  height: 250,
};

/**
Preloading in the title bell sound, spirit songs and image of the cursor
*/
function preload() {
  cursor.image = loadImage("assets/images/hermes-staff.png");

  titleSong = loadSound("assets/sounds/title.wav");
  dudSong = loadSound("assets/sounds/dud-spirit.wav");
  wonkySong = loadSound("assets/sounds/wonky-spirit.wav");
  secretSong = loadSound("assets/sounds/magic-spirit.wav");
  secretSong2 = loadSound("assets/sounds/magic-spirit2.wav");
}

/**
Setting up canvas and creating the spirits that have come to visit the user
*/
function setup() {
  createCanvas(600, 600);
  spiritsArraySize = random(3, 9); // have 3 to 9 appearances on the canvas
  //create spirit
  for (let i = 0; i < spiritsArraySize; i++) {
    // go through the spirits array and create spiritsArraySize number of object spirit
    spirits[i] = createSpirit(
      random(0, width),
      random(0, height),
      random(0, 255)
    ); // each spirit has a random x,y
    colorizeSpirit(spirits[i]); // colorize function implements different values inside each spirit.
    // only one spirit is selected to be the guide.
  }
}
// spirit creating function
function createSpirit(x, y) {
  // implement the random x,y from setup
  let spirit = {
    x: x,
    y: y,
    size: 68,
    vx: 0,
    vy: 0,
    speed: 2,
    color: {
      r: 0,
      g: 0,
      b: 0,
    }, // these next object concern only the guide spirit
    song: undefined, // song to be played if clicked by user
    secretNumber: 0, // number to retrieve the secret from the secrets array
    secret: undefined, // secret from the secrets array to be displayed when guide is clicked
  };
  return spirit; // returns all these values into a spirit object stored in the spirits array
}
// function to set different values in each spirit
function colorizeSpirit(spirit) {
  round = round + 1; // round one happens only once
  if (round === 1) {
    // this is the round where the guide is created
    spirit.secretNumber = random([0, 1, 2, 3, 4]); // a secret number is assigned randomly
    spirit.secret = secrets[spirit.secretNumber]; // the secret at the index of the secret number
    // is stored in the spirit.secret
    spirit.color.r = 0;
    spirit.color.b = 200;
    spirit.color.g = 150;
    if (spirit.secret === secrets[4]) {
      // the fifth secret plays a different sound
      spirit.song = secretSong2;
    } else {
      spirit.song = secretSong;
    } // the four others play the same twirping sparrow
    theGuide.secret = spirit.secret;
    theGuide.song = spirit.song;
  }
  if (round === 2) {
    // round 2 then happens 50% of the time
    spirit.secret = undefined; // secret undefined so they won't tamper with guide catching ending
    spirit.color.r = 100;
    spirit.color.b = 255;
    spirit.color.g = 0;
    spirit.song = dudSong; // these round 2 spirits' sound
  }
  if (round === 3) {
    // round 3 then happens the other 50% of the time
    spirit.secret = undefined;
    spirit.color.r = 100;
    spirit.color.b = 0;
    spirit.color.g = 255;
    spirit.song = wonkySong; // these round 3 spirits' sound
    round = 1; // this is what causes the guide to only appear once
  }
}
/**
Drawing the simulation
*/
function draw() {
  background(100, 180, 225); // baby blue background
  // Pause state, for now the user can do nothing, read the first line of text
  if (state === `pause`) {
    displayTitleCursor(); // the cursor is displayed but cannot be manipulated
    timer++; // timer counts up
    if (timer === 75) {
      // when timer reaches 75 frames
      timer = 0; // timer is reset
      state = `title`; // state becomes `title`
    }
  }
  // Title state, where introduction text is displayed and user can "enter" the displayed cursor
  if (state === `title`) {
    displayTitleCursor();
    if (startTimer === 0) {
      titleLine1();
    }
    if (startTimer === 1) {
      // when startTimer switch is on
      timer++;
    } // timer counts up
    if (timer < 100) {
      // when timer reaches 100 frames
      titleLine1(); // displays welcome message
    } else if (timer >= 83 && timer < 320) {
      // when timer reaches 83 frames
      titleLine2(); // announces the guide and its secret
    } else if (timer === 320) {
      // when timer reaches 320 frames
      state = `spirits state`; // state changes to `spirits state`
    }
  }
  // the Spirits State
  if (state === `spirits state`) {
    for (let i = 0; i < spirits.length; i++) {
      // go through the spirits array and check each spirit
      moveSpirit(spirits[i]); // move the spirits
      displaySpirit(spirits[i]); // display the spirits
      drawUser(); // display the Hermes staff but this time being controlled by the user
      if (clickSpirit >= 3) {
        // if the user has clicked the wrong spirits 3 times
        timer = 0; // timer is reset to zero
        state = `secret eludes`; // state is changed to `secret eludes`
      }
    }
  }
  // Secret eludes state
  if (state === `secret eludes`) {
    elusionText(); // text chastising user is displayed
    timer++; // timer counts up
    if (timer === 170) {
      // when timer reaches 170 frames
      timer = 0; // timer is reset to 0
      state = `ending`; // state is changed to `ending`
    }
  }
  // Caught secret state
  if (state === `caughtSecret`) {
    caughtSecretText(); // displays the Secret stored in the Guide
    timer++; // timer counts up
    if (timer === 300) {
      // when timer reaches 300 frames
      canClickEnd = 1; // the user is able to click to change states to the ending
    }
  }
  // Ending state
  if (state === `ending`) {
    endText(); // display ending message
  }
}

// display the Hermes staff at the start
function displayTitleCursor() {
  push();
  imageMode(CENTER);
  cursor.x = width / 2;
  cursor.y = height / 2 - 120;
  image(cursor.image, cursor.x, cursor.y, cursor.width, cursor.height);
  pop();
}
// display first title message
function titleLine1() {
  push();
  textAlign(CENTER, CENTER);
  titleText = `You've entered a magical plane`;
  text(titleText, width / 2, height / 2 + 10);
  pop();
}
// display second title message
function titleLine2() {
  titleText = `A guide is here with a secret
  just for you...`;
  push();
  textAlign(CENTER, CENTER);
  text(titleText, width / 2, height / 2 + 15);
  pop();
}

//move spirit()
// choose whether provided spirit changes direction and moves it
function moveSpirit(spirit) {
  //choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    spirit.vx = random(-spirit.speed, spirit.speed);
    spirit.vy = random(-spirit.speed, spirit.speed);
  }
  //move the spirit
  spirit.x = spirit.x + spirit.vx;
  spirit.y = spirit.y + spirit.vy;
  //constrain spirit to canvas
  spirit.x = constrain(spirit.x, 0, width);
  spirit.y = constrain(spirit.y, 0, height);
}

//display spirit
//displays the provided spirit on the canvas
function displaySpirit(spirit) {
  push();
  fill(spirit.color.r, spirit.color.g, spirit.color.b);
  noStroke();
  ellipse(spirit.x, spirit.y, spirit.size);
  pop();
}
// display the Hermes staff as the user's cursor
function drawUser() {
  push();
  imageMode(CENTER);
  image(cursor.image, mouseX, mouseY, cursor.width, cursor.height);
  pop();
}
// display text of `spirit eludes`state
function elusionText() {
  push();
  textAlign(CENTER, CENTER);
  text(
    `you're too distracted... try again, Be discerning.`,
    width / 2,
    height / 2
  );
  pop();
}
// displays the Guide's secret
function caughtSecretText() {
  push();
  textAlign(CENTER, CENTER);
  text(theGuide.secret, width / 2, height / 2);
  pop();
}
// displays ending message
function endText() {
  push();
  textAlign(CENTER, CENTER);
  text(`Go for now...`, width / 2, height / 2);
  pop();
}
// mouseClicked function
function mouseClicked() {
  if (state === `title`) {
    // mouseClicked in `title` state
    let d = dist(mouseX, mouseY, cursor.x, cursor.y); // check distance between mouse and cursor
    if (d < cursor.width / 2 + 10) {
      // if mouse is over the Hermes staff when clicked
      playTitleSong = 1; // bell sound
      gameStarts++; // game starts engine switch
      startGame();
    } // engine is activated
  } else if (state === `spirits state`) {
    // mouseClicked in `spirits state`
    for (let i = 0; i < spirits.length; i++) {
      // go through the spirits array
      let spirit = spirits[i]; // store the values in the objects inside the array inside the variable named spirit
      let d = dist(mouseX, mouseY - 70, spirit.x, spirit.y); // check distance between tip of Hermes staff and spirit
      if (d < cursor.width / 5 + spirit.size / 2) {
        // if the cursor is above the spirit when clicked
        clickSpirit = clickSpirit + 1; // clickspirit counter goes up 1
        spirit.color.r = spirit.color.r + 30; // a little bit of red is added to the spirit color
        spirit.color.b = spirit.color.b + 70; // a lot of blue is added to the spirit color
        spirit.song.play(); // the spirit's song is played, either dud, wonky, or secret1 and secret2
        if (spirit.secret != undefined) {
          // if the spirit clicked is the Guide, then its secret
          // does not equal undefined
          timer = 0; // timer is reset to 0
          state = `caughtSecret`; // state is changed to `caughtSecret`
        }
      }
    }
  } else if (state === `caughtSecret`) {
    // in the caught secret state
    if (canClickEnd === 1) {
      // when timer reaches 300 frames
      state = `ending`; // clicking turns the state to `ending`
    }
  }
  /* else if (state === `ending`){ // Replay Code // Inactivated //
  timer=0;
  gameStarts=0;
  clickspirit = 0;
  round = 0;
  startTimer = 0;
  canClickEnd = 0;
  spiritsArraySize = random(3,9);
//create spirit
for (let i = 0; i < spiritsArraySize; i++){
  spirits[i] = createspirit(random(0,width), random(0,height), random(0,255));
  colorizespirit(spirits[i]);
  state = `pause`;
  }
} */
}

function startGame() {
  // when mouse is clicked in title state, puts game into motion
  if (gameStarts === 1) {
    // gameStarts is activated
    noCursor(); // the computer cursor disappears (into the staff)
    if (playTitleSong === 1) {
      // because playTitleSong has been activated by mouse click
      titleSong.play(); // bell sound plays
      playTitleSong = 0;
    } // but only once
    //gameStarts=2;// useful when replay is active
    startTimer = 1; // startTimer is switched on with which the timer will then lead user
    // out of the title state
  }
}
