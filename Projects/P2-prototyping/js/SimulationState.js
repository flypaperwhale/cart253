class SimulationState extends State {
  constructor(){
    super();

    this.player = new Player(300,400);
  }

  update(){
    background(0);
    fill(255);
    text(`Eat my shorts!`, 600/2, 600/2);

    this.player.handleInput();
    this.player.move();
    this.player.display();

  }

  display(){
    
  }


    mouseClicked(){
      state = new EndGameState();
    }
}
