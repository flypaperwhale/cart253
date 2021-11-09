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
  }

checkPlayerInventory

  update(){
    background(0);
    fill(255);
    text(`press space to talk to NPCs
      press escape to see inventory!`, 600/2, 600/2);

    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.npc.display();
    this.npc.playerCollide(this.player.x,this.player.y);

    if(this.npc.isClicked === true){
      this.textBubble.display();
    }

    this.item.display();
    this.item.playerCollide(this.player.x,this.player.y);

    if(this.item.playerCollided === true){
      this.item.isOnMap = false;
      if (this.item.isOnMap === false){
        this.item.x = undefined;
      }
      this.player.inventory.push(`rubber`);
      console.log(`Item ${`rubber`} in inv. : ${this.player.inventory[0]}`);
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
        this.npc.isClicked === true;
        }

      this.stateCounter++
      if(this.stateCounter===3){
        state = new EndGameState();
      }

    }


  }
