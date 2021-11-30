class SimulationState extends State {
  constructor() {
    super();

    // this.npcArray = new NPCList(); //?! is this the equivalent of inputing an array full //
    // of NPC class object? will I be able to call upon the NPCs in this array
    // to display them and have player interact with them?

    // Items are to be set up in the main script
    // When game is started, every Item is created and stored somewhere
    // Some are on the map and can be picked up by being walked on
    // Other will be on NPCs and will be tradeable.

    this.textBubble = new TextBubble(`whatever`);
    this.player = new Player(150, 400);
    this.npc = new Bob(450, 400);
    //this.item = new Item(200,200,`Ham`);

    //this.gameItems = [];
    this.item = new Item(300, 100, `Ham`);
    //this.gameItems.push(this.addingItem);

    this.stateCounter = 0;
    this.eventSwitch = 0;
  }

  update() {
    background(0);
    fill(255);

    // This text is in the background, gives player how to play
    text(`press space to talk to NPCs
      press enter to see inventory (in console)!`,
      width/ 2, height/2
    );

// Check if player is paused (when textBubble appears)
    if (this.player.isPaused === true) { // if player is paused
      this.player.vx = 0; // turn player velocity to 0
      this.player.vy = 0;
    } else if (this.player.isPaused === false) { // if player is not paused
      this.player.handleInput(); // handle player input: up, down, left, right, w,s,a,d,
      this.player.move(); // change the player avatar's position
    }

    this.player.display(); // display the player avatar

    this.npc.display(); // display the npc
    /* this here should display every npc on a given map. there should be an array of npc labels
    3 arrays for 3 maps, (and when a map is changed, the array of npcs is recalled?)
    (or array is called once in the program and stored on map file. map file needs map.X.listOfNPCs)
    */

    this.npc.playerCollide(this.player.x, this.player.y);

    if (this.npc.isClicked === true) {
      this.player.paused();

      let desiredItem = this.npc.desiredItem;
      let holdingItem = this.npc.holdingItem;
      this.player.checkTrade(desiredItem, holdingItem);

      if (this.npc.textNo === 1) {
        this.textBubble = new TextBubble(`Hello Dolly, can you bring me Ham?`);
      } else if (this.npc.textNo === 2) {
        this.textBubble = new TextBubble(`Give me that Ham!`);
        this.player.inventory.shift();
        this.item = new Item(0, 0, `Big bone`);
        this.player.inventory.push(this.item);
      } else if (this.npc.textNo === 3) {
        this.textBubble = new TextBubble(`Thanks for the Ham,
      you can keep the bone`);
      }

      if (this.player.tradeHappens === true) {
        this.npc.textNo = 2;
        this.player.tradeHappens = false;
      }
      if (this.npc.tradeSucceeded === true) {
        this.npc.textNo = 3;
      }

      this.textBubble.display();
    }

    this.item.display();
    this.item.playerCollide(this.player.x, this.player.y);

    if (this.item.playerCollided === true) {
      this.item.isOnMap = false;
      if (this.item.isOnMap === false) {
        this.item.x = undefined;
      }
      this.player.paused();
      this.player.isPaused = true;
      this.eventSwitch = constrain(this.eventSwitch, 0, 1);
      if (this.eventSwitch === 0) {
        this.player.inventory.push(`Ham`);
        this.textBubble = new TextBubble(
          `You just picked up ${this.player.inventory[0]}`
        );
      }
      this.eventSwitch++;
      this.textBubble.display();
    }
  }

  display() {}

  keyPressed() {
    if (keyCode === RETURN) {
      this.player.displayInventory();
    }
    if (keyCode === 32) {
      if (this.npc.playerCollided === true) {
        this.npc.isClicked = true;
      }

      if (
        (this.npc.isClicked === true && this.player.isPaused === true) ||
        (this.item.playerCollided === true && this.player.isPaused === true)
      ) {
        this.textBubble.break();
        this.npc.isClicked = false;
        this.player.isPaused = false;
        this.item.playerCollided = false;
        if (this.npc.textNo === 2) {
          this.npc.tradeSucceeded = true;
        }
      }

      this.stateCounter++;
      if (this.stateCounter === 10) {
        state = new EndGameState();
      }
    }
  }
}
