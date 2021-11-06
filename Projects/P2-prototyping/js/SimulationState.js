class SimulationState extends State {
  constructor(){
    super();
  }

  update(){
    this.display();
  }

  display(){
    background(0);

    fill(255);
    text(`Eat my shorts!`, 600/2, 600/2);
  }
}
