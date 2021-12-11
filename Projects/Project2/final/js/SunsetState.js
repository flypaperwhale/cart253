class SunsetState extends State { // introduction animation, blue sky becomes dark and starry...
  constructor(){
    super();

  }
  if (state === `sunset`) { // if the state equals "sunset"
    songSwitch++; // the songSwitch is increased
    songSwitch = constrain(songSwitch, 0, 2); // the songSwitch is constrained between 0-2
    playSunsetSong(); // the sunset theme is played
    // sunset animation with skyAlpha and dayTimer
    skyAlpha = map(dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
    dayTimer--; // dayTimer goes down
    dayTimer = constrain(dayTimer, 0, 310); // constrain dayTimer
    if (dayTimer === 0) { // once the dayTimer reaches 0...
      constellationWinkSound.play(); // a chime sound to signify the twinkling stars
      dayTimer = 1; // dayTimer is reset to 1
      resetSongSwitch(); // songSwitch is reset to 0
      setState(`lightsUp`); // ... and then, no time to admire the stars, the lights go on!
    }
  }

  display(){
    background(0);
    fill(255);

    push();
    textAlign(CENTER);
    text(`Welcome. Click mouse to start.`, width/2, height/2);
    pop();

  }


  mouseClicked(){
    state = new MapsDebugState(simulationImagesList, mapsArray);
  }

}
