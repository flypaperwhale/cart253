class TitleState extends State {
  constructor(){
    super();
  }

  update(){
    this.display();
  }

  display(){
    background(0);

    fill(255);
    text(`Welcome. Click mouse to start.`, 600/2, 600/2);
  }

  mouseClicked(){
    state = new SimulationState();
  }

}
