class MapsDebugState extends State {
  constructor(simulationImagesList, mapsArray, simulationSoundsArray) {
    super();

    this.simulationItemList = []; // array to manage items
        this.createItems(); // creating Items, to be found and exchanged

        this.simulationNPCList = [];
        this.createNPCs(); // creating NPCs and storing them in NPCList array

    // this.npcArray = new NPCList(); //?! is this the equivalent of inputing an array full //
    // of NPC class object? will I be able to call upon the NPCs in this array
    // to display them and have player interact with them?

    // Items are to be set up in the main script
    // When game is started, every Item is created and stored somewhere
    // Some are on the map and can be picked up by being walked on
    // Other will be on NPCs and will be tradeable.
    this.maps = [mapsArray[0],mapsArray[1],mapsArray[2]]; // a triptych cityscape
    this.map = undefined;
    this.currentMap = mapsArray[1];
      this.player = new Player(109, 597);

      this.songSwitch = 0;

    this.textBubbleIsLoaded = false;

    this.cueLightFlicks(this.simulationNPCList[5]); // add light cues to the lamp on map B

    this.setAnimationState(`SunsetState`);//##

console.log(`yay lightflicks!`)
  }

  createItems() {
    this.slingshot = new Slingshot(simulationImagesList[0]);
    this.simulationItemList.push(this.slingshot); //
    //
    this.ham = new Ham(simulationImagesList[1]);
    this.simulationItemList.push(this.ham); //
    //
    this.bigBone = new BigBone(simulationImagesList[2]);
    this.simulationItemList.push(this.bigBone); //
    //
    this.frog = new Frog(simulationImagesList[3]);
    this.simulationItemList.push(this.frog); //
    //
    this.wrench = new Wrench(simulationImagesList[4]);
    this.simulationItemList.push(this.wrench); //
    //
    this.injunction = new Injunction(simulationImagesList[5]);
    this.simulationItemList.push(this.injunction); //
    //
  }

  createNPCs() {
    // map A NPCs
    this.streetLightA = new StreetLightA(); // mapA
    this.simulationNPCList.push(this.streetLightA); // √
    this.pimlico = new Pimlico(); // mapA
    this.simulationNPCList.push(this.pimlico); // √
    this.lamotte = new Lamotte(); // mapA
    this.simulationNPCList.push(this.lamotte); // !!!
    // map B NPCs
    this.janine = new Janine(); // mapB
    this.simulationNPCList.push(this.janine); // √
    this.marv = new Marv(); // mapB
    this.simulationNPCList.push(this.marv); // √
    this.streetLightB = new StreetLightB(); // mapB
    this.simulationNPCList.push(this.streetLightB); // √
    // map C NPCs
    this.billee = new Billee(); // mapC
    this.simulationNPCList.push(this.billee); // !!!
    this.sheperd = new Sheperd(); // mapC
    this.simulationNPCList.push(this.sheperd); // !!!
    this.garbage = new Garbage(); // mapC
    this.simulationNPCList.push(this.garbage); // √
    this.streetLightC = new StreetLightC(); // mapC
    this.simulationNPCList.push(this.streetLightC); // √
    this.jade = new Jade(); // mapC
    this.simulationNPCList.push(this.jade); // !!!
  }

  cueLightFlicks() { //simulationSoundsArray[2],npcList[5]
    console.log(`lightflix?`);
    simulationSoundsArray[2].addCue(0.1, this.simulationNPCList[5].flickBulbOn);
    simulationSoundsArray[2].addCue(0.2, this.simulationNPCList[5].flickBulbOff);
    simulationSoundsArray[2].addCue(0.3, this.simulationNPCList[5].flickBulbOn);
    simulationSoundsArray[2].addCue(0.4, this.simulationNPCList[5].flickBulbOff);
    simulationSoundsArray[2].addCue(0.75, this.simulationNPCList[5].flickBulbOn);
    simulationSoundsArray[2].addCue(0.8, this.simulationNPCList[5].flickBulbOff);
  }

