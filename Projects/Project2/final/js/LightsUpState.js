class LightsUpState extend State { // animation when the light turns on, then simulation begins
  // and player can play
  constructor(simulationImagesList, mapsArray, simulationSoundsArray, stateName){
    super();
    this.name = `Light's up State`;

  }

  if (stateName === `light's up State`) { // if state is "lightsUp"
    checkPlayerNPCCollision(); // checks if player is touching npc or not
    calculatePlayerLampDist(); // calculate the distance between player and lamp every frame
    songSwitch++; // add 1 to songSwitch
    songSwitch = constrain(songSwitch, 0, 410); // constrain songSwitch to 0-410
    if (songSwitch === 200) { // when songSwitch reaches 200
      lightFlickSound.play(); // play the lightFlickSound (which has visual FX cues)
    }
    if (songSwitch === 270) { // when songSwitch reaches 270
      turnLightOn(); // the light is turned on
    }
    if (songSwitch === 410) { // when songSwitch reaches 410
      playBGMusic(); // the backgroung music starts playing
      player.isPaused = false; // and the player can start moving the avatar
    }
  }
}
