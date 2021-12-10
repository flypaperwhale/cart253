class MapsDebugState extends State {
  constructor(simulationImagesList, mapsArray) {
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

    this.textBubbleIsLoaded = false;

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

  update() { // updates every frame, it serves a drawing function
    background(0);
    fill(255);
    textAlign(CENTER);
    // This text is in the background, gives player how to play
    text(`press enter to change maps!`, width/ 2, height/2);

    this.map = this.currentMap;
    this.map.display(this.player, this.simulationNPCList);
    this.player.barriers(this.map);

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
        }
        }
