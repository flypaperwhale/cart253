class SimulationState extends State {
  constructor(){
    super();

    // this.npcArray = new NPCList(); //?! is this the equivalent of inputing an array full //
    // of NPC class object? will I be able to call upon the NPCs in this array
    // to display them and have player interact with them?

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
    text(`press escape to see inventory!`, 600/2, 600/2);

    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.npc.display();
    this.npc.playerCollide(this.player.x,this.player.y);

    this.item.display();
    this.item.playerCollide(this.player.x,this.player.y);

    /*for (let i = 0; i < this.gameItems.length; i++){
      this.checkedItem = this.gameItems[i];
      if (checkedItem.isOnMap === true){
          this.item.display();
          this.player.checkItemCollide(this.item);
      }
    }
*/
    if (this.player.isCollided){

    }
  }

  display(){

  }


    mouseClicked(){
      // check of player is colliding with npc
      this.player.checkNPCCollide(this.npc);
      if (this.player.isCollided){
        this.npc
        this.player.checkPlayerInventory();
      }
      this.stateCounter++
      if(this.stateCounter===3){
        state = new EndGameState();
      }
    }
}
