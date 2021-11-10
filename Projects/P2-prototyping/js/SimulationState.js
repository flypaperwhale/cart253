class SimulationState extends State {
  constructor(){
    super();

    // this.npcArray = new NPCList(); //?! is this the equivalent of inputing an array full //
    // of NPC class object? will I be able to call upon the NPCs in this array
    // to display them and have player interact with them?

    this.textBubble = new TextBubble(`whatever`);
    this.player = new Player(300,450);
    this.npc = new Bob(500,550);
    //this.item = new Item(200,200,`Ham`);

    //this.gameItems = [];
    this.item = new Item(200,200,`Ham`);
    //this.gameItems.push(this.addingItem);

    this.stateCounter=0;
    this.eventSwitch = 0;
  }

checkPlayerInventory

  update(){
    background(0);
    fill(255);
    text(`press space to talk to NPCs
      press escape to see inventory!`, 600/2, 600/2);

    if(this.player.isPaused === true){
      this.vx = 0;
      this.vy = 0;
    }
    else if (this.player.isPaused === false){
      this.player.handleInput();
      this.player.move();
    }

    this.player.display();

    this.npc.display();

    this.npc.playerCollide(this.player.x,this.player.y);

    if(this.npc.isClicked === true){
      this.player.paused();
console.log(`A the textNo is ${this.npc.textNo}`);

      let desiredItem = this.npc.desiredItem;
      let holdingItem = this.npc.holdingItem;
      this.player.checkTrade(desiredItem, holdingItem);

console.log(`B the textNo is ${this.npc.textNo}`);

      if (this.npc.textNo === 1){
        this.textBubble = new TextBubble(`Hello Dolly, can you bring me Ham?`);
      }
      else if (this.npc.textNo === 2){
        this.textBubble = new TextBubble(`Give me that Ham!`);
        this.player.inventory.shift();
        this.item = new Item(0,0,`Big bone`);
        this.player.inventory.push(this.item);
      }
      else if (this.npc.textNo === 3){
        this.textBubble = new TextBubble(`Thanks for the Ham,
          you can keep that bone`);
        }

        if (this.player.tradeHappens === true){
          console.log(`trade is supposed to happen`);
          this.npc.textNo = 2;
          this.player.tradeHappens = false;
        }
        if (this.npc.tradeSucceeded === true){
          this.npc.textNo = 3;
        }

      this.textBubble.display();
    }

    this.item.display();
    this.item.playerCollide(this.player.x,this.player.y);

    if(this.item.playerCollided === true){
      this.item.isOnMap = false;
      if (this.item.isOnMap === false){
        this.item.x = undefined;
      }
      this.player.paused();
      this.player.isPaused = true;
      this.eventSwitch = constrain(this.eventSwitch, 0,1);
      if (this.eventSwitch === 0){
        this.player.inventory.push(`Ham`);
        this.textBubble = new TextBubble(`You just picked up ${this.player.inventory[0]}`);
      }
      this.eventSwitch++;
      this.textBubble.display();
    }
  }

  display(){

  }

  keyPressed(){
    if(keyCode===ESCAPE){
      this.player.displayInventory();
    }
  }

  mouseClicked(){

      if (this.npc.playerCollided === true){
        this.npc.isClicked = true;
        }

      if (this.npc.isClicked === true && this.player.isPaused === true
      || this.item.playerCollided === true && this.player.isPaused === true){
        this.textBubble.break();
        this.npc.isClicked = false;
        this.player.isPaused = false;
        this.item.playerCollided = false;
        if (this.npc.textNo === 2){
          this.npc.tradeSucceeded = true;
        }
      }

      this.stateCounter++
      if(this.stateCounter===10){
        state = new EndGameState();
      }

    }


  }