  update() { // updates every frame, it serves a drawing function
    background(0);
    fill(255);
    textAlign(CENTER);
    // This text is in the background, gives player how to play
    text(`press enter to change maps!`, width/ 2, height/2);

    this.map = this.currentMap;
    this.map.display(this.player, this.simulationNPCList, simulationSoundsArray);
    this.player.barriers(this.map);

    // if (animationState === `title`) { // if state is "title"
    //   setState(`sunset`); // state becomes "sunset"
    // }

    //sunset // // introduction animation, blue sky becomes dark and starry...
    if (animationState === `SunsetState`){ // if the state equals "sunset"
      this.songSwitch++; // the songSwitch is increased
      this.songSwitch = constrain(this.songSwitch, 0, 2); // the songSwitch is constrained between 0-2
      playSunsetSong(); // the sunset theme is played
      // sunset animation with skyAlpha and dayTimer
      skyAlpha = map(dayTimer, 310, 0, 255, 0); // map skyAlpha (255,0) goes down as dayTimer (310,0) goes down
      dayTimer--; // dayTimer goes down
      dayTimer = constrain(dayTimer, 0, 310); // constrain dayTimer
      if (dayTimer === 0) { // once the dayTimer reaches 0...
        constellationWinkSound.play(); // a chime sound to signify the twinkling stars
        dayTimer = 1; // dayTimer is reset to 1
        resetSongSwitch(); // songSwitch is reset to 0
        setAnimationState(`lightsUp`); // ... and then, no time to admire the stars, the lights go on!
      }
    }

    setAnimationState(animationState) {
      this.animationState = animationState;
    }

    playSunsetSong() { // plays sunset theme
      if (songSwitch === 1) { // if songSwitch is 1
        this.sunsetStarsIntro.play(0, 1, 0.2); //## eh?
      }
    }

    resetSongSwitch() { // resets songSwitch to 0
      this.songSwitch = 0;
    }

    lightsUpState() { // animation when the light turns on, then simulation begins
      // and player can play
      if (this.animationState === `lightsUp`) { // if state is "lightsUp"
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



    turnLightOn() { // turns lightIsOn switch on
      lightIsOn = true;
    }

    lightsOutState() { // simulation when light bulb explodes. player can play. no ending
      if (animationState === `lightsOut`) { // if state is "lightsOut"
        playBGMusic(); // background music keeps playing (from "untilDone" mode)
        lightBuzzNoise.stop(); // the buzzing noise is stopped
        songSwitch++; // +1 to the songSwitch
        songSwitch = constrain(songSwitch, 0, 410); // the songSwitch is constrained from 0 to 410
        if (songSwitch === 2) { // when the song switch reaches 2
          // (songSwitch is turned to zero when npc is interacted with)
          bulbBursting(); // bulb bursting sound
        }
        lightIsOn = false; // lightIsOn switch is turned off
      }
    }

    bulbBursting() { // handles bulb bursting audio FX
      push();
      bulbBurstSound.setVolume(1.7); // bulb bursting soun is loud
      bulbBurstSound.play(); // play bulb bursting sound
      pop();
    }

    // Check if player is paused (when textBubble appears)
        if (this.player.isPaused === true) {
          // if player is paused
          this.player.vx = 0; // turn player velocity to 0
          this.player.vy = 0;
        } else if (this.player.isPaused === false) {
          // if player is not paused
          this.player.handleInput(); // handle player input: up, down, left, right, w,s,a,d,
          this.player.move(); // change the player avatar's position
        }

        // manageNPCs(){ //
          // go through the NPC array to display each NPC (according to the map player is on)
          // also, check if player is colliding and update the NPC's data if need be (from click & trade)
          for (let i = 0; i < this.simulationNPCList.length; i++) {// Look through NPC List
            // //this.simulationNPCList[i].display(); // display every NPC
            // this.simulationNPCList[i].playerCollisionCheck(
            //   //NPC/Player Collision check
            //   this.player.x,
            //   this.player.y,
            //   this.player.size
            // );

            if (this.simulationNPCList[i].isTriggered === true) {
              // if player presses spacebar when colliding with npc
              this.player.paused(); // player avatar movement becomes paused

              // % // First interaction with Mayor Pimlico // % //
              if ( // if the triggered npc is the Mayor and player has either
                // the placeholder or the slingshot in their inventory
                this.simulationNPCList[i].name === `Mayor Pimlico` &&
                this.player.inventory[0] === `PlaceHolder`
                || this.simulationNPCList[i].name === `Mayor Pimlico` &&
                this.player.inventory[0].name === `Slingshot`
              ) {
                console.log(`this should only happen once`)
                this.eventSwitch1 = 0; // initialize event switch
                this.eventSwitch1 = constrain(this.eventSwitch1, 0, 1); // switch can be 0 or 1
                if (this.eventSwitch1 === 0) {
                  this.player.inventory.unshift(this.simulationItemList[1]); // Pimlico gives you Ham!
                  if (this.player.inventory[1] === `PlaceHolder`) { // remove place holder if you don'T already have the slingshot
                    this.player.inventory.splice(1, 1);
                    this.textBubble = new TextBubble(
                      `${this.simulationNPCList[i].texts[0]}`
                    );
                    this.simulationNPCList[i].textNo = 1;
                  }
                  //this.simulationNPCList[i].textNo = 1; // Pimlico's text is changed
                  // next time Pimlico is triggered this new text will be displayed
                }
                this.eventSwitch1++;
              }
                                    // % //

              // set up clicked npc values temporarily stored in simulation
              this.NPCdesiredItem = this.simulationNPCList[i].desiredItem;
              // SimulationState desiredItem is temporarily the clicked npc's desired item (if any)
              this.NPCholdingItem = this.simulationNPCList[i].itemHeld;
              // same holdingItem is temp the clicked npc's holding item

              this.player.checkTrade(this.NPCdesiredItem, this.NPCholdingItem);
              // using temporarily stored values inputed in player file
              // compare the npc's desiredItem and an item found in player's inventory array
              // if there is a match, the npc's holdingItem simulationItemList index number
              // is stored in player itemToAddToInventory
              // in simulation the item corresponding to the acquired item index is created
              // and stored in the player.inventory

              //if (this.player.tradeHappens === true) {
              // when trade happens

              // !!! THIS HERE RELATES to item.isPicked !!!

        this.eventSwitch3=0;
        this.eventSwitch3 = constrain(this.eventSwitch3, 0, 1); // switch can be 0 or 1
        // npcs display text[0] first... when player has the item they desire and trade happens
              if (this.simulationNPCList[i].textNo === 0 && this.player.tradeHappens === true) {
                if (this.eventSwitch3 === 0) {
                console.log(`trade happens, you comin in here?`);
                this.player.inventory.shift(0,1);
                this.player.inventory.unshift(this.simulationItemList[this.player.itemToAddToInventory]); //the item being traded is added to player inventory
                this.simulationNPCList[i].textNo = 1; // npc text is updated to the next in the sequence
                this.player.tradeHappens = false; // trade is over
              }
              this.eventSwitch3++;
            }

              if (this.simulationNPCList[i].tradeSucceeded === true) { // after trade text is shown,
                // update NPC to having succeeded trade
                console.log(`you're not sup to b here!`);
                this.simulationNPCList[i].textNo = 2;
              }

              // * // this is a text assigning machine to display appropriate text // * //

              if (this.simulationNPCList[i].textNo === 0) { // when triggered npc text is index 0
                // if (this.eventSwitch3 === 0) {
                console.log(`do you keep coming here?`)
                this.textBubble = new TextBubble(
                  `${this.simulationNPCList[i].texts[0]}`
                );
                console.log(`what is pims textno ${this.simulationNPCList[i].textNo}`)
                // }
                // this.eventSwitch3++;
              }

              else if (this.simulationNPCList[i].textNo === 1) { // when tirggered npc text index 1
                  // if (this.eventSwitch3 === 0) {
                //console.log(`you need to come here`);
                this.textBubble = new TextBubble(
                  `${this.simulationNPCList[i].texts[1]}`
                );
                // this.player.inventory.shift();
                // console.log(`does pimpim come here?`);
                // let item = new Item(0, 0, `Big bone`); // this is problematic
                // this.player.inventory.push(item);
              // }
              //   this.eventSwitch3++;
            }

            else if (this.simulationNPCList[i].textNo === 2) { // when trigerred npc text index 2
                // if (this.eventSwitch3 === 0) {
                this.textBubble = new TextBubble(
                  `${this.simulationNPCList[i].texts[2]}`
                );
              // }
              // this.eventSwitch3++;
            }
              // and so on...

              // Display assigned text
              //console.log(`before display what is pims textno ${this.simulationNPCList[i].textNo}`)

              this.textBubble.display();
              this.textBubble.textIsUp = true;

            //   if (this.simulationNPCList[i] === this.simulationNPCList[1]){
            //     if (this.pimlicoSwitch = 1){
            //   // } && this.simulationNPCList[i].textNo === 0 &&
            //     //console.log(`please come here`); he does
            //     this.simulationNPCList[i].textNo = 1;
            //   }
            //   console.log(`endd what is pims textno ${this.simulationNPCList[i].textNo}`)
            //
            // }
          }
        }

        // Threshold checking to update correct map!
        if (this.player.thresholdCollision === true){

          if (this.map.name === `A`){
            this.player.x = 5;
            this.currentMap = mapsArray[1];
            this.player.thresholdCollision = false;
          }

          else if (this.map.name === `B`){

            if (this.player.x > width/2){ // if player cross threshold to the right
              this.player.x = 5;
              this.currentMap = mapsArray[2]; // go to map C
              this.player.thresholdCollision = false;
        }
              else if (this.player.x < width/2){ // if player crosses to the left
                this.player.x = 495;
                this.currentMap = mapsArray[0]; // go to map A
                this.player.thresholdCollision = false;
              }
            }

            else if (this.map.name === `C`){
              this.player.x = 455;
              if (this.player.y > 675 && this.player.y < 685 ){
                this.player.y = 650;
              }
              this.currentMap = mapsArray[1];

              this.player.thresholdCollision = false;
            }

          }

        }

        cueLightFlicks(lightFlickSound, currentLamp) {
          lightFlickSound.addCue(0.1, currentLamp.flickBulbOn);
          lightFlickSound.addCue(0.2, currentLamp.flickBulbOff);
          lightFlickSound.addCue(0.3, currentLamp.flickBulbOn);
          lightFlickSound.addCue(0.4, currentLamp.flickBulbOff);
          lightFlickSound.addCue(0.75, currentLamp.flickBulbOn);
          lightFlickSound.addCue(0.8, currentLamp.flickBulbOff);
        }

        playBGMusic() { // plays bg music
          push();
          bgmusic2.playMode(`untilDone`); // bg music mode loops forever
          bgmusic2.setVolume(0.88); // not too loud
          bgmusic2.rate(0.77); // not too quick
          bgmusic2.play(); // play bg music
          pop();
        }


          display() {}

        mouseClicked(){ // click to check where x is, debug method
          console.log(`x ${this.player.x} ,y ${this.player.y}
            and speed vx vy are ${this.player.speed} ${this.player.vx} ${this.player.vy}
            and player thresholdCollision ${this.player.thresholdCollision}`);
        }

        keyPressed() { // change state ###
          if (keyCode === RETURN) {
            console.log(`pressed enter current map is ${this.map.name}`);
            this.currentMap = random(this.maps);
            this.player.barriers(this.currentMap);
            console.log(`new map is ${this.currentMap.lampX}`)
          }

          function keyPressed() { // when key is pressed
    if (keyCode === 32) { // **** SPACEBAR ****



      if (animationState === `lightsUp`) {
        // if state is "lightsUp"
        // and if playerCollidedNPC and the npc sound switch is still true (which it should initially)
        // if (player.playerCollidedNPC === true && npcSoundSwitch === true) { // player interacts with npc
        //   playNPCSound(); // play musical notes
        //   canBurst = true; // turn bulb canBurst switch to true
        //   npcSoundSwitch = false; // so interaction only happens once, npcSoundSwitch is turned off
        // }
        if (canBurst === true) { // when bulb can burst
          keyPressCounter++; // add 1 to keyPressCounter
          if (keyPressCounter === 2) {
            // first press after the npc interaction turns out light
            resetSongSwitch();
            setAnimationState(`lightsOut`); // state is turned to "lightsOut"
          }
        }
      }
    }
  }}
        }
