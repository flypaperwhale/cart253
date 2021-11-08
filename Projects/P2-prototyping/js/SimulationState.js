class SimulationState extends State {
  constructor(){
    super();

    this.player = new Player(300,450);
    this.npc = new NPC(500,550);
  }

  update(){
    background(0);
    fill(255);
    text(`Eat my shorts!`, 600/2, 600/2);

    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.npc.display();

  }

  display(){

  }


    mouseClicked(){
      state = new EndGameState();
    }
}
