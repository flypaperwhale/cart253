class EndGameState extends State {
  constructor(){
    super();
  }

  update(){
    this.display();
  }

  display(){
    background(0);

    fill(255);
    text(`See you!`, 600/2, 600/2);
  }

    mouseClicked(){
      console.log(`nothing happens. the game is over`);
    }
}
