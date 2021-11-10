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

    if(this.player.isPaused === true){
      this.vx = 0;
      this.vy = 0;
    }
    else{
      console.log(`why my comin here is ${this.player.isPaused}
        this.item.isCollided = ${this.item.playerCollided}`);
      this.player.handleInput();
      this.player.move();
    }

    this.player.display();

    this.npc.display();
    this.npc.playerCollide(this.player.x,this.player.y);

    if(this.npc.isClicked === true){
      this.player.paused();
      this.textBubble = new TextBubble(`Momma OooOooo`);
      this.textBubble.display();
      console.log(`working`);
    }

    this.item.display();
    this.item.playerCollide(this.player.x,this.player.y);

    if(this.item.playerCollided === true){
      this.player.paused();
      this.player.isPaused = true;
      this.item.isOnMap = false;
      if (this.item.isOnMap === false){
        this.item.x = undefined;
      }
      this.player.inventory.push(`rubber`);
      this.textBubble = new TextBubble(`You just picked up ${this.player.inventory[0]}`);
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
      }

      this.stateCounter++
      if(this.stateCounter===3){
        state = new EndGameState();
      }

    }


  }
