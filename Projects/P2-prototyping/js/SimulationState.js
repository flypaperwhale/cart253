class SimulationState extends State {
  constructor(){
    super();

    this.npcArray = new NPCs();
    this.stateCounter=0;
    this.player = new Player(300,450);
    this.npc = new Bob(500,550);
    this.item = new Item(200,200,`Ham`);

    // let items = [`Ham`,`Big Bone`,`Slingshot`,`Broken Light Bulb`,`Wrench`,`Injunction`];

  }

checkPlayerInventory

  update(){
    background(0);
    fill(255);
    text(`Eat my shorts!`, 600/2, 600/2);

    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.npc.display();

    this.item.display();

    this.player.checkItemCollide();

  }

  display(){

  }


    mouseClicked(){
      // check of player is colliding with npc
      this.player.checkNPCCollide(thisNPCarray);
      if (this.player.colliding()){
        this.player.checkPlayerInventory();
      }
      this.stateCounter++
      if(this.stateCounter===3){
        state = new EndGameState();
      }
    }
}
